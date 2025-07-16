"use client";

import { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import { motion } from "framer-motion";
import { useModal } from "@/app/context/ModalContext";
import dynamic from "next/dynamic";
import animationData from "../../animations/bot22.json";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import { FaWhatsapp } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Define types for better code readability and error checking
type ChatMessage = {
  type: "bot" | "user" | "signup" | "options" | "form" | "submit_button" | "employment_options";
  text: string;
};

type FormData = {
  name: string;
  phone: string;
  email: string;
  employeeType: string;
  pan: string;
  pincode: string;
  loanAmount: string;
  income: string;
  dob: string;
};
type FormField = {
  key: keyof FormData; // This is the crucial change
  question: string;
  validation: (value: string) => boolean;
};

export default function Bot() {
  const router = useRouter();
  const { openModal } = useModal();
  const [isOpen, setIsOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { type: "bot", text: "Hey! How can I help you?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCollectingForm, setIsCollectingForm] = useState(false);
  const [currentFormField, setCurrentFormField] = useState<keyof FormData | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    employeeType: "",
    pan: "",
    pincode: "",
    loanAmount: "",
    income: "",
    dob: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom of the chat window when new messages are added
  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // This validation function is primarily for the DatePicker internal logic
  // and for the final check before API submission, not for manual text input.
  const validateDate = (value: string) => {
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(value)) return false;

    const [day, month, year] = value.split('/').map(Number);

    if (month < 1 || month > 12) return false;
    if (day < 1 || day > 31) return false;

    const date = new Date(year, month - 1, day);
    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    );
  };

  // Define the form fields, their questions, and validation rules
  const formFields: FormField[] = [ // Added FormField[] type here
    { key: "name", question: "May I have your full name?", validation: (value: string) => value.trim().length > 0 },
    { key: "phone", question: "What's your phone number? (10 digits)", validation: (value: string) => /^\d{10}$/.test(value) },
    { key: "email", question: "What's your email address?", validation: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) },
    { key: "employeeType", question: "What's your employment type?", validation: (value: string) => ["salaried", "self-employed"].includes(value.toLowerCase()) },
    { key: "pan", question: "Please provide your PAN card number", validation: (value: string) => /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(value) },
    { key: "pincode", question: "What's your pincode? (6 digits)", validation: (value: string) => /^\d{6}$/.test(value) },
    { key: "loanAmount", question: "How much loan amount are you looking for? (INR)", validation: (value: string) => !isNaN(Number(value.replace(/,/g, ''))) && Number(value.replace(/,/g, '')) > 0 },
    { key: "income", question: "What's your monthly income? (INR)", validation: (value: string) => !isNaN(Number(value.replace(/,/g, ''))) && Number(value.replace(/,/g, '')) > 0 },
    { key: "dob", question: "What's your date of birth? Please select using the date picker below.", validation: validateDate },
  ];
  // Effect to update login status based on cookies
  useEffect(() => {
    const updateLoginStatus = () => {
      const loginStatus = Cookies.get("isLoggedIn");
      setIsLoggedIn(loginStatus === "true");
    };

    updateLoginStatus();
    window.addEventListener("login-status-changed", updateLoginStatus);
    return () => window.removeEventListener("login-status-changed", updateLoginStatus);
  }, []);

  // Initiates the form collection process
  const startFormCollection = () => {
    setIsCollectingForm(true);
    setFormData({ // Reset form data
      name: "", phone: "", email: "", employeeType: "", pan: "", pincode: "",
      loanAmount: "", income: "", dob: "",
    });
    setSelectedDate(null);
    setShowDatePicker(false);
    askNextFormQuestion(0);
  };

  // Asks the next question in the form sequence
  const askNextFormQuestion = (index: number) => {
    if (index < formFields.length) {
      const field = formFields[index];
      setCurrentFormField(field.key);
      addBotMessage(field.question);

      // Special handling for employment type and DOB to show buttons/picker
      if (field.key === "employeeType") {
        setChatMessages(prev => [...prev, { type: "employment_options", text: "" }]);
      } else if (field.key === "dob") {
        setShowDatePicker(true);
      } else {
        setShowDatePicker(false);
      }
    } else {
      // All questions answered, now prompt for submission
      setCurrentFormField(null); // No active form field
      setShowDatePicker(false); // Hide date picker
      addBotMessage("Great! We have all the necessary information. Click 'Submit Application' to proceed.");
      // Add the submit_button message, which will be removed on submission
      setChatMessages(prev => [...prev, { type: "submit_button", text: "Submit Application" }]);
    }
  };

  // Adds a message from the bot to the chat history
  const addBotMessage = (text: string) => {
    setChatMessages(prev => [...prev, { type: "bot", text }]);
  };

  // Adds a message from the user to the chat history
  const addUserMessage = (text: string) => {
    setChatMessages(prev => [...prev, { type: "user", text }]);
  };

  // Handles submission of collected form data to the API
  const submitFormData = async () => {
    setIsSubmitting(true);
    addBotMessage("Thank you for providing the information. Submitting your details...");

    // IMMEDIATELY REMOVE THE SUBMIT BUTTON
    setChatMessages(prev => prev.filter(msg => msg.type !== "submit_button"));

    try {
      // Final validation: Check if all required fields are filled and valid
      const missingOrInvalidFields = formFields.filter(field => {
        const value = formData[field.key];
        // If value is empty OR if value exists but fails its specific validation
        return !value || !field.validation(value);
      });

      if (missingOrInvalidFields.length > 0) {
        addBotMessage(`It seems some information is missing or invalid. Please check: ${missingOrInvalidFields.map(f => f.key).join(', ')}`);
        // Re-add the submit button if validation fails locally
        setChatMessages(prev => [...prev, { type: "submit_button", text: "Submit Application" }]);
        // Re-ask the first missing/invalid field
        askNextFormQuestion(formFields.findIndex(field => field.key === missingOrInvalidFields[0].key));
        return; // Prevent submission
      }

      // Format DOB from DD/MM/YYYY to YYYY-MM-DD for API
      const [day, month, year] = formData.dob.split('/');
      const apiFormattedDob = `${year}-${month}-${day}`;

      // Prepare payload, removing commas from numeric fields
      const payload = {
        ...formData,
        dob: apiFormattedDob,
        loanAmount: formData.loanAmount.replace(/,/g, ''),
        income: formData.income.replace(/,/g, ''),
      };

      console.log("Submitting payload:", payload);

      const response = await fetch("https://keshvacredit.com/api/v1/api/userinfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.status === "success") {
        // Clear all messages
        setChatMessages([]);
        // Display only the success message
        addBotMessage("Congratulations! Your application has been submitted successfully. click on apply now on your eligible lenders page to process documentaion ");

        // After a short delay, close the bot and redirect
        setTimeout(() => {
          setIsOpen(false); // Close the bot chat window
          router.push("/eligibleLenders"); // Redirect
        }, 3000); // Wait 3 seconds for user to read message
      } else {
        addBotMessage(result.message || "There was an error submitting your information. Please try again later.");
        // If API explicitly says some fields are missing/invalid, re-prompt for them
        if (result.missingFields && result.missingFields.length > 0) {
          const firstApiMissingField = formFields.find(field => result.missingFields.includes(field.key));
          if (firstApiMissingField) {
            setCurrentFormField(firstApiMissingField.key);
            addBotMessage(`The server needs a valid ${firstApiMissingField.key}. Please provide your ${firstApiMissingField.question}`);
            if (firstApiMissingField.key === "dob") {
              setShowDatePicker(true); // Re-show picker if DOB is still an issue
            }
          }
        } else {
          addBotMessage("Please check your details and try submitting again.");
        }
        // If submission fails for any reason, re-add the submit button
        setChatMessages(prev => [...prev, { type: "submit_button", text: "Submit Application" }]);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      addBotMessage("There was an error connecting to our servers. Please check your internet and try again.");
      // If submission fails due to network error, re-add the submit button
      setChatMessages(prev => [...prev, { type: "submit_button", text: "Submit Application" }]);
    } finally {
      setIsSubmitting(false); // Reset submission state
    }
  };

  // Handler for date selection from the DatePicker
  const handleDateSelect = (date: Date | null) => { // Crucial change: added '| null'
    if (!date) {
      // If date is null (e.g., user cleared the selection), you might want to handle it
      // For now, let's just return if no date is selected to avoid errors.
      console.warn("Date selection was cleared or invalid.");
      setSelectedDate(null);
      setFormData(prev => ({ ...prev, dob: "" })); // Clear DOB from formData
      setShowDatePicker(false);
      return;
    }

    // For DOB, it generally should be maxDate={new Date()}
    if (date > new Date()) {
      addBotMessage("Please select a date of birth that is not in the future.");
      return; // Do not process future dates
    }

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    setSelectedDate(date);
    setFormData(prev => ({ ...prev, dob: formattedDate }));

    setShowDatePicker(false); // Hide date picker after selection
    addUserMessage(`DOB selected`); // No longer shows the date itself
    // Immediately trigger the prompt for final submission since DOB is the last field
    setTimeout(() => askNextFormQuestion(formFields.findIndex(field => field.key === "dob") + 1), 500);
  };


  // Handles messages sent by the user
  const handleUserMessage = (message: string) => {
    const trimmedMessage = message.trim();
    if (!trimmedMessage) return;

    // Prevent any user input if only the success message is showing (bot about to close)
    if (chatMessages.length === 1 && chatMessages[0].text === "Congratulations! Your details saved successfully.") {
      return; // Ignore input
    }


    // IMPORTANT: If DOB picker is active, ignore typed messages completely.
    // DOB should ONLY be set via the date picker.
    if (isCollectingForm && currentFormField === "dob" && showDatePicker) {
      addBotMessage("Please select your date of birth using the date picker below.");
      setInput(""); // Clear input
      return; // Ignore typed input when picker is active
    }

    addUserMessage(trimmedMessage);
    setInput(""); // Clear input field

    // If currently collecting form data for fields other than DOB or employment type
    if (isCollectingForm && currentFormField) {
      const currentField = formFields.find(field => field.key === currentFormField);

      // For fields handled by text input
      if (currentField && currentField.key !== "dob" && currentField.key !== "employeeType") {
        if (currentField.validation && !currentField.validation(trimmedMessage)) {
          addBotMessage(`Invalid input. Please provide a valid ${currentField.key}. ${currentField.question}`);
          return;
        }
        setFormData(prev => ({ ...prev, [currentFormField]: trimmedMessage }));
        setTimeout(() => askNextFormQuestion(formFields.findIndex(field => field.key === currentFormField) + 1), 500);
        return;
      }
    }

    // If not collecting form, respond based on login status
    setTimeout(() => {
      if (!isLoggedIn) {
        addBotMessage("You need to be registered to apply for a loan.");
        addBotMessage("Please log in to continue.");
        setChatMessages(prev => [...prev, { type: "signup", text: "" }]);
      } else {
        addBotMessage("Would you like to apply for a loan?");
        setChatMessages(prev => [...prev, { type: "options", text: "Choose an option:" }]);
      }
    }, 500);
  };

  // Handles user selecting an option (e.g., "apply for loan" or employment type)
  const handleOptionSelect = (option: string) => {
    addUserMessage(option === "apply" ? "Yes, apply for loan" : option);

    if (option === "apply") {
      startFormCollection();
    } else if (currentFormField === "employeeType" && (option === "Salaried" || option === "Self-employed")) {
      // Handle employment type selection
      setFormData(prev => ({ ...prev, employeeType: option }));
      // Remove the employment_options buttons from chat history
      setChatMessages(prev => prev.filter(msg => msg.type !== "employment_options"));
      // Move to the next form field
      setTimeout(() => askNextFormQuestion(formFields.findIndex(field => field.key === "employeeType") + 1), 500);
    } else {
      setTimeout(() => addBotMessage("How can I assist you with that?"), 500);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute bottom-16 right-0 w-[270px] md:w-[300px] max-w-sm sm:w-64 rounded-lg shadow-lg border overflow-hidden bg-white"
        >
          {/* Chat Header */}
          <div className="p-3 flex bg-blue-950 text-white justify-between items-center">
            <h3 className="text-sm font-bold">Live Chat</h3>
            <button onClick={() => setIsOpen(false)} className="text-lg font-bold">
              ✕
            </button>
          </div>

          {/* Chat Messages Area */}
          <div className="h-64 overflow-y-auto p-2 text-sm text-black space-y-2">
            {chatMessages.map((msg, index) => (
              <div key={index} className={msg.type === "bot" ? "flex" : "flex justify-end"}>
                <p
                  className={`inline-block max-w-fit px-1 py-2 rounded-lg ${msg.type === "bot" ? "bg-gray-200 text-left" : "bg-blue-100 text-right"
                    }`}
                >
                  {msg.text}
                </p>
              </div>
            ))}

            {/* Conditional rendering for the inline DatePicker */}
            {isCollectingForm && currentFormField === "dob" && showDatePicker && (
              <div className="mt-2">
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateSelect}
                  dateFormat="dd/MM/yyyy"
                  showYearDropdown
                  dropdownMode="select"
                  maxDate={new Date()} // Disables future dates
                  placeholderText="Select your date of birth"
                  className="p-2 border rounded text-sm w-full"
                  inline // Keep the date picker always visible within the chat window
                />
              </div>
            )}

            {/* Conditional rendering for Employment Type buttons */}
            {isCollectingForm && currentFormField === "employeeType" && chatMessages.some(msg => msg.type === "employment_options") && (
              <div className="flex flex-col gap-2 mt-2">
                <button
                  onClick={() => handleOptionSelect("Salaried")}
                  className="p-2 bg-blue-600 text-white rounded-lg text-xs hover:bg-blue-700"
                >
                  Salaried
                </button>
                <button
                  onClick={() => handleOptionSelect("Self-employed")}
                  className="p-2 bg-gray-600 text-white rounded-lg text-xs hover:bg-gray-700"
                >
                  Self-employed
                </button>
              </div>
            )}


            <div ref={messagesEndRef} /> {/* Reference for auto-scrolling */}

            {/* Conditional rendering for "Sign Up" button */}
            {!isLoggedIn && chatMessages.some((msg) => msg.type === "signup") && (
              <button
                className="p-2 bg-red-500 text-white rounded-lg w-full text-xs"
                onClick={openModal}
              >
                Sign Up
              </button>
            )}

            {/* Conditional rendering for initial loan options */}
            {isLoggedIn && chatMessages.some((msg) => msg.type === "options") && !isCollectingForm && (
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleOptionSelect("apply")}
                  className="p-2 bg-blue-600 text-white rounded-lg text-xs"
                >
                  Yes, apply for loan
                </button>
                <button
                  onClick={() => window.open("https://wa.me/918901229195", "_blank")}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm transition duration-200"
                >
                  Other Query
                </button>

              </div>
            )}

            {/* Submit button at the end of the form collection */}
            {isCollectingForm && !currentFormField && chatMessages.some(msg => msg.type === "submit_button") && (
              <button
                onClick={submitFormData}
                className="p-2 mt-4 bg-green-600 text-white rounded-lg w-full text-xs hover:bg-green-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            )}

            {/* Loading spinner during form submission */}
            {isSubmitting && (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
              </div>
            )}
          </div>

          {/* User Input Area */}
          <div className="p-2 bg-blue-950 text-gray-400">
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full p-2 border bg-white text-gray-500 border-gray-400 rounded text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Type a message..."
                onKeyDown={(e) => {
                  if (e.key === "Enter" && input.trim() !== "") {
                    handleUserMessage(input);
                  }
                }}
                // Disable input when submitting, when DOB picker is active, or when submit button is showing.
                // Also disable if employment type buttons are showing, or if the bot is about to close (after successful submission).
                disabled={
                  isSubmitting ||
                  (isCollectingForm && currentFormField === "dob" && showDatePicker) ||
                  (isCollectingForm && currentFormField === "employeeType" && chatMessages.some(msg => msg.type === "employment_options")) ||
                  (isCollectingForm && !currentFormField && chatMessages.some(msg => msg.type === "submit_button")) ||
                  (chatMessages.length === 1 && chatMessages[0].text === "Congratulations! Your details saved successfully.")
                }
              />
              <button
                onClick={() => {
                  if (input.trim() !== "") {
                    handleUserMessage(input);
                  }
                }}
                className="ml-2 p-2 bg-blue-800 text-white rounded text-sm"
                // Disable send button under the same conditions as input
                disabled={
                  isSubmitting ||
                  (isCollectingForm && currentFormField === "dob" && showDatePicker) ||
                  (isCollectingForm && currentFormField === "employeeType" && chatMessages.some(msg => msg.type === "employment_options")) ||
                  (isCollectingForm && !currentFormField && chatMessages.some(msg => msg.type === "submit_button")) ||
                  (chatMessages.length === 1 && chatMessages[0].text === "Congratulations! Your details saved successfully.")
                }
              >
                Send
              </button>
            </div>
          </div>
        </motion.div>
      )}
      {/* WhatsApp Button */}
      <div className="flex gap-2 items-center">
        {/* WhatsApp Icon Button */}
        <a
          href="https://wa.me/918901229195"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center border border-green-500 text-white bg-green-500 rounded-full w-12 h-12 hover:bg-green-600 focus:ring-4 shadow-lg transition-transform transform hover:scale-110"
        >
          <FaWhatsapp className="w-8 h-8" />
        </a>

        {/* Chat Bot Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center border border-black bg-white text-black rounded-full w-12 h-12 hover:bg-blue-200 focus:ring-4 shadow-lg transition-transform transform hover:scale-110"
        >
          <Lottie animationData={animationData} loop autoplay className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}