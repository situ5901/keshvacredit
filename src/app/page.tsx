"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import EmiCalculator from "./calculator/calculator";
import LottieAnimation from "./ LottieAnimation";
import Partner from "./Component/Partner/Partner";
import Homesection1 from "./Component/Homesections/page"
import { useModal } from "@/app/context/ModalContext";
import Cookies from "js-cookie";
import { motion } from 'framer-motion';


function Page() {
  const { openModal } = useModal();
  const router = useRouter();

  const handleClick = () => {
    const token = Cookies.get("user_token");
    const phone = Cookies.get("user_phone");
    if (token && phone) {
      router.push("/short-term-loan");
    } else {
      openModal();
    }
  };
  const cards = [
    {
      title: "Your Trust is Enough",
      description:
        "We believe in you—no collateral, no security deposits, just simple and accessible credit.",
    },
    {
      title: "Fast Support, Anytime",
      description:
        "Stuck with something? Contact us at info@keshvacredit.com. Quick responses, reliable solutions!",
    },
    {
      title: "Unlimited Credit Access",
      description:
        "Apply once with Keshvacredit and enjoy instant credit. Withdraw and use funds anytime, 24/7, all year round.",
    },
    {
      title: "Safe, Secure & Trusted",
      description:
        "We uphold the highest data security standards, ensuring privacy with RBI-approved financial institutions.",
    },
  ];
  return (
    <>
      <section className="py-8 px-4 md:py-1 md:px-8 w-full gap-8">
        <div className="gap-26 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light  sm:text-lg  mt-10">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold ">
              Empowering Every Indian with Instant Loans
            </h2>
            <p className="mb-4 ">
              Quick approvals, minimal documentation, and seamless disbursal.
              Small loans or big, we ensure financial access at the pace you
              need, empowering every Indian with hassle-free loan solutions
              tailored to their needs.
            </p>
            <p className="">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
            <br />
            <div className="flex gap-8">
              <button
                type="button"
                onClick={handleClick}
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-xs px-2 py-2 text-center me-2 mb-2 w-64 relative overflow-hidden"
              >
                <div className="flex flex-col items-center">
                  <span className="animate-pulse text-sm font-semibold">Personal Loan</span>
                  <span className="animate-blink text-xs mt-0.5">Click to Apply</span>
                </div>
              </button>

              <button
                type="button"
                onClick={handleClick}
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-xs px-2 py-1 text-center me-2 mb-2 w-64 relative overflow-hidden"
              >
                <div className="flex flex-col items-center">
                  <span className="animate-pulse text-sm font-semibold">Business Loan</span>
                  <span className="animate-blink text-xs mt-0.5">Click to Apply</span>
                </div>
              </button>
            </div>

          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <LottieAnimation />
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 justify-center -mt-14 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
          {cards.map((card, index) => (
            <motion.a
              key={index}
              href="#"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="block max-w-sm p-6 border rounded-lg shadow-md bg-white transition-transform duration-300 hover:scale-105"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">
                {card.title}
              </h5>
              <p className="font-normal text-gray-600">{card.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between p-8">
        {/* Left Side - Title & Subtitle */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl font-bold">
            Avail Instant Loans from ₹2,000 to ₹20 Lakhs Quick, Hassle-Free, and
            Secure
          </h1>
          <p className="text-lg mt-2">
            With Keshvacredit, achieve your financial goals effortlessly. We are
            on a mission to ensure financial inclusion for every Indian!
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <Image
            src="data:image/png;base64,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"
            alt="User profile"
            width={250}
            height={250}
            className="w-50 h-50 bg-center bg-cover rounded-full "
          />
        </div>

      </div>
      <Partner />
      <section className="p-8  rounded-lg ">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-700">Loan Information</h1>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 p-6 border-blue-200 border-1 rounded-lg shadow-md shadow-white transition-transform hover:scale-105">

            <h2 className="text-xl font-bold mb-4 text-center ">Personal Loan</h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <h3 className="text-lg font-semibold text-blue-600">Eligibility</h3>
                <ul className="list-disc list-inside ">
                  <li>Should be an Indian resident</li>
                  <li>Minimum age: 21 years</li>
                  <li>Should have required documents</li>
                  <li>Good credit score</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-600">Documents</h3>
                <ul className="list-disc list-inside ">
                  <li>Filled application with current photograph</li>
                  <li>PAN Card is required</li>
                  <li>Residence proof: Driving Licence, Voter ID, Passport, Utility Bills</li>
                  <li>Last 3 months&apos; bank statements</li>
                  <li>Salary slips for the last 3 months</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex-1 p-6 border-blue-200 border-1 rounded-lg shadow-md shadow-white transition-transform hover:scale-105">

            <h2 className="text-xl font-bold mb-4 text-center ">Business Loan</h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <h3 className="text-lg font-semibold text-blue-600">Eligibility</h3>
                <ul className="list-disc list-inside ">
                  <li>Should be an Indian resident</li>
                  <li>Should have required documents</li>
                  <li>Profit-making for at least 1&ndash;2 years</li>
                  <li>Continuous operation for 2&ndash;3 years</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-600">Documents</h3>
                <ul className="list-disc list-inside ">
                  <li> bank statements</li>
                  <li>Proof of business registration</li>
                  <li>GST Certificate</li>
                  <li>Last 3 months&apos; bank statements</li>
                  <li>ITR for the last 2 years</li>
                  <li>Business profile</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

<hr
            className="h-1 bg-blue-500 mx-auto border-none"
            style={{
                backgroundImage: `repeating-linear-gradient(
                    135deg,
                    transparent 0px,
                    transparent 5px,
                    #3498db 5px,
                    #3498db 10px
                )`,
            }}
        />

      <div>
        <section className="mb-1">
          <div className="container px-6 py-12 mx-auto">
            <div className="grid items-center gap-8 xl:grid-cols-5">
              {/* Left Section - Text */}
              <motion.div
                className="max-w-2xl mx-auto my-8 space-y-6 text-center xl:col-span-2 xl:text-left"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <h2 className="text-4xl font-extrabold leading-tight">
                  Instant Funds, Endless Possibilities
                </h2>
                <p className="text-lg  opacity-80">
                  Get quick access to funds whenever you need them! Fast approvals,
                  hassle-free processing, and secure transactions make fulfilling
                  your financial needs easier than ever.
                </p>
              </motion.div>

              {/* Right Section - Cards */}
              <div className="p-6 xl:col-span-3">
                <div className="grid gap-8 md:grid-cols-2">
                  {/* Personal Loan */}
                  <motion.div
                    className="grid content-center gap-8"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <div className="p-6 rounded-xl shadow-lg  border-2 border-gray-300 dark:border-gray-700 hover:shadow-2xl transition-all">
                      <p className="text-lg ">
                        Get instant personal loans with KeshvaCredit at competitive
                        rates. Enjoy a seamless application process, minimal
                        documentation, and quick approvals. Your data remains 100%
                        secure with our strict security policies and trusted
                        RBI-regulated partners. Apply now and achieve your financial
                        goals effortlessly!
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <Image
                          src="https://www.getzype.com/wp-content/uploads/2025/02/Personal-Loan-Instant-Disbursal-1.svg"
                          alt="Personal Loan"
                          width={50}
                          height={50}
                          unoptimized
                          className="w-12 h-12 bg-center bg-cover rounded-full"
                        />
                        <div>
                          <p className="text-lg font-semibold">Personal Loan</p>
                        </div>
                      </div>
                    </div>

                    {/* Home Loan */}
                    <div className="p-6 rounded-xl shadow-lg  border-2 border-gray-300 dark:border-gray-700 hover:shadow-2xl transition-all">
                      <p className="text-lg ">
                        Get affordable home loans with KeshvaCredit at competitive
                        interest rates. Enjoy quick approvals, minimal paperwork, and
                        flexible repayment options. Our RBI-regulated partners ensure a
                        hassle-free, secure borrowing experience. Trust us to make
                        your homeownership dreams a reality with complete financial
                        peace of mind.
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <Image
                          src="https://www.getzype.com/wp-content/uploads/2025/02/Collateral-Free-Loans.svg"
                          alt="Home Loan"
                          width={50}
                          height={50}
                          unoptimized
                          className="w-12 h-12 bg-center bg-cover rounded-full"
                        />
                        <div>
                          <p className="text-lg font-semibold">Home Loan</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Credit Card */}
                  <motion.div
                    className="grid content-center gap-8"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <div className="p-6 rounded-xl shadow-lg  border-2 border-gray-300 dark:border-gray-700 hover:shadow-2xl transition-all">
                      <p className="text-lg ">
                        A credit card is a financial tool that allows users to borrow
                        money from a bank or financial institution to make purchases,
                        pay bills, or withdraw cash. It operates on a revolving credit
                        system, where users can spend up to a pre-approved limit and
                        repay the amount either in full or through monthly installments.
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <Image
                          src="https://www.getzype.com/wp-content/uploads/2025/02/Affordable-Interest-Rate.svg"
                          alt="Credit Card"
                          width={50}
                          height={50}
                          unoptimized
                          className="w-12 h-12 bg-center bg-cover rounded-full"
                        />
                        <div>
                          <p className="text-lg font-semibold">Credit Card</p>
                        </div>
                      </div>
                    </div>

                    {/* Business Loan */}
                    <div className="p-6 rounded-xl shadow-lg  border-2 border-gray-300 dark:border-gray-700 hover:shadow-2xl transition-all">
                      <p className="text-lg ">
                        Unlock exclusive benefits with KeshvaCredit! Enjoy seamless
                        transactions, top-tier security, and exciting rewards. With our
                        RBI-governed partners, your financial safety is guaranteed.
                        Experience hassle-free credit card services with cashback, low
                        interest rates, and premium perks. Apply today and elevate your
                        financial freedom!
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <Image
                          src="https://www.getzype.com/wp-content/uploads/2025/02/Flexible-repayment-options.svg"
                          alt="Business Loan"
                          width={50}
                          height={50}
                          unoptimized
                          className="w-12 h-12 bg-center bg-cover rounded-full"
                        />
                        <div>
                          <p className="text-lg font-semibold">Business Loan</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center p-6 gap-5">
        <div className="max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
              instant personal loan 2025
            </h5>
          </a>
          <p className="mb-3 font-normal">
            Secure Instant Personal Loans with KashaveCredit – Quick Approvals,
            Hassle-Free Process, Minimal Documentation, and Fast Fund Disbursal
            to Meet Your Financial Needs Effortlessly
          </p>

          <button
            type="button"
            onClick={handleClick}
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Apply Now
          </button>
        </div>

        <div className="max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
              instant business loan 2025
            </h5>
          </a>
          <p className="mb-3 font-normal">
            Secure Instant Business Loans with KashaveCredit – Fast Approvals,
            Hassle-Free Process, Minimal Documentation, and Quick Fund Disbursal
            to Grow Your Business Effortlessly
          </p>
          <button
            type="button"
            onClick={handleClick}
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Apply Now
          </button>
        </div>
      </div>

      <div className=" h-10">
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-3 ">ॐ Keshvacredit ॐ</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row h-auto md:h-[85vh]">
        <div className="w-full md:w-[30%]    p-4 flex justify-center items-center">
          <div className="relative mx-auto border-gray-800 bg-gray-800 border-[10px] rounded-[2rem] h-[400px] w-[200px] md:h-[500px] md:w-[250px]">
            <div className="rounded-[1.5rem] overflow-hidden w-[180px] h-[380px] md:w-[230px] md:h-[480px]   ">
              <Image
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
                className="dark:hidden w-full h-auto"
                alt="Mockup Light"
                width={400}
                height={400}
                unoptimized
              />
              <Image
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
                className="hidden dark:block w-full h-auto"
                alt="Mockup Dark"
                width={400}
                height={400}
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Right Side (Stats) */}
        <div className="py-8 px-4 md:py-12 md:px-8 w-full">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {[
                  {
                    title: "Happy Customers",
                    description:
                      "Trusted by over 5 lakh happy customers! Experience seamless service, secure transactions, and unmatched financial benefits with us.",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                      />
                    ),
                  },
                  {
                    title: "Instant Approval",
                    description:
                      "Get online loan approval within 48 hours with minimal documentation, ensuring quick access to funds for those in urgent need of financial assistance.",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2L3 6v6c0 5.523 3.582 10.432 9 12 5.418-1.568 9-6.477 9-12V6l-9-4zm0 14.25l-3.75-3.75 1.5-1.5L12 13.5l3.75-3.75 1.5 1.5-5.25 5.25z"
                      />
                    ),
                  },

                  {
                    title: "100% Paperless & Hassle-Free Loans",
                    description:
                      "Apply for a loan from the comfort of your home with our fully digital process—fast, secure, and convenient!",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                      />
                    ),
                  },
                  {
                    title: "No Hidden Charges",
                    description:
                      "Our process is 100% transparent and fair, ensuring no hidden charges or unexpected fees",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    ),
                  },
                  {
                    title: "Loans Disbursed",
                    description:
                      "Over ₹1000 Cr in loans disbursed! Quick approvals, hassle-free processing, and secure transactions to meet your financial needs seamlessly.",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10h18M3 14h18M5 6h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm13 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                      />
                    ),
                  },
                  {
                    title: "Flexible Loan Options",
                    description:
                      "Customize your loan amount from ₹1,000 to ₹1,00,000 with a flexible tenure ranging from 3 months to 2 years designed to suit your financial needs.",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8.25V3m0 0L8.25 6.75M12 3l3.75 3.75M3 12.75a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 1 1 0 3h-3l5.25 4.5m-2.25 0H15a1.5 1.5 0 1 0 0-3"
                      />
                    ),
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center sm:flex-row w-full space-y-6 sm:space-y-0 sm:space-x-6"
                  >
                    <div className="flex size-10 md:size-12 items-center justify-center rounded-lg bg-indigo-600 shadow-lg">
                      <svg
                        className="size-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        {item.icon}
                      </svg>
                    </div>
                    <div className="sm:ml-4 mt-4 sm:mt-0 text-center sm:text-left w-full">
                      <dt className="text-lg font-semibold">{item.title}</dt>
                      <dd className="mt-2 text-sm md:text-base">{item.description}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

      </div>
      <Homesection1 />
      <hr />
      <EmiCalculator />
      <section className="py-16  text-center">
        <h2 className="text-3xl font-semibold  mb-8">Our Statistics </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 relative">
              <Image
                src="https://cdn-icons-gif.flaticon.com/14251/14251538.gif" 
                alt="happy customer"
                fill
                className="rounded-full shadow-lg object-cover"
              />
            </div>
            <h3 className="text-2xl font-medium ">60000+</h3>
            <p className="text-gray-500">Happy Customers</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 relative">
              <Image
                src="https://cdn-icons-gif.flaticon.com/15370/15370761.gif" 
                alt="relationship"
                fill
                className="rounded-full shadow-lg object-cover"
              />
            </div>
            <h3 className="text-2xl font-medium ">50+</h3>
            <p className="text-gray-500">Relationship</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 relative">
              <Image
                src="https://cdn-icons-gif.flaticon.com/7994/7994401.gif" 
                alt="bank"
                fill
                className="rounded-full shadow-lg object-cover"
              />
            </div>
            <h3 className="text-2xl font-medium ">30+</h3>
            <p className="text-gray-500"> NBFCs</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 relative">
              <Image
                src="https://cdn-icons-gif.flaticon.com/10051/10051256.gif" 
                alt="business"
                fill
                className="rounded-full shadow-lg object-cover"
              />
            </div>
            <h3 className="text-2xl font-medium">✔</h3>
            <p className="text-gray-500">Fast disbursement</p>


          </div>

        </div>
      </section>
    </>
  );
}

