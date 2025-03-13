// import React from "react";
// import Image from "next/image";
// import EmiCalculator from "./calculator/calculator";
// import Partner from "./Component/Partner/Partner";

// function page() {
//   return (
//     <>
//       <div
//         id="default-carousel"
//         className="relative w-full"
//         data-carousel="slide"
//       >
//         <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//           <div
//             className="hidden duration-700 ease-in-out"
//             data-carousel-item
//           ></div>
//           <div
//             className="hidden duration-700 ease-in-out"
//             data-carousel-item
//           ></div>

//           <div
//             className="hidden duration-700 ease-in-out"
//             data-carousel-item
//           ></div>

//           <div
//             className="hidden duration-700 ease-in-out"
//             data-carousel-item
//           ></div>

//           <div
//             className="hidden duration-700 ease-in-out"
//             data-carousel-item
//           ></div>
//         </div>

//         <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
//           <button
//             type="button"
//             className="w-3 h-3 rounded-full"
//             aria-current="true"
//             aria-label="Slide 1"
//             data-carousel-slide-to="0"
//           ></button>
//           <button
//             type="button"
//             className="w-3 h-3 rounded-full"
//             aria-current="false"
//             aria-label="Slide 2"
//             data-carousel-slide-to="1"
//           ></button>
//           <button
//             type="button"
//             className="w-3 h-3 rounded-full"
//             aria-current="false"
//             aria-label="Slide 3"
//             data-carousel-slide-to="2"
//           ></button>
//           <button
//             type="button"
//             className="w-3 h-3 rounded-full"
//             aria-current="false"
//             aria-label="Slide 4"
//             data-carousel-slide-to="3"
//           ></button>
//           <button
//             type="button"
//             className="w-3 h-3 rounded-full"
//             aria-current="false"
//             aria-label="Slide 5"
//             data-carousel-slide-to="4"
//           ></button>
//         </div>

//         <button
//           type="button"
//           className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//           data-carousel-prev
//         >
//           <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg
//               className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 6 10"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M5 1 1 5l4 4"
//               />
//             </svg>
//             <span className="sr-only">Previous</span>
//           </span>
//         </button>
//         <button
//           type="button"
//           className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//           data-carousel-next
//         >
//           <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg
//               className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 6 10"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="m1 9 4-4-4-4"
//               />
//             </svg>
//             <span className="sr-only">Next</span>
//           </span>
//         </button>
//       </div>

//       <div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-5">
//           <a
//             href="#"
//             className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
//           >
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//               Your Trust is Enough
//             </h5>
//             <p className="font-normal text-gray-700 dark:text-gray-400">
//               We believe in you—no collateral, no security deposits, just simple
//               and accessible credit.
//             </p>
//           </a>

//           <a
//             href="#"
//             className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
//           >
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//               Fast Support, Anytime
//             </h5>
//             <p className="font-normal text-gray-700 dark:text-gray-400">
//               Stuck with something? Contact us at hello@moneytap.com. Quick
//               responses, reliable solutions!
//             </p>
//           </a>

//           <a
//             href="#"
//             className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
//           >
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//               Unlimited Credit Access
//             </h5>
//             <p className="font-normal text-gray-700 dark:text-gray-400">
//               Apply once with Keshvacredit and enjoy instant credit. Withdraw
//               and use funds anytime, 24/7, all year round
//             </p>
//           </a>

//           <a
//             href="#"
//             className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
//           >
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//               Safe, Secure & Trusted
//             </h5>
//             <p className="font-normal text-gray-700 dark:text-gray-400">
//               We uphold the highest data security standards, ensuring privacy
//               with RBI-approved financial institutions.
//             </p>
//           </a>
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-100">
//         {/* Left Side - Title & Subtitle */}
//         <div className="md:w-1/2 text-center md:text-left">
//           <h1 className="text-3xl font-bold text-gray-900">
//             Avail Instant Loans from ₹2,000 to ₹20 Lakhs Quick, Hassle-Free, and
//             Secure
//           </h1>
//           <p className="text-lg text-gray-600 mt-2">
//             With CredMantra, achieve your financial goals effortlessly. We are
//             on a mission to ensure financial inclusion for every Indian!
//           </p>
//         </div>

