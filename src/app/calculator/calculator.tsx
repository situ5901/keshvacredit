// "use client";

// import { useState } from "react";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// export default function EmiCalculator() {
//   const [loanAmount, setLoanAmount] = useState(500000);
//   const [interestRate, setInterestRate] = useState(10);
//   const [loanTenure, setLoanTenure] = useState(5);

//   const calculateEMI = () => {
//     const monthlyInterest = interestRate / 100 / 12;
//     const totalMonths = loanTenure * 12;
//     const emi = (loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, totalMonths)) /
//                 (Math.pow(1 + monthlyInterest, totalMonths) - 1);
//     return emi.toFixed(2);
//   };

//   const generateGraphData = () => {
//     let data = [];
//     for (let i = 1; i <= loanTenure * 12; i++) {
//       data.push({ month: i, EMI: parseFloat(calculateEMI()) });
//     }
//     return data;
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-300 p-6">
//       <div className="bg-white bg-opacity-30 backdrop-blur-lg p-8 rounded-xl shadow-xl w-full max-w-lg border border-white/30">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Personal Loan EMI Calculator</h2>
//         <div className="mb-6">
//           <label className="block text-gray-900 font-medium">Loan Amount (₹): {loanAmount}</label>
//           <input 
//             type="range" 
//             min="100000" max="1000000" step="1000" 
//             value={loanAmount} 
//             onChange={(e) => setLoanAmount(e.target.value)}
//             className="w-full accent-blue-500"
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-900 font-medium">Interest Rate (%): {interestRate}</label>
//           <input 
//             type="range" 
//             min="5" max="15" step="0.1" 
//             value={interestRate} 
//             onChange={(e) => setInterestRate(e.target.value)}
//             className="w-full accent-blue-500"
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-900 font-medium">Loan Tenure (Years): {loanTenure}</label>
//           <input 
//             type="range" 
//             min="1" max="10" step="1" 
//             value={loanTenure} 
//             onChange={(e) => setLoanTenure(e.target.value)}
//             className="w-full accent-blue-500"
//           />
//         </div>
//         <h4 className="text-xl font-semibold text-gray-900 text-center bg-blue-500 text-white p-3 rounded-lg shadow-md">Monthly EMI: ₹{calculateEMI()}</h4>
//       </div>
//       <div className="bg-white bg-opacity-30 backdrop-blur-lg p-8 mt-8 rounded-xl shadow-xl w-full max-w-lg border border-white/30">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">EMI Trend Over Time</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={generateGraphData()}>
//             <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
//             <XAxis dataKey="month" label={{ value: "Months", position: "insideBottom", offset: -5 }} stroke="#555" />
//             <YAxis label={{ value: "EMI (₹)", angle: -90, position: "insideLeft" }} stroke="#555" />
//             <Tooltip contentStyle={{ backgroundColor: "white", borderRadius: "5px" }} />
//             <Line type="monotone" dataKey="EMI" stroke="#007BFF" strokeWidth={3} dot={{ r: 4 }} />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }
