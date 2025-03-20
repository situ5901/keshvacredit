"use client";
import { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(100000);
  const [interestRate, setInterestRate] = useState<number>(10);
  const [loanTenure, setLoanTenure] = useState<number>(12);

  const calculateEMI = () => {
    const monthlyRate = interestRate / 12 / 100;
    if (monthlyRate === 0) return (loanAmount / loanTenure).toFixed(2); // Prevent division by zero
    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTenure)) /
      (Math.pow(1 + monthlyRate, loanTenure) - 1);
    return emi.toFixed(2);
  };

  const emi = parseFloat(calculateEMI());
  const totalPayment = (emi * loanTenure).toFixed(2);
  const totalInterest = (Number(totalPayment) - loanAmount).toFixed(2);

  const chartOptions = {
    chart: { type: "pie", height: 250 },
    title: { text: "EMI Breakdown", style: { fontSize: "14px" } },
    series: [
      {
        name: "Amount",
        data: [
          { name: "Principal", y: loanAmount },
          { name: "Interest", y: Number(totalInterest) },
        ],
      },
    ],
  };

  return (
    <div>
      <div className="w-full  p-6">
        <div className="text-center text-4xl font-bold">
          <h1 className=" text-4xl font-bold">
            Periodic <span className="text-blue-600">Loan EMI</span> Calculator
          </h1>
        </div>

        <div className="w-full  p-6 shadow-md flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 bg-blue-950 text-amber-50 p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-2">EMI Calculator</h2>
            <div className="grid grid-cols-1 gap-3">
              <div>
                <label className="block text-sm font-semibold">
                  Loan Amount
                </label>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full p-1 border rounded text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">
                  Interest Rate (%)
                </label>
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full p-1 border rounded text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">
                  Loan Tenure (Months)
                </label>
                <input
                  type="number"
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(Number(e.target.value))}
                  className="w-full p-1 border rounded text-sm"
                />
              </div>
              <div className="mt-4 flex gap-8">
                <p>
                  <strong>Total Payment:</strong> ₹{totalPayment}
                </p>
                <p>
                  <strong>Total Interest:</strong> ₹{totalInterest}
                </p>
              </div>
            </div>
          </div>

          {/* EMI Result & Chart */}
          <div className="w-full md:w-1/2 bg-white p-4 rounded-xl shadow-md border border-gray-300">
            <h2 className="text-xl font-bold mb-2 text-blue-950">EMI Result</h2>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-3 text-black gap-4 text-sm">
              <p>
                <strong className="text-blue-950">EMI:</strong> ₹{emi}
              </p>
              <p>
                <strong className="text-blue-950">Total Payment:</strong> ₹
                {totalPayment}
              </p>
              <p>
                <strong className="text-blue-950">Total Interest:</strong> ₹
                {totalInterest}
              </p>
            </div>
            <div className="mt-4 w-64 h-64 mx-auto">
              <HighchartsReact highcharts={Highcharts} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
