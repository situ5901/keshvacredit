"use client"; // ✅ Make it a client component
import Link from "next/link";
import { useModal } from "@/app/context/ModalContext";
import React, { useState } from "react";
import Image from "next/image";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useModal();

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-gray-200 dark:bg-gray-900 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-1 rtl:space-x-reverse"
        >
          <Image
            src="/logo.png" // ✅ Correct path
            className="h-10"
            width={150}
            height={150}
            alt="Flowbite Logo"
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Menu Items */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto`}
        >
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8">
            <li>
              <Link
                href="/"
                onClick={handleCloseMenu}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                onClick={handleCloseMenu}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                onClick={handleCloseMenu}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/creditcard"
                onClick={handleCloseMenu}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
              >
                Credit Card
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={openModal}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
