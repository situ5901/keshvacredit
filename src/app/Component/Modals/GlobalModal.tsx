import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useModal } from "../../context/ModalContext";
import { sendOtp, verifyOtp } from "../../APIS/UserData/UserInfoApi"; // update the path as needed
import Cookies from "js-cookie";

const GlobalModal: React.FC = () => {
  const { isOpen, closeModal } = useModal();
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
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
      setPhone("");
      setOtp("");
      setStep("phone");
    }
  }, [isOpen]);

  const handleSendOtp = async () => {
    if (phone.length !== 10) {
      return showMessage("Invalid Mobile Number!", "error");
    }
    try {
      await sendOtp(phone);
      setStep("otp");
      showMessage("OTP Sent Successfully!", "success");
    } catch (err) {
      showMessage("Failed to send OTP!", "error");
      console.error(err);
    }
  };

const handleVerifyOtp = async () => {
  if (otp.length !== 6) {
    return showMessage("Invalid OTP!", "error");
  }
  try {
    const response = await verifyOtp(phone, otp);
    const token = response?.token;

    if (token) {
      Cookies.set("user_token", token);     // ✅ Token Save
      Cookies.set("user_phone", phone);     // ✅ Phone Save
      showMessage("OTP Verified Successfully!", "success");
      setTimeout(closeModal, 1000);
    } else {
      showMessage("Verification failed!", "error");
    }
  } catch (err) {
    showMessage("Invalid OTP! Please try again.", "error");
    console.error(err);
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
          className={`fixed top-5 right-5 px-4 py-2 text-white rounded-md shadow-lg z-50 ${
            message.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {message.text}
        </motion.div>
      )}

      {/* Main Modal */}
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
            {step === "phone" && (
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
                <button
                  onClick={handleSendOtp}
                  className="w-full py-3 rounded-lg bg-blue-600 text-white"
                >
                  Send OTP
                </button>
              </>
            )}

            {step === "otp" && (
              <>
                <p>Enter the 6-digit OTP sent to {phone}.</p>
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <input
                    type="text"
                    maxLength={6}
                    className="w-full p-3 text-center tracking-widest outline-none"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                  />
                </div>
                <button
                  onClick={handleVerifyOtp}
                  className="w-full py-3 rounded-lg bg-green-600 text-white"
                >
                  Verify OTP
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
