import React from "react";
import Image from "next/image";
export default function Page() {
  return (
    <div className="max-w-[90rem] mx-auto ">
    <div className="max-w-[90rem] mx-auto px-4 py-12 ">
      {/* Heading */}
      <h1 className="mt-20 text-2xl font-bold mb-2">Select Lender</h1>
      <p className="mb-6 ">
        Here are the offers that best suit your needs
      </p>

      {/* Lender Card */}
      <div className="lender max-w-7xl mx-auto  shadow-md rounded-lg p-6 border">
        {/* Top Section: All elements in a single row */}
        <div className="flex flex-wrap items-center justify-between gap-6 ">
          {/* Logo & Name */}
          <div className="flex items-center gap-2">
            <div className="w-32 h-32 flex items-center justify-center rounded overflow-hidden">
              <Image
                src="https://credmantra.com/assets/creditlinks.png"
                alt="CreditLinks Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Approval Rating */}
          <div className="flex flex-col items-center">
            <p className="text-sm ">Approval Rating</p>
            <div className="flex items-center gap-2">
              <span className=" font-medium">Good</span>
              <Image
                src="https://cdn-icons-png.flaticon.com/128/2954/2954893.png"
                alt="Approval Rating Icon"
                className="w-6 h-6"
              />
            </div>
          </div>




          {/* Loan Amount */}
          <div>
            <p>Loan Amount</p>
            <p>Up to ₹3,00,000</p>
          </div>

          {/* Interest Rate */}
          <div>
            <p>Interest Rate</p>
            <p>Starting from 22% to 28%</p>
          </div>

          {/* Tenure */}
          <div>
            <p>Tenure</p>
            <p>Up to 18 months</p>
          </div>

          {/* Processing Fee */}
          <div>
            <p>Processing Fee</p>
            <p>Up to 2%</p>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4 border-dashed border-t-2 border-gray-300" />

        {/* Features & Apply Button */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Features */}
          <div className="flex flex-wrap gap-4  text-lg ml-10">
            <span className="flex items-center gap-1">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/10407/10407098.png"
                alt="Icon"
                className="w-6 h-6"
              />
              No Collateral
            </span>
            <span className="flex items-center gap-1">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/10407/10407098.png"
                alt="Icon"
                className="w-6 h-6"
              />
              Flexible Repayment
            </span>
            <span className="flex items-center gap-1">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/10407/10407098.png"
                alt="Icon"
                className="w-6 h-6"
              />
              No Usage Restriction
            </span>
          </div>

          {/* Apply Button */}
          <button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-lg">
            Apply Now
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
