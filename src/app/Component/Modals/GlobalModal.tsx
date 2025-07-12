"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useModal } from "../../context/ModalContext";
import { sendOtp, verifyOtp } from "../../APIS/UserData/UserInfoApi";
import Cookies from "js-cookie";
import Link from "next/link";

const GlobalModal: React.FC = () => {
  const { isOpen, closeModal } = useModal();

  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [consentChecked, setConsentChecked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const showMessage = (text: string, type: "success" | "error") => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 3000);
  };

  useEffect(() => {
    if (isOpen) {
      setStep("phone");
      setPhone("");
      setOtp("");
      setConsentChecked(false);
    }
  }, [isOpen]);

  const handleSendOtp = async () => {
    if (!/^[6-9]\d{9}$/.test(phone)) {
      return showMessage("Enter a valid 10-digit mobile number", "error");
    }

    setIsLoading(true);
    try {
      const res = await sendOtp(phone);
      setStep("otp");
      showMessage("OTP Sent Successfully!", "success");
    } catch (err: any) {
      const msg =
        err?.response?.data?.message ||
        err?.message ||
        "Failed to send OTP!";
      showMessage(msg, "error");
      console.error("Send OTP Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
      return showMessage("Enter a valid 6-digit OTP", "error");
    }

    setIsLoading(true);
    try {
      const response = await verifyOtp(phone, otp);
      const token = response?.token;

      if (token) {
        Cookies.set("user_token", token);
        Cookies.set("user_phone", phone);
        showMessage("OTP Verified Successfully!", "success");
        setTimeout(closeModal, 1000);
      } else {
        showMessage("Verification failed!", "error");
      }
    } catch (err: any) {
      const msg =
        err?.response?.data?.message ||
        err?.message ||
        "Invalid OTP! Please try again.";
      showMessage(msg, "error");
      console.error("Verify OTP Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Notification */}
      {message && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className={`fixed top-5 right-5 px-4 py-2 text-white rounded-md shadow-lg z-50 ${message.type === "success" ? "bg-green-600" : "bg-red-600"
            }`}
        >
          {message.text}
        </motion.div>
      )}

      {/* Modal Backdrop & Content */}
      <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-40">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="custom-box p-6 rounded-2xl bg-amber-400 shadow-2xl max-w-lg w-full border border-gray-300"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">
              {step === "phone" ? "Enter Mobile Number" : "Verify OTP"}
            </h3>
            <button onClick={closeModal} className="hover:text-red-500 text-xl">
              ✕
            </button>
          </div>

          <div className="mt-4 space-y-4">
            {step === "phone" ? (
              <>
                <p>Enter your mobile number to receive an OTP.</p>
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <span className="px-3">+91</span>
                  <input
                    type="text"
                    maxLength={10}
                    className="w-full p-3 outline-none"
                    placeholder="Enter Mobile Number"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value.replace(/\D/g, ""))
                    }
                  />
                </div>

                <div className="flex items-start gap-2 my-4">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1"
                    checked={consentChecked}
                    onChange={(e) => setConsentChecked(e.target.checked)}
                  />
                  <label htmlFor="consent" className="text-sm">
                    We can contact you via Email, WhatsApp, SMS, RCS or Call
                  </label>
                </div>

                <button
                  onClick={handleSendOtp}
                  disabled={!consentChecked || isLoading}
                  className={`w-full py-3 rounded-lg text-white ${consentChecked
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                    }`}
                >
                  {isLoading ? "Sending OTP..." : "Send OTP"}
                </button>
              </>
            ) : (
              <>
                <p>Enter the 6-digit OTP sent to {phone}.</p>
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden mb-4">
                  <input
                    type="text"
                    maxLength={6}
                    className="w-full p-3 text-center tracking-widest outline-none"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) =>
                      setOtp(e.target.value.replace(/\D/g, ""))
                    }
                  />
                </div>

                <div className="flex items-start gap-2 mb-4">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1"
                    checked={consentChecked}
                    onChange={(e) => setConsentChecked(e.target.checked)}
                  />
                  <label htmlFor="consent" className="text-sm">
                    By checking this box, you agree to be contacted by <strong>KeshvaCredit</strong> via Email, WhatsApp, SMS, RCS, or Call and you give your explicit consent to us to access your credit report and score from credit bureaus in accordance with our{" "}
                    <Link href="/terms" className="text-blue-600 underline">
                      Terms and Conditions
                    </Link>.
                  </label>
                </div>

                <button
                  onClick={handleVerifyOtp}
                  disabled={!consentChecked || isLoading}
                  className={`w-full py-3 rounded-lg text-white ${consentChecked
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-gray-400 cursor-not-allowed"
                    }`}
                >
                  {isLoading ? "Verifying..." : "Verify OTP"}
                </button>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default GlobalModal;
