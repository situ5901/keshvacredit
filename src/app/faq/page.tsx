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
      "A personal loan is an unsecured loan that you can use for various personal expenses like medical bills, travel, or debt consolidation.",
  },
  {
    question: "What is the interest rate for personal loans?",
    answer:
      "Interest rates vary based on your credit score and lender policies. Typically, rates range from 10% to 25% per annum.",
  },
  {
    question: "How long does it take to get approval for a personal loan?",
    answer:
      "Approval can take from a few hours to a few days depending on the lender and your submitted documents.",
  },
  {
    question: "Can I prepay my personal loan?",
    answer:
      "Yes, many lenders allow prepayment without penalties, but you should confirm with your lender.",
  },
  {
    question: "What is the minimum credit score required?",
    answer:
      "Credit score requirements vary but typically a score above 650 improves approval chances.",
  },
];

const businessLoanFAQs = [
  {
    question: "What is a business loan?",
    answer:
      "A business loan is a financial product designed to provide funds to businesses for operational needs, expansion, or other expenses.",
  },
  {
    question: "What documents are required for a business loan?",
    answer:
      "Documents typically include financial statements, business plans, tax returns, and identity proofs.",
  },
  {
    question: "Can startups apply for business loans?",
    answer:
      "Yes, many lenders offer loans specifically tailored for startups, though requirements might be stricter.",
  },
  {
    question: "How is the interest rate calculated for business loans?",
    answer:
      "Interest rates depend on the lender, loan amount, business financials, and credit history.",
  },
  {
    question: "What is the repayment period for business loans?",
    answer:
      "Repayment periods vary widely but often range from 1 to 5 years.",
  },
];

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border-b border-gray-300 py-4 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <h3 className="text-lg font-semibold flex justify-between items-center">
        {question}
        <span>{isOpen ? "−" : "+"}</span>
      </h3>
      {isOpen && <p className="mt-2 text-gray-700">{answer}</p>}
    </div>
  );
}

export default function LoanFAQ() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 mt-10">
      <h1 className="text-4xl font-bold mb-10 text-center">Loan FAQs</h1>

      {/* Personal Loan FAQs */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
          Personal Loan FAQs
        </h2>
        {personalLoanFAQs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </section>

      {/* Business Loan FAQs */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
          Business Loan FAQs
        </h2>
        {businessLoanFAQs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </section>
    </div>
  );
}
