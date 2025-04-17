"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";


const lenders = [
  {
    id: "ramfin",
    name: "RamFin",
    logo: "https://www.ramfincorp.com/images/logo.png",
    approval: "Good",
    amount: "Up to ₹3,00,000",
    interest: "Starting from 22% to 28%",
    tenure: "Up to 18 months",
    fee: "Up to 2%",
    features: ["No Collateral", "Flexible Repayment", "No Usage Restriction"],
    applyLink: "/Eligiblity-Ramfin",
  },
  {
    id: "zype",
    name: "Zype",
    logo: "https://www.getzype.com/wp-content/uploads/2024/08/Group-852775729.webp",
    approval: "Good",
    amount: "Up to ₹3,00,000",
    interest: "Starting from 22% to 28%",
    tenure: "Up to 18 months",
    fee: "Up to 2%",
    features: ["No Collateral", "Flexible Repayment", "No Usage Restriction"],
    applyLink: "/Eligiblity-Zype",
  },
];

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (!userData) {
      router.push("/short-term-loan");
    }
  }, [router]);

  return (
    <div className="max-w-[90rem] mx-auto px-4 py-12 ">
      <h1 className="mt-10 text-2xl font-bold mb-2">Select Lender</h1>
      <p className="mb-6">Here are the offers that best suit your needs</p>

      {lenders.map((lender) => (
        <div
          key={lender.id}
          className="lender max-w-7xl mx-auto mt-4  shadow-md rounded-lg p-6 border"
        >
          <div className="flex flex-wrap items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-32 h-32 flex items-center justify-center rounded overflow-hidden">
                <Image
                  src={lender.logo}
                  alt={`${lender.name} Logo`}
                  width={128}
                  height={128}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Approval */}
            <div className="flex flex-col items-center">
              <p className="text-sm">Approval Rating</p>
              <div className="flex items-center gap-2">
                <span className="font-medium">{lender.approval}</span>
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/2954/2954893.png"
                  alt="Approval Icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
            </div>

            {/* Loan Info */}
            <div>
              <p>Loan Amount</p>
              <p>{lender.amount}</p>
            </div>
            <div>
              <p>Interest Rate</p>
              <p>{lender.interest}</p>
            </div>
            <div>
              <p>Tenure</p>
              <p>{lender.tenure}</p>
            </div>
            <div>
              <p>Processing Fee</p>
              <p>{lender.fee}</p>
            </div>
          </div>

          <hr className="my-4 border-dashed border-t-2 border-gray-300" />

          {/* Features + Button */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-4 text-lg ml-1">
              {lender.features.map((feature, idx) => (
                <span key={idx} className="flex items-center gap-1">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/128/10407/10407098.png"
                    alt="Feature Icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  {feature}
                </span>
              ))}
            </div>

            <Link
              href={lender.applyLink}
              className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-lg inline-block"
            >
              Apply Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
