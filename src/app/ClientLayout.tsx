"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useModal, ModalProvider } from "@/app/context/ModalContext";
import Navbar from "./Navbar/page";
import Footer from "./Footer/Footer";
import GlobalModal from "./Component/Modals/GlobalModal";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import animationData from "../animations/bot22.json";
import { useRouter } from "next/navigation"; 
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

type ChatMessage = {
  type: "bot" | "user" | "signup" | "options";
  text: string;
};

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { type: "bot", text: "Hey! How can I help you?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const updateLoginStatus = () => {
      const loginStatus = Cookies.get("isLoggedIn");
      const isNowLoggedIn = loginStatus === "true";

      if (isNowLoggedIn && !isLoggedIn) {
        setIsLoggedIn(true);
        setChatMessages([{ type: "bot", text: "Thanks for login in keshvacredit how can I help you." }]);
        router.refresh();
      } else {
        setIsLoggedIn(isNowLoggedIn);
      }
    };

    updateLoginStatus();
    window.addEventListener("login-status-changed", updateLoginStatus);

    return () => {
      window.removeEventListener("login-status-changed", updateLoginStatus);
    };
  }, [isLoggedIn, router]);

  const handleUserMessage = (message: string) => {
    setChatMessages((prev) => [...prev, { type: "user", text: message }]);

    setTimeout(() => {
      if (!isLoggedIn) {
        setChatMessages((prev) => [
          ...prev,
          { type: "bot", text: "you are not registered" },
          { type: "bot", text: "Please log in to continue." },
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
  // Removed _setChatMessages since it's unused
  input,
  setInput,
  handleUserMessage,
  children,
}: LayoutContentProps) {
  const { openModal } = useModal();
  const router = useRouter();

  return (
    <>
      {children}

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
                    onClick={openModal}
                  >
                    Sign Up
                  </button>
                )}

              {isLoggedIn &&
                chatMessages.some((msg) => msg.type === "options") && (
                  <div className="flex justify-between gap-2">
                    <button
                      onClick={() => router.push("/short-term-loan")}
                      className="p-2 bg-blue-600 text-white rounded-lg text-xs"
                    >
                      Personal Loan
                    </button>
                    <button
                      onClick={() => router.push("/business-loan")}
                      className="p-2 bg-green-600 text-white rounded-lg text-xs"
                    >
                      Business Loan
                    </button>
                  </div>
                )}
            </div>

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
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center border border-black text-white bg-white rounded-full w-16 h-16 hover:bg-blue-200 focus:ring-4 shadow-lg transition-transform transform hover:scale-110"
        >
          <Lottie animationData={animationData} loop autoplay className="w-8 h-8" />
        </button>
      </div>
    </>
  );
}
