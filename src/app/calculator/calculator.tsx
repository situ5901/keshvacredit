'use client';

import { useState } from 'react';

interface EmiRow {
    month: number;
    emi: string;
    principal: string;
    interest: string;
    balance: string;
}

export default function EmiCalculator() {
    const [loanAmount, setLoanAmount] = useState<number>(1000);
    const [interestRate, setInterestRate] = useState<number>(0);
    const [loanTerm, setLoanTerm] = useState<number>(1);
    const [emiResult, setEmiResult] = useState<string>('');
    const [tableData, setTableData] = useState<EmiRow[]>([]);
    const [showResult, setShowResult] = useState<boolean>(false);

    const formatCurrency = (amount: number) => {
        return "₹" + amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const calculateEMI = () => {
        if (!loanAmount || !interestRate || !loanTerm) {
            setEmiResult('Please enter valid values');
            return;
        }

        const monthlyInterestRate = interestRate / 100 / 12;
        const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTerm)) /
            (Math.pow(1 + monthlyInterestRate, loanTerm) - 1);

        let balance = loanAmount;
        let emiTableData: EmiRow[] = [];

        for (let month = 1; month <= loanTerm; month++) {
            const interest = balance * monthlyInterestRate;
            const principal = emi - interest;
            balance -= principal;

            emiTableData.push({
                month,
                emi: formatCurrency(emi),
                principal: formatCurrency(principal),
                interest: formatCurrency(interest),
                balance: formatCurrency(balance < 0 ? 0 : balance)
            });
        }

        setEmiResult(`EMI: ${formatCurrency(emi)}`);
        setTableData(emiTableData);
        setShowResult(true);
    };

    const resetForm = () => {
        setLoanAmount(1000);
        setInterestRate(0);
        setLoanTerm(1);
        setEmiResult('');
        setTableData([]);
        setShowResult(false);
    };

    return (
        <div className="bg-white text-black min-h-screen flex items-center justify-center">
            <div className="max-w-4xl mx-auto p-6 bg-red-100 rounded-2xl flex gap-10 shadow-lg">
                {/* Left Side - Form */}
                <div className="w-1/2 p-4 bg-white rounded-2xl shadow-md">
                    <h1 className="text-center text-2xl font-bold mb-4">EMI Calculator</h1>

                    <div className="mb-4">
                        <label className="block font-bold">Loan Amount:</label>
                        <input
                            type="number"
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(Number(e.target.value))}
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="range"
                            min="1000"
                            max="1000000"
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(Number(e.target.value))}
                            className="w-full mt-2"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-bold">Interest Rate:</label>
                        <input
                            type="number"
                            value={interestRate}
                            onChange={(e) => setInterestRate(Number(e.target.value))}
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="range"
                            min="0"
                            max="20"
                            step="0.1"
                            value={interestRate}
                            onChange={(e) => setInterestRate(Number(e.target.value))}
                            className="w-full mt-2"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-bold text-black">Loan Term (Months):</label>
                        <input
                            type="number"
                            value={loanTerm}
                            onChange={(e) => setLoanTerm(Number(e.target.value))}
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="range"
                            min="1"
                            max="60"
                            value={loanTerm}
                            onChange={(e) => setLoanTerm(Number(e.target.value))}
                            className="w-full mt-2"
                        />
                    </div>

                    <div className="flex justify-between mt-4">
                        <button
                            onClick={calculateEMI}
                            className="px-4 py-2 bg-blue-900 text-white rounded"
                        >
                            Calculate EMI
                        </button>
                        <button
                            onClick={resetForm}
                            className="px-4 py-2 bg-red-600 text-white rounded"
                        >
                            Reset
                        </button>
                    </div>
                </div>

                {/* Right Side - Results */}
                <div className="w-1/2 p-4 bg-blue-100 shadow-lg rounded-2xl animate-fade-in flex items-center justify-center">
                    {/* Title & Subtitle - Show Until Result is Displayed */}
                    {!showResult && (
                        <div className="text-center text-black">
                            <h2 className="text-xl font-semibold">Calculate Your EMI</h2>
                            <p>Enter loan details to see the EMI breakdown</p>
                        </div>
                    )}

                    {/* EMI Table - Show After Calculation */}
                    {showResult && (
                        <div className="w-full">
                            <p className="text-center font-bold mb-4">{emiResult}</p>

                            {tableData.length > 0 && (
                                <div className="overflow-y-auto max-h-96 border border-gray-300 rounded-lg">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="bg-gray-200">
                                                <th className="border p-2">Month</th>
                                                <th className="border p-2">EMI</th>
                                                <th className="border p-2">Principal</th>
                                                <th className="border p-2">Interest</th>
                                                <th className="border p-2">Balance</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tableData.map((row, index) => (
                                                <tr key={index} className="text-center border">
                                                    <td className="border p-2">{row.month}</td>
                                                    <td className="border p-2">{row.emi}</td>
                                                    <td className="border p-2">{row.principal}</td>
                                                    <td className="border p-2">{row.interest}</td>
                                                    <td className="border p-2">{row.balance}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
