/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"; // 👈 install with: npm install js-cookie
import axios from "axios";

const EligibilityForm = () => {
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
  const [status, setStatus] = useState<string | null>(null);
  const [offer, setOffer] = useState<number | null>(null);
  const [fullApiResponse, setFullApiResponse] = useState<any>(null);

  const router = useRouter();

  // ✅ Autofill user data from API
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
        .catch((err) => {
          console.error("Auto-fill error:", err);
        });
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      setFullApiResponse(data); // ✅ Save full response


      if (data && typeof data.success !== "undefined") {
        if (data.success) {
          const offerStatus = data.offers?.status?.toLowerCase() || "";
          const isOfferAccepted = ["accept", "approve"].includes(offerStatus);

          setResponseMsg(
            data.offers?.message ||
            data.lead?.message ||
            "Request processed successfully."
          );
          setStatus(data.offers?.status || data.lead?.status || "success");

          const offerAmount = data.offers?.approvedAmount || data.offers?.amount || null;
          setOffer(offerAmount);
          setPopupVisible(true);

          let redirectUrl = "/eligibleLenders";
          const journeyUrl = data.journeyUrl?.url;
          const journeyStatus = data.journeyUrl?.status?.toLowerCase();

          if (isOfferAccepted && journeyUrl && ["accept", "approve", "success"].includes(journeyStatus)) {
            redirectUrl = journeyUrl;
          } else if (isOfferAccepted) {
            redirectUrl = "https://moneyview.in/";
          }

          setTimeout(() => {
            setPopupVisible(false);
            if (redirectUrl.startsWith("http")) {
              window.location.href = redirectUrl;
            } else {
              router.push(redirectUrl);
            }
          }, 3000);
        } else {
          setResponseMsg(
            data.message || data.lead?.message || data.offers?.message || "❌ Application failed. Please check your details."
          );
          setStatus(data.offers?.status || data.lead?.status || "error");
          setOffer(null);
          setPopupVisible(true);
          setTimeout(() => {
            setPopupVisible(false);
            router.push("/eligibleLenders");
          }, 3000);
        }
      } else {
        throw new Error("Invalid API response");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResponseMsg("❌ Something went wrong. Please try again.");
      setStatus("error");
      setOffer(null);
      setPopupVisible(true);
      setTimeout(() => {
        setPopupVisible(false);
        router.push("/eligibleLenders");
      }, 3000);
    }
  };

  // 🔽 Return your original JSX
  return (
    <div className="eligibility-form max-w-4xl mx-auto p-8 rounded-2xl shadow-lg mt-20 border relative">
      <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-3">
        <Image
          src="https://moneyview.in/images/mv-green-logo-v3Compressed.svg"
          alt="Moneyview Logo"
          width={120}
          height={40}
          className="object-contain"
        />
        <span>Form</span>
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {[
          { name: "name", placeholder: "Full Name", type: "text" },
          { name: "mobile", placeholder: "Mobile Number", type: "text" },
          { name: "email", placeholder: "Email Address", type: "email" },
          { name: "dob", placeholder: "Date of Birth", type: "date" },
          { name: "pancard", placeholder: "PAN Card Number", type: "text" },
          { name: "income", placeholder: "declared income", type: "number" },
        ].map(({ name, ...rest }) => (
          <input
            key={name}
            name={name}
            value={formData[name as keyof typeof formData]}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...rest}
          />
        ))}

        {/* Employment Type - Placed before employerName */}
        <select
          name="employeeType"
          value={formData.employeeType}
          onChange={handleChange}
          required
          className="findrop border rounded-lg px-4 py-3"
        >
          <option value="">Employment Type</option>
          <option value="salaried">Salaried</option>
          <option value="self employed">Self Employed</option>
        </select>
        <select
          name="incomeMode"
          value={formData.incomeMode}
          onChange={handleChange}
          required
          className="findrop border rounded-lg px-4 py-3"
        >
          <option value="">Income Mode</option>
          <option value="cash">Cash</option>
          <option value="cheque">Cheque</option>
          <option value="online">Online</option>
        </select>

        {/* Rest of inputs */}
        {[
          { name: "employerName", placeholder: "Company/Org Name", type: "text" },
          { name: "pincode", placeholder: "Pincode", type: "text" },
          { name: "state", placeholder: "State", type: "text" },
          { name: "city", placeholder: "City", type: "text" },
          { name: "addressLine1", placeholder: "Address Line 1", type: "text" },
          { name: "addressLine2", placeholder: "Address Line 2", type: "text" },
          { name: "loanPurpose", placeholder: "Loan Purpose", type: "text" },
        ].map(({ name, ...rest }) => (
          <input
            key={name}
            name={name}
            value={formData[name as keyof typeof formData]}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...rest}
          />
        ))}

        {/* Select Fields */}
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          className="findrop border rounded-lg px-4 py-3"
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>



        <select
          name="educationLevel"
          value={formData.educationLevel}
          onChange={handleChange}
          required
          className="findrop border rounded-lg px-4 py-3"
        >
          <option value="">Education Level</option>
          <option value="LESSTHAN10TH">Less than 10th</option>
          <option value="PASSED10TH">Passed 10th</option>
          <option value="PASSED12TH">Passed 12th</option>
          <option value="DIPLOMA">Diploma</option>
          <option value="GRADUATION">Graduation</option>
          <option value="POSTGRADUATION">Post Graduation</option>
          <option value="PHD">PhD</option>
        </select>

        <select
          name="annualFamilyIncome"
          value={formData.annualFamilyIncome}
          onChange={handleChange}
          required
          className="findrop border rounded-lg px-4 py-3"
        >
          <option value="">annualFamilyIncome</option>
          <option value="Less than 1 lakh">Less than 1 lakh</option>
          <option value="1-3 lakhs">1–3 lakhs</option>
          <option value="More than 3 lakhs">More than 3 lakhs</option>
        </select>

        <select
          name="maritalStatus"
          value={formData.maritalStatus}
          onChange={handleChange}
          required
          className="findrop border rounded-lg px-4 py-3"
        >
          <option value="">Marital Status</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
        </select>

        <button
          type="submit"
          className="col-span-1 md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Submit
        </button>
      </form>



      {popupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-[90%] max-w-md text-center">
            <h3 className="text-lg font-semibold mb-2">API Response</h3>

            {fullApiResponse?.savedData?.lead && (
              <>
                <p className="text-blue-600 font-semibold">
                  Lead Status: {fullApiResponse.savedData.lead.status}
                </p>
                <p className="text-red-600 mt-1">
                  Message: {fullApiResponse.savedData.lead.message}
                </p>
              </>
            )}

            {!fullApiResponse?.savedData?.lead && (
              <p className="text-gray-600">No lead data found.</p>
            )}

            <p className="text-gray-400 mt-3 text-sm">please try again with valid documents</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EligibilityForm;
