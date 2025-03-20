import React, { useState ,useEffect } from "react";
import { motion } from "framer-motion";
import { useModal } from "../../context/ModalContext";

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

  const handleSendOtp = () => {
    if (phone.length === 10) {
      setStep("otp");
      showMessage("OTP Sent Successfully!", "success");
    } else {
      showMessage("Invalid Mobile Number!", "error");
    }
  };

  const handleVerifyOtp = () => {
    if (otp.length === 6) {
      showMessage("OTP Verified Successfully!", "success");
      setTimeout(closeModal, 1000);
    } else {
      showMessage("Invalid OTP! Please try again.", "error");
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* ✅ Success/Error Notification in Top-Right */}
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

      {/* ✅ Main Modal */}
      <div className="fixed inset-0 flex items-center justify-center  backdrop-blur-md z-40">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className=" p-6 rounded-2xl shadow-2xl max-w-lg w-full border border-gray-300"
        >
          {/* Modal Header */}
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold ">
              {step === "phone" ? "Enter Mobile Number" : "Verify OTP"}
            </h3>
            <button
              onClick={closeModal}
              className=" hover:text-red-500 text-xl"
            >
              ✕
            </button>
          </div>

          {/* Form Container */}
          <div className="mt-4 space-y-4">
            {step === "phone" && (
              <>
                <p className="">
                  Enter your mobile number to receive an OTP.
                </p>
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <span className="px-3  ">+91</span>
                  <input
                    type="text"
                    maxLength={10}
                    className="w-full p-3  outline-none"
                    placeholder="Enter Mobile Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/, ""))}
                  />
                </div>
                <button
                  onClick={handleSendOtp}
                  className="w-full py-3 rounded-lg hover:bg-blue-800 transition-all"
                >
                  Send OTP
                </button>
              </>
            )}

            {step === "otp" && (
              <>
                <p className="">
                  Enter the 6-digit OTP sent to {phone}.
                </p>
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <input
                    type="text"
                    maxLength={6}
                    className="w-full p-3 text-center tracking-widest  outline-none"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/, ""))}
                  />
                </div>
                <button
                  onClick={handleVerifyOtp}
                  className="w-full py-3 rounded-lg hover:bg-green-700 transition-all"
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