//         {/* Right Side - Image */}
//         <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
//           <Image
//             src="https://via.placeholder.com/400"
//             alt="User profile"
//             width={50}
//             height={50}
//             className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
//           />
//         </div>
//       </div>

//       <div>
//         <section className="bg-blue-200 dark:text-gray-800">
//           <div className="container px-6 py-12 mx-auto">
//             <div className="grid items-center gap-4 xl:grid-cols-5">
//               <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
//                 <h2 className="text-4xl font-bold">
//                   Instant Funds, Endless Possibilities
//                 </h2>
//                 <p className="dark:text-gray-600">
//                   Get quick access to funds whenever you need them! Fast
//                   approvals, hassle-free processing, and secure transactions
//                   make fulfilling your financial needs easier than ever.
//                 </p>
//               </div>
//               <div className="p-6 xl:col-span-3">
//                 <div className="grid gap-4 md:grid-cols-2">
//                   <div className="grid content-center gap-4">
//                     <div className="p-6 rounded shadow-md dark:bg-gray-50">
//                       <p>
//                         Get instant personal loans with KeshvaCredit at
//                         competitive rates. Enjoy a seamless application process,
//                         minimal documentation, and quick approvals. Your data
//                         remains 100% secure with our strict security policies
//                         and trusted RBI-regulated partners. Apply now and
//                         achieve your financial goals effortlessly!
//                       </p>
//                       <div className="flex items-center mt-4 space-x-4">
//                         <Image
//                           src="https://www.getzype.com/wp-content/uploads/2025/02/Personal-Loan-Instant-Disbursal-1.svg"
//                           alt=""
//                           width={400}
//                           height={400}
//                           unoptimized
//                           className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
//                         />
//                         <div>
//                           <p className="text-lg font-semibold">
//                             Personal loans
//                           </p>
//                           <p className="text-sm dark:text-gray-600">
//                             CTO of Company Co.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="p-6 rounded shadow-md dark:bg-gray-50">
//                       <p>
//                         Get affordable home loans with KeshvaCredit at
//                         competitive interest rates. Enjoy quick approvals,
//                         minimal paperwork, and flexible repayment options. Our
//                         RBI-regulated partners ensure a hassle-free, secure
//                         borrowing experience. Trust us to make your
//                         homeownership dreams a reality with complete
//                         financial peace of mind.
//                       </p>
//                       <div className="flex items-center mt-4 space-x-4">
//                         <Image
//                           src="https://www.getzype.com/wp-content/uploads/2025/02/Collateral-Free-Loans.svg"
//                           alt=""
//                           width={400}
//                           height={400}
//                           unoptimized
//                           className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
//                         />
//                         <div>
//                           <p className="text-lg font-semibold">Home Loan</p>
//                           <p className="text-sm dark:text-gray-600">
//                             CTO of Company Co.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="grid content-center gap-4">
//                     <div className="p-6 rounded shadow-md dark:bg-gray-50">
//                       <p>
//                         Putant omnium elaboraret per ut. Id dicta tritani
//                         nominavi quo, mea id justo errem elaboraret. Agam mollis
//                         scripserit ea his, ut nec postea verear persecuti. Ea
//                         noster senserit eam, ferri omittantur ei nec. Id mel
//                         solet libris efficiantur, commune explicari et eos. Case
//                         movet ad est, sed tota vocent appetere ea.
//                       </p>
//                       <div className="flex items-center mt-4 space-x-4">
//                         <Image
//                           src="https://www.getzype.com/wp-content/uploads/2025/02/Affordable-Interest-Rate.svg"
//                           alt=""
//                           width={400}
//                           height={400}
//                           unoptimized
//                           className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
//                         />
//                         <div>
//                           <p className="text-lg font-semibold">Credit Card</p>
//                           <p className="text-sm dark:text-gray-600">
//                             CTO of Company Co.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="p-6 rounded shadow-md dark:bg-gray-50">
//                       <p>
//                         Unlock exclusive benefits with KeshvaCredit! Enjoy
//                         seamless transactions, top-tier security, and exciting
//                         rewards. With our RBI-governed partners, your financial
//                         safety is guaranteed. Experience hassle-free credit card
//                         services with cashback, low interest rates, and premium
//                         perks. Apply today and elevate your financial freedom!
//                       </p>
//                       <div className="flex items-center mt-4 space-x-4">
//                         <Image
//                           src="https://www.getzype.com/wp-content/uploads/2025/02/Flexible-repayment-options.svg"
//                           alt=""
//                           width={400}
//                           height={400}
//                           unoptimized
//                           className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
//                         />
//                         <div>
//                           <p className="text-lg font-semibold">Business Loan</p>
//                           <p className="text-sm dark:text-gray-600">
//                             CTO of Company Co.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>

