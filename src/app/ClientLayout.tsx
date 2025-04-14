"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useModal, ModalProvider } from "@/app/context/ModalContext";
import Navbar from "./Navbar/page";
import Footer from "./Footer/Footer";
import GlobalModal from "./Component/Modals/GlobalModal";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import animationData from "../animations/sport.json";

// ✅ Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Define a type for chat messages
type ChatMessage = {
  type: "bot" | "user" | "signup" | "options";
  text: string;
};

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { type: "bot", text: "Hey! How can I help you?" },
  ]);
  const [selectedLoan, setSelectedLoan] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const updateLoginStatus = () => {
      const loginStatus = Cookies.get("isLoggedIn");
      setIsLoggedIn(loginStatus === "true");
    };

    updateLoginStatus();
    window.addEventListener("login-status-changed", updateLoginStatus);

    return () => {
      window.removeEventListener("login-status-changed", updateLoginStatus);
    };
  }, []);

  const handleUserMessage = (message: string) => {
    setChatMessages((prev) => [...prev, { type: "user", text: message }]);

    setTimeout(() => {
      if (!isLoggedIn) {
        setChatMessages((prev) => [
          ...prev,
          { type: "bot", text: "User not registered" },
          { type: "bot", text: "Please sign up to continue." },
          { type: "signup", text: "" },
        ]);
      } else {
        setChatMessages((prev) => [
          ...prev,
          { type: "bot", text: "In which loan do you need help?" },
          { type: "options", text: "Choose an option:" },
        ]);
      }
    }, 500);
  };

  return (
    <ModalProvider>
      <LayoutContent
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isLoggedIn={isLoggedIn}
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        selectedLoan={selectedLoan}
        setSelectedLoan={setSelectedLoan}
        input={input}
        setInput={setInput}
        handleUserMessage={handleUserMessage}
      >
        <Navbar />
        {children}
        <GlobalModal />
        <Footer />
      </LayoutContent>
    </ModalProvider>
  );
}

type LayoutContentProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isLoggedIn: boolean;
  chatMessages: ChatMessage[];
  setChatMessages: (messages: ChatMessage[]) => void;
  selectedLoan: string | null;
  setSelectedLoan: (loan: string | null) => void;
  input: string;
  setInput: (input: string) => void;
  handleUserMessage: (message: string) => void;
  children: React.ReactNode;
};

function LayoutContent({
  isOpen,
  setIsOpen,
  isLoggedIn,
  chatMessages,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setChatMessages: _setChatMessages,
  selectedLoan,
  setSelectedLoan,
  input,
  setInput,
  handleUserMessage,
  children,
}: LayoutContentProps) {
  const { openModal } = useModal();

  return (
    <>
      {children}

      {/* Floating Chat Box */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-16 right-0 w-[270px] md:w-[280px] max-w-sm sm:w-64 rounded-lg shadow-lg border overflow-hidden bg-white"
          >
            <div className="p-3 flex bg-blue-950 text-white justify-between items-center">
              <h3 className="text-sm font-bold">Live Chat</h3>
              <button onClick={() => setIsOpen(false)} className="text-lg font-bold">
                ✕
              </button>
            </div>

            <div className="h-40 overflow-y-auto p-2 text-sm text-black space-y-2">
              {chatMessages.map((msg, index) => (
                <div key={index} className={msg.type === "bot" ? "flex" : "flex justify-end"}>
                  <p
                    className={`inline-block max-w-fit px-1 py-2 rounded-lg ${
                      msg.type === "bot" ? "bg-gray-200 text-left" : "bg-blue-100 text-right"
                    }`}
                  >
                    {msg.text}
                  </p>
                </div>
              ))}

              {!isLoggedIn &&
                chatMessages.some((msg) => msg.type === "signup") && (
                  <button
                    className="p-2 bg-red-500 text-white rounded-lg w-full text-xs"
                    onClick={openModal} // ✅ Opens signup modal
                  >
                    Sign Up
                  </button>
                )}

              {isLoggedIn &&
                chatMessages.some((msg) => msg.type === "options") && (
                  <div className="flex justify-between gap-2">
                    <button
                      onClick={() => setSelectedLoan("Personal Loan")}
                      className="p-2 bg-blue-600 text-white rounded-lg text-xs"
                    >
                      Personal Loan
                    </button>
                    <button
                      onClick={() => setSelectedLoan("Business Loan")}
                      className="p-2 bg-green-600 text-white rounded-lg text-xs"
                    >
                      Business Loan
                    </button>
                  </div>
                )}
            </div>

            {selectedLoan && (
              <div className="p-2">
                <Image
                  src={
                    selectedLoan === "Personal Loan"
                      ? "data:image/jpeg;base64,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"
                      : "data:image/jpeg;base64,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"
                  }
                  alt={selectedLoan || ""}
                  width={300}
                  height={120}
                  className="w-full h-28 object-cover rounded-lg"
                />
                <p className="text-xs mt-2 text-center font-bold">{selectedLoan}</p>
              </div>
            )}

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
                      setInput("");
                    }
                  }}
                />
                <button
                  onClick={() => {
                    if (input.trim() !== "") {
                      handleUserMessage(input);
                      setInput("");
                    }
                  }}
                  className="ml-2 p-2 bg-blue-800 text-white rounded text-sm"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Floating Chat Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center border border-black text-white bg-blue-950 rounded-full w-14 h-14 hover:bg-blue-800 focus:ring-4 shadow-lg transition-transform transform hover:scale-110"
        >
          <Lottie animationData={animationData} loop autoplay className="w-10 h-10" />
        </button>
      </div>
    </>
  );
}
