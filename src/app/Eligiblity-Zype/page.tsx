"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { eligiblyzype } from "../APIS/UserData/UserInfoApi";

const EligibilityForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    dob: "",
    pancard: "",
    employeeType: "",
    income: "",
    orgName: "",
  });

  const [popupVisible, setPopupVisible] = useState(false);
  const [responseMsg, setResponseMsg] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [offer, setOffer] = useState<number | null>(null);

  const router = useRouter();

  // Auto-fill logic
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
            orgName: user.orgName || "",
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
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const payload = {
        name: formData.name,
        mobileNumber: formData.mobile,
        email: formData.email,
        dob: formData.dob,
        panNumber: formData.pancard,
        income: Number(formData.income),
        employmentType: formData.employeeType,
        orgName: formData.orgName,
        partnerid: "keshvacredit",
      };

      const data = await eligiblyzype(payload);

      setResponseMsg(data.message);
      setStatus(data.status || null);
      setOffer(data.offer || null);
      setPopupVisible(true);

      setTimeout(() => {
        setPopupVisible(false);
        if (data.status === "ACCEPT") {
          router.push("https://zype.sng.link/Ajygt/1ba7?_dl=com.zype.mobile&_smtype=3");
        } else {
          router.push("/eligibleLenders");
        }
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
      setResponseMsg("❌ Something went wrong. Please try again.");
      setPopupVisible(true);
      setTimeout(() => {
        setPopupVisible(false);
        router.push("/eligibleLenders");
      }, 3000);
    }
  };

  return (
    <div className="eligibility-form max-w-2xl mx-auto p-8 rounded-2xl shadow-lg mt-20 border relative">
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

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="col-span-1 md:col-span-2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <input type="text" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <input type="text" name="pancard" placeholder="PAN Card Number" value={formData.pancard} onChange={handleChange} required className="uppercase border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <select name="employeeType" value={formData.employeeType} onChange={handleChange} required className="findrop border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Select Employee Type</option>
          <option value="salaried">Salaried</option>
          <option value="self employed">Self Employed</option>
        </select>

        <input type="number" name="income" placeholder="Monthly Income" value={formData.income} onChange={handleChange} required className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <input type="text" name="orgName" placeholder="Company / Business Name" value={formData.orgName} onChange={handleChange} required className="col-span-1 md:col-span-2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <button type="submit" className="col-span-1 md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
          Submit
        </button>
      </form>

      {popupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-[90%] max-w-md text-center">
            <h3 className="text-lg font-semibold mb-2">Response</h3>
            <p className="text-green-600 font-medium">{responseMsg}</p>
            {status && <p className="text-blue-600">Status: {status}</p>}
            {offer && <p className="text-purple-600">Eligible Loan Offer: ₹{offer.toLocaleString()}</p>}
            <p className="text-gray-500 mt-3 text-sm">Proceed to next steps...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EligibilityForm;
