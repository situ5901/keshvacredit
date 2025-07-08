"use client";
import React from "react";
import Image from "next/image";

const lenders = [
  {
    name: "ramfin corporation",
    image: "https://i.postimg.cc/Y03r2Fmb/logo-ramfin.png",
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
    image: "https://cdn.prod.website-files.com/64ea130f10713e77f6320da4/67ac2defec09b58763dac780_Logo_Full_mPokket_2312_R01.svg",
    GrievanceOfficername: "Ridham",
    email: "support@mpokket.com",
  },
  {
    name: "olyv",
    image:
      "https://framerusercontent.com/images/csl8apTjCrYTK5Qi20a4osUIHw.png?scale-down-to=512",
    GrievanceOfficername: "Moushumi Mukherjee",
    email: "grievance@smartcoin.co.in",
  },
  {
    name: "TrustPaisa",
    image:
      "https://static.trustpaisa.com/logos/full.svg",
    GrievanceOfficername: "Sharath Kumar",
    email: "grievance@trustpaisa.com",
  }, {
    name: " FDPL Finance Private Limited",
    image: "https://www.fdplfinance.com/assets/images/logo/Logo.svg",
    GrievanceOfficername: "Ms. Anshika Gupta",
    email: "escalation@fdplfinance.com",
  },
];

function Page() {
  return (
    <div className="min-h-screen p-6 py-12 mt-10">
      <div className="max-w-6xl mx-auto">
        {/* Compact Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold  mb-2">
            Lender Grievance
          </h1>
          <p className=" max-w-2xl mx-auto">
            Direct contact for grievance resolution
          </p>
        </div>

        {/* Ultra-Compact Lender Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lenders.map((lender, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 overflow-hidden"
            >
              {/* Minimal Logo Section */}
              <div className="flex items-center p-4 border-b border-gray-100 h-20">
                <div className="relative w-full h-full max-w-[120px] mx-auto">
                  <Image
                    src={lender.image}
                    alt={lender.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              {/* Dense Information Section */}
              <div className="p-4 space-y-3">
                <h3 className="text-lg font-semibold text-gray-800 text-center">{lender.name}</h3>

                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Grievance Officer</p>
                      <p className="text-sm font-medium text-gray-700">{lender.GrievanceOfficername}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Contact Email</p>
                      <a
                        href={`mailto:${lender.email}`}
                        className="text-sm text-blue-600 hover:underline break-all font-medium"
                      >
                        {lender.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`mailto:${lender.email}`}
                    className="block text-center text-sm px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium rounded transition-colors duration-150"
                  >
                    Contact Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;