export default Page;

// import React from 'react'
//
// function page() {
//   return (
//     <div>
//      <section className="h-screen flex items-center justify-center    dark:bg-gray-900">
//     <div className="py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12">
//         <svg className="mx-auto mb-4 w-10 h-10 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M331.8 224.1c28.29 0 54.88 10.99 74.86 30.97l19.59 19.59c40.01-17.74 71.25-53.3 81.62-96.65c5.725-23.92 5.34-47.08 .2148-68.4c-2.613-10.88-16.43-14.51-24.34-6.604l-68.9 68.9h-75.6V97.2l68.9-68.9c7.912-7.912 4.275-21.73-6.604-24.34c-21.32-5.125-44.48-5.51-68.4 .2148c-55.3 13.23-98.39 60.22-107.2 116.4C224.5 128.9 224.2 137 224.3 145l82.78 82.86C315.2 225.1 323.5 224.1 331.8 224.1zM384 278.6c-23.16-23.16-57.57-27.57-85.39-13.9L191.1 158L191.1 95.99l-127.1-95.99L0 63.1l96 127.1l62.04 .0077l106.7 106.6c-13.67 27.82-9.251 62.23 13.91 85.39l117 117.1c14.62 14.5 38.21 14.5 52.71-.0016l52.75-52.75c14.5-14.5 14.5-38.08-.0016-52.71L384 278.6zM227.9 307L168.7 247.9l-148.9 148.9c-26.37 26.37-26.37 69.08 0 95.45C32.96 505.4 50.21 512 67.5 512s34.54-6.592 47.72-19.78l119.1-119.1C225.5 352.3 222.6 329.4 227.9 307zM64 472c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24S88 434.7 88 448C88 461.3 77.25 472 64 472z"/></svg>
//         <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none    lg:mb-6 md:text-5xl xl:text-6xl dark:text-white">Under Maintenance</h1>
//         <p className="font-light text-gray-500 md:text-lg xl:text-xl   ">Our Enterprise administrators are performing scheduled maintenance.</p>
//     </div>
// </section>
//
//     </div>
//   )
// }
//
// export default page
//
