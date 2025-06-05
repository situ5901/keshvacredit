"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { motion } from "framer-motion";
import { useModal } from "@/app/context/ModalContext";
import dynamic from "next/dynamic";
import animationData from "../../animations/bot22.json";
import { useRouter } from "next/navigation";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

type ChatMessage = {
    type: "bot" | "user" | "signup" | "options";
    text: string;
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

    useEffect(() => {
        const updateLoginStatus = () => {
            const loginStatus = Cookies.get("isLoggedIn");
            const isNowLoggedIn = loginStatus === "true";

            if (isNowLoggedIn && !isLoggedIn) {
                setIsLoggedIn(true);
                setChatMessages([
                    { type: "bot", text: "Thanks for login in keshvacredit how can I help you." },
                ]);
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
                        <button onClick={() => setIsOpen(false)} className="text-lg font-bold">✕</button>
                    </div>

                    <div className="h-40 overflow-y-auto p-2 text-sm text-black space-y-2">
                        {chatMessages.map((msg, index) => (
                            <div key={index} className={msg.type === "bot" ? "flex" : "flex justify-end"}>
                                <p
                                    className={`inline-block max-w-fit px-1 py-2 rounded-lg ${msg.type === "bot" ? "bg-gray-200 text-left" : "bg-blue-100 text-right"}`}
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
            <div className="flex gap-2 items-center">
                <a
                    href="https://wa.me/8901229195"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center border border-green-500 text-white bg-green-500 rounded-full w-12 h-12 hover:bg-green-600 focus:ring-4 shadow-lg transition-transform transform hover:scale-110"
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.52 3.48A11.83 11.83 0 0012 0 12 12 0 000 12a11.85 11.85 0 001.64 6.05L0 24l6.21-1.63A11.93 11.93 0 0012 24a12 12 0 0012-12 11.83 11.83 0 00-3.48-8.52zM12 22a9.93 9.93 0 01-5.05-1.38l-.36-.22-3.68.97.98-3.57-.24-.37A9.92 9.92 0 1122 12a9.93 9.93 0 01-10 10zm5.12-7.25c-.27-.14-1.63-.8-1.88-.9s-.44-.14-.63.14-.72.9-.88 1.09-.33.2-.6.07a8.21 8.21 0 01-2.4-1.48 9.02 9.02 0 01-1.66-2.06c-.17-.3 0-.46.13-.6.13-.13.3-.33.45-.5a2 2 0 00.3-.5.54.54 0 000-.52c-.06-.14-.61-1.47-.84-2-.22-.53-.45-.45-.62-.46h-.52a1 1 0 00-.72.34A3 3 0 005 9.12a5.21 5.21 0 00.19 2.73c.27.66 1.63 2.63 3.78 4.06A13.47 13.47 0 0014 17.4c.9.27 1.72.23 2.36.14a3 3 0 002-.85 2.55 2.55 0 00.54-1.5c0-.2-.1-.28-.36-.4z" />
                    </svg>
                </a>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-center border border-black text-white bg-white rounded-full w-12 h-12 hover:bg-blue-200 focus:ring-4 shadow-lg transition-transform transform hover:scale-110"
                >
                    <Lottie animationData={animationData} loop autoplay className="w-6 h-6" />
                </button>
            </div>


        </div>
    );
}
