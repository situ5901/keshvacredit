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
                  src="https://www.ramfincorp.com/images/logo.png" alt=" Logo"
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

           <button>
            <a
  href="/Eligiblity-Ramfin"
  className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-lg inline-block"
>
  Apply Now
</a>
</button>


          </div>
        </div>
        <div className="lender max-w-7xl mx-auto mt-2  shadow-md rounded-lg p-6 border">
          {/* Top Section: All elements in a single row */}
          <div className="flex flex-wrap items-center justify-between gap-6 ">
            {/* Logo & Name */}
            <div className="flex items-center gap-2">
              <div className="w-32 h-32 flex items-center justify-center rounded overflow-hidden">
                <Image
                  src="https://www.getzype.com/wp-content/uploads/2024/08/Group-852775729.webp" alt=" Logo"
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
            <button
              className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-lg"
              onClick={() => window.open('https://portal.getzype.com/?referrer=singular_click_id%3D7eae92ed-e8c9-44a9-9265-f1d5705e172e ', '_blank')}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
