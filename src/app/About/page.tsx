"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import loanAnimation from "../../animations/loan.json";
import 'animate.css';
import Partner from "../Component/Partner/Partner";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
function About() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            1ST Loan Marketplace – Simplifying Your Loan Journey
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Simplifying the Borrowing Experience with Instant Approvals, Best
            Interest Rates, and Trusted Lenders for Personal, Business, and
            Emergency Loans.
          </p>
        </div>
      </section>

      {/* What Makes Us Special Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold  animate__animated animate__fadeInDown">
            What Makes Us Special
          </h2>
          <p className="mt-4  text-lg animate__animated animate__fadeInDown animate__delay-1s max-w-4xl mx-auto">
            At <strong>KeshvaCredit</strong>, we believe that financial solutions should be simple, transparent, and tailored to your needs. That’s why we’ve built a platform designed for convenience, speed, and trust. Whether you’re applying for a loan or exploring financial products, KeshvaCredit empowers you with seamless digital experiences and complete peace of mind.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-start">

<div className="flex flex-col items-center">
  <Image src="https://cdn-icons-gif.flaticon.com/7920/7920939.gif" alt="Fast Approval" width={64} height={64} className="mb-2" />
  <span className="font-semibold text-center">Fast Approval</span>
</div>

<div className="flex flex-col items-center">
  <Image src="https://cdn-icons-png.flaticon.com/128/7325/7325279.png" alt="Quick Disbursal" width={64} height={64} className="mb-2" />
  <span className="font-semibold text-center">Quick Disbursal</span>
</div>

<div className="flex flex-col items-center">
  <Image src="https://cdn-icons-png.flaticon.com/128/4660/4660937.png" alt="100% Paperless" width={64} height={64} className="mb-2" />
  <span className="font-semibold text-center">100% Paperless</span>
</div>

<div className="flex flex-col items-center">
  <Image src="https://cdn-icons-png.flaticon.com/128/3875/3875894.png" alt="Wide Product Range" width={64} height={64} className="mb-2" />
  <span className="font-semibold text-center">Wide Product Range</span>
</div>

<div className="flex flex-col items-center">
  <Image src="https://cdn-icons-png.flaticon.com/128/5579/5579459.png" alt="Hassle-free Docs" width={64} height={64} className="mb-2" />
  <span className="font-semibold text-center">Hassle-free Docs</span>
</div>

<div className="flex flex-col items-center">
  <Image src="https://cdn-icons-gif.flaticon.com/6569/6569170.gif" alt="Safe Data" width={64} height={64} className="mb-2" />
  <span className="font-semibold text-center">Safe Data Ecosystem</span>
</div>

</div>

        </div>
      </section>



      {/* Who We Are Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="px-4 lg:px-[10%]">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl font-bold text-gray-800 animate__animated animate__fadeInLeft">
                Who We Are
              </h2>
              <p className="mt-4 text-gray-700 text-lg animate__animated animate__fadeInLeft animate__delay-1s">
                At KeshvaCredit, we revolutionize the lending experience by connecting borrowers with trusted lenders. Our dynamic platform makes securing a loan—be it personal, business, or emergency—fast, transparent, and stress-free.
              </p>

            </div>
            <div className="lg:w-1/2 flex items-center justify-center animate__animated animate__fadeInRight">
  <Lottie animationData={loanAnimation} loop={true} className="w-full h-full" />
</div>
          </div>
        </div>
      </section>


      {/* Partners Section */}
      <section className="py-20 mt-5">
        <Partner />
      </section>
      <hr />

      {/* Collaboration Section */}
      {/* <section className="py-24 -mt-16 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
              <div className="pt-24 flex justify-center">
                <Image
                  className="rounded-xl object-cover"
                  src="/situ.jpg"
                  alt="Team members working"
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex flex-col justify-center gap-y-6">
                <Image
                  className="rounded-xl object-cover"
                  src="/firls.jpeg"
                  alt="Successful collaboration"
                  width={500}
                  height={500}
                />
                <Image
                  className="rounded-xl object-cover"
                  src="/gi.jpg"
                  alt="Successful collaboration"
                  width={500}
                  height={300}
                />
              </div>
            </div>
            <div className="w-full -mt-6 flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className=" text-4xl font-bold leading-normal lg:text-start text-center">
                    Empowering Each Other to Succeed
                  </h2>
                  <p className=" text-base font-normal leading-relaxed lg:text-start text-center">
                    Every project we&rsquo;ve undertaken has been a
                    collaborative effort, where every person involved has left
                    their mark.
                  </p>
                </div>
                <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                  <div className="flex-col justify-start items-start inline-flex">
                    <h3 className=" text-4xl font-bold">33+</h3>
                    <h6 className=" text-base font-normal">
                      Years of Experience
                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-gray-900 text-4xl font-bold">13+</h4>
                    <h6 className="text-gray-500 text-base font-normal">
                      Trusted Lending
                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-gray-900 text-4xl font-bold">500K+</h4>
                    <h6 className="text-gray-500 text-base font-normal">
                      Happy Customers
                    </h6>
                  </div>
                </div>
              </div>
              <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-md justify-center items-center flex">
                <span className="px-1.5 text-white text-sm font-medium leading-6">
                  Read More
                </span>
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center ">
            <h2 className="text-4xl font-bold text-gray-800 animate__animated animate__fadeInDown">
              How It Works
            </h2>
            <p className="mt-4 text-gray-600 text-lg animate__animated animate__fadeInDown animate__delay-1s">
              Our simple three-step process gets you from application to approved—fast.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1: Choose Loan */}
            <div className="flex flex-col items-center animate__animated animate__fadeInUp">
              <div className="w-35 h-35 relative">
                <Image
                  src="https://cdn-icons-gif.flaticon.com/16664/16664304.gif" // Replace with an image representing loan selection
                  alt="Select Loan"
                  fill
                  className="rounded-full shadow-lg object-cover"
                />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-gray-800">Select Loan</h3>
              <p className="mt-2 text-gray-600 text-center">
                Browse our diverse loan options to find the one that fits your needs.
              </p>
            </div>
            {/* Step 2: Instant Approval */}
            <div className="flex flex-col items-center animate__animated animate__fadeInUp animate__delay-1s">
              <div className="w-32 h-32 relative">
                <Image
                  src="https://cdn-icons-gif.flaticon.com/17904/17904955.gif" // Replace with an image of instant approval iconography
                  alt="Instant Approval"
                  fill
                  className="rounded-full shadow-lg object-cover"
                />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-gray-800">Instant Approval</h3>
              <p className="mt-2 text-gray-600 text-center">
                Apply online and get instant approval from our network of trusted lenders.
              </p>
            </div>
            {/* Step 3: Receive Funds */}
            <div className="flex flex-col items-center animate__animated animate__fadeInUp animate__delay-2s">
              <div className="w-32 h-32 relative">
                <Image
                  src="https://cdn-icons-gif.flaticon.com/11321/11321408.gif" // Replace with an image indicating fund transfer
                  alt="Receive Funds"
                  fill
                  className="rounded-full shadow-lg object-cover"
                />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-gray-800">Receive Funds</h3>
              <p className="mt-2 text-gray-600 text-center">
                Have your funds disbursed to your account quickly and securely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
          <a
            href="#"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800"
          >
            <span className="text-xs bg-blue-600 rounded-full px-4 py-1.5 mr-3">
              New
            </span>{" "}
            <span className="text-sm font-medium">
              Any Query to Contact With us We are here to help you 24/7
            </span>
            <svg
              className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
            Empowering Dreams, Financing the Future
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
            At Keshvacredit, we connect borrowers with the right lenders,
            leveraging technology and innovation to unlock financial
            opportunities and drive sustainable growth.
          </p>
          <form className="w-full max-w-md mx-auto">
            <label
              htmlFor="default-email"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Email sign-up
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 rtl:inset-x-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="email"
                id="default-email"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your email here..."
                required
              />
              <button
                type="submit"
                className="absolute right-2.5 bottom-2.5 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
      </section>

      {/* Footer Tagline */}
      <div className="h-10">
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-3">ॐ नमो भगवते वासुदेवाय</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
