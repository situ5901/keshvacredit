"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import loanAnimation from "../../animations/loan.json";
import Partner from "../Component/Partner/Partner";
import AOS from "aos";
import "aos/dist/aos.css";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

function About() {
   useEffect(() => {
      AOS.init({
       duration: 800,
      once: false, 
      mirror: true,
      });
    }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1
            className="mb-4 text-3xl font-extrabold tracking-tight leading-tight text-white md:text-5xl lg:text-6xl"
            style={{ animationDuration: "5s" }}
            data-aos="bounce"
          >
            1ST Loan Marketplace – Simplifying Your Loan Journey
          </h1>

          <p
            className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"
          >
            Simplifying the Borrowing Experience with Instant Approvals, Best
            Interest Rates, and Trusted Lenders for Personal, Business, and
            Emergency Loans.
          </p>
        </div>
      </section>

      {/* What Makes Us Special Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold">
            What Makes Us Special
          </h2>
          <p
            className="mt-4 text-lg max-w-4xl mx-auto"
          >
            At <strong>KeshvaCredit</strong>, we believe that financial solutions
            should be simple, transparent, and tailored to your needs. That’s
            why we’ve built a platform designed for convenience, speed, and
            trust. Whether you’re applying for a loan or exploring financial
            products, KeshvaCredit empowers you with seamless digital
            experiences and complete peace of mind.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-start">
            <div className="flex flex-col items-center" data-aos="fade-up">
              <Image
                src="https://cdn-icons-gif.flaticon.com/6844/6844383.gif"
                alt="Fast Approval"
                width={64}
                height={64}
                className="mb-2"
              />
              <span className="font-semibold text-center">Fast Approval</span>
            </div>

            <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="100">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/7325/7325279.png"
                alt="Quick Disbursal"
                width={64}
                height={64}
                className="mb-2"
              />
              <span className="font-semibold text-center">Quick Disbursal</span>
            </div>

            <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/4660/4660937.png"
                alt="100% Paperless"
                width={64}
                height={64}
                className="mb-2"
              />
              <span className="font-semibold text-center">100% Paperless</span>
            </div>

            <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="300">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/3875/3875894.png"
                alt="Wide Product Range"
                width={64}
                height={64}
                className="mb-2"
              />
              <span className="font-semibold text-center">Wide Product Range</span>
            </div>

            <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="400">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/5579/5579459.png"
                alt="Hassle-free Docs"
                width={64}
                height={64}
                className="mb-2"
              />
              <span className="font-semibold text-center">Hassle-free Docs</span>
            </div>

            <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="500">
              <Image
                src="https://cdn-icons-gif.flaticon.com/6569/6569170.gif"
                alt="Safe Data"
                width={64}
                height={64}
                className="mb-2"
              />
              <span className="font-semibold text-center">Safe Data Ecosystem</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="px-4 lg:px-[10%]">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-left">
              <h2 className="text-4xl font-bold text-gray-800">Who We Are</h2>
              <p className="mt-4 text-gray-700 text-lg" data-aos="fade-left" data-aos-delay="200">
                At KeshvaCredit, we revolutionize the lending experience by
                connecting borrowers with trusted lenders. Our dynamic platform
                makes securing a loan—be it personal, business, or emergency—fast,
                transparent, and stress-free.
              </p>
            </div>
            <div className="lg:w-1/2 flex items-center justify-center" data-aos="fade-right">
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

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center ">
            <h2 className="text-4xl font-bold text-gray-800" data-aos="fade-down">
              How It Works
            </h2>
            <p className="mt-4 text-gray-600 text-lg" data-aos="fade-down" data-aos-delay="200">
              Our simple three-step process gets you from application to approved—fast.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1: Choose Loan */}
            <div className="flex flex-col items-center" data-aos="fade-up">
              <div className="w-35 h-35 relative">
                <Image
                  src="https://cdn-icons-gif.flaticon.com/16664/16664304.gif"
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
            <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-32 h-32 relative">
                <Image
                  src="https://cdn-icons-gif.flaticon.com/17904/17904955.gif"
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
            <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-32 h-32 relative">
                <Image
                  src="https://cdn-icons-gif.flaticon.com/11321/11321408.gif"
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
            href="/Contact"
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
          <p className="mb-8  text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
            At Keshvacredit, we connect borrowers with the right lenders,
            leveraging technology and innovation to unlock financial
            opportunities and drive sustainable growth.
          </p>
          
        </div>
        <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
      </section>
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
