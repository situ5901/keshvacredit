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
    addressLine2: "",
    state: "",
    annualFamilyIncome: "",
    loanPurpose: "",
    maritalStatus: "",
  });

  const [popupVisible, setPopupVisible] = useState(false);
  const [responseMsg, setResponseMsg] = useState<string | null>(null);
  const [fullApiResponse, setFullApiResponse] = useState<any>(null);

  const router = useRouter();

  useEffect(() => {
    const phone = Cookies.get("user_phone");
    if (phone) {
      axios
        .post("https://keshvacredit.com/api/v1/api/getUsers", { phone })
        .then((res) => {
          const user = res.data;
          setFormData((prev) => ({
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
          }));
        })
        .catch((err) => console.error("Error fetching user:", err));
    }
  }, []);

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
        addressLine2: formData.addressLine2,
        state: formData.state,
        annualFamilyIncome: formData.annualFamilyIncome,
        name: formData.name,
        loanPurpose: formData.loanPurpose,
        maritalStatus: formData.maritalStatus,
      };

      const res = await fetch("https://keshvacredit.com/api/v1/LenderAPIs/moneyview/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      setFullApiResponse(data);
      setResponseMsg("Our team will contact you soon.");
      setPopupVisible(true);
    } catch (error) {
      console.error("Submit error:", error);
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
  ];

  const additionalFields = [
    { name: "employerName", placeholder: "Company/Org Name", type: "text" },
    { name: "pincode", placeholder: "Pincode", type: "text" },
    { name: "state", placeholder: "State", type: "text" },
    { name: "city", placeholder: "City", type: "text" },
    { name: "addressLine1", placeholder: "Address Line 1", type: "text" },
    { name: "addressLine2", placeholder: "Address Line 2", type: "text" },
    { name: "loanPurpose", placeholder: "Loan Purpose", type: "text" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 rounded-2xl shadow-lg mt-20 border relative">
      <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-3">
        <Image src="https://moneyview.in/images/mv-green-logo-v3Compressed.svg" alt="Logo" width={120} height={40} />
        <span>Eligibility Form</span>
      </h2>

      <form
        onSubmit={step === 2 ? handleSubmit : (e) => { e.preventDefault(); setStep(2); }}
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
            {[
              { name: "employeeType", options: ["salaried", "self employed"], label: "Employment Type" },
              { name: "incomeMode", options: ["cash", "cheque", "online"], label: "Income Mode" },
              { name: "gender", options: ["male", "female", "others"], label: "Gender" },
              {
                name: "educationLevel",
                options: ["LESSTHAN10TH", "PASSED10TH", "PASSED12TH", "DIPLOMA", "GRADUATION", "POSTGRADUATION", "PHD"],
                label: "Education Level",
              },
              {
                name: "annualFamilyIncome",
                options: ["Less than 1 lakh", "1-3 lakhs", "More than 3 lakhs"],
                label: "Annual Family Income",
              },
              { name: "maritalStatus", options: ["single", "married"], label: "Marital Status" },
            ].map(({ name, options, label }) => (
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
          </>
        )}

        <button
          type="submit"
          className="col-span-1 md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          {step === 1 ? "Next" : "Submit"}
        </button>
      </form>

      {popupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-[90%] max-w-md text-center">
            <h3 className="text-lg font-semibold mb-2">🎉 Congratulations!</h3>
            <p className="text-blue-600 font-medium">Application submitted successfully.</p>
            <p className="mt-2 text-gray-600 text-sm">{responseMsg}</p>
            <a
              href="https://play.google.com/store/apps/details?id=com.whizdm.moneyview.loans"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
            >
              Download MV App
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default EligibilityForm;