//       <div className="flex justify-center items-center p-4 gap-5 bg-emerald-300 rounded-lg">
//         <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
//           <a href="#">
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//               instant personal loan 2025
//             </h5>
//           </a>
//           <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//             Secure Instant Personal Loans with KashaveCredit – Quick Approvals,
//             Hassle-Free Process, Minimal Documentation, and Fast Fund Disbursal
//             to Meet Your Financial Needs Effortlessly
//           </p>
//           <a
//             href="#"
//             className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             Read more
//             <svg
//               className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 14 10"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 5h12m0 0L9 1m4 4L9 9"
//               />
//             </svg>
//           </a>
//         </div>

//         <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
//           <a href="#">
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//               instant business loan 2025
//             </h5>
//           </a>
//           <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//             Secure Instant Business Loans with KashaveCredit – Fast Approvals,
//             Hassle-Free Process, Minimal Documentation, and Quick Fund Disbursal
//             to Grow Your Business Effortlessly
//           </p>
//           <a
//             href="#"
//             className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             Read more
//             <svg
//               className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 14 10"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 5h12m0 0L9 1m4 4L9 9"
//               />
//             </svg>
//           </a>
//         </div>
//       </div>

//       <div className="flex h-[85vh]">
//         {/* Left Side (70%) */}
//         <div className="w-[30%] bg-white p-4 flex justify-center items-center p-20">
//           <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[10px] rounded-[2rem] h-[500px] w-[250px]">
//             <div className="h-[24px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[12px] top-[50px] rounded-s-lg"></div>
//             <div className="h-[36px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[12px] top-[100px] rounded-s-lg"></div>
//             <div className="h-[36px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[12px] top-[150px] rounded-s-lg"></div>
//             <div className="h-[48px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[12px] top-[120px] rounded-e-lg"></div>
//             <div className="rounded-[1.5rem] overflow-hidden w-[230px] h-[480px] bg-white dark:bg-gray-800">
//               <Image
//                 src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
//                 className="dark:hidden w-full h-full"
//                 alt="Mockup Light"
//                 width={400}
//                 height={400}
//                 unoptimized
//               />
//               <Image
//                 src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
//                 className="hidden dark:block w-full h-full"
//                 alt="Mockup Dark"
//                 width={400}
//                 height={400}
//                 unoptimized
//               />
//             </div>
//           </div>
//         </div>

