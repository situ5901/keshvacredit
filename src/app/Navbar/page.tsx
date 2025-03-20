"use client";

import Link from "next/link";
import { useModal } from "@/app/context/ModalContext";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Sun, Moon } from "lucide-react";

const LightModeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button onClick={toggleTheme} className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useModal();

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav id="navbar" className="fixed top-0 left-0 w-full z-50 border-b shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-1 rtl:space-x-reverse">
          <Image src="/logo.png" className="h-10" width={150} height={150} alt="Logo" />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg md:hidden hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <div className={`${isOpen ? "block" : "hidden"} w-full md:flex md:items-center md:w-auto`}>
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8">
            <li><Link href="/" onClick={handleCloseMenu} className=" menu-item block py-2 px-3 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Home</Link></li>
            <li><Link href="/About" onClick={handleCloseMenu} className=" menu-item block py-2 px-3 rounded hover:bg-gray-200 dark:hover:bg-gray-700">About</Link></li>
            <li><Link href="/creditcard" onClick={handleCloseMenu} className="menu-item block py-2 px-3 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Credit Card</Link></li>
            <li><Link href="/Contact" onClick={handleCloseMenu} className=" menu-item block py-2 px-3 rounded hover:bg-gray-200 dark:hover:bg-gray-700">Contact</Link></li>
            <li ><LightModeSwitcher /></li>
            <li>
              <button
                type="button"
                onClick={openModal}
                className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-700 shadow-md dark:shadow-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
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
