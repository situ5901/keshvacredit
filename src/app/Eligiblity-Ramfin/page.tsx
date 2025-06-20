"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { eligiblyramfin } from "../APIS/UserData/UserInfoApi";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";

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

  const extractMessage = (res: any): string => {
    if (res?.apiError?.message) return res.apiError.message;
    if (res?.message) return res.message;
    if (res?.error) return res.error;
    return "Something went wrong.";
  };

  const handleSubmitAuto = useCallback(
    async (autoData: FormData) => {
      try {
        const payload = {
          ...autoData,
          partnerid: "keshvacredit",
        };
        const data = await eligiblyramfin(payload);
        setIsSuccess(true);
        const msg = extractMessage(data);
        if (msg.toLowerCase().includes("lead created")) {
          setResponseMsg("🎉 Congratulations! Your application has been submitted successfully. Proceeding to next step...");
          setTimeout(() => {
            router.push("https://applyonline.ramfincorp.com/?utm_source=keshvacredit");
          }, 3000);
        } else {
          setResponseMsg(msg);
        }
      } catch (error: any) {
        const errRes = error?.response?.data || { error: "Server error" };
        setIsSuccess(false);
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
          setFormData((prev) => {
            const updated = {
              ...prev,
              name: user.name || "",
              mobile: user.phone || "",
              email: user.email || "",
              dob: user.dob || "",
              pancard: user.pan || "",
              loanAmount: user.income || "",
              employeeType: user.employment || "",
            };
            const allFilled = Object.values(updated).every((v) => v !== "");
            if (allFilled) {
              handleSubmitAuto(updated);
            }
            return updated;
          });
        })
        .catch((err) => {
          console.error("Auto-fill error:", err);
        });
    }
  }, [handleSubmitAuto]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        partnerid: "keshvacredit",
      };
      const data = await eligiblyramfin(payload);
      setIsSuccess(true);
      const msg = extractMessage(data);
      if (msg.toLowerCase().includes("lead created")) {
        setResponseMsg("🎉 Congratulations! Your application has been submitted successfully. Proceeding to next step...");
        setTimeout(() => {
          router.push("https://applyonline.ramfincorp.com/?utm_source=keshvacredit");
        }, 3000);
      } else {
        setResponseMsg(msg);
      }
    } catch (error: any) {
      const errRes = error?.response?.data || { error: "Server error" };
      setIsSuccess(false);
      setResponseMsg(extractMessage(errRes));
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
      {responseMsg && isSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="max-w-md w-full px-6 py-5 rounded-xl text-center shadow-lg bg-green-50 text-green-800 border border-green-300">
            <div className="text-3xl mb-3">🎉</div>
            <p className="text-base font-semibold">{responseMsg}</p>
          </div>
        </div>
      )}

      {responseMsg && isSuccess === false && (
        <div className="fixed top-0 right-0 m-4 z-50 px-6 py-4 rounded-lg shadow-md text-sm flex items-center gap-3 bg-red-50 text-red-800 border border-red-300">
          <span className="text-lg">❌</span>
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
          className="col-span-1 md:col-span-2 border border-gray-300 rounded-lg px-4 py-3"
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
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
          name="pancard"
          placeholder="PAN Card Number"
          value={formData.pancard}
          onChange={handleChange}
          required
          className="uppercase border border-gray-300 rounded-lg px-4 py-3"
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
          name="employeeType"
          value={formData.employeeType}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-3"
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
