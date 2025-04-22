"use client";
import React from "react";
import Image from "next/image";

const lenders = [
  {
    name: "ramfin corporation",
    image: "https://www.ramfincorp.com/images/logo.png",
    GrievanceOfficername: "Saourav Kumar",
    email: "info@ramfincorp.com",
  },
  {
    name: "zype",
    image:
      "https://www.getzype.com/wp-content/uploads/2024/08/Group-852775729.webp",
    GrievanceOfficername: "vikas",
    email: "support@getzype.com",
  },
  {
    name: "mPokket",
    image:"https://cdn.prod.website-files.com/64ea130f10713e77f6320da4/67ac2defec09b58763dac780_Logo_Full_mPokket_2312_R01.svg",
    GrievanceOfficername: "Ridham",
    email: "support@mpokket.com",
  },
  {
    name: "olyv",
    image:
      "https://framerusercontent.com/images/csl8apTjCrYTK5Qi20a4osUIHw.png?scale-down-to=512",
    GrievanceOfficername: "Ravi kumar",
    email: "grievance@smartcoin.co.in",
  },
];

function Page() {
  return (
    <div className="min-h-screen  p-6 py-16 mt-4">
      <h1 className="text-4xl font-bold text-center  mb-12">Lender Grievance</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {lenders.map((lender, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row bg-white/20 backdrop-blur-md border border-white/30 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_30px_rgba(0,0,0,0.2)] rounded-2xl overflow-hidden transition-all"
          >
            {/* Left Side */}
            <div className="bg-gradient-to-br from-[#b66b7d] to-[#1d2323]  md:w-1/3 w-full flex flex-col items-center justify-center text-center p-6 transition-colors duration-300">
              <Image
                src={lender.image}
                alt={lender.name}
                width={130}
                height={60}
                className="mb-3 rounded-full object-contain"
              />
              {/* <div className="text-lg font-semibold capitalize">{lender.name}</div> */}
            </div>

            {/* Right Side */}
            <div className="md:w-2/3 w-full p-5 space-y-5">
              {[
                {
                  label: "Grievance Officer Name",
                  value: lender.GrievanceOfficername,
                },
                {
                  label: "Email",
                  value: lender.email,
                  link: `mailto:${lender.email}`,
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/128/724/724927.png"
                    alt="arrow"
                    width={20}
                    height={20}
                    className="mt-1 shrink-0"
                  />
                  <div className="flex flex-col">
                    <span className=" font-semibold mb-1">{item.label}:</span>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline break-words"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className=" break-words whitespace-pre-wrap">
                        {item.value}
                      </span>
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
