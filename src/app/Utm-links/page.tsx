"use client";
import Image from "next/image";
import { submitUserInfo } from "../APIS/UserData/UserInfoApi";
import React from "react";
import { useState } from "react";


const lenderData = [

    {
        image: "https://myflot.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoImage.176890a7.png&w=384&q=75",
        lender: "Flot",
        loanType: "Personal Loan",
        interestRate: "Starting @10.99%",
        maxLoan: "Up to ₹15 Lakhs",
        benefit: "Fast approval with minimal documents",

        applyLink: "https://myflot.com/?utm_source=Keshvacredit&utm_medium=%7B_medium%7D&utm_campaign=%7B_campaign%7D",
        detailsLink: "/",
    },
   
    {
        image: "https://www.ramfincorp.com/images/logo.png",
        lender: "RamFin",
        loanType: "Personal Loan",
        interestRate: "Starting @10.99%",
        maxLoan: "Up to ₹15 Lakhs",
        benefit: "Fast approval with minimal documents",

        applyLink: "/Eligiblity-Ramfin",
        detailsLink: "/",
    },
    {
        image: "https://www.getzype.com/wp-content/uploads/2024/08/Group-852775729.webp",
        lender: "Zype",
        loanType: "Personal Loan",
        interestRate: "Starting @10.99%",
        maxLoan: "Up to ₹15 Lakhs",
        benefit: "Fast approval with minimal documents",

        applyLink: "/Eligiblity-Zype",
        detailsLink: "/",
    },
    {
        image: "https://cdn.prod.website-files.com/64ea130f10713e77f6320da4/67ac2defec09b58763dac780_Logo_Full_mPokket_2312_R01.svg",
        lender: "Mpokket",
        loanType: "Personal Loan",
        interestRate: "Starting @10.99%",
        maxLoan: "Up to ₹15 Lakhs",
        benefit: "Fast approval with minimal documents",

        applyLink: "/",
        detailsLink: "/",
    },
    {
        image: "https://web.fatakpay.com/assets/images/logo/Logo.svg",
        lender: "Fatakpay",
        loanType: "Personal Loan",
        interestRate: "Starting @10.99%",
        maxLoan: "Up to ₹15 Lakhs",
        benefit: "Fast approval with minimal documents",

        applyLink: "/",
        detailsLink: "/",
    },
    {
        image: "https://framerusercontent.com/images/csl8apTjCrYTK5Qi20a4osUIHw.png?scale-down-to=512",
        lender: "olyv",
        loanType: "Personal Loan",
        interestRate: "Starting @10.99%",
        maxLoan: "Up to ₹15 Lakhs",
        benefit: "Fast approval with minimal documents",

        applyLink: "/",
        detailsLink: "/",
    },
    {
        image: "https://www.rupee112.com/public/images/brand_logo.png",
        lender: "rupee112",
        loanType: "personal Loan",
        interestRate: "Starting @12.5%",
        maxLoan: "Up to ₹25 Lakhs",
        benefit: "Low interest & flexible repayment",

        applyLink: "https://www.rupee112.com/apply-now?utm_source=KESHVACREDIT&utm_medium=",
        detailsLink: "/",
    },
    {
        image: "https://www.bharatloan.com/public/images/brand_logo.png",
        lender: "bharatloan",
        loanType: "personal Loan",
        interestRate: "Starting @12.5%",
        maxLoan: "Up to ₹25 Lakhs",
        benefit: "Low interest & flexible repayment",

        applyLink: "https://www.bharatloan.com/apply-now?utm_source=KESHVACREDIT&utm_medium=",
        detailsLink: "/",
    },

];

