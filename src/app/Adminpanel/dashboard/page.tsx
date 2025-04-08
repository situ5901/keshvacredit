'use client';

import React from 'react';
import {
  FaUser,
  FaShoppingCart,
  FaDollarSign,
  FaChartLine,
} from 'react-icons/fa';
import { Home, Briefcase, CreditCard, Banknote } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="">Overview of your admin panel statistics</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Card 1: Users */}
        <div className="admin-box shadow rounded p-4">
          <div className="flex items-center">
            <div className=" p-3 rounded-full">
              <FaUser className=" text-2xl" />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Users</h2>
              <p className="text-2xl font-bold">164234</p>
            </div>
          </div>
        </div>

        {/* Card 2: Leads */}
        <div className="admin-box shadow rounded p-4">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-full">
              <FaShoppingCart className="text-green-500 text-2xl" />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Leads</h2>
              <p className="text-2xl font-bold">564577</p>
            </div>
          </div>
        </div>

        {/* Card 3: Revenue */}
        <div className="admin-box shadow rounded p-4">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-3 rounded-full">
              <FaDollarSign className="text-yellow-500 text-2xl" />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Revenue</h2>
              <p className="text-2xl font-bold">$12,345</p>
            </div>
          </div>
        </div>

        {/* Card 4: Growth */}
        <div className="admin-box shadow rounded p-4">
          <div className="flex items-center">
            <div className="bg-red-100 p-3 rounded-full">
              <FaChartLine className="text-red-500 text-2xl" />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Growth</h2>
              <p className="text-2xl font-bold">24%</p>
            </div>
          </div>
        </div>
      </div>

     
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Loan Services</h2>

        <div className="flex flex-wrap gap-4 justify-center">
  {/* Personal Loan */}
  <div className="w-40 p-4 admin-box shadow-md rounded-xl flex flex-col items-center hover:shadow-lg transition">
    <Home className="w-8 h-8" />
    <h2 className="mt-2 text-base font-medium text-center">Personal Loan</h2>
  </div>

  {/* Business Loan */}
  <div className="w-40 p-4 admin-box shadow-md rounded-xl flex flex-col items-center hover:shadow-lg transition">
    <Briefcase className="text-green-600 w-8 h-8" />
    <h2 className="mt-2 text-base font-medium text-center">Business Loan</h2>
  </div>

  {/* Credit Card */}
  <div className="w-40 p-4 admin-box shadow-md rounded-xl flex flex-col items-center hover:shadow-lg transition">
    <CreditCard className="text-purple-600 w-8 h-8" />
    <h2 className="mt-2 text-base font-medium text-center">Credit Card</h2>
  </div>

  {/* Bank */}
  <div className="w-40 p-4 admin-box shadow-md rounded-xl flex flex-col items-center hover:shadow-lg transition">
    <Banknote className="text-yellow-600 w-8 h-8" />
    <h2 className="mt-2 text-base font-medium text-center">Bank</h2>
  </div>
</div>

      </div>
    </div>
  );
}
