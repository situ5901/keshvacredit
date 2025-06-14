import React from "react";

const LenderCards = () => {
  const lenders = [
    {
      name: "FatakPay",
      description: "Personal Loan",
      applyLink:
        "https://web.fatakpay.com/authentication/login?utm_source=575_DLZ56&utm_medium= ",
    },
    {
      name: "FatakPay ",
      description: "short-term personal loan",
      applyLink:
        "https://web.fatakpay.com/authentication/login?utm_source=576_PPEGA&utm_medium=",
    },
  ];

  return (
    <div className="pt-32 mb-20 text-center">
      <h1 className="text-3xl font-bold mb-10 ">
        FatakPay Loan Options
      </h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {lenders.map((lender) => (
          <div
            key={lender.name}
            className=" shadow-md rounded-xl p-4 w-64 border border-gray-200"
          >
            <h2 className="text-lg font-semibold">{lender.name}</h2>
            <p className="text-sm  mb-3">{lender.description}</p>
            <a
              href={lender.applyLink}
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LenderCards;
