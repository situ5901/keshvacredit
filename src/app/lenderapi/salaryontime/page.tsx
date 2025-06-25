"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";

interface FormData {
  name: string;
  phone: string;
  email: string;
  dob: string;
  pan: string;
  pincode: string;
  income: string;
  loanAmount: string;
  employment: string;
}

const EligibilityForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    dob: "",
    pan: "",
    pincode: "",
    income: "",
    loanAmount: "",
    employment: "",
  });

  const [responseMsg, setResponseMsg] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const router = useRouter();

const extractMessage = (res: any): string => {
  if (typeof res === "string") return res;
  if (typeof res?.message === "string") return res.message;
  if (typeof res?.message === "object" && res.message?.Message)
    return res.message.Message;
  if (res?.msg) return res.msg;
  if (res?.error?.message) return res.error.message;
  return "Something went wrong.";
};


  const handleSubmitAuto = useCallback(
    async (autoData: FormData) => {
      try {
        const payload = {
          name: autoData.name,
          email: autoData.email,
          phone: autoData.phone,
          pan: autoData.pan,
          income: autoData.income,
          employment: autoData.employment,
          dob: autoData.dob,
          gender: "Male",
          pincode: autoData.pincode,
          state: "Delhi", // fixed value or dynamic if needed
        };

        const res = await axios.post(
          "https://keshvacredit.com/api/v1/LenderAPIs/partner/salaryontime",
          payload,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const responseData = res.data;

        if (responseData?.message === "Lead submitted successfully") {
          setIsSuccess(true);
          setResponseMsg("🎉 Lead submitted successfully! Redirecting...");
          setTimeout(() => {
            router.push("https://salaryontime.com/apply-now?utm_source=Keshvacredit&utm_medium=Keywords&utm_campaign=Keywords&utm_term=Keywords");
          }, 3000);
        } else {
          setIsSuccess(false);
          setResponseMsg(`❌ ${extractMessage(responseData)}`);
          setTimeout(() => {
            router.push("/eligibleLenders");
          }, 3000);
        }
      } catch (error: any) {
        const errRes = error?.response?.data || {};
        setIsSuccess(null);
        setResponseMsg(extractMessage(errRes));
      }
    },
    [router]
  );

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
            email: user.email || "",
            dob: user.dob || "",
            pan: user.pan || "",
            pincode: user.pincode || "",
            income: user.income || "",
            loanAmount: user.loanAmount || "",
            employment: user.employment || "",
          };
          setFormData(updated);
          const allFilled = Object.values(updated).every((v) => v !== "");
          if (allFilled) handleSubmitAuto(updated);
        })
        .catch((err) => console.error("Auto-fill error:", err));
    }
  }, [handleSubmitAuto]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmitAuto(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="eligibility-form max-w-2xl mx-auto p-8 rounded-2xl shadow-lg mt-20 border">
      {responseMsg && isSuccess !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div
            className={`max-w-md w-full px-6 py-5 rounded-xl text-center shadow-lg ${
              isSuccess
                ? "bg-green-50 text-green-800 border border-green-300"
                : "bg-red-50 text-red-800 border border-red-300"
            }`}
          >
            <div className="text-3xl mb-3">{isSuccess ? "🎉" : "❌"}</div>
            <p className="text-base font-semibold">{responseMsg}</p>
          </div>
        </div>
      )}

      {responseMsg && isSuccess === null && (
        <div className="fixed top-0 right-0 m-4 z-50 px-6 py-4 rounded-lg shadow-md text-sm flex items-center gap-3 bg-red-50 text-red-800 border border-red-300">
          <span className="text-lg">❌</span>
          <p>{responseMsg}</p>
        </div>
      )}

      <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-3">
        <Image
          src="https://i.postimg.cc/j2rPwGvT/download.png"
          alt="instantmudra Logo"
          width={120}
          height={40}
          className="object-contain"
        />
        <span>SalaryOnTime Eligibility Form</span>
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
          className="col-span-1 md:col-span-2 border border-gray-300 rounded-lg px-4 py-3"
        />

        <input
          type="text"
          name="phone"
          placeholder="Mobile Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg px-4 py-3"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-3"
        />

        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg px-4 py-3"
        />

        <input
          type="text"
          name="pan"
          placeholder="PAN Card Number"
          value={formData.pan}
          onChange={handleChange}
          required
          className="uppercase border border-gray-300 rounded-lg px-4 py-3"
        />

        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={formData.pincode}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg px-4 py-3"
        />

        <input
          type="number"
          name="income"
          placeholder="Monthly Income"
          value={formData.income}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg px-4 py-3"
        />

        <input
          type="number"
          name="loanAmount"
          placeholder="Desired Loan Amount"
          value={formData.loanAmount}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg px-4 py-3"
        />

        <select
          name="employment"
          value={formData.employment}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-3"
          required
        >
          <option value="">Select Employee Type</option>
          <option value="Salaried">Salaried</option>
          <option value="Self Employed">Self Employed</option>
        </select>

        <button
          type="submit"
          className="col-span-1 md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EligibilityForm;
