"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { submitUserInfo } from "../APIS/UserData/UserInfoApi";
import Loading from "../../animations/Loading.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import RatingAndReviews from "../Component/Homesections/page2";
import Howitworks from "../Component/Homesections/page3";
import Frequent from "../Component/Homesections/page4";
import Popup from "../Component/Popup";

interface FormData {
  name: string;
  phone: string;
  email: string;
  employeeType: string;
  pan: string;
  pincode: string;
  loanAmount: string;
  income: string;
  dob: string;
}

const MultiStepFormPage: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState<"success" | "error">("success");
  const [popupMessage, setPopupMessage] = useState("");
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

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) router.push("/eligibleLenders");
    else setLoading(false);
  }, [router]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => step < 4 && setStep((s) => s + 1);
  const handleBack = () => step > 1 && setStep((s) => s - 1);

  const handleSubmit = async () => {
    try {
      await submitUserInfo(formData);
      localStorage.setItem(
        "userData",
        JSON.stringify({ ...formData, expiration: Date.now() + 7 * 86400000 })
      );
      setPopupType("success");
      setPopupMessage("Form submitted successfully!");
      setShowPopup(true);
      setTimeout(() => router.push("/eligibleLenders"), 2000);
    } catch {
      setPopupType("error");
      setPopupMessage("Error submitting form. Please try again.");
      setShowPopup(true);
    }
  };

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <Lottie animationData={Loading} loop className="w-40 h-40" />
        <p className="mt-4 text-lg text-gray-600">Loading lenders...</p>
      </div>
    );

  const steps = ["Basic Info", "Identification", "Financials", "Review"];

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="grid gap-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <select
              name="employeeType"
              value={formData.employeeType}
              onChange={handleChange}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Employee Type</option>
              <option value="employee">Employee</option>
              <option value="selfEmployed">Self Employed</option>
            </select>
          </div>
        );
      case 2:
        return (
          <div className="grid gap-4">
            <input
              name="pan"
              value={formData.pan}
              onChange={handleChange}
              placeholder="PAN Number"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Pincode"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div />
          </div>
        );
      case 3:
        return (
          <div className="grid gap-4">
            <input
              name="loanAmount"
              type="number"
              value={formData.loanAmount}
              onChange={handleChange}
              placeholder="Loan Amount"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              name="income"
              type="number"
              value={formData.income}
              onChange={handleChange}
              placeholder="Income"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div />
            <div />
          </div>
        );
      case 4:
        return (
          <div className="space-y-2">
            <div><strong>Name:</strong> {formData.name}</div>
            <div><strong>Phone:</strong> {formData.phone}</div>
            <div><strong>Email:</strong> {formData.email}</div>
            <div><strong>Employee Type:</strong> {formData.employeeType}</div>
            <div><strong>PAN Number:</strong> {formData.pan}</div>
            <div><strong>Pincode:</strong> {formData.pincode}</div>
            <div><strong>Date of Birth:</strong> {formData.dob}</div>
            <div><strong>Loan Amount:</strong> {formData.loanAmount}</div>
            <div><strong>Income:</strong> {formData.income}</div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-20 p-6 ">
      {showPopup && (
        <Popup type={popupType} message={popupMessage} onClose={() => setShowPopup(false)} />
      )}
      <div className="w-full mx-auto  p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          Business Loans at <span className="text-blue-600">10.25%*</span>
        </h1>
        <div className="flex items-center justify-center mb-8 mx-auto max-w-lg space-x-4">
          {steps.map((label, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 transition-colors 
          ${step === index + 1 ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-500 border-gray-300'}`}
              >
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className="w-10 h-1 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>

        <section className="max-w-lg mx-auto">
          {renderStep()}
        </section>




        <div className="flex justify-between max-w-md mx-auto mt-8 w-full">
          {step > 1 ? (
            <button
              onClick={handleBack}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
            >
              Back
            </button>
          ) : <div />}

          {step < 4 ? (
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Submit
            </button>
          )}
        </div>

        <section className="mt-10 space-y-8">
          <Howitworks />
          <RatingAndReviews />
          <Frequent />
        </section>
      </div>
    </div>
  );
};

export default MultiStepFormPage;
