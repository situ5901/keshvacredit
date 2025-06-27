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
    consentText:
      "I hereby consent for Whizdm Finance Pvt Ltd to use my information for loan processing purposes.",
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
            const required = [
              "name",
              "mobile",
              "email",
              "dob",
              "pancard",
              "income",
              "pincode",
              "employeeType",
            ];
            if (required.every((k) => updated[k as keyof typeof updated])) {
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
    const required = [
      "name",
      "mobile",
      "email",
      "dob",
      "pancard",
      "income",
      "pincode",
      "employeeType",
    ];
    if (step === 1 && required.every((k) => formData[k as keyof typeof formData])) {
      setIsStepReady(true);
    }
  }, [formData, step]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "pancard" ? value.toUpperCase() : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
      const saved = data?.savedData;
      let success = false;
      const msgs: string[] = [];

      if (saved) {
        ["dedupe", "lead", "offers", "journeyUrl"].forEach((key) => {
          const m = (saved as any)[key]?.message;
          if (m) msgs.push(m);
        });

        if (saved.lead?.status === "success" || saved.lead?.code === "0000") {
          success = true;
        }
      }

      const offers = saved?.offers?.offerObjects;
      if (success && (!offers || offers.length === 0)) {
        success = false;
        msgs.length = 0;
        msgs.push("Sorry, you are not eligible. Please try another lender.");
      }

      if (success && msgs.length === 0) {
        msgs.push("Your eligibility request was submitted successfully.");
      }

      setIsSuccess(success);
      setResponseMsg(msgs.join("\n"));
      setPopupVisible(true);

      if (success && saved?.journeyUrl?.pwa) {
        setTimeout(() => {
          router.push(saved.journeyUrl.pwa);
        }, 2000);
      } else {
        setTimeout(() => {
          router.push("/eligibleLenders");
        }, 2000);
      }
    } catch (err) {
      console.error("Submit error:", err);
      setIsSuccess(false);
      setResponseMsg("There was an error submitting the form.");
      setPopupVisible(true);
      router.push("/eligibleLenders");
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
    "Medical expense", "Repay credit card bill", "Repay other loans", "Other Personal",
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
          className="flex items-center gap-1 hover:text-blue-800 font-medium transition duration-300 mb-4"
        >
          ⇚ Back
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
              className="findrop border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Loan Purpose</option>
              {loanPurposes.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>

            {[
              { name: "incomeMode", options: ["cash", "cheque", "online"], label: "Income Mode" },
              { name: "gender", options: ["male", "female", "others"], label: "Gender" },
              { name: "educationLevel", options: ["POSTGRADUATION", "GRADUATION", "LESSTHAN10TH"], label: "Education Level" },
              { name: "annualFamilyIncome", options: ["Less than 1 lakh", "1-3 lakhs", "More than 3 lakhs"], label: "Annual Family Income" },
              { name: "maritalStatus", options: ["Single", "Married", "Divorced", "Widowed", "Separated"], label: "Marital Status" },
            ].map(({ name, options, label }) => (
              <select
                key={name}
                name={name}
                value={formData[name as keyof typeof formData]}
                onChange={handleChange}
                required
                className="findrop border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  checked={consentChecked}
                  onChange={(e) => {
                    setConsentChecked(e.target.checked);
                    setFormData((prev) => ({
                      ...prev,
                      consentValue: e.target.checked ? "true" : "",
                    }));
                  }}
                  className="mt-1"
                />
                {formData.consentText}
              </label>
            </div>
          </>
        )}

        <button
          type="submit"
          disabled={step === 2 && !consentChecked}
          className={`col-span-1 md:col-span-2 font-semibold py-3 px-6 rounded-lg transition duration-300 ${
            step === 2 && !consentChecked
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {step === 1 ? "Next" : "Submit"}
        </button>
      </form>

      {popupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-md text-center space-y-4">
            {isSuccess ? (
              <>
                <Image src="/cong.png" alt="Success" width={120} height={120} className="mx-auto" />
                <h3 className="text-xl font-bold text-green-600">Congratulations!</h3>
                <p className="text-gray-700">{responseMsg}</p>
                <p className="text-sm text-gray-500">We are proceeding to the next steps...</p>
              </>
            ) : (
              <>
                <Image src="/sory.png" alt="Sorry" width={120} height={120} className="mx-auto" />
                <h3 className="text-xl font-bold text-red-600">We're Sorry!</h3>
                <p className="text-gray-700">{responseMsg}</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EligibilityForm;
