"use client";
import React from "react";

const lenders = [
  {
    name: "Ram FinCorp",
    website: "https://www.ramfincorp.com/contact-us",
  },
  {
    name: "Zype",
    website: "https://www.getzype.com/contact-us/",
  },
  {
    name: "Flot",
    website: "https://www.myflot.com/",
  },
  {
    name: "FatakPay",
    website: "https://fatakpay.com/contact-us",
  },
  {
    name: "Mpokket",
    website: "https://www.mpokket.in/contact",
  },
  {
    name: "Olyv",
    website: "https://www.olyv.co.in/contactus",
  },
];

function LenderContactPage() {
  return (
    <div className="min-h-screen py-16 px-4 ">
      <h1 className="text-4xl font-bold text-center  mb-14 mt-15 drop-shadow-lg">
        Lender Contact
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {lenders.map((lender, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-6 flex flex-col justify-between items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-xl font-semibold mb-4">{lender.name}</h2>
            <a
              href={lender.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white font-semibold px-5 py-2 rounded-full hover:bg-[#2da385] hover:text-white transition-all"
            >
              Contact Us
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LenderContactPage;
