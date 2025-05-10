"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export type Lender = {
  id: string;
  name: string;
  logo: string;
  approval: string;
  amount: string;
  interest: string;
  tenure: string;
  fee: string;
  features: string[];
  applyLink: string;
};

const lenders: Lender[] = [
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

const utm: Lender[] = [
  {
    id: "Flot",
    name: "flot",
    logo: "https://myflot.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoImage.176890a7.png&w=384&q=75",
    approval: "Good",
    amount: "Up to ₹3,00,000",
    interest: "Starting from 22% to 28%",
    tenure: "Up to 18 months",
    fee: "Up to 2%",
    features: ["No Collateral", "Flexible Repayment", "No Usage Restriction"],
    applyLink:
      "https://myflot.com/?utm_source=Keshvacredit&utm_medium=%7B_medium%7D&utm_campaign=%7B_campaign%7D",
  },
  {
    id: "rupee112",
    name: "rupee112",
    logo: "https://www.rupee112.com/public/images/brand_logo.png",
    approval: "Good",
    amount: "Up to ₹3,00,000",
    interest: "Starting from 22% to 28%",
    tenure: "Up to 18 months",
    fee: "Up to 2%",
    features: ["No Collateral", "Flexible Repayment", "No Usage Restriction"],
    applyLink: "https://www.rupee112.com/apply-now?utm_source=KESHVACREDIT&utm_medium=",
  },
  {
    id: "bharatloan",
    name: "BharatLoan",
    logo: "https://www.bharatloan.com/public/images/brand_logo.png", 
    approval: "Good",
    amount: "Up to ₹3,00,000",
    interest: "Starting from 22% to 28%",
    tenure: "Up to 18 months",
    fee: "Up to 2%",
    features: ["No Collateral", "Flexible Repayment", "No Usage Restriction"],
    applyLink: "https://www.bharatloan.com/apply-now?utm_source=KESHVACREDIT&utm_medium=", 
  }
  
];

const renderLenderCard = (lender: Lender) => (
  <div
    key={lender.id}
    className="lender max-w-7xl mx-auto mt-4 shadow-md rounded-lg p-6 border"
  >
    <div className="flex flex-wrap items-center justify-between gap-6">
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

    <hr className="my-4 border-dashed border-t-2 border-gray-500 " />

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
);

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (!userData) {
      router.push("/short-term-loan");
    }
  }, [router]);

  return (
    <div className="max-w-[90rem] mx-auto px-4 py-12">
      <h1 className="mt-10 text-2xl font-bold mb-2">Select Lender</h1>
      <p className="mb-6">Here are the offers that best suit your needs</p>

      {lenders.map(renderLenderCard)}

      <h1 className="mt-16 text-2xl font-bold mb-2">Quick Loans</h1>
      <p className="mb-6">Other quick loan options you may consider:</p>

      {utm.map(renderLenderCard)}
    </div>
  );
}
