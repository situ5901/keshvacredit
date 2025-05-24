"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import 'aos/dist/aos.css';
import AOS from 'aos';

const tabs = [
  { 
    id: 'students', 
    label: 'Working Students', 
    imageSrc: '/loantr2.png', 
    heading: 'Quick Loans for Students',
    description: 'KeshvaCredit offers loans specifically designed for students who need quick financial assistance. Whether you’re looking for funds to pay for tuition fees, purchase textbooks, or cover personal expenses, we have you covered. With minimal paperwork and fast processing, we understand that students have tight budgets and need flexible repayment plans. Our loans offer a simple application process, quick approvals, and low-interest rates, helping you manage your educational and personal finances stress-free.' 
  },
  { 
    id: 'professionals', 
    label: 'Working Professionals', 
    imageSrc: '/loantr2.png', 
    heading: 'Quick Loans for Professionals',
    description: 'As a working professional, managing personal expenses, home renovations, or urgent financial needs can be challenging. mPokket provides quick loan disbursements to help professionals cover a wide range of expenses, including medical bills, household renovations, or even a financial cushion in case of emergencies. With competitive interest rates, fast approvals, and flexible repayment options, we ensure that your financial needs are met in a timely and hassle-free manner.' 
  },
  { 
    id: 'self', 
    label: 'Self Employed', 
    imageSrc: '/loantr2.png',
    heading: 'Quick Loans for Self Employed', 
    description: 'Our loans are designed for the self-employed, offering financial support to freelancers, entrepreneurs, and small business owners. Whether you need working capital to grow your business, funds to manage cash flow, or money for personal needs, mPokket is here to help. We offer flexible loan options with low-interest rates, quick approvals, and minimal documentation, understanding the unique challenges that self-employed individuals face. Our repayment plans are customizable to suit your business cycle and income patterns. ' 
  },
];

const LoanSection = () => {
  const [activeTab, setActiveTab] = useState<string>('students');

   useEffect(() => {
    AOS.init({
     duration: 2800,
    once: false, 
    mirror: true,
    });
  }, []);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const activeTabContent = tabs.find(tab => tab.id === activeTab);

  return (
    <section data-aos="zoom-in" className="py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">Loan for Everyone</h2>

      {/* Tabs */}
      <div className="max-w-3xl mx-auto flex rounded-full p-1 mb-10 shadow-md shadow-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`flex-1 text-sm font-medium py-2 rounded-full transition-colors duration-200
              ${activeTab === tab.id ? 'bg-blue-600 text-white' : 'text-blue'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {activeTabContent && (
        <div className="max-w-5xl mx-auto rounded-xl shadow-md shadow-white overflow-hidden flex flex-col md:flex-row">
          <div className="p-8 flex-1">
            <h3 className="text-2xl font-bold mb-4">{activeTabContent.heading}</h3>
            <p className="mb-6">{activeTabContent.description}</p>
          </div>
          <div className="relative w-full h-64 md:h-auto md:w-1/2">
            <Image
              src={activeTabContent.imageSrc}
              alt={activeTabContent.label}
              layout="fill"
              objectFit="none"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default LoanSection;
