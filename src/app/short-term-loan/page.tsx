"use client";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { submitUserInfo } from "../APIS/UserData/UserInfoApi";
import { getUserData } from "../APIS/UserData/UserInfoApi";
import { useRouter } from "next/navigation";
import Loading from "../../animations/Loading.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import RatingAndReviews from "../Component/Homesections/page2";
import Howitworks from "../Component/Homesections/page3";
import Frequent from "../Component/Homesections/page4";
import Popup from "../Component/Popup";
import Cookies from "js-cookie";
import { GiModernCity } from "react-icons/gi";
import { GrMapLocation } from "react-icons/gr";
import {
  LuUser,
  LuPhone,
  LuMail,
  LuCreditCard,
  LuMapPin,
  LuBriefcase,
  LuCalendarDays,
  LuIndianRupee,
  LuWallet,
  LuBuilding2,
  LuStore,
  LuMap,
} from "react-icons/lu";

function Page() {
  const router = useRouter();
  const dobRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState<"success" | "error">("success");
  const [popupMessage, setPopupMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    employeeType: "",
    pan: "",
    pincode: "",
    loanAmount: "",
    income: "",
    dob: "",
    salaryMode: "",
    bankName: "",
    salarySlip: "",
    state: "",
    city: "",
    businessName: "",
    businessType: "",
  });

  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) {
        return parts.pop()?.split(";").shift() || "";
      }
      return "";
    };

    const phoneFromCookie = getCookie("user_phone");
    if (phoneFromCookie) {
      setFormData((prev) => ({ ...prev, phone: phoneFromCookie }));
    }
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const phone = Cookies.get("user_phone");
      if (phone) {
        const user = await getUserData(phone);
        if (user && user.phone) {
          localStorage.setItem("userData", "yes");
          router.push("/eligibleLenders");
        } else {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.phone || !formData.email || !formData.employeeType ||
      !formData.pan || !formData.pincode || !formData.loanAmount || !formData.income ||
      !formData.dob) {
      setPopupType("error");
      setPopupMessage("Please fill all required fields");
      setShowPopup(true);
      setSubmitting(false);
      return;
    }

    try {
      await submitUserInfo(formData);

      // Send email to the user after successful form submission
      await fetch("https://keshvacredit.com/api/v1/utiles/adsmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email }),
      });

      const userData = {
        name: formData.name,
        phone: formData.phone,
        expiration: new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
      };
      localStorage.setItem("userData", JSON.stringify(userData));

      setPopupType("success");
      setPopupMessage("Form submitted successfully!");
      setShowPopup(true);

      setFormData({
        name: "",
        phone: "",
        email: "",
        employeeType: "",
        pan: "",
        pincode: "",
        loanAmount: "",
        income: "",
        dob: "",
        salaryMode: "",
        bankName: "",
        salarySlip: "",
        state: "",
        city: "",
        businessName: "",
        businessType: "",
      });

      setTimeout(() => {
        router.push("/eligibleLenders");
      }, 2000);
    } catch (error: any) {
      setPopupType("error");
      if (error.response?.data?.error) {
        setPopupMessage(error.response.data.error);
      } else {
        setPopupMessage(
          "Error submitting form. Please fill all details correctly."
        );
      }
      setShowPopup(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Lottie
          animationData={Loading}
          loop={true}
          className="w-[300px] md:w-[450px] h-[450px] mx-auto"
        />
        <p className="mt-4 text-xl font-semibold text-gray-700">
          Fetching your details... Please wait.
        </p>
      </div>
    );
  }

  return (
    <>
      {showPopup && (
        <Popup
          type={popupType}
          message={popupMessage}
          onClose={() => setShowPopup(false)}
        />
      )}
      <div className="justify-center mb-20 items-center min-h-screen">
        <div className="mt-24 mx-auto max-w-[90%] md:max-w-[50rem] text-center text-[28px] md:text-[34px]">
          <h1 className="font-bold text-[34px]">
            Personal Loans starting at{" "}
            <span className="text-blue-700">10.25%* </span> Interest Rates.
          </h1>
          <ul className="text-[16px] md:text-[18px] font-medium ml-4 md:ml-8 mt-2 text-left list-disc">
            <li>Minimal Documentation</li>
            <li>Quick Processing</li>
            <li>Lowest interest rate guaranteed</li>
            <li>Now compare pre-qualified offers from 70+ Top Lenders</li>
          </ul>
        </div>
        <form
          onSubmit={handleSubmit}
          className=" max-w-lg mx-auto mt-10 p-6 border-2 border-gray-300 mb-20 rounded-lg shadow-2xl shadow-gray-500 dark:shadow-gray-800 gap-3"
        >
          <h1 className="text-center font-bold text-[24px]">Basic Information</h1>

          {/* Name & Phone */}
          <div className="flex space-x-4 gap-5">
            <div className="relative flex items-center border-b-2 border-gray-300 w-1/2">
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-1">
                <LuUser className="w-5 h-5" />
              </span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="block py-2.5 pl-8 w-full text-sm bg-transparent border-0 focus:outline-none peer"
                placeholder="Name"
                required
              />
            </div>
            <div className="relative flex items-center border-b-2 border-gray-300 w-1/2">
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-1">
                <LuPhone className="w-5 h-5" />
              </span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="block py-2.5 pl-8 w-full text-sm bg-transparent border-0 focus:outline-none peer"
                placeholder="Phone Number"
                required
                pattern="[0-9]{10}"
                title="Please enter a 10-digit phone number"
              />
            </div>
          </div>

          {/* Email & Employee Type */}
          <div className="flex space-x-4 mt-6 gap-5">
            <div className="relative flex items-center border-b-2 border-gray-300 w-1/2">
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-1">
                <LuMail className="w-5 h-5" />
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block py-2.5 pl-8 w-full text-sm bg-transparent border-0 focus:outline-none peer"
                placeholder="Email"
                required
              />
            </div>

            <div
              className="relative w-1/2 cursor-pointer border-b-2 border-gray-300"
              onClick={() =>
                dobRef.current?.showPicker?.() || dobRef.current?.focus()
              }
            >
              <LuCalendarDays className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
              <input
                ref={dobRef}
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="block w-full pl-10 pr-2 pt-2 pb-1 text-sm bg-transparent border-0 appearance-none focus:outline-none"
                required
                max={new Date().toISOString().split("T")[0]}
              />
            </div>

          </div>


          {/* PAN & Pincode */}
          <div className="flex space-x-4 mt-6 gap-5">
            <div className="relative flex items-center border-b-2 border-gray-300 w-1/2">
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-1">
                <LuCreditCard className="w-5 h-5" />
              </span>
              <input
                type="text"
                name="pan"
                value={formData.pan}
                onChange={(e) => {
                  e.target.value = e.target.value
                    .toUpperCase()
                    .replace(/[^A-Z0-9]/g, "");
                  handleChange(e);
                }}
                className="block py-2.5 pl-8 w-full text-sm bg-transparent border-0 focus:outline-none peer uppercase"
                placeholder="PAN Number"
                required
                pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                title="Please enter a valid PAN number (e.g., ABCDE1234F)"
                maxLength={10}
              />
            </div>
            <div className="relative flex items-center border-b-2 border-gray-300 w-1/2">
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-1">
                <LuMapPin className="w-5 h-5" />
              </span>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="block py-2.5 pl-8 w-full text-sm bg-transparent border-0 focus:outline-none peer"
                placeholder="Pincode"
                required
                pattern="[0-9]{6}"
                title="Please enter a 6-digit pincode"
                maxLength={6}
              />
            </div>

          </div>
          <div className="flex space-x-4 mt-6 gap-5">
            {/* State Select */}
            <div className="relative w-1/2">
              <GrMapLocation className="absolute left-1 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className=" w-full pl-10 pr-4 pt-3 pb-2 text-sm bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-600"
                required
              >
                <option value="">Select State</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Dadra and Nagar Haveli and Daman and Diu">
                  Dadra and Nagar Haveli and Daman and Diu
                </option>
                <option value="Delhi">Delhi</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Ladakh">Ladakh</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
              </select>
            </div>

            {/* City Input */}
            <div className="relative flex items-center border-b-2 border-gray-300 w-1/2">
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-1">
                <GiModernCity className="w-5 h-5" />
              </span>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="block py-2.5 pl-8 w-full text-sm bg-transparent border-0 focus:outline-none peer"
                placeholder="City"
                required
              />
            </div>
          </div>



          {/* Loan Amount & Income */}
          <div className="flex space-x-4 mt-6 gap-5">
            <div className="relative flex items-center border-b-2 border-gray-300 w-1/2">
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-1">
                <LuIndianRupee className="w-5 h-5" />
              </span>
              <input
                type="number"
                name="income"
                value={formData.income}
                onChange={handleChange}
                className="block py-2.5 pl-8 w-full text-sm bg-transparent border-0 focus:outline-none peer"
                placeholder={`Monthly ${formData.employeeType === "Salaried" ? "Salary" : "Income"} (₹)`}
                required
                min="1000"
              />
            </div>

            <div className="relative flex items-center border-b-2 border-gray-300 w-1/2">
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-1">
                <LuWallet className="w-5 h-5" />
              </span>
              <input
                type="number"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleChange}
                className="block py-2.5 pl-8 w-full text-sm bg-transparent border-0 focus:outline-none peer"
                placeholder="Loan Amount (₹)"
                required
                min="10000"
              />
            </div>

          </div>

          <div className="relative w-full mt-6">
            <LuBriefcase className="absolute left-1 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
            <select
              name="employeeType"
              value={formData.employeeType}
              onChange={handleChange}
              className=" w-full pl-10 pr-4 pt-3 pb-2 text-sm bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-600"
              required
            >
              <option value="">Select Employee Type</option>
              <option value="Salaried">Salaried</option>
              <option value="Self-employed">Self-employed</option>
            </select>
          </div>



          {/* Conditional Fields based on Employee Type */}
          {formData.employeeType === "Salaried" && (
            <>
              {/* Salary Mode & Bank Name */}
              <div className="flex space-x-4 mt-6 gap-5">
                <div className="relative flex items-center border-b-2 border-gray-300 w-1/2">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-1">
                    <LuWallet className="w-5 h-5" />
                  </span>
                  <select
                    name="salaryMode"
                    value={formData.salaryMode}
                    onChange={handleChange}
                    className=" block py-2.5 pl-8 w-full text-sm border-0 focus:outline-none peer bg-transparent"
                  >
                    <option value="">Salary Mode</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="Cash">Cash</option>
                    <option value="Cheque">Cheque</option>
                  </select>
                </div>
                <div className="relative w-1/2 mt-4">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-1">
                    <LuBuilding2 className="w-5 h-5 text-gray-500" />
                  </span>
                  <select
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleChange}
                    className="block py-2.5 pl-8 w-full text-sm bg-transparent border-b-2 border-gray-300 focus:outline-none"
                    required
                  >
                    <option value="">Select Bank</option>
                    <option value="State Bank of India">State Bank of India (SBI)</option>
                    <option value="Punjab National Bank">Punjab National Bank (PNB)</option>
                    <option value="Bank of Baroda">Bank of Baroda (BoB)</option>
                    <option value="Canara Bank">Canara Bank</option>
                    <option value="Union Bank of India">Union Bank of India</option>
                    <option value="HDFC Bank">HDFC Bank</option>
                    <option value="ICICI Bank">ICICI Bank</option>
                    <option value="Axis Bank">Axis Bank</option>
                    <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
                    <option value="IDFC First Bank">IDFC First Bank</option>
                    <option value="IndusInd Bank">IndusInd Bank</option>
                    <option value="Yes Bank">Yes Bank</option>
                    <option value="Bank of India">Bank of India</option>
                    <option value="Central Bank of India">Central Bank of India</option>
                    <option value="Indian Bank">Indian Bank</option>
                    <option value="UCO Bank">UCO Bank</option>
                    <option value="South Indian Bank">South Indian Bank</option>
                    <option value="Federal Bank">Federal Bank</option>
                    <option value="Bandhan Bank">Bandhan Bank</option>
                    <option value="RBL Bank">RBL Bank</option>
                    <option value="other">OTHER</option>
                  </select>
                </div>

              </div>
              <div className="relative w-full mt-6">
                <LuBriefcase className="absolute left-1 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
                <select
                  name="salarySlip"
                  value={formData.salarySlip}
                  onChange={handleChange}
                  className=" w-full pl-10 pr-4 pt-3 pb-2 text-sm bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-600"
                  required
                >
                  <option value="">Did you get salary slip?</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

            </>
          )}

          {formData.employeeType === "Self-employed" && (
            <>
              {/* Business Name & Business Type */}
              <div className="flex space-x-4 mt-6 gap-5">
                <div className="relative flex items-center border-b-2 border-gray-300 w-1/2">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-1">
                    <LuStore className="w-5 h-5" />
                  </span>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="block py-2.5 pl-8 w-full text-sm bg-transparent border-0 focus:outline-none peer"
                    placeholder="Business Name"
                  />
                </div>
                <div className="relative flex items-center border-b-2 border-gray-300 w-1/2">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-1">
                    <LuBriefcase className="w-5 h-5" />
                  </span>
                  <input
                    type="text"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="block py-2.5 pl-8 w-full text-sm bg-transparent border-0 focus:outline-none peer"
                    placeholder="Business Type"
                  />
                </div>
              </div>
            </>
          )}

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg text-xl font-bold hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={submitting}
            >
              {submitting ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
      <section>
        <Howitworks />
        <RatingAndReviews />
        <Frequent />
      </section>
    </>
  );
}

export default Page;