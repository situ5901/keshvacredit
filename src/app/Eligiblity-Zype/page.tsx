"use client";

import React, { useState } from "react";
import Image from "next/image"; 
import { eligiblyzype } from "../APIS/UserData/UserInfoApi"; 

const EligibilityForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    dob: "",
    pancard: "",
    loanAmount: "",
    employeeType: "",
  });

  const [responseMsg, setResponseMsg] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,
        partnerid: "keshvacredit",
      };

      const data = await eligiblyzype(payload);
      setResponseMsg(data.message || "✅ Submitted successfully!");
    } catch {
      // Removed unused 'error' to fix ESLint warning
      setResponseMsg("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="eligibility-form max-w-2xl mx-auto p-8 rounded-2xl shadow-lg mt-20 border">
      <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-3">
        <Image
          src="https://www.getzype.com/wp-content/uploads/2024/08/Group-852775729.webp"
          alt="Zype Logo"
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
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="col-span-1 md:col-span-2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="pancard"
          placeholder="PAN Card Number"
          value={formData.pancard}
          onChange={handleChange}
          required
          className="uppercase border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          name="loanAmount"
          placeholder="Desired Loan Amount"
          value={formData.loanAmount}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          name="employeeType"
          value={formData.employeeType}
          onChange={handleChange}
          className="findrop border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
         <option value="">Select Employee Type</option> {/* This is a placeholder */}
<option value="Salaried">Salaried</option>
<option value="Self Employed">Self Employed</option>

        </select>

        <button
          type="submit"
          className="col-span-1 md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Submit
        </button>
      </form>

      {responseMsg && (
        <p className="text-center text-sm text-green-600 mt-5">{responseMsg}</p>
      )}
    </div>
  );
};

export default EligibilityForm;