//         {/* Right Side (30%) */}
//         <div className="bg-white">
//           <div className="mx-auto bg-white max-w-7xl px-6 lg:px-8">
//             <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
//               <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
//                 <div className="relative pl-16">
//                   <dt className="text-base/7 font-semibold text-gray-900">
//                     <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
//                       <svg
//                         className="size-6 text-white"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke="currentColor"
//                         aria-hidden="true"
//                         data-slot="icon"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
//                         />
//                       </svg>
//                     </div>
//                     Happy customers
//                   </dt>
//                   <dd className="mt-2 text-base/7 text-gray-600">
//                     Trusted by over 5 lakh happy customers! Experience seamless
//                     service, secure transactions, and unmatched financial
//                     benefits with us.
//                   </dd>
//                 </div>
//                 <div className="relative pl-16">
//                   <dt className="text-base/7 font-semibold text-gray-900">
//                     <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
//                       <svg
//                         className="size-6 text-white"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke="currentColor"
//                         aria-hidden="true"
//                         data-slot="icon"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
//                         />
//                       </svg>
//                     </div>
//                     Loans disbursed
//                   </dt>
//                   <dd className="mt-2 text-base/7 text-gray-600">
//                     Over ₹1000 Cr in loans disbursed! Quick approvals,
//                     hassle-free processing, and secure transactions to meet your
//                     financial needs seamlessly. dolor eget. Sem sodales gravida
//                     quam turpis enim lacus amet.
//                   </dd>
//                 </div>
//                 <div className="relative pl-16">
//                   <dt className="text-base/7 font-semibold text-gray-900">
//                     <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
//                       <svg
//                         className="size-6 text-white"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke="currentColor"
//                         aria-hidden="true"
//                         data-slot="icon"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
//                         />
//                       </svg>
//                     </div>
//                     Years of service
//                   </dt>
//                   <dd className="mt-2 text-base/7 text-gray-600">
//                     Celebrating 2 years of trust, reliability, and seamless
//                     financial solutions. Empowering customers with secure, fast,
//                     and hassle-free credit services!
//                   </dd>
//                 </div>
//                 <div className="relative pl-16">
//                   <dt className="text-base/7 font-semibold text-gray-900">
//                     <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
//                       <svg
//                         className="size-6 text-white"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth="1.5"
//                         stroke="currentColor"
//                         aria-hidden="true"
//                         data-slot="icon"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
//                         />
//                       </svg>
//                     </div>
//                     Trusted Lenders
//                   </dt>
//                   <dd className="mt-2 text-base/7 text-gray-600">
//                     Partnering with verified and reliable lenders to provide you
//                     with safe, transparent, and hassle-free financial solutions
//                     tailored to your needs.
//                   </dd>
//                 </div>
//               </dl>
//             </div>
//           </div>
//         </div>
//       </div>
//       <hr />
//       <EmiCalculator />
//       <Partner />
//     </>
//   );
// }

// export default page;



import React from 'react'

function page() {
  return (
    <div>
     <section className="h-screen flex items-center justify-center bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12">
        <svg className="mx-auto mb-4 w-10 h-10 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M331.8 224.1c28.29 0 54.88 10.99 74.86 30.97l19.59 19.59c40.01-17.74 71.25-53.3 81.62-96.65c5.725-23.92 5.34-47.08 .2148-68.4c-2.613-10.88-16.43-14.51-24.34-6.604l-68.9 68.9h-75.6V97.2l68.9-68.9c7.912-7.912 4.275-21.73-6.604-24.34c-21.32-5.125-44.48-5.51-68.4 .2148c-55.3 13.23-98.39 60.22-107.2 116.4C224.5 128.9 224.2 137 224.3 145l82.78 82.86C315.2 225.1 323.5 224.1 331.8 224.1zM384 278.6c-23.16-23.16-57.57-27.57-85.39-13.9L191.1 158L191.1 95.99l-127.1-95.99L0 63.1l96 127.1l62.04 .0077l106.7 106.6c-13.67 27.82-9.251 62.23 13.91 85.39l117 117.1c14.62 14.5 38.21 14.5 52.71-.0016l52.75-52.75c14.5-14.5 14.5-38.08-.0016-52.71L384 278.6zM227.9 307L168.7 247.9l-148.9 148.9c-26.37 26.37-26.37 69.08 0 95.45C32.96 505.4 50.21 512 67.5 512s34.54-6.592 47.72-19.78l119.1-119.1C225.5 352.3 222.6 329.4 227.9 307zM64 472c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24S88 434.7 88 448C88 461.3 77.25 472 64 472z"/></svg>
        <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl dark:text-white">Under Maintenance</h1>
        <p className="font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400">Our Enterprise administrators are performing scheduled maintenance.</p>
    </div>
</section>

    </div>
  )
}

export default page

