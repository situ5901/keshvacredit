"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";

const EligibilityForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    dob: "",
    pancard: "",
    employeeType: "",
    employerName: "",
    income: "",
    gender: "",
    incomeMode: "",
    educationLevel: "",
    pincode: "",
    city: "",
    addressLine1: "",
    state: "",
    annualFamilyIncome: "",
    loanPurpose: "",
    maritalStatus: "",
    consentValue: "",
    consentText: "I hereby consent for Whizdm Finance Pvt Ltd to use my information for loan processing purposes."
  });

  const [popupVisible, setPopupVisible] = useState(false);
  const [responseMsg, setResponseMsg] = useState<string | null>(null);
  const [isStepReady, setIsStepReady] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const phone = Cookies.get("user_phone");
    if (phone) {
      axios
        .post("https://keshvacredit.com/api/v1/api/getUsers", { phone })
        .then((res) => {
          const user = res.data;
          setFormData((prev) => {
            const updated = {
              ...prev,
              name: user.name || "",
              mobile: user.phone || "",
              email: user.email || "",
              dob: user.dob || "",
              pancard: user.pan || "",
              income: user.income || "",
              employeeType: user.employment || "",
              city: user.city || "",
              state: user.state || "",
              pincode: user.pincode || "",
            };
            const requiredFields = ["name", "mobile", "email", "dob", "pancard", "income", "pincode", "employeeType"];
            const allFilled = requiredFields.every((key) => updated[key as keyof typeof formData]);
            if (allFilled) {
              setStep(2);
              setIsStepReady(true);
            }
            return updated;
          });
        })
        .catch((err) => console.error("Error fetching user:", err));
    }
  }, []);

  useEffect(() => {
    const requiredFields = ["name", "mobile", "email", "dob", "pancard", "income", "pincode", "employeeType"];
    const allFilled = requiredFields.every((key) => formData[key as keyof typeof formData]);
    if (step === 1 && allFilled) setIsStepReady(true);
  }, [formData, step]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "pancard" ? value.toUpperCase() : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const payload = {
        pan: formData.pancard,
        email: formData.email,
        mobile: formData.mobile,
        gender: formData.gender,
        employmentType: formData.employeeType,
        declaredIncome: formData.income,
        employerName: formData.employerName,
        dateOfBirth: formData.dob,
        partnerRef: "2021020632",
        incomeMode: formData.incomeMode,
        educationLevel: formData.educationLevel,
        pincode: formData.pincode,
        city: formData.city,
        addressLine1: formData.addressLine1,
        state: formData.state,
        annualFamilyIncome: formData.annualFamilyIncome,
        name: formData.name,
        loanPurpose: formData.loanPurpose,
        maritalStatus: formData.maritalStatus,
        consentValue: formData.consentValue,
        consentText: formData.consentText,
      };

      const res = await fetch("https://keshvacredit.com/api/v1/LenderAPIs/moneyview/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      const messages: string[] = [];
      let success = false;

      const savedData = data?.savedData;

      // Top-level message
      if (data?.success === false && data?.msg) {
        messages.push(data.msg);
      } else if (data?.success === true && data?.msg) {
        messages.push(data.msg);
        success = true;
      }

      // Nested messages
      if (savedData) {
        const nestedMessages = [
          savedData?.dedupe?.message,
          savedData?.lead?.message,
          savedData?.offers?.message,
          savedData?.journeyUrl?.message,
        ].filter(Boolean);
        messages.push(...nestedMessages);

        // Success from nested fields
        if (savedData?.lead?.status === "success" || savedData?.lead?.code === "0000") {
          success = true;
        }
      }

      setIsSuccess(success);
      setResponseMsg(messages.length > 0 ? messages.join("\n") : "No response message found.");
      setPopupVisible(true);
    } catch (error) {
      console.error("Submit error:", error);
      setIsSuccess(false);
      setResponseMsg("There was an error submitting the form.");
      setPopupVisible(true);
    }
  };


  const basicFields = [
    { name: "name", placeholder: "Full Name", type: "text" },
    { name: "mobile", placeholder: "Mobile Number", type: "text" },
    { name: "email", placeholder: "Email Address", type: "email" },
    { name: "dob", placeholder: "Date of Birth", type: "date" },
    { name: "pancard", placeholder: "PAN Card Number", type: "text" },
    { name: "income", placeholder: "Declared Income", type: "number" },
    { name: "pincode", placeholder: "Pincode", type: "text" },
    { name: "employeeType", placeholder: "Employment Type", type: "text" },
  ];

  const additionalFields = [
    { name: "employerName", placeholder: "Company/Org Name", type: "text" },
    { name: "state", placeholder: "State", type: "text" },
    { name: "city", placeholder: "City", type: "text" },
    { name: "addressLine1", placeholder: "Address Line 1", type: "text" },
  ];

  const loanPurposes = [
    "Travel", "Vacation", "Marriage", "Functions at home", "New home", "Construction", "Old home", "Renovation",
    "Furniture for home", "Household expenses", "Car purchase", "Two wheeler purchase", "Education", "Business expense",
    "Medical expense", "Repay credit card bill", "Repay other loans", "Other Personal"
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 rounded-2xl shadow-lg mt-20 border relative">
      <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-3">
        <Image src="https://moneyview.in/images/mv-green-logo-v3Compressed.svg" alt="Logo" width={120} height={40} />
        <span>Eligibility Form</span>
      </h2>

      {step === 2 && (
        <button
          onClick={() => setStep(1)}
          className="flex items-center gap-1  hover:text-blue-800 font-medium transition-all duration-300 mb-4"
          title="Back to Basic Details"
        >
          <span className="text-xl font-extrabold ">⇚ Back</span>

        </button>


      )}

      <h3 className="text-xl font-semibold mb-4">{step === 1 ? "Basic Details" : "Additional Details"}</h3>

      <form
        onSubmit={step === 2 ? handleSubmit : (e) => {
          e.preventDefault();
          if (isStepReady) setStep(2);
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {(step === 1 ? basicFields : additionalFields).map(({ name, ...rest }) => (
          <input
            key={name}
            name={name}
            value={formData[name as keyof typeof formData] || ""}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...rest}
          />
        ))}

        {step === 2 && (
          <>
            <select
              name="loanPurpose"
              value={formData.loanPurpose}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Loan Purpose</option>
              {loanPurposes.map((purpose) => (
                <option key={purpose} value={purpose}>{purpose}</option>
              ))}
            </select>

            {[{
              name: "incomeMode",
              options: ["cash", "cheque", "online"],
              label: "Income Mode"
            }, {
              name: "gender",
              options: ["male", "female", "others"],
              label: "Gender"
            }, {
              name: "educationLevel",
              options: ["POSTGRADUATION", "GRADUATION", "LESSTHAN10TH"],
              label: "Education Level"
            }, {
              name: "annualFamilyIncome",
              options: ["Less than 1 lakh", "1-3 lakhs", "More than 3 lakhs"],
              label: "Annual Family Income"
            }, {
              name: "maritalStatus",
              options: ["single", "married", "divorced", "widowed", "separated"],
              label: "Marital Status"
            }].map(({ name, options, label }) => (
              <select
                key={name}
                name={name}
                value={formData[name as keyof typeof formData]}
                onChange={handleChange}
                required
                className="border rounded-lg px-4 py-3"
              >
                <option value="">{label}</option>
                {options.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            ))}

            <div className="col-span-1 md:col-span-2 text-sm text-gray-700">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  className="mt-1"
                  checked={consentChecked}
                  onChange={(e) => {
                    setConsentChecked(e.target.checked);
                    setFormData(prev => ({
                      ...prev,
                      consentValue: e.target.checked ? "true" : ""
                    }));
                  }}
                />
                {formData.consentText}
              </label>
            </div>
          </>
        )}

        <button
          type="submit"
          disabled={step === 2 && !consentChecked}
          className={`col-span-1 md:col-span-2 font-semibold py-3 px-6 rounded-lg transition duration-300 ${step === 2 && !consentChecked
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
        >
          {step === 1 ? "Next" : "Submit"}
        </button>
      </form>

      {popupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-[90%] max-w-md text-center">
            {isSuccess && (
              <h3 className="text-lg font-semibold mb-2 text-green-600">🎉 Congratulations!</h3>
            )}
            <pre className="text-blue-600 font-medium whitespace-pre-wrap">{responseMsg}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default EligibilityForm;
