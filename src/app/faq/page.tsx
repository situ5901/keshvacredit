"use client";

import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const personalLoanFAQs = [
  {
    question: "What is a personal loan?",
    answer:
      "A personal loan is an unsecured loan you can take for needs like home repairs, education, or debt consolidation. You receive a lump sum and repay it in fixed EMIs over a set period.",
  },
  {
    question: "What are typical interest rates?",
    answer:
      "Rates usually range from 10% to 20% per annum in India. Your exact rate depends on your credit score, income, and lender’s policy.",
  },
  {
    question: "How long can I repay?",
    answer:
      "Repayment tenures generally span from 12 months to 60 months (1–5 years). Longer tenures lower your EMI but increase total interest paid.",
  },
  {
    question: "How much can I borrow?",
    answer:
      "Most banks and NBFCs lend anywhere between ₹20,000 up to ₹25 lakh, depending on your eligibility and income.",
  },
  {
    question: "Are there any processing fees?",
    answer:
      "Yes—lenders may charge a processing fee of 1%–3% of the loan amount, which is usually deducted from your disbursal.",
  },
  {
    question: "Can I prepay my loan?",
    answer:
      "Yes, partial or full prepayment is allowed by most lenders, often without penalty. Always confirm prepayment rules with your bank.",
  },
];

const businessLoanFAQs = [
  {
    question: "What is a business loan?",
    answer:
      "A business loan provides funds for working capital, equipment purchases, or expansion. It can be secured (with collateral) or unsecured.",
  },
  {
    question: "What’s the loan amount range?",
    answer:
      "You can typically borrow between ₹50,000 and ₹50 lakh, depending on your business turnover, credit history, and lender guidelines.",
  },
  {
    question: "What interest rates apply?",
    answer:
      "Business loan rates in India vary from 12% to 18% per annum. Your rate depends on your credit score, business vintage, and financials.",
  },
  {
    question: "What documents are needed?",
    answer:
      "Commonly required documents include bank statements (6–12 months), profit & loss statements, GST returns, and identity/address proofs.",
  },
  {
    question: "How do I apply?",
    answer:
      "You can apply online via a bank or NBFC website by uploading documents and filling out an application form. Approval usually takes 2–5 business days.",
  },
  {
    question: "Is collateral required?",
    answer:
      "Unsecured business loans don’t need collateral but come at higher rates. Secured loans (against property or machinery) often offer lower interest.",
  },
];

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border-b border-gray-300 py-3 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <h3 className="text-lg font-medium flex justify-between items-center">
        {question}
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </h3>
      {isOpen && <p className="mt-2 text-gray-700">{answer}</p>}
    </div>
  );
}

export default function LoanFAQ() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 mt-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Loan FAQs</h1>

      {/* Personal Loan FAQs */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-1">
          Personal Loan FAQs
        </h2>
        {personalLoanFAQs.map((faq, idx) => (
          <FAQItem key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </section>

      {/* Business Loan FAQs */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 border-b pb-1">
          Business Loan FAQs
        </h2>
        {businessLoanFAQs.map((faq, idx) => (
          <FAQItem key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </section>
    </div>
  );
}
