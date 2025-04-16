"use client";
import React from "react";
import Image from "next/image";

const lenders = [
  {
    name: "ramfin corporation",
    image: "https://www.ramfincorp.com/images/logo.png",
    contactPerson: "John Smith",
    email: "ramfin@gmail.com",
    phone: "+91 9876543210",
    address: "123 Ram Street, Chennai",
    website: "https://www.ramfincorp.com/contact-us",
  },
  {
    name: "zype",
    image:  "https://www.getzype.com/wp-content/uploads/2024/08/Group-852775729.webp",
    contactPerson: "John Doe",
    email: "support@zype.in",
    phone: "+91 1234567890",
    address: "456 Zype Avenue, Delhi",
    website: "https://www.getzype.com/contact-us/",
  },
 
];

function Page() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Lender Contacts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {lenders.map((lender, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden"
          >
            {/* Left Container */}
            <div className="bg-blue-950 text-white md:w-1/3 w-full flex flex-col items-center justify-center text-center p-6">
  <Image
    src={lender.image}
    alt={lender.name}
    width={100}
    height={60}
    className="mb-3 rounded-full object-cover"
  />
  <div className="text-lg font-semibold capitalize">{lender.name}</div>
</div>


            {/* Right Container */}
            <div className="md:w-2/3 w-full p-6 space-y-3">
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
                <div key={i} className="flex items-start gap-3">
                  <Image
                    src="https://cdn-icons-gif.flaticon.com/7740/7740748.gif"
                    alt="arrow"
                    width={20}
                    height={20}
                    className="mt-1"
                  />
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                    <span className="text-gray-800 font-medium">{item.label}:</span>
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
