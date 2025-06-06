"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const lenders = [
  {
    id: 1,
    name: "CapitalEase",
    logo: "/1.png",
    approval: "92%",
    amount: "Up to ₹50 Lakhs",
    interest: "12% p.a.",
    tenure: "1–5 years",
    support: "24/7 Chat",
    features: ["Quick Disbursal", "Low Paperwork", "Flexible Tenure"],
    applyLink: "/apply/capitalease",
  },
  {
    id: 2,
    name: "BizFund Pro",
    logo: "/1.png",
    approval: "89%",
    amount: "Up to ₹30 Lakhs",
    interest: "11.5% p.a.",
    tenure: "6 months–4 years",
    support: "Phone & Email",
    features: ["No Collateral", "Online Tracking", "Quick Approval"],
    applyLink: "/apply/bizfundpro",
  },
  {
    id: 3,
    name: "Udaan Finance",
    logo: "/1.png",
    approval: "95%",
    amount: "Up to ₹25 Lakhs",
    interest: "10.75% p.a.",
    tenure: "1–3 years",
    support: "Dedicated Manager",
    features: ["Low Interest", "Prepayment Options", "Digital KYC"],
    applyLink: "/apply/udaanfinance",
  },
];

const BusinessLendersPage = () => {
  return (
    <div className="min-h-screen py-16 px-6  mt-10">
      <h1 className="text-5xl font-bold text-center  mb-16">
        Business Loan Lenders 🏢
      </h1>

      <div className="space-y-10">
        {lenders.map((lender) => (
          <div
            key={lender.id}
            className="max-w-6xl mx-auto rounded-xl border border-slate-200 bg-white shadow-md hover:shadow-lg transition-all duration-300 p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-6">
              {/* Logo Section */}
              <div className="flex items-center gap-4">
                <div className="w-28 h-28 flex items-center justify-center overflow-hidden">

                  <Image
                    src={lender.logo}
                    alt={`${lender.name} Logo`}
                    width={112}
                    height={112}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">{lender.name}</h2>
              </div>

              {/* Key Info */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-slate-700 font-medium">
                <div>
                  <p className="text-slate-500">Approval</p>
                  <p className="text-lg font-semibold">{lender.approval}</p>
                </div>
                <div>
                  <p className="text-slate-500">Loan Amount</p>
                  <p className="text-lg font-semibold">{lender.amount}</p>
                </div>
                <div>
                  <p className="text-slate-500">Interest</p>
                  <p className="text-lg font-semibold">{lender.interest}</p>
                </div>
                <div>
                  <p className="text-slate-500">Tenure</p>
                  <p className="text-lg font-semibold">{lender.tenure}</p>
                </div>
                <div>
                  <p className="text-slate-500">Support</p>
                  <p className="text-lg font-semibold">{lender.support}</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-6 border-dashed border-gray-300" />

            {/* Features and CTA */}
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex flex-wrap gap-4">
                {lender.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-2 bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                  >
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/10407/10407098.png"
                      alt="Feature"
                      width={20}
                      height={20}
                    />
                    {feature}
                  </span>
                ))}
              </div>

              <Link
                href={lender.applyLink}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-full transition"
              >
                🚀 Apply Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessLendersPage;
