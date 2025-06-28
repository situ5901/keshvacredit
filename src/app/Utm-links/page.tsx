"use client";
import Image from "next/image";
import { submitUserInfo } from "../APIS/UserData/UserInfoApi";
import React, { useEffect } from "react";
import { useState } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

const lenderData = [
    {
        image: "https://www.rupee112.com/public/images/brand_logo.png",
        lender: "Rupee112",
        interestRate: "upto 35 % per annum",
        maxLoan: "Up to ₹3 Lakhs",
        benefit: "Low interest & flexible repayment",
        applyLink: "https://www.rupee112.com/apply-now?utm_source=KESHVACREDIT&utm_medium=",
        detailsLink: "https://www.rupee112.com/apply-now?utm_source=KESHVACREDIT&utm_medium=",
    },
    {
        image: "https://framerusercontent.com/images/csl8apTjCrYTK5Qi20a4osUIHw.png?scale-down-to=512",
        lender: "Olyv",
        interestRate: "Starting 1.5% per month",
        maxLoan: "Up to ₹4 Lakhs",
        benefit: "Fast approval with minimal documents",
        applyLink: "https://app.olyv.co.in/?utm_source=KeshvaCredit_Web&utm_campaign=KeshvaCredit_1",
        detailsLink: "https://app.olyv.co.in/?utm_source=KeshvaCredit_Web&utm_campaign=KeshvaCredit_1",
    },
    {
        image: "https://cdn.prod.website-files.com/64ea130f10713e77f6320da4/67ac2defec09b58763dac780_Logo_Full_mPokket_2312_R01.svg",
        lender: "Mpokket",
        interestRate: "Upto 39% per annum",
        maxLoan: "Up to ₹2 Lakhs",
        benefit: "Fast approval with minimal documents",
        applyLink: "https://web.mpokket.in/?utm_source=keshvacredit&utm_medium=keshvacredit",
        detailsLink: "https://web.mpokket.in/?utm_source=keshvacredit&utm_medium=keshvacredit",
    },
    {
        image: "https://www.getzype.com/wp-content/uploads/2024/08/Group-852775729.webp",
        lender: "Zype",
        interestRate: "upto 1.5% per month",
        maxLoan: "Up to ₹3 Lakhs",
        benefit: "Fast approval with minimal documents",
        applyLink: "https://zype.sng.link/Ajygt/1ba7?_dl=com.zype.mobile&_smtype=3",
        detailsLink: "https://zype.sng.link/Ajygt/1ba7?_dl=com.zype.mobile&_smtype=3",
    },
    {
        image: "https://i.postimg.cc/j2rPwGvT/download.png",
        lender: "salaryontime",
        interestRate: "upto 2.9166% per month",
        maxLoan: "Up to ₹3 Lakhs",
        benefit: "Fast approval with minimal documents",
        applyLink: "https://salaryontime.com/apply-now?utm_source=Keshvacredit&utm_medium=Keywords&utm_campaign=Keywords&utm_term=Keywords",
        detailsLink: "https://salaryontime.com/apply-now?utm_source=Keshvacredit&utm_medium=Keywords&utm_campaign=Keywords&utm_term=Keywords",
    },
    {
        image: "https://i.postimg.cc/Y03r2Fmb/logo-ramfin.png",
        lender: "RamFin",
        interestRate: "upto 0.35% to 0.80%  per day",
        maxLoan: "Up to ₹5 Lakhs",
        benefit: "Fast approval with minimal documents",
        applyLink: "https://applyonline.ramfincorp.com/?utm_source=keshvacredit",
        detailsLink: "https://applyonline.ramfincorp.com/?utm_source=keshvacredit",
    },
    {
        image: "https://web.fatakpay.com/assets/images/logo/Logo.svg",
        lender: "Fatakpay",
        interestRate: "Range 12%to35.95% per annum",
        maxLoan: "Up to ₹5 Lakhs",
        benefit: "Fast approval with minimal documents",
        applyLink: "/Utm-links/fatakpay/",
        detailsLink: "/Utm-links/fatakpay/",
    },
    {
        image: "https://clickmyloan.com/images/logo.png",
        lender: "Click My Loan",
        interestRate: "upto 24% per annum",
        maxLoan: "Up to ₹5 Lakhs",
        benefit: "Fast approval with minimal documents",
        applyLink: "https://clickmyloan.cloudbankin.com/onboard/?referral_code=caa39346dc#/home/welcome",
        detailsLink: "https://clickmyloan.cloudbankin.com/onboard/?referral_code=caa39346dc#/home/welcome",
    },
       {
        image: "https://www.creditsea.com/_next/static/media/credit-sea-blue-h-latest.62519644.svg",
        lender: "CreditSea ",
        interestRate: "range 14% – 36% per annum",
        maxLoan: "Up to ₹5 Lakhs",
        benefit: "Fast approval with minimal documents",
        applyLink: "https://www.creditsea.com/onboarding/sign-up/enter-mobile?source=31048692",
        detailsLink: "https://www.creditsea.com/onboarding/sign-up/enter-mobile?source=31048692",
    },
    {
        image: "https://www.instantmudra.com/images/logo_official.png",
        lender: "Instant Mudra",
        interestRate: "starting from 10.99% per annum",
        maxLoan: "Up to ₹5 Lakhs",
        benefit: "Fast approval with minimal documents",
        applyLink: "https://www.instantmudra.com/apply_loan.php?utm_source=quid&utm_medium=get&utm_campaign=d70e2e18685f38708e175d780390d064ke58",
        detailsLink: "https://www.instantmudra.com/apply_loan.php?utm_source=quid&utm_medium=get&utm_campaign=d70e2e18685f38708e175d780390d064ke58 ",
    },
    {
        image: "https://www.bharatloan.com/public/images/brand_logo.png",
        lender: "Bharatloan",
        interestRate: "upto 35 % per annum",
        maxLoan: "Up to ₹3 Lakhs",
        benefit: "Low interest & flexible repayment",
        applyLink: "https://www.bharatloan.com/apply-now?utm_source=KESHVACREDIT&utm_medium=",
        detailsLink: "https://www.bharatloan.com/apply-now?utm_source=KESHVACREDIT&utm_medium=",
    },
    {
        image: "https://myflot.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoImage.176890a7.png&w=384&q=75",
        lender: "Flot",
        interestRate: " Up to 2% per month",
        maxLoan: "Up to ₹2 Lakhs",
        benefit: "Fast approval with minimal documents",
        applyLink: "https://myflot.com/?utm_source=Keshvacredit&utm_medium=%7B_medium%7D&utm_campaign=%7B_campaign%7D",
        detailsLink: "https://myflot.com/?utm_source=Keshvacredit&utm_medium=%7B_medium%7D&utm_campaign=%7B_campaign%7D",
    },
    {
        image: "https://www.chintamanifinlease.com/public/frontend/images/logo/logo.png",
        lender: "Chintamani Finlease Limited",
        interestRate: "Starting from 25% per annum",
        maxLoan: "Up to ₹2 Lakhs (available only in the Delhi-NCR region)",
        benefit: "Fast approval with minimal documentation",
        applyLink: "https://www.chintamanifinlease.com/keshvacredit?utm_source=quid945&utm_medium=get&utm_campaign=loan-au7!Sh2dff5",
        detailsLink: "https://www.chintamanifinlease.com/keshvacredit?utm_source=quid945&utm_medium=get&utm_campaign=loan-au7!Sh2dff5",
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

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
    }, []);

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
        <div className="min-h-screen  px-4 py-8 mt-13">
            <section data-aos="flip-down" className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 px-6 text-center rounded-2xl">
                <h1 className="text-4xl font-bold mb-4 animate__animated animate__heartBeat">quick links</h1>

                <p className="text-lg mb-6">
                    Financial Freedom Starts with the Right Loan. We Help You Find It.Your Trusted Partner for Every Loan Need.
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
                <div data-aos="zoom-in" className="w-full lg:w-1/3 rounded-2xl shadow-[0_0_10px_2px_rgba(255,255,255,0.3)] h-[800px] overflow-y-auto">

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
                                className=" w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
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
    interestRate,
    maxLoan,
    benefit,
    applyLink,
    detailsLink,
}: {
    image: string;
    lender: string;
    interestRate: string;
    maxLoan: string;
    benefit: string;
    applyLink: string;
    detailsLink: string;
}) {
    return (
        <div className="rounded-xl border-2 p-4 flex flex-col md:flex-row items-center gap-4 relative shadow-[0_0_10px_2px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-[1.01] hover:shadow-lg">
            <Image src={image} alt={lender} width={128} height={80} className="object-contain" unoptimized/>
            <div className="flex-1">
                <h3 className="font-bold text-lg">{lender}</h3>
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
