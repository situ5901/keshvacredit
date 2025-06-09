"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { submitUserInfo } from "../../APIS/UserData/UserInfoApi";
import { getUserData } from "../../APIS/UserData/UserInfoApi";
import { useRouter } from "next/navigation";
import Loading from "../../../animations/Loading.json"
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import Popup from "../../Component/Popup";
import Cookies from 'js-cookie';
import Howitworks from "../../Component/Homesections/page2"
import { LuUser, LuPhone, LuMail, LuCreditCard, LuMapPin, LuBriefcase, LuCalendarDays, LuDollarSign, LuWallet } from "react-icons/lu";

function Page() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
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
    });
    useEffect(() => {
        const fetchUser = async () => {
            const phone = Cookies.get('user_phone');
            if (phone) {
                const user = await getUserData(phone);
                if (user && user.phone) {
                    localStorage.setItem("userData", "yes");
                    window.location.href = "https://web.fatakpay.com/authentication/login?utm_source=558_POVVE&utm_medium=";
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
        try {
            await submitUserInfo(formData);
            const userData = {
                name: formData.name,
                phone: formData.phone,
                expiration: new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
            };
            localStorage.setItem("userData", JSON.stringify(userData));

            setPopupType("success");
            setPopupMessage("Form submitted successfully! Opening lender");
            setShowPopup(true);

            setTimeout(() => {
                setShowPopup(false);
                window.open("https://web.fatakpay.com/authentication/login?utm_source=558_POVVE&utm_medium=t");
            }, 2000);
        } catch (error: any) { // Catch the error object
            setPopupType("error");
            // Check if the error object has a response with data and an error message
            if (error.response && error.response.data && error.response.data.error) {
                setPopupMessage(error.response.data.error); // Set the specific error message from the API
            } else {
                setPopupMessage("Error submitting form. Please fill all details correctly."); // Fallback generic message
            }
            setShowPopup(true);
        }
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
        });
    };

    // Conditional return after all hooks are declared
    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen">
                <Lottie
                    animationData={Loading}
                    loop={true}
                    className="w-[300px] md:w-[450px] h-[450px] mx-auto"
                />
                <p className="mt-4 text-xl font-semibold text-gray-700">
                    Fetching Eligible Lenders...
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
                        fatakpay personal Loans starting at{" "}
                        <span className="text-blue-700"> Range - 12% to 35.95% per annum</span> Interest Rates.
                    </h1>
                    <ul className="text-[16px] md:text-[18px] font-medium ml-4 md:ml-8 mt-2 text-left list-disc">
                        <li>Minimal Documentation</li>
                        <li>Quick Processing</li>
                        <li>Lowest interest rate guaranteed</li>
                    </ul>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="form max-w-lg mx-auto mt-10 p-6 border-2 border-gray-300 mb-20 rounded-lg shadow-2xl shadow-gray-500 dark:shadow-gray-800 gap-3"
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
                            />
                        </div>
                        <div className="relative flex items-center border-b-2 border-gray-300 w-1/2">
                            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-1">
                                <LuPhone className="w-5 h-5" />
                            </span>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="block py-2.5 pl-8 w-full text-sm bg-transparent border-0 focus:outline-none peer"
                                placeholder="Phone Number"
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
                            />
                        </div>
                        <div className="relative flex items-center border-b-2 border-gray-300 w-1/2">
                            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-1">
                                <LuBriefcase className="w-5 h-5" />
                            </span>
                            <select
                                name="employeeType"
                                value={formData.employeeType}
                                onChange={handleChange}
                                className="block py-2.5 pl-8 w-full text-sm border-0 focus:outline-none peer bg-transparent"
                            >
                                <option value="">Select Employee Type</option>
                                <option value="employee">Employee</option>
                                <option value="selfEmployed">Self Employed</option>
                            </select>
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
                                onChange={handleChange}
                                className="block py-2.5 pl-8 w-full text-sm bg-transparent border-0 focus:outline-none peer"
                                placeholder="PAN Number"
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
                            />
                        </div>
                    </div>

                    {/* Loan Amount & Income */}
                    <div className="flex space-x-4 mt-6 gap-5">
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
                                placeholder="Loan Amount"
                            />
                        </div>
                        <div className="relative flex items-center border-b-2 border-gray-300 w-1/2">
                            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-1">
                                <LuDollarSign className="w-5 h-5" />
                            </span>
                            <input
                                type="number"
                                name="income"
                                value={formData.income}
                                onChange={handleChange}
                                className="block py-2.5 pl-8 w-full text-sm bg-transparent border-0 focus:outline-none peer"
                                placeholder="Monthly Income"
                            />
                        </div>
                    </div>

                    {/* DOB */}
                    <div className="relative w-full mt-6">
                        <LuCalendarDays className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            placeholder=" "
                            className="peer block w-full pl-10 pr-2 pt-5 pb-1 text-sm bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-blue-600"
                        />
                        <label
                            htmlFor="dob"
                            className="absolute left-10 top-2 text-sm text-gray-500 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:transform peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
                        >
                            Date of Birth
                        </label>
                    </div>
                    {/* Submit Button */}
                    <div className="mt-6">
                        <button type="submit" className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg text-xl font-bold">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <section>
                <Howitworks />
            </section>
        </>
    );
}

export default Page;