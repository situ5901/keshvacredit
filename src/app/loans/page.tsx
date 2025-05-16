'use client';
import dynamic from 'next/dynamic';

const Shortterm = dynamic(() => import("../short-term-loan/page"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  ),
});

export default function LoanPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Personal Loans in India
      </h1>

      <Shortterm />

      <div className="mt-4">
        <h2 className="text-xl font-semibold">About Personal Loans</h2>
        <p className="mt-2 text-gray-600">
          Get personal loans with competitive interest rates and flexible repayment options. Quick approval and minimal documentation required.
        </p>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">
          Loan Statistics
        </h2>
        <div className="p-4 mt-2 bg-gray-100 rounded">
          <p>Average Loan Amount: ₹50,000</p>
          <p>Interest Rate: 10-15% per annum</p>
          <p>Loan Tenure: 1 to 5 years</p>
          <p>Approval Time: 24-48 hours</p>
        </div>
      </div>
    </div>
  );
} 