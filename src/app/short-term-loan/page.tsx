"use client";
import React, { useState, useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Router } from "lucide-react"; 
import { submitUserInfo } from "../APIS/UserData/UserInfoApi";
import { useRouter } from "next/navigation"; // Changed from next/router to next/navigation

function Page() {
  const router = useRouter();

  // Check localStorage on component mount
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      router.push("/About"); // Redirect to about page if user data exists
    }
  }, [router]);

  const [formData, setFormData] = useState({
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

  // Handle input field changes with proper event types for input and select elements
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // For success/failure message state (unused for now)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [message, setMessage] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [messageType, setMessageType] = useState("");

  // Handle form submission with proper event type
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Assuming submitUserInfo is a function that returns a promise
      await submitUserInfo(formData);

      // Save user data to localStorage
      const userData = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
      };
      localStorage.setItem("userData", JSON.stringify(userData));

      // Set success message and type for state
      setMessage("Form submitted successfully!");
      setMessageType("success");

      // Call the showPopup function to show a success message on the screen
      showPopup("success", "Form submitted successfully!");

      // Redirect to about page after successful submission
      setTimeout(() => {
        router.push("/About");
      }, 2000);
    } catch (_error) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const error = _error; // kept for potential future logging
      // Set error message and type for state
      setMessage("Error submitting form. Please try again.");
      setMessageType("error");

      // Call the showPopup function to show an error message on the screen
      showPopup("error", "Error submitting form. Please try again.");
    }

    setFormData({
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
  };

  const showPopup = (type: string, message: string) => {
    // Create a new div for the popup
    const popup = document.createElement("div");
    popup.innerText = message;

    // Apply styles based on the message type (success or error)
    if (type === "success") {
      popup.style.backgroundColor = "green";
      popup.style.color = "white";
    } else {
      popup.style.backgroundColor = "red";
      popup.style.color = "white";
    }

    // Common styling for positioning and appearance
    popup.style.position = "fixed";
    popup.style.top = "20px";
    popup.style.right = "20px";
    popup.style.padding = "10px 20px";
    popup.style.borderRadius = "5px";
    popup.style.fontSize = "14px";
    popup.style.zIndex = "1000";
    popup.style.transition = "opacity 0.5s ease-in-out";

    // Append the popup to the body of the document
    document.body.appendChild(popup);

    // Remove the popup after 3 seconds, with a fade-out effect
    setTimeout(() => {
      popup.style.opacity = "0"; // Apply fade-out effect
      setTimeout(() => {
        popup.remove(); // Remove the popup element from the DOM
      }, 500); // Wait for the fade-out transition to complete
    }, 3000); // Keep the popup visible for 3 seconds
  };

  return (
    <>
      <div className="justify-center mb-20 items-center min-h-screen">
        <div className="mt-24 mx-auto max-w-[90%] md:max-w-[50rem] text-center text-[28px] md:text-[34px]">
          <h1 className="font-bold text-[34px]">
            Business Loans starting at{" "}
            <span className="text-blue-700">10.25%* </span> Interest Rates.
          </h1>
          <ul className="text-[16px] md:text-[18px] font-medium ml-4 md:ml-8 mt-2 text-left list-disc">
            <li>Minimal Documentation</li>
            <li>Quick Processing</li>
            <li>Lowest interest rate guaranteed</li>
            <li>
              Now compare pre-qualified offers from 70+ Top Lenders
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="form max-w-lg mx-auto mt-5 -mt-10 p-6 border-2 border-gray-300 mb-20 rounded-lg shadow-2xl shadow-gray-500 dark:shadow-gray-800 gap-3"
        >
          <h1 className="text-center font-bold text-[24px]">
            Basic Information
          </h1>
          <div className="flex space-x-4 gap-5">
            {/* Name */}
            <div className="relative flex items-center border-b-2 border-gray-300 dark:border-gray-600 w-1/2">
              <span className="pr-2 absolute left-0 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a7 7 0 1 0 7 7 7 7 0 0 0-7-7Zm-4 8a4 4 0 0 1 8 0Zm4 6c-3.33 0-6 1.34-6 3v1h12v-1c0-1.66-2.67-3-6-3Z" />
                </svg>
              </span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                id="floating-name"
                className="block py-2.5 pl-8 w-full text-sm bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating-name"
                className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 left-8 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >
                Name
              </label>
            </div>

            {/* Phone */}
            <div className="relative flex items-center border-b-2 border-gray-300 dark:border-gray-600 w-1/2">
              <span className="pr-2 absolute left-0 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 19 18"
                >
                  <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                </svg>
              </span>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                id="floating-phone"
                className="block py-2.5 pl-8 w-full text-sm bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating-phone"
                className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 left-8 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >
                Phone Number
              </label>
            </div>
          </div>

          <div className="flex space-x-4 mt-6 gap-5">
            {/* Email */}
            <div className="relative flex items-center border-b-2 border-gray-300 dark:border-gray-600 w-1/2">
              <span className="pr-2 absolute left-0 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6ZM4 6h16l-8 5L4 6Zm0 12V9l8 5 8-5v9H4Z" />
                </svg>
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                id="floating-email"
                className="block py-2.5 pl-8 w-full text-sm bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating-email"
                className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 left-8 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >
                Email
              </label>
            </div>

            {/* Employee Type */}
            <div className="relative flex items-center border-b-2 border-gray-300 dark:border-gray-600 w-1/2">
              <span className="pr-2 absolute left-0 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16v16H4z" />
                </svg>
              </span>
              <select
                name="employeeType"
                value={formData.employeeType}
                onChange={handleChange}
                className="block py-2.5 pl-8 w-full text-sm bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              >
                <option value="">Select Employee Type</option>
                <option value="employee">Employee</option>
                <option value="selfEmployed">Self Employed</option>
              </select>
            </div>
          </div>

          <div className="flex space-x-4 mt-6 gap-5">
            {/* PAN */}
            <div className="relative flex items-center border-b-2 border-gray-300 dark:border-gray-600 w-1/2">
              <span className="pr-2 absolute left-0 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a7 7 0 1 0 7 7 7 7 0 0 0-7-7Zm-4 8a4 4 0 0 1 8 0Zm4 6c-3.33 0-6 1.34-6 3v1h12v-1c0-1.66-2.67-3-6-3Z" />
                </svg>
              </span>
              <input
                type="text"
                name="pan"
                value={formData.pan}
                onChange={handleChange}
                id="floating-pan"
                className="block py-2.5 pl-8 w-full text-sm bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating-pan"
                className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 left-8 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >
                PAN Number
              </label>
            </div>

            {/* Pincode */}
            <div className="relative flex items-center border-b-2 border-gray-300 dark:border-gray-600 w-1/2">
              <span className="pr-2 absolute left-0 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 10h-3V7a2 2 0 0 0-2-2h-3V2H8v3H5a2 2 0 0 0-2 2v3H2v11h3v-9h2v9h2v-9h3V8h2v9h3V10h-3V7h3z" />
                </svg>
              </span>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                id="floating-pincode"
                className="block py-2.5 pl-8 w-full text-sm bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating-pincode"
                className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 left-8 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >
                Pincode
              </label>
            </div>
          </div>

          {/* Loan Amount and Income Fields */}
          <div className="flex space-x-4 mt-6 gap-5">
            {/* Loan Amount */}
            <div className="relative flex items-center border-b-2 border-gray-300 dark:border-gray-600 w-1/2">
              <span className="pr-2 absolute left-0 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 12v10h18V12H3zm10 10H7v-8h6v8zm6 0h-4v-6h4v6z" />
                </svg>
              </span>
              <input
                type="number"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleChange}
                id="floating-loan"
                className="block py-2.5 pl-8 w-full text-sm bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating-loan"
                className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 left-8 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >
                Loan Amount
              </label>
            </div>

            {/* Income */}
            <div className="relative flex items-center border-b-2 border-gray-300 dark:border-gray-600 w-1/2">
              <span className="pr-2 absolute left-0 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8V4h-4v4H8l4 4 4-4h-2z" />
                </svg>
              </span>
              <input
                type="number"
                name="income"
                value={formData.income}
                onChange={handleChange}
                id="floating-income"
                className="block py-2.5 pl-8 w-full text-sm bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating-income"
                className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 left-8 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >
                Income
              </label>
            </div>
          </div>

          {/* DOB */}
          <div className="relative flex items-center border-b-2 border-gray-300 dark:border-gray-600 w-full mt-6">
            <span className="pr-2 absolute left-0 top-1/2 transform -translate-y-1/2">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 10h10v10H7zm0-6h10V1H7zm5 6V1h5v4H7z" />
              </svg>
            </span>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              id="floating-dob"
              className="block py-2.5 pl-8 w-full text-sm bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating-dob"
              className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 left-8 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
            >
              Date of Birth
            </label>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg text-xl font-bold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Page;
