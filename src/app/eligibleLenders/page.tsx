"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (!userData) {
      router.push("/short-term-loan"); // Redirect back if no user data
    }
  }, [router]);

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
    src="data:image/png;base64,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"
    alt=" Logo"
    width={128}
    height={128}
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
                width={128}
                height={128}
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
                width={128}
                height={128}
              />
              No Collateral
            </span>
            <span className="flex items-center gap-1">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/10407/10407098.png"
                alt="Icon"
                className="w-6 h-6"
                width={128}
                height={128}
              />
              Flexible Repayment
            </span>
            <span className="flex items-center gap-1">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/10407/10407098.png"
                alt="Icon"
                className="w-6 h-6"
                width={128}
                height={128}
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
