import React from "react";

function Page() {
  return (
    <>
      <div className="justify-center mb-20 items-center min-h-screen">
        <div className="mt-24 mx-auto max-w-[90%] md:max-w-[50rem] text-center text-[28px] md:text-[34px]">
          <h1 className="font-bold text-[34px]">
            Business Loans starting at{" "}
            <span className="text-blue-700">10.25%* </span> Interest Rates.
          </h1>
          <ul className="text-[16px] md:text-[18px] font-medium ml-4 md:ml-8 mt-2 text-left list-disc">
            <li>Minimal Documentation</li>
            <li>Quick Processing</li>
            <li>Lowest interest rate guaranteed</li>
            <li>Now compare pre-qualified offers from 70+ Top Lenders</li>
          </ul>
        </div>
        <form className=" form  max-w-lg mx-auto mt-5 -mt-10 p-6 border-2 border-gray-300 mb-20 rounded-lg shadow-2xl shadow-gray-500 dark:shadow-gray-800 gap-3">
          <h1 className="text-center font-bold text-[24px]">
            Basic Information
          </h1>
          <div className=" flex space-x-4 gap-5">
            {/* Name Input */}
            <div className=" relative flex items-center border-b-2 border-gray-300 dark:border-gray-600 w-1/2">
              <span className=" pr-2 absolute left-0 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a7 7 0 1 0 7 7 7 7 0 0 0-7-7Zm-4 8a4 4 0 0 1 8 0Zm4 6c-3.33 0-6 1.34-6 3v1h12v-1c0-1.66-2.67-3-6-3Z" />
                </svg>
              </span>
              <input
                type="text"
                id="floating-name"
                className="block py-2.5 pl-8 w-full text-sm  bg-transparent border-0 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating-name"
                className="absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 left-8 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >
                Name
              </label>
            </div>

            {/* Phone Input */}
            <div className="relative flex items-center border-b-2 border-gray-300 dark:border-gray-600 w-1/2">
              <span className="  pr-2 absolute left-0 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 19 18"
                >
                  <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                </svg>
              </span>
              <input
                type="text"
                id="floating-phone-number"
                className="block py-2.5 pl-8 w-full text-sm bg-transparent border-0 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating-phone-number"
                className="absolute text-sm   duration-300 transform -translate-y-6 scale-75 top-3 left-8 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >
                Phone Number
              </label>
            </div>
          </div>

          <div className="flex space-x-4 mt-6 gap-5">
            {/* Email Input */}
            <div className="relative flex items-center border-b-2 border-gray-300 dark:border-gray-600 w-1/2">
              <span className="  pr-2 absolute left-0 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6ZM4 6h16l-8 5L4 6Zm0 12V9l8 5 8-5v9H4Z" />
                </svg>
              </span>
              <input
                type="email"
                id="floating-email"
                className="block py-2.5 pl-8 w-full text-sm  bg-transparent border-0 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating-email"
                className="absolute text-sm   duration-300 transform -translate-y-6 scale-75 top-3 left-8 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >
                Email
              </label>
            </div>

            {/* Employee Type Input */}
            <div className="relative flex items-center border-b-2 w-1/2">
              <span className="pr-2 absolute left-0 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 14h-2v-4h-4v4H8l4 4 4-4ZM4 6h16v2H4V6Zm0 4h16v2H4v-2Z" />
                </svg>
              </span>
              <select
                id="employee-type"
                className="block py-2.5 pl-8 w-full text-sm border-0 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                defaultValue="" // Use defaultValue instead of setting selected on option
              >
                <option value="" disabled hidden>
                  Select Employee Type
                </option>
                <option value="salaried">Salaried</option>
                <option value="non-salaried">Non-Salaried</option>
                <option value="self-employed">Self-Employed</option>
              </select>

              <label
                htmlFor="employee-type"
                className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 left-8 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600"
              >
                Employee Type
              </label>
            </div>
          </div>

          <div className="flex space-x-4 mt-6 gap-5">
            {/* Email Input */}
            <div className="relative flex items-center border-b-2 border-gray-300 dark:border-gray-600 w-1/2">
              <span className="  pr-2 absolute left-0 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5Zm2 0v14h16V5H4Zm7 7a3 3 0 1 0-6 0 3 3 0 0 0 6 0ZM5.5 17a4.5 4.5 0 0 1 7 0H5.5ZM13 10h5a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2Zm0 4h5a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2Z" />
                </svg>
              </span>
              <input
                type="pancard"
                id="floating-pancard"
                className="block py-2.5 pl-8 w-full text-sm bg-transparent border-0 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating-pancard"
                className="absolute text-sm   duration-300 transform -translate-y-6 scale-75 top-3 left-8 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >
                Pancard
              </label>
            </div>

            <div className="relative flex items-center border-b-2 border-gray-300 dark:border-gray-600 w-1/2">
              <span className="  pr-2 absolute left-0 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 11 7 11s7-5.75 7-11a7 7 0 0 0-7-7Zm0 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
                </svg>
              </span>
              <input
                type="text"
                id="floating-pincode"
                className="block py-2.5 pl-8 w-full text-sm bg-transparent border-0 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating-pincode"
                className="absolute text-sm   duration-300 transform -translate-y-6 scale-75 top-3 left-8 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >
                PinCode
              </label>
            </div>
          </div>

          <div className="flex space-x-4 mt-6 gap-5">
            <div className="relative flex items-center border-b-2 border-gray-300 dark:border-gray-600 w-1/2">
              <span className="  pr-2 absolute left-0 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1c1.3 0 2.4.8 2.8 2h3.2a1 1 0 0 1 .7 1.7l-2.4 2.4c1.9 1.7 3.2 4.3 3.2 7.1 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-2.8 1.3-5.4 3.2-7.1L5.3 4.7A1 1 0 0 1 6 3h3.2c.4-1.2 1.5-2 2.8-2ZM9 16a1 1 0 1 0 2 0c0-.6.4-1 1-1s1 .4 1 1c0 .8-.3 1.5-.8 2H10a1 1 0 1 0 0 2h2v1a1 1 0 1 0 2 0v-1c1.2-.7 2-2 2-3.5 0-1.9-1.6-3.5-3.5-3.5S9 14.1 9 16Z" />
                </svg>
              </span>
              <input
                type="pancard"
                id="floating-loanAmount"
                className="block py-2.5 pl-8 w-full text-sm bg-transparent border-0 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating-loanAmount"
                className="absolute text-sm   duration-300 transform -translate-y-6 scale-75 top-3 left-8 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >
                LoanAmount
              </label>
            </div>

            <div className="relative flex items-center border-b-2 border-gray-300 dark:border-gray-600 w-1/2">
              <span className="  pr-2 absolute left-0 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 3H5a1 1 0 0 0 0 2h5.4c.9 0 1.7.3 2.4.8H5a1 1 0 0 0 0 2h8c-1.1 1.7-3 2.9-5 3.2a1 1 0 1 0 .2 2c2.8-.4 5.1-2 6.4-4.2L12.4 19a1 1 0 1 0 1.8.8l3-7A1 1 0 0 0 16 12h-4.3c.9-1 1.6-2.3 1.8-3.6A5 5 0 0 0 16 3Z" />
                </svg>
              </span>
              <input
                type="text"
                id="floating-Income"
                className="block py-2.5 pl-8 w-full text-sm  bg-transparent border-0 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating-Income"
                className="absolute text-sm   duration-300 transform -translate-y-6 scale-75 top-3 left-8 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >
                Income
              </label>
            </div>
          </div>

          <div className="flex space-x-4 mt-6 gap-5">
            <div className="relative flex items-center border-b-2 border-gray-300 dark:border-gray-600 w-1/2">
              <span className="  pr-2 absolute left-0 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 2a1 1 0 1 1 2 0v1h8V2a1 1 0 1 1 2 0v1h2a1 1 0 0 1 1 1v3H1V4a1 1 0 0 1 1-1h2V2a1 1 0 1 1 2 0v1Zm15 5H3v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7Zm-4 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                </svg>
              </span>
              <input
                type="dob"
                id="floating-dob"
                className="block py-2.5 pl-8 w-full text-sm  bg-transparent border-0 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating-dob"
                className="absolute text-sm   duration-300 transform -translate-y-6 scale-75 top-3 left-8 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
              >
                Date of Birth
              </label>
            </div>
          </div>
          <br />

          <div className="flex items-center">
            <input
              id="link-checkbox"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:outline-none dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="link-checkbox"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the
              <a
                href="#"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                {" "}
                terms and conditions
              </a>
              .
            </label>
          </div>

          <button
            type="button"
            className="w-full mt-5 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br active:bg-transparent active:ring-0 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Page;
