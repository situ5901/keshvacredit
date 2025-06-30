"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";

interface FormData {
  name: string;
  lastName: string;
  phone: string;
  email: string;
  dob: string;
  pan: string;
  pincode: string;
  homeAddress: string;
  officeAddress: string;
  typeOfResidence: string;
  companyName: string;
}

const EligibilityForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    dob: "",
    pan: "",
    pincode: "",
    homeAddress: "",
    officeAddress: "",
    typeOfResidence: "",
    companyName: "",
  });

  const [responseMsg, setResponseMsg] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const router = useRouter();

  const extractMessage = (res: any): string => {
    if (res?.message) return res.message;
    if (res?.data?.message) return res.data.message;
    if (res?.apiResponse?.status) return res.apiResponse.status;
    if (res?.error) return res.error;
    return "Something went wrong.";
  };

  const handleSubmitAuto = useCallback(
    async (autoData: FormData) => {
      try {
        const payload = {
          name: autoData.name.trim(),
          last_name: autoData.lastName.trim() || "Unknown",
          phone: autoData.phone,
          email: autoData.email,
          pancard: autoData.pan.toUpperCase(),
          dob: autoData.dob,
          pincode: autoData.pincode,
          employType: 1,
          home_address: autoData.homeAddress,
          office_address: autoData.officeAddress,
          type_of_residence: autoData.typeOfResidence,
          company_name: autoData.companyName,
        };

        const res = await axios.post(
          "https://keshvacredit.com/api/v1/LenderAPIs/partner/fatakpl",
          payload,
          { headers: { "Content-Type": "application/json" } }
        );

        const data = res.data;
        const eligible = data?.data?.eligibility_status;
        const message = extractMessage(data);
        const errorCategory = data?.data?.error_category;

        if (eligible) {
          setIsSuccess(true);
          setResponseMsg("🎉 Congratulations! You're eligible. proceeding for next steps... ");
          setTimeout(() => {
            router.push(
              "https://web.fatakpay.com/authentication/login?utm_source=575_DLZ56&utm_medium="
            );
          }, 3000);
        } else {
          setIsSuccess(false);
          setResponseMsg(`❌ Sorry! ${message}${errorCategory ? ` (${errorCategory})` : ""}`);
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
          const updated: FormData = {
            name: user.name || "",
            lastName: user.lastName || "",
            phone: user.phone || "",
            email: user.email || "",
            dob: user.dob || "",
            pan: user.pan || "",
            pincode: user.pincode || "",
            homeAddress: user.homeAddress || "",
            officeAddress: user.officeAddress || "",
            typeOfResidence: user.typeOfResidence || "",
            companyName: user.company_name || "",
          };
          setFormData(updated);

          const allFilled = Object.values(updated).every((v) => v.trim() !== "");
          if (allFilled) handleSubmitAuto(updated);
        })
        .catch((err) => console.error("Auto-fill error:", err));
    }
  }, [handleSubmitAuto]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmitAuto(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
          src="https://web.fatakpay.com/assets/images/logo/Logo.svg"
          alt="fatakpay Logo"
          width={120}
          height={40}
          className="object-contain"
        />
        <span>FatakpayDCl Eligibility Form</span>
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <input type="text" name="name" placeholder="First Name" value={formData.name} onChange={handleChange} required className="border border-gray-300 rounded-lg px-4 py-3" />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required className="border border-gray-300 rounded-lg px-4 py-3" />
        <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="border border-gray-300 rounded-lg px-4 py-3" />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="border border-gray-300 rounded-lg px-4 py-3" />
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="border border-gray-300 rounded-lg px-4 py-3" />
        <input type="text" name="pan" placeholder="PAN Card Number" value={formData.pan} onChange={handleChange} required className="uppercase border border-gray-300 rounded-lg px-4 py-3" />
        <input type="text" name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} required className="border border-gray-300 rounded-lg px-4 py-3" />
        <input type="text" name="homeAddress" placeholder="Home Address" value={formData.homeAddress} onChange={handleChange} required className="border border-gray-300 rounded-lg px-4 py-3" />
        <input type="text" name="officeAddress" placeholder="Office Address" value={formData.officeAddress} onChange={handleChange} required className="border border-gray-300 rounded-lg px-4 py-3" />
        <input type="text" name="typeOfResidence" placeholder="Type of Residence (e.g. Rented)" value={formData.typeOfResidence} onChange={handleChange} required className="border border-gray-300 rounded-lg px-4 py-3" />
        <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} required className="border border-gray-300 rounded-lg px-4 py-3" />

        <input type="text" value="Salaried" disabled className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-500" />

        <button type="submit" className="col-span-1 md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EligibilityForm;
