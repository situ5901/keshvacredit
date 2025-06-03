"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import EmiCalculator from "./calculator/calculator";
import LottieAnimation from "./ LottieAnimation";
import Partner from "./Component/Partner/Partner";
import RatingAndReviews from "./Component/Homesections/page2";
import Howitworks from "./Component/Homesections/page3";
import Homesection1 from "./Component/Homesections/page";
import { useModal } from "@/app/context/ModalContext";
import Cookies from "js-cookie";
import 'aos/dist/aos.css';
import AOS from 'aos';
const Homelottie = dynamic(() => import("./Homelottie"), { ssr: false });

function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const { openModal } = useModal();
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const handleClick = () => {
    const token = Cookies.get("user_token");
    const phone = Cookies.get("user_phone");
    if (token && phone) {
      router.push("/short-term-loan");
    } else {
      openModal();
    }
  };

  const handleClickbusiness = () => {
    const token = Cookies.get("user_token");
    const phone = Cookies.get("user_phone");
    if (token && phone) {
      router.push("/business-loan");
    } else {
      openModal();
    }
  };

  const cards = [
    {
      title: "Your trust is our greatest strength",
      description:
        "We believe in you—no collateral, no security deposits, just simple and accessible credit.",
    },
    {
      title: "Fast Support, Anytime",
      description:
        "Stuck with something? Contact us at keshvacredit@gmail.com. Quick responses, reliable solutions!",
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

  if (isLoading) {
    return (
      <div className="cursor-wait h-screen w-full flex items-center justify-center">
        <Homelottie />
      </div>
    );
  }

  return (
    <>
      <section className="py-8 px-4 md:py-1 md:px-8 w-full gap-8">
        <div className="gap-26 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light sm:text-lg mt-10">
            <h2 data-aos="fade-down" className="mb-4 text-4xl tracking-tight font-extrabold">
              Empowering Every Indian with{" "}
              <span className="text-[#e5a74a]">Instant Loans</span>
            </h2>
            <p className="mb-4">
              Quick approvals, minimal documentation, and seamless disbursal.
              Small loans or big, we ensure financial access at the pace you
              need, empowering every Indian with hassle-free loan solutions
              tailored to their needs.
            </p>
            <p>
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
                  <span className="animate-pulse text-sm font-semibold">
                    Personal Loan
                  </span>
                  <span className="animate-blink text-xs mt-0.5">
                    Click to Apply
                  </span>
                </div>
              </button>
              <button
                type="button"
                onClick={handleClickbusiness}
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-xs px-2 py-1 text-center me-2 mb-2 w-64 relative overflow-hidden"
              >
                <div className="flex flex-col items-center">
                  <span className="animate-pulse text-sm font-semibold">
                    Business Loan
                  </span>
                  <span className="animate-blink text-xs mt-0.5">
                    Click to Apply
                  </span>
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
            <a
              key={index}
              href="#"
              className="block max-w-sm p-6 border rounded-lg shadow-md bg-white transition-transform duration-300 hover:scale-105"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">
                {card.title}
              </h5>
              <p className="font-normal text-gray-600">{card.description}</p>
            </a>
          ))}
        </div>
      </div>

      <div className=" flex flex-col md:flex-row items-center justify-between p-8">
        {/* Left Side - Title & Subtitle */}
        <div
          className="md:w-1/2 text-center md:text-left"
          data-aos="zoom-in"
        >
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
        <div
          className="md:w-1/2 flex justify-center mt-6 md:mt-0"
          data-aos="flip-down"
        >
          <Image
            src="/carr.png"
            alt="User profile"
            width={250}
            height={250}
            className="w-50 h-50 bg-center bg-cover rounded-full"
          />
        </div>
      </div>

      <Partner />
      <section data-aos="fade-up" className="p-8  rounded-lg ">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-700">Loan Information</h1>
        <div className="flex flex-col md:flex-row gap-6">
          <div data-aos="flip-left" className="flex-1 p-6 border-black border-1 rounded-lg shadow-md shadow-white ">

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

          <div data-aos="flip-right" className="flex-1 p-6 border-black border-1 rounded-lg shadow-md shadow-white">
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
        className="h-1 w-3/4 mx-auto border-none rounded-lg animate-pulse"
        style={{
          backgroundImage: `linear-gradient(
            135deg,
            #3498db 25%,
            transparent 25%,
            transparent 50%,
            #3498db 50%,
            #3498db 75%,
            transparent 75%
        )`,
          backgroundSize: "20px 20px",
          animation: "moveGradient 3s linear infinite",
        }}
      />

      <style jsx>{`
    @keyframes moveGradient {
        0% { background-position: 0 0; }
        100% { background-position: 20px 20px; }
    }
`}</style>

      <div>
        <section className="mb-1 p-5">
          <div className="container px-4 py-8 mx-auto">
            <div className="grid items-center gap-6 xl:grid-cols-5">
              {/* Left Section */}
              <div className="max-w-xl mx-auto space-y-4 text-center xl:col-span-2 xl:text-left">
                <h2 className="text-2xl font-bold leading-snug">
                  Instant Funds, Endless Possibilities
                </h2>
                <p className="text-base opacity-80">
                  Get quick access to funds whenever you need them! Fast approvals,
                  hassle-free processing, and secure transactions make fulfilling
                  your financial needs easier than ever.
                </p>
                {/* <div className="w-full mb-4 hidden md:block">
            <Image
              src="/allloan11.png"
              alt="Instant Funds"
              width={600}
              height={300}
              className="h-[300px] w-auto object-contain rounded-lg mx-auto"
              unoptimized
            />
          </div> */}
              </div>

              {/* Right Section - Cards */}
              <div className="p-4 xl:col-span-3">
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Loan Cards (4 total) */}
                  {[
                    {
                      title: "Personal Loan",
                      text:
                        "Get instant personal loans with KeshvaCredit at competitive rates.  minimal docs, quick approval & RBI-regulated partners.",
                      icon:
                        "https://www.getzype.com/wp-content/uploads/2025/02/Personal-Loan-Instant-Disbursal-1.svg",
                    },
                    {
                      title: "Home Loan",
                      text:
                        "Affordable home loans at competitive interest rates. Quick approval, minimal paperwork, flexible options, and RBI-backed partners.",
                      icon:
                        "https://www.getzype.com/wp-content/uploads/2025/02/Collateral-Free-Loans.svg",
                    },
                    {
                      title: "Credit Card",
                      text:
                        "Borrow up to your limit for purchases or bills. Repay monthly. Flexible and secure credit tool for all needs.",
                      icon:
                        "https://www.getzype.com/wp-content/uploads/2025/02/Affordable-Interest-Rate.svg",
                    },
                    {
                      title: "Business Loan",
                      text:
                        "Enjoy smooth transactions, premium perks, cashback and secure RBI-backed loan services. Low interest, high rewards.",
                      icon:
                        "https://www.getzype.com/wp-content/uploads/2025/02/Flexible-repayment-options.svg",
                    },
                  ].map((card, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 hover:shadow-lg transition-all text-sm transform hover:scale-105"
                    >

                      <p>{card.text}</p>
                      <div className="flex items-center mt-3 space-x-3">
                        <Image
                          src={card.icon}
                          alt={card.title}
                          width={40}
                          height={40}
                          unoptimized
                          className="w-10 h-10 rounded-full"
                        />
                        <p className="font-medium">{card.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center p-6 gap-5">
        <div className="max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight ">
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
            <h5 className="mb-2 text-2xl font-bold tracking-tight ">
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
        <div
          className="w-full md:w-[30%] p-4 flex justify-center items-center"
          data-aos=""
        >
          <div className="relative mx-auto border-gray-800 bg-gray-800 border-[10px] rounded-[2rem] h-[400px] w-[200px] md:h-[500px] md:w-[250px]">
            <div className="rounded-[1.5rem] overflow-hidden w-[180px] h-[380px] md:w-[230px] md:h-[480px]">
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
        <div
          className="py-8 px-4 md:py-12 md:px-8 w-full"
        >
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
                    data-aos="zoom-in"

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
      <section className="text-center justify-center items-center p-8">
        <Howitworks />
      </section>
      <RatingAndReviews />
      <section
        className="py-16  text-center">
        <h2 className="text-3xl font-semibold  mb-8">Our Statistics </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div data-aos="flip-right" className="flex flex-col items-center ">
            <div className="w-20 h-20 relative border-2 border-gray-300 rounded-full">
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
          <div data-aos="flip-left" className="flex flex-col items-center">
            <div className="w-20 h-20 relative border-2 border-gray-300 rounded-full">
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
          <div data-aos="flip-right" className="flex flex-col items-center">
            <div className="w-20 h-20 relative border-2 border-gray-300 rounded-full">
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
          <div data-aos="flip-left" className="flex flex-col items-center">
            <div className="w-20 h-20 relative border-2 border-gray-300 rounded-full">
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
