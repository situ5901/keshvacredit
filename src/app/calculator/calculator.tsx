"use client";
import { useEffect, useState, useMemo } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(100000);
  const [interestRate, setInterestRate] = useState<number>(10);
  const [loanTenure, setLoanTenure] = useState<number>(12);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const { emi, totalPayment, totalInterest } = useMemo(() => {
    const monthlyRate = interestRate / 12 / 100;
    let emiValue = 0;

    if (monthlyRate === 0) {
      emiValue = loanAmount / loanTenure;
    } else {
      emiValue = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTenure)) /
        (Math.pow(1 + monthlyRate, loanTenure) - 1);
    }

    const emi = parseFloat(emiValue.toFixed(2));
    const totalPayment = emi * loanTenure;
    const totalInterest = totalPayment - loanAmount;

    return {
      emi,
      totalPayment: parseFloat(totalPayment.toFixed(2)),
      totalInterest: parseFloat(totalInterest.toFixed(2))
    };
  }, [loanAmount, interestRate, loanTenure]);

  const chartOptions = useMemo(() => ({
    chart: {
      type: "pie",
      height: 250,
      backgroundColor: 'transparent'
    },
    title: {
      text: "EMI Breakdown",
      style: {
        fontSize: "14px",
        color: '#333'
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: ₹{point.y:,.0f}',
          color: '#333'
        }
      }
    },
    series: [{
      name: "Amount",
      data: [
        { name: "Principal", y: loanAmount, color: '#4CAF50' },
        { name: "Interest", y: totalInterest, color: '#F44336' },
      ],
    }],
    credits: {
      enabled: false
    }
  }), [loanAmount, totalInterest]);

  return (
    <div className="w-full p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">
          Periodic <span className="text-blue-600">Loan EMI</span> Calculator
        </h1>
      </div>

      <div data-aos="zoom-in" className="w-full p-6 shadow-md flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2 bg-blue-950 text-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4">EMI Calculator</h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">
                Loan Amount (₹)
              </label>
              <input
                type="number"
                min="0"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Math.max(0, Number(e.target.value)))}
                className="w-full p-2 border rounded "
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Interest Rate (%)
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={interestRate}
                onChange={(e) => setInterestRate(Math.max(0, Number(e.target.value)))}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Loan Tenure (Months)
              </label>
              <input
                type="number"
                min="0"
                value={loanTenure}
                onChange={(e) => setLoanTenure(Math.max(0, Number(e.target.value)))}
                className="w-full p-2 border rounded "
              />
            </div>
            <hr className="mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-3 rounded">
                <p className="text-sm text-gray-600">Total Payment</p>
                <p className="text-lg font-bold text-blue-950">₹{totalPayment.toLocaleString()}</p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <p className="text-sm text-gray-600">Total Interest</p>
                <p className="text-lg font-bold text-blue-950">₹{totalInterest.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="zoom-out" className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-xl font-bold mb-4 text-black">EMI Result</h2>
          <hr className="mb-4 text-blue-600" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-3 rounded">
              <p className="text-sm text-gray-600">Monthly EMI</p>
              <p className="text-lg font-bold text-blue-950">₹{emi.toLocaleString()}</p>
            </div>
            <div className="bg-blue-50 p-3 rounded">
              <p className="text-sm text-gray-600">Total Payment</p>
              <p className="text-lg font-bold text-blue-950">₹{totalPayment.toLocaleString()}</p>
            </div>
            <div className="bg-blue-50 p-3 rounded">
              <p className="text-sm text-gray-600">Total Interest</p>
              <p className="text-lg font-bold text-blue-950">₹{totalInterest.toLocaleString()}</p>
            </div>
          </div>
          <div className="mt-4 mx-auto" style={{ width: '100%', maxWidth: '400px' }}>
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}