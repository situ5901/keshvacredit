"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Shortterm from "../../short-term-loan/page"

export default function StateLoanPage() {
  // Explicitly type state as string
  const params = useParams() as { state: string };
  const [stateName, setStateName] = useState("");

  useEffect(() => {
    if (params.state) {
      // Convert URL slug back to proper state name
      const formattedState = params.state
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      setStateName(formattedState);
    }
  }, [params.state]);

  return (
    <div className="container mx-auto px-4 py-8 mt-15">
     <h1 className="text-3xl font-bold mb-6 text-center">
  Personal Loans in{" "}
  <span className="text-blue-600">
    {stateName}
  </span>
</h1>

      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Loan Options in {stateName}</h2>
        <p className="text-gray-600 mb-4">
          Looking for a personal loan in {stateName}? We offer competitive loan options tailored to your needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Quick Personal Loans</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Fast approval process</li>
              <li>Competitive interest rates</li>
              <li>Flexible repayment terms</li>
              <li>Minimal documentation</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Why Choose Us</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Trusted by thousands in {stateName}</li>
              <li>24/7 customer support</li>
              <li>Secure and confidential process</li>
              <li>No hidden charges</li>
            </ul>
          </div>
        </div>
      </div>
      <Shortterm />

      <div className="bg-blue-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Ready to Apply?</h2>
        <p className="text-gray-600 mb-4">
          Get started with your personal loan application in {stateName} today.
        </p>
        <Link 
          href="/short-term-loan"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
} 