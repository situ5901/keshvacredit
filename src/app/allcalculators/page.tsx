'use client';

import React, { useState, useEffect } from 'react';
import {
    PieChart,
    Pie,
    Cell,
    Legend,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';
import { motion } from 'framer-motion';
import { FiInfo, FiDollarSign, FiPercent, FiCalendar, FiChevronDown } from 'react-icons/fi';

const loanTypes = [
    'Personal Loan',
    'Home Loan',
    'Car Loan',
    'Two Wheeler Loan',
    'Education Loan',
    'Business Loan',
    'Loan Against Property',
    'Credit Card EMI',
    'Consumer Durable Loan',
    'Gold Loan',
];

const loanTypeDetails = {
    'Personal Loan': { minAmount: 5000, maxAmount: 5000000, typicalRate: 10.5, minTenure: 3, maxTenure: 60 },
    'Home Loan': { minAmount: 500000, maxAmount: 10000000, typicalRate: 8.4, minTenure: 60, maxTenure: 360 },
    'Car Loan': { minAmount: 100000, maxAmount: 3000000, typicalRate: 9.5, minTenure: 12, maxTenure: 84 },
    'Two Wheeler Loan': { minAmount: 10000, maxAmount: 500000, typicalRate: 12, minTenure: 6, maxTenure: 48 },
    'Education Loan': { minAmount: 50000, maxAmount: 2000000, typicalRate: 10, minTenure: 12, maxTenure: 120 },
    'Business Loan': { minAmount: 100000, maxAmount: 5000000, typicalRate: 14, minTenure: 6, maxTenure: 60 },
    'Loan Against Property': { minAmount: 500000, maxAmount: 10000000, typicalRate: 11, minTenure: 12, maxTenure: 180 },
    'Credit Card EMI': { minAmount: 5000, maxAmount: 500000, typicalRate: 15, minTenure: 3, maxTenure: 24 },
    'Consumer Durable Loan': { minAmount: 5000, maxAmount: 300000, typicalRate: 14, minTenure: 3, maxTenure: 24 },
    'Gold Loan': { minAmount: 5000, maxAmount: 1000000, typicalRate: 12, minTenure: 3, maxTenure: 36 }
};

function calculateEMI(principal: number, annualRate: number, tenure: number): number {
    const monthlyRate = annualRate / 12 / 100;
    const emi =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
        (Math.pow(1 + monthlyRate, tenure) - 1);
    return Math.round(emi);
}

function generateAmortizationSchedule(principal: number, annualRate: number, tenure: number) {
    const monthlyRate = annualRate / 12 / 100;
    let balance = principal;
    const schedule = [];

    for (let month = 1; month <= tenure; month++) {
        const interest = balance * monthlyRate;
        const principalPayment = calculateEMI(principal, annualRate, tenure) - interest;
        balance -= principalPayment;

        schedule.push({
            month,
            principal: Math.round(principalPayment),
            interest: Math.round(interest),
            balance: Math.round(Math.max(balance, 0))
        });
    }

    return schedule;
}

const COLORS = ['#4f46e5', '#10b981', '#ef4444', '#f59e0b', '#8b5cf6'];

export default function EMICalculator() {
    const [loanType, setLoanType] = useState(loanTypes[0]);
    const [principal, setPrincipal] = useState(100000);
    const [interestRate, setInterestRate] = useState(10);
    const [tenure, setTenure] = useState(12);
    const [activeTab, setActiveTab] = useState('summary');
    const [isCalculating, setIsCalculating] = useState(false);

   useEffect(() => {
  const details = loanTypeDetails[loanType as keyof typeof loanTypeDetails];
  if (details) {
    setInterestRate(details.typicalRate);
    setPrincipal(Math.min(Math.max(principal, details.minAmount), details.maxAmount));
    setTenure(Math.min(Math.max(tenure, details.minTenure), details.maxTenure));
  }
}, [loanType, principal, tenure]); // ✅ added principal & tenure


    const emi = calculateEMI(principal, interestRate, tenure);
    const totalPayment = emi * tenure;
    const totalInterest = totalPayment - principal;
    const amortizationSchedule = generateAmortizationSchedule(principal, interestRate, tenure);

    const chartData = [
        { name: 'Principal', value: principal },
        { name: 'Interest', value: totalInterest },
    ];

    const yearlyBreakdown = Array.from({ length: Math.ceil(tenure / 12) }, (_, i) => {
        const startMonth = i * 12 + 1;
        const endMonth = Math.min((i + 1) * 12, tenure);
        const yearData = amortizationSchedule.slice(startMonth - 1, endMonth);
        const principalPaid = yearData.reduce((sum, month) => sum + month.principal, 0);
        const interestPaid = yearData.reduce((sum, month) => sum + month.interest, 0);

        return {
            year: i + 1,
            principal: principalPaid,
            interest: interestPaid,
            total: principalPaid + interestPaid
        };
    });

    const handleCalculate = () => {
        setIsCalculating(true);
        setTimeout(() => setIsCalculating(false), 800);
    };

    const details = loanTypeDetails[loanType as keyof typeof loanTypeDetails];

    return (
        <div className="min-h-screen px-4 py-12  mt-10">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className=" p-8 rounded-2xl shadow-xl space-y-8"
                >
                    <div className="text-center">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                            Smart EMI Calculator
                        </h1>
                        <p className="text-gray-600 mt-2">
                            Calculate your monthly payments and visualize your loan breakdown
                        </p>
                    </div>

                    {/* Inputs */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Loan Type */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium  flex items-center gap-1">
                                <FiInfo className="text-indigo-500" /> Loan Type
                            </label>
                            <div className="relative">
                                <select
                                    className=" findrop w-full border border-gray-300 rounded-lg px-4 py-3 pr-8 appearance-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    value={loanType}
                                    onChange={(e) => setLoanType(e.target.value)}
                                >
                                    {loanTypes.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                                <FiChevronDown className="absolute right-3 top-3.5 text-gray-400" />
                            </div>
                            {details && (
                                <p className="text-xs text-gray-500">
                                    Typical rate: {details.typicalRate}% | Amount: ₹{details.minAmount.toLocaleString()} - ₹{details.maxAmount.toLocaleString()}
                                </p>
                            )}
                        </div>

                        {/* Principal */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium  flex items-center gap-1">
                                <FiDollarSign className="text-indigo-500" /> Loan Amount (₹)
                            </label>
                            <input
                                type="range"
                                min={details?.minAmount || 0}
                                max={details?.maxAmount || 10000000}
                                step={1000}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                value={principal}
                                onChange={(e) => setPrincipal(Number(e.target.value))}
                            />
                            <div className="flex justify-between items-center">
                                <input
                                    type="number"
                                    className="w-32 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    value={principal}
                                    onChange={(e) => setPrincipal(Number(e.target.value))}
                                />
                                <span className="text-sm text-gray-500">
                                    {principal.toLocaleString('en-IN')}
                                </span>
                            </div>
                        </div>

                        {/* Interest */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium  flex items-center gap-1">
                                <FiPercent className="text-indigo-500" /> Interest Rate (%)
                            </label>
                            <input
                                type="range"
                                min="5"
                                max="30"
                                step="0.1"
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                value={interestRate}
                                onChange={(e) => setInterestRate(Number(e.target.value))}
                            />
                            <div className="flex justify-between items-center">
                                <input
                                    type="number"
                                    className="w-32 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(Number(e.target.value))}
                                />
                                <span className="text-sm text-gray-500">
                                    {interestRate}% p.a.
                                </span>
                            </div>
                        </div>

                        {/* Tenure */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium  flex items-center gap-1">
                                <FiCalendar className="text-indigo-500" /> Tenure
                            </label>
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <input
                                        type="range"
                                        min={details?.minTenure || 6}
                                        max={details?.maxTenure || 360}
                                        step="1"
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                        value={tenure}
                                        onChange={(e) => setTenure(Number(e.target.value))}
                                    />
                                    <div className="flex justify-between items-center mt-2">
                                        <input
                                            type="number"
                                            className="w-20 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                            value={tenure}
                                            onChange={(e) => setTenure(Number(e.target.value))}
                                        />
                                        <div className="flex gap-2">
                                            <button
                                                className={`px-3 py-1 text-sm rounded-lg ${tenure === 12 ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}
                                                onClick={() => setTenure(12)}
                                            >
                                                1Y
                                            </button>
                                            <button
                                                className={`px-3 py-1 text-sm rounded-lg ${tenure === 24 ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}
                                                onClick={() => setTenure(24)}
                                            >
                                                2Y
                                            </button>
                                            <button
                                                className={`px-3 py-1 text-sm rounded-lg ${tenure === 60 ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}
                                                onClick={() => setTenure(60)}
                                            >
                                                5Y
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-end">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-colors"
                                onClick={handleCalculate}
                            >
                                {isCalculating ? 'Calculating...' : 'Calculate EMI'}
                            </motion.button>
                        </div>
                    </div>

                    {/* Results */}
                    <motion.div
                        animate={isCalculating ? { scale: [1, 1.02, 1] } : {}}
                        transition={{ duration: 0.3 }}
                        className=" rounded-xl p-6 space-y-4 border border-indigo-100"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <p className="text-sm text-gray-600">Loan Type</p>
                                <p className="text-lg font-semibold text-indigo-600">{loanType}</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <p className="text-sm text-gray-600">Monthly EMI</p>
                                <p className="text-xl font-bold text-green-600">₹{emi.toLocaleString('en-IN')}</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <p className="text-sm text-gray-600">Total Interest</p>
                                <p className="text-lg font-semibold text-red-600">₹{totalInterest.toLocaleString('en-IN')}</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <p className="text-sm text-gray-600">Total Payment</p>
                                <p className="text-lg font-semibold text-blue-600">₹{totalPayment.toLocaleString('en-IN')}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tabs */}
                    <div className="border-b border-gray-200">
                        <nav className="-mb-px flex space-x-8">
                            <button
                                onClick={() => setActiveTab('summary')}
                                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'summary' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover: hover:border-gray-300'}`}
                            >
                                Summary
                            </button>
                            <button
                                onClick={() => setActiveTab('schedule')}
                                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'schedule' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover: hover:border-gray-300'}`}
                            >
                                Payment Schedule
                            </button>
                            <button
                                onClick={() => setActiveTab('yearly')}
                                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'yearly' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover: hover:border-gray-300'}`}
                            >
                                Yearly Breakdown
                            </button>
                        </nav>
                    </div>

                    {/* Tab Content */}
                    <div className="min-h-[400px]">
                        {activeTab === 'summary' && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="h-[400px]">
                                    <h3 className="text-lg font-medium mb-4">Loan Composition</h3>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={chartData}
                                                cx="50%"
                                                cy="50%"
                                                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                                outerRadius={120}
                                                innerRadius={60}
                                                fill="#8884d8"
                                                dataKey="value"
                                                paddingAngle={2}
                                            >
                                                {chartData.map((_, index) => (
                                                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip
                                                formatter={(value) => [`₹${value.toLocaleString('en-IN')}`, 'Amount']}
                                            />
                                            <Legend />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-medium mb-3">Loan Details</h3>
                                        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Principal Amount</span>
                                                <span className="font-medium">₹{principal.toLocaleString('en-IN')}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Interest Rate</span>
                                                <span className="font-medium">{interestRate}% p.a.</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Loan Tenure</span>
                                                <span className="font-medium">
                                                    {tenure} months ({Math.floor(tenure / 12)} years {tenure % 12} months)
                                                </span>
                                            </div>
                                            <div className="pt-2 border-t border-gray-200">
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">EMI Amount</span>
                                                    <span className="font-bold text-green-600">₹{emi.toLocaleString('en-IN')}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium mb-3">Total Payment</h3>
                                        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Principal</span>
                                                <span className="font-medium">₹{principal.toLocaleString('en-IN')}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Total Interest</span>
                                                <span className="font-medium text-red-600">₹{totalInterest.toLocaleString('en-IN')}</span>
                                            </div>
                                            <div className="pt-2 border-t border-gray-200">
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">Total Payment</span>
                                                    <span className="font-bold text-blue-600">₹{totalPayment.toLocaleString('en-IN')}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'schedule' && (
                            <div className="overflow-x-auto">
                                <h3 className="text-lg font-medium mb-4">Amortization Schedule</h3>
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Principal (₹)</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interest (₹)</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Payment (₹)</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remaining Balance (₹)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {amortizationSchedule.map((row) => (
                                            <tr key={row.month}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.month}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.principal.toLocaleString('en-IN')}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.interest.toLocaleString('en-IN')}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{(row.principal + row.interest).toLocaleString('en-IN')}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.balance.toLocaleString('en-IN')}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {activeTab === 'yearly' && (
                            <div className="h-[400px]">
                                <h3 className="text-lg font-medium mb-4">Yearly Payment Breakdown</h3>
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={yearlyBreakdown}
                                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="year" />
                                        <YAxis />
                                        <Tooltip
                                            formatter={(value) => [`₹${value.toLocaleString('en-IN')}`, 'Amount']}
                                        />
                                        <Legend />
                                        <Bar dataKey="principal" stackId="a" fill="#4f46e5" name="Principal" />
                                        <Bar dataKey="interest" stackId="a" fill="#10b981" name="Interest" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        )}
                    </div>
                </motion.div>

                <div className="mt-8 text-center text-sm text-gray-500">
                    <p>Note: This calculator provides estimates only. Actual loan terms may vary based on your credit profile.</p>
                    <p className="mt-1">Last updated: {new Date().toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    );
}