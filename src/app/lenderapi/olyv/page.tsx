"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";

interface FormData {
  name: string;
  phone: string;
  pan: string;
  employment: string;
  income: string;
  dob: string;
}

const SmartcoinForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    pan: "",
    employment: "",
    income: "",
    dob: "",
  });

  const [responseMsg, setResponseMsg] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const router = useRouter();

  const extractMessage = (res: any): string => {
    if (res?.message) return res.message;
    if (res?.error) return res.error;
    return "Something went wrong.";
  };

  const handleSubmitAuto = useCallback(async (autoData: FormData) => {
    try {
      const res = await fetch("https://keshvacredit.com/api/v1/LenderAPIs/smartcoin/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...autoData,
          income: parseInt(autoData.income),
        }),
      });
      const data = await res.json();

      const success = res.ok && data?.message?.toLowerCase()?.includes("success");
      setIsSuccess(success);

      if (success) {
        setResponseMsg("🎉 Congratulations! Application submitted successfully. Proceeding...");
        setTimeout(() => router.push("https://app.olyv.co.in/?utm_source=KeshvaCredit_Web&utm_campaign=KeshvaCredit_1"), 3000);
      } else {
        setResponseMsg("😞 Sorry, your application was rejected. Try another lender.");
        setTimeout(() => router.push("/eligibleLenders"), 3000);
      }
    } catch (error: any) {
      setIsSuccess(false);
      setResponseMsg("❌ " + extractMessage(error));
    }
  }, [router]);

  useEffect(() => {
    const phone = Cookies.get("user_phone");
    if (phone) {
      axios
        .post("https://keshvacredit.com/api/v1/api/getUsers", { phone })
        .then((res) => {
          const user = res.data;
          const updated = {
            name: user.name || "",
            phone: user.phone || "",
            pan: user.pan || "",
            dob: user.dob || "",
            employment: user.employment || "",
            income: user.income || "",
          };
          setFormData(updated);

          if (Object.values(updated).every((v) => v)) {
            handleSubmitAuto(updated);
          }
        })
        .catch(console.error);
    }
  }, [handleSubmitAuto]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "pan" ? value.toUpperCase() : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmitAuto(formData);
  };

  return (
    <div className="eligibility-form max-w-2xl mx-auto p-8 rounded-2xl shadow-lg mt-20 border">
      {responseMsg && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40`}>
          <div className={`max-w-md w-full px-6 py-5 rounded-xl text-center shadow-lg ${
            isSuccess ? "bg-green-50 text-green-800 border-green-300" : "bg-red-50 text-red-800 border-red-300"
          } border`}>
            <div className="text-3xl mb-3">{isSuccess ? "🎉" : "😞"}</div>
            <p className="text-base font-semibold">{responseMsg}</p>
          </div>
        </div>
      )}

      <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-3">
        <Image src="https://framerusercontent.com/images/csl8apTjCrYTK5Qi20a4osUIHw.png?scale-down-to=512" alt="Smartcoin Logo" width={120} height={40} />
        <span>Smartcoin Eligibility Form</span>
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="col-span-2 border border-gray-300 rounded-lg px-4 py-3" />
        <input type="text" name="phone" placeholder="Mobile Number" value={formData.phone} onChange={handleChange} required className="border border-gray-300 rounded-lg px-4 py-3" />
        <input type="text" name="pan" placeholder="PAN Card Number" value={formData.pan} onChange={handleChange} required className="uppercase border border-gray-300 rounded-lg px-4 py-3" />
        <select name="employment" value={formData.employment} onChange={handleChange} required className="border border-gray-300 rounded-lg px-4 py-3">
          <option value="">Select Employment</option>
          <option value="Salaried">Salaried</option>
          <option value="Self-employed">Self-employed</option>
        </select>
        <input type="number" name="income" placeholder="Monthly Income" value={formData.income} onChange={handleChange} required className="border border-gray-300 rounded-lg px-4 py-3" />
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="border border-gray-300 rounded-lg px-4 py-3" />

        <button type="submit" className="col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SmartcoinForm;
