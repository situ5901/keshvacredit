"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";
import axios from "axios";

export type Lender = {
  id: string;
  name: string;
  logo: string;
  approval: string;
  amount: string;
  interest: string;
  tenure: string;
  support: string;
  features: string[];
  applyLink: string;
};

const allLenders: Lender[] = [
  {
    id: "smartCoin",
    name: "Smartcoin",
    logo: "https://framerusercontent.com/images/csl8apTjCrYTK5Qi20a4osUIHw.png?scale-down-to=512",
    approval: "Good",
    amount: "Up to ₹3,00,000",
    interest: " Starting 1.5% per month",
    tenure: "Up to 18 months",
    support: "24/7 customer support",
    features: ["No Collateral", "Flexible Repayment", "No Usage Restriction"],
    applyLink: "https://app.olyv.co.in/?utm_source=KeshvaCredit_Web&utm_campaign=KeshvaCredit_1",
  },
  {
    id: "Mpokket",
    name: "mpokket",
    logo: "https://cdn.prod.website-files.com/64ea130f10713e77f6320da4/67ac2defec09b58763dac780_Logo_Full_mPokket_2312_R01.svg",
    approval: "Good",
    amount: "Up to ₹3,00,000",
    interest: "Upto 39% per annum",
    tenure: "Up to 18 months",
    support: "24/7 customer support",
    features: ["No Collateral", "Flexible Repayment", "No Usage Restriction"],
    applyLink: "https://web.mpokket.in/?utm_source=keshvacredit&utm_medium=keshvacredit",
  },
  {
    id: "zype",
    name: "Zype",
    logo: "https://www.getzype.com/wp-content/uploads/2024/08/Group-852775729.webp",
    approval: "Good",
    amount: "Up to ₹3,00,000",
    interest: "Starting from 1.5% per month",
    tenure: "Up to 18 months",
    support: "24/7 customer support",
    features: ["No Collateral", "Flexible Repayment", "No Usage Restriction"],
    applyLink: "/Eligiblity-Zype",
  },
  {
    id: "ramfin",
    name: "Ramfin",
    logo: "https://www.ramfincorp.com/images/logo.png",
    approval: "Good",
    amount: "Up to ₹3,00,000",
    interest: "Starting from 0.35% to 0.80% per day",
    tenure: "Up to 18 months",
    support: "24/7 customer support",
    features: ["No Collateral", "Flexible Repayment", "No Usage Restriction"],
    applyLink: "/Eligiblity-Ramfin",
  },
  {
    id: "FatakPay",
    name: "Fatakpay",
    logo: "https://web.fatakpay.com/assets/images/logo/Logo.svg",
    approval: "Good",
    amount: "Up to ₹3,00,000",
    interest: " Range - 12% to 35.95% per annum",
    tenure: "Up to 18 months",
    support: "24/7 customer support",
    features: ["No Collateral", "Flexible Repayment", "No Usage Restriction"],
    applyLink: "https://web.fatakpay.com/authentication/login?utm_source=558_POVVE&utm_medium=",
  },
    {
    id: "instantmudra",
    name: "instantmudra",
    logo: "https://www.instantmudra.com/images/logo_official.png",
    approval: "Good",
    amount: "Up to ₹3,00,000",
    interest: " Range - 12% to 35.95% per annum",
    tenure: "Up to 18 months",
    support: "24/7 customer support",
    features: ["No Collateral", "Flexible Repayment", "No Usage Restriction"],
    applyLink: "https://www.instantmudra.com/apply_loan.php?utm_source=quid&utm_medium=get&utm_campaign=d70e2e18685f38708e175d780390d064ke58",
  },

  {
    id: "Rupee",
    name: "Rupee",
    logo: "https://www.rupee112.com/public/images/brand_logo.png",
    approval: "Good",
    amount: "Up to ₹3,00,000",
    interest: "Starting from 35% per annum",
    tenure: "Up to 18 months",
    support: "24/7 customer support",
    features: ["No Collateral", "Flexible Repayment", "No Usage Restriction"],
    applyLink: "https://www.rupee112.com/apply-now?utm_source=KESHVACREDIT&utm_medium=",
  },
  {
    id: "bharatloan",
    name: "BharatLoan",
    logo: "https://www.bharatloan.com/public/images/brand_logo.png",
    approval: "Good",
    amount: "Up to ₹3,00,000",
    interest: "Starting from 35% per annum",
    tenure: "Up to 18 months",
    support: "24/7 customer support",
    features: ["No Collateral", "Flexible Repayment", "No Usage Restriction"],
    applyLink: "https://www.bharatloan.com/apply-now?utm_source=KESHVACREDIT&utm_medium=",
  },
  {
    id: "flot",
    name: "Flot",
    logo: "https://myflot.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoImage.176890a7.png&w=384&q=75",
    approval: "Good",
    amount: "Up to ₹3,00,000",
    interest: "Up to 2% per month",
    tenure: "Up to 18 months",
    support: "24/7 customer support",
    features: ["No Collateral", "Flexible Repayment", "No Usage Restriction"],
    applyLink: "https://myflot.com/?utm_source=Keshvacredit&utm_medium={medium}&utm_campaign={campaign}",
  },
   {
    id: "chintamanifinlease",
    name: "chintamanifinlease",
    logo: "https://www.chintamanifinlease.com/public/frontend/images/logo/logo.png",
    approval: "Good",
    amount: "Up to ₹3,00,000",
    interest: "Up to 2% per month",
    tenure: "Up to 18 months",
    support: "24/7 customer support",
    features: [" (available in Delhi-NCR region)", "Flexible Repayment", "No Usage Restriction"],
    applyLink: "https://www.chintamanifinlease.com/keshvacredit?utm_source=quid945&utm_medium=get&utm_campaign=loan-au7!Sh2dff5",
  },
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
        <p>Support</p>
        <p>{lender.support}</p>
      </div>
    </div>

    <hr className="my-4 border-dashed border-t-2 border-gray-500" />

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
  const [eligibleLenders, setEligibleLenders] = useState<Lender[]>([]);

 useEffect(() => {
  const userData = localStorage.getItem("userData");
  if (!userData) {
    router.push("/short-term-loan");
  }

  const phone = Cookies.get("user_phone");
  if (phone) {
    axios
      .post("https://keshvacredit.com/api/v1/eligibility/lenderlist", { phone })
      .then((res) => {
        const lenderNames = res.data.data.map((item: { name: string }) =>
          item.name.toLowerCase()
        );

        const filtered = allLenders.filter((lender) =>
          lenderNames.includes(lender.name.toLowerCase())
        );

        setEligibleLenders(filtered);
      })
      .catch((err) => {
        console.error("Failed to fetch lenders:", err);
      });
  }
}, [router]);


  return (
    <div className="max-w-[90rem] mx-auto px-4 py-12">
      <h1 className="mt-10 text-2xl font-bold mb-2">Select Lender</h1>
      <p className="mb-6">Here are the offers that best suit your needs</p>

      {eligibleLenders.length > 0 ? (
        eligibleLenders.map(renderLenderCard)
      ) : (
        <p className="text-center text-lg mt-10">
          Loading eligible lenders...
        </p>
      )}
    </div>
  );
}
