"use client";
import React from "react";
import Image from "next/image";

const lenders = [
  {
    name: "ramfin corporation",
    contactPerson: "John Smith",
    email: "ramfin@gmail.com",
    phone: "+91 9876543210",
    address: "123 Ram Street, Chennai",
    website: "https://www.ramfin.com",
  },
  {
    name: "zype",
    contactPerson: "John Doe",
    email: "support@zype.in",
    phone: "+91 1234567890",
    address: "456 Zype Avenue, Delhi",
    website: "https://www.zype.in",
  },
];

function Page() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Lender Contacts</h1>

      <div className="space-y-5">
        {lenders.map((lender, idx) => (
          <div
            key={idx}
            className="flex bg-white shadow-lg rounded-xl overflow-hidden"
          >
            {/* Left Container */}
            <div className="bg-blue-950 text-white w-1/5 flex items-center justify-center text-center p-4 text-lg font-semibold">
              {lender.name}
            </div>

            {/* Right Container */}
            <div className="w-4/5 p-4 space-y-2">
              {[
                {
                  label: "Contact Person",
                  value: lender.contactPerson,
                },
                {
                  label: "Email",
                  value: lender.email,
                },
                {
                  label: "Phone",
                  value: lender.phone,
                },
                {
                  label: "Address",
                  value: lender.address,
                },
                {
                  label: "Website",
                  value: lender.website,
                  link: true,
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Image
                    src="https://cdn-icons-gif.flaticon.com/7740/7740748.gif" // 🔄 Your animated arrow path here
                    alt="arrow"
                    width={20}
                    height={20}
                  />
                  <span className="text-gray-800 font-medium">
                    {item.label}:
                  </span>
                  {item.link ? (
                    <a
                      href={item.value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-gray-600">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
