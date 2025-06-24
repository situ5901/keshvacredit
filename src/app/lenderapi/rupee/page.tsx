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
    if (res?.pushResponse?.Error) return res.pushResponse.Error;
    if (res?.message) return res.message;
    if (res?.error) return res.error;
    return "Something went wrong.";
  };

  const handleSubmitAuto = useCallback(
    async (autoData: FormData) => {
      try {
        const payload = {
          name: autoData.name,
          phone: autoData.phone,
          email: autoData.email,
          pan: autoData.pan,
          pincode: autoData.pincode,
          employment: autoData.employment.toLowerCase(),
          income: autoData.income,
          loanAmount: autoData.loanAmount,
        };

        const res = await axios.post(
          "https://keshvacredit.com/api/v1/LenderAPIs/partner/rupee/lead-create",
          payload,
          {
            headers: {
              "admin-api-client-id": "SC_KVCD_oruwm5w5fXy4JNoi",
              "admin-api-client-key": "esy7kphMG6G9hu90",
              "Content-Type": "application/json",
            },
          }
        );

        const responseData = res.data;

        if (
          responseData?.pushResponse?.Status === 0 &&
          responseData?.pushResponse?.Error
        ) {
          setIsSuccess(false);
          setResponseMsg(`❌ Sorry! ${responseData.pushResponse.Error}`);
          return;
        }

        setIsSuccess(true);
        setResponseMsg("🎉 Application submitted successfully");
        setTimeout(() => {
          router.push(
            "https://www.rupee112.com/apply-now?utm_source=KESHVACREDIT&utm_medium="
          );
        }, 3000);
      } catch (error: any) {
        const errRes = error?.response?.data || {};
        setIsSuccess(null); // Show as top-right error
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

      {/* POPUP - Top Right for Validation Errors */}
      {responseMsg && isSuccess === null && (
        <div className="fixed top-0 right-0 m-4 z-50 px-6 py-4 rounded-lg shadow-md text-sm flex items-center gap-3 bg-red-50 text-red-800 border border-red-300">
          <span className="text-lg">❌</span>
          <p>{responseMsg}</p>
        </div>
      )}

      <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-3">
        <Image
          src="https://www.rupee112.com/public/images/brand_logo.png"
          alt="Rupee Logo"
          width={120}
          height={40}
          className="object-contain"
        />
        <span>Rupee Eligibility Form</span>
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
