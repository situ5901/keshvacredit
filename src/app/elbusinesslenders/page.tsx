"use client";
import React from "react";
import Image from "next/image";


const lenders = [
  {
    name: "CapitalEase",
    rate: "12% p.a.",
    amount: "Up to ₹50 Lakhs",
    time: "1–5 years",
    logo: "/1.png",
  },
  {
    name: "BizFund Pro",
    rate: "11.5% p.a.",
    amount: "Up to ₹30 Lakhs",
    time: "6 months–4 years",
    logo: "/1.png",
  },
  {
    name: "Udaan Finance",
    rate: "10.75% p.a.",
    amount: "Up to ₹25 Lakhs",
    time: "1–3 years",
    logo: "/1.png",
  },
];

const BusinessLendersPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-14 px-4">
      <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-12 drop-shadow-md">
        💼 Business Loan Lenders
      </h1>

      <div className="grid grid-cols-1 gap-10 max-w-4xl mx-auto">
        {lenders.map((lender, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300"
          >
            {/* Accent Gradient Strip */}
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500" />

            <div className="p-8 flex flex-col items-center text-center bg-white/70 backdrop-blur-md">
              <Image
                src={lender.logo}
                alt={lender.name}
                className="w-24 h-24 object-contain mb-5 rounded-xl shadow-md"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {lender.name}
              </h2>

              <div className="space-y-1 text-gray-600 text-sm font-medium">
                <p>
                  <span className="text-blue-600 font-semibold">Interest:</span>{" "}
                  {lender.rate}
                </p>
                <p>
                  <span className="text-blue-600 font-semibold">Amount:</span>{" "}
                  {lender.amount}
                </p>
                <p>
                  <span className="text-blue-600 font-semibold">Tenure:</span>{" "}
                  {lender.time}
                </p>
              </div>

              <button className="mt-6 px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold tracking-wide shadow-md hover:brightness-110 hover:scale-105 transition-all duration-300 animate-pulse">
                🚀 Apply Now
              </button>
            </div>

            {/* Floating Tag */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-xs px-3 py-1 rounded-full font-semibold text-white shadow">
              ⭐ Top Pick
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessLendersPage;
