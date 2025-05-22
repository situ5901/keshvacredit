"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { eligiblyramfin } from "../APIS/UserData/UserInfoApi";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  mobile: string;
  email: string;
  dob: string;
  pancard: string;
  loanAmount: string;
  employeeType: string;
}

const EligibilityForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobile: "",
    email: "",
    dob: "",
    pancard: "",
    loanAmount: "",
    employeeType: "",
  });

  const [responseMsg, setResponseMsg] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!responseMsg) return;

    // Redirect if lead created
    if (responseMsg.toLowerCase().includes("lead created")) {
      router.push("https://applyonline.ramfincorp.com/?utm_source=keshvacredit");
    } else {
      // Show error and clear message after 3 seconds
      const timer = setTimeout(() => setResponseMsg(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [responseMsg, router]);

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
      const data = await eligiblyramfin(payload);
      setIsSuccess(true);
      setResponseMsg(data.message || "Submitted successfully");
    } catch (error: unknown) {
      let errorMessage = "Something went wrong. Please try again.";
      setIsSuccess(false);

      if (
        error &&
        typeof error === "object" &&
        "response" in error &&
        error.response &&
        typeof error.response === "object"
      ) {
        const errResponse = (error as { response?: { data?: { apiError?: { message?: string } } } }).response;
        console.error("Submission error:", errResponse?.data || error);
        errorMessage = errResponse?.data?.apiError?.message || errorMessage;
      } else {
        console.error("Submission error:", error);
      }

      setResponseMsg(errorMessage);
    }

    setFormData({
      name: "",
      mobile: "",
      email: "",
      dob: "",
      pancard: "",
      loanAmount: "",
      employeeType: "",
    });
  };

  return (
    <div className="eligibility-form max-w-2xl mx-auto p-8 rounded-2xl shadow-lg mt-20 border">
      {responseMsg && (
        <div
          className={`fixed top-20 right-5 z-50 px-6 py-4 rounded-lg shadow-md transition-all duration-500 text-sm flex items-center gap-3 ${
            isSuccess
              ? "bg-green-50 text-green-800 border border-green-300"
              : "bg-red-50 text-red-800 border border-red-300"
          }`}
        >
          <span className="text-lg">{isSuccess ? "✅" : "❌"}</span>
          <p>{responseMsg}</p>
        </div>
      )}

      <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-3">
        <Image
          src="https://www.ramfincorp.com/images/logo.png"
          alt="RamFin Logo"
          width={120}
          height={40}
          className="object-contain"
        />
        <span>Eligibility Form</span>
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
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Employee Type</option>
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
    </div>
  );
};

export default EligibilityForm;