export default function UTMLendersPage() {
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

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await submitUserInfo(formData);
            localStorage.setItem(
                "userData",
                JSON.stringify({ name: formData.name, phone: formData.phone, email: formData.email })
            );
            showPopup("success", "Form submitted successfully!");
        } catch (error) {
            console.error(error);
            showPopup("error", "Error submitting form. Please try again.");
        }
        setFormData({ name: "", phone: "", email: "", employeeType: "", pan: "", pincode: "", loanAmount: "", income: "", dob: "" });
    };

    const showPopup = (type: string, message: string) => {
        const popup = document.createElement("div");
        popup.innerText = message;
        popup.style.backgroundColor = type === "success" ? "#4caf50" : "#f44336";
        popup.style.color = "#fff";
        popup.style.position = "fixed";
        popup.style.top = "20px";
        popup.style.right = "20px";
        popup.style.padding = "10px 20px";
        popup.style.borderRadius = "4px";
        popup.style.zIndex = "1000";
        document.body.appendChild(popup);
        setTimeout(() => { popup.remove(); }, 3000);
    };

    return (
        <div className="min-h-screen px-4 py-8 mt-13">
            <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 px-6 text-center rounded-2xl">
                <h1 className="text-4xl font-bold mb-4 animate__animated animate__heartBeat">quick loans</h1>

                <p className="text-lg mb-6">
                    Compare loan offers from trusted partners and apply instantly.
                </p>
                <a
                    href="#form"
                    className="bg-white text-green-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
                >
                    Apply Now
                </a>
            </section>

            <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto mt-6">
                {/* Left: Lenders List */}
                <div className="flex-1 space-y-6">
                    {lenderData.map((lender, index) => (
                        <LenderCard key={index} {...lender} />
                    ))}
                </div>

                {/* Right: Apply Form */}
                <div className="w-full lg:w-1/3 rounded-2xl shadow-[0_0_10px_2px_rgba(255,255,255,0.3)] h-[800px] overflow-y-auto">

                    <div id="form" className=" flex flex-col items-center justify-center  p-4">
                        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 mb-2">
                            Eligibility Form
                        </h1>
                        <p className="text-gray-500 max-w-xl mx-auto">
                            Let’s see which lenders you pre-qualify for! Fill out this quick form, and we’ll match you with the best loan offers based on your profile.
                        </p>
                        <form onSubmit={handleSubmit} className="w-full max-w-md  p-6 rounded-lg shadow-md space-y-4 mt-2">
                            <input
                                name="name"
                                type="text"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                name="phone"
                                type="tel"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
                            />
                            <select
                                name="employeeType"
                                value={formData.employeeType}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Employee Type</option>
                                <option value="employee">Employee</option>
                                <option value="selfEmployed">Self Employed</option>
                            </select>
                            <input
                                name="pan"
                                type="text"
                                placeholder="PAN Number"
                                value={formData.pan}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                name="pincode"
                                type="text"
                                placeholder="Pincode"
                                value={formData.pincode}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                name="loanAmount"
                                type="number"
                                placeholder="Loan Amount"
                                value={formData.loanAmount}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                name="income"
                                type="number"
                                placeholder="Income"
                                value={formData.income}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                name="dob"
                                placeholder="Date of Birth"
                                onFocus={(e) => (e.target.type = "date")}
                                onBlur={(e) => {
                                    if (!e.target.value) e.target.type = "text";
                                }}
                                value={formData.dob}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
                            />

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

function LenderCard({
    image,
    lender,
    loanType,
    interestRate,
    maxLoan,
    benefit,
    applyLink,
    detailsLink,
}: {
    image: string;
    lender: string;
    loanType: string;
    interestRate: string;
    maxLoan: string;
    benefit: string;
    applyLink: string;
    detailsLink: string;
}) {
    return (
        <div className="rounded-xl border-2 p-4 flex flex-col md:flex-row items-center gap-4 relative shadow-[0_0_10px_2px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-[1.01] hover:shadow-lg">



            <Image src={image} alt={lender} width={128} height={80} className="object-contain" />
            <div className="flex-1">
                <h3 className="font-bold text-lg">{lender} – {loanType}</h3>
                <ul className="text-sm mt-2 space-y-1">
                    <li>• Interest Rate: {interestRate}</li>
                    <li>• Max Loan: {maxLoan}</li>
                </ul>
                <p className="bg-blue-50 text-black mt-2 px-3 py-2 rounded text-sm flex items-center gap-2">
                    <span>⚡</span>{benefit}
                </p>
                <div className="mt-4 flex gap-3 flex-wrap">
                    <a
                        href={detailsLink}
                        rel="noopener noreferrer"
                        className="border border-blue-800 text-blue-800 px-4 py-1 rounded hover:bg-blue-50"
                    >
                        More Details
                    </a>
                    <a
                        href={applyLink}

                        rel="noopener noreferrer"
                        className="bg-blue-900 text-white px-4 py-1 rounded hover:bg-blue-800"
                    >
                        Apply Now
                    </a>
                </div>
            </div>
        </div>
    );
}
