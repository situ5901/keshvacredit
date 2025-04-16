"use client";
import React from "react";

const lenders = [
  {
    name: "Ramfin Corporation",
    website: "https://www.ramfincorp.com/contact-us",
  },
  {
    name: "Zype",
    website: "https://www.getzype.com/contact-us/",
  },
  {
    name: "float",
    website: "https://www.myflot.com/",
  },
  {
    name: "fatakpay",
    website: "https://fatakpay.com/contact-us",
  },
  {
    name: "m-pokket",
    website: "https://www.mpokket.in/contact",
  },
  {
    name: "olyv",
    website: "https://www.olyv.co.in/contactus",
  },

];

function LenderContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 mt-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Contact Our Lenders
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {lenders.map((lender, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between items-center text-center"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{lender.name}</h2>
            <a
              href={lender.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition"
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
