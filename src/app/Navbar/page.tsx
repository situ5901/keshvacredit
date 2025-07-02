"use client";

import Link from "next/link";
import { useModal } from "@/app/context/ModalContext";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Sun, Moon } from "lucide-react";
import { FaUser } from "react-icons/fa";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

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
    <button
      onClick={toggleTheme}
      className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useModal();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // On mount, check if the user is logged in by looking for user_token
  useEffect(() => {
    const checkLoginStatus = () => {
      const token = Cookies.get("user_token");
      setIsLoggedIn(!!token);
    };

    // Initial check
    checkLoginStatus();

    // Listen for custom login status changes (e.g., after OTP verification)
    window.addEventListener("login-status-changed", checkLoginStatus);

    return () => {
      window.removeEventListener("login-status-changed", checkLoginStatus);
    };
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
  const handleNavItemClick = (requiresAuth = false) => {
    setIsOpen(false); // Close mobile menu
    if (requiresAuth) {
      handleClick(); // Run auth logic
    }
  };


  const handleAuthClick = () => {
    if (isLoggedIn) {
      Cookies.remove("user_token");
      Cookies.remove("user_phone");
      Cookies.remove("isLoggedIn");
      localStorage.removeItem("userData");
      setIsLoggedIn(false);
      window.dispatchEvent(new Event("login-status-changed"));
    } else {
      openModal();
    }
  };



  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full z-50 border-b shadow-md"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-1 rtl:space-x-reverse"
        >
          <Image
            src="/logo.png"
            className="h-10"
            width={150}
            height={150}
            alt="Logo"
          />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg md:hidden hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
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

        <div
          className={`${isOpen ? "block" : "hidden"
            } w-full md:flex md:items-center md:w-auto`}
        >
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8">
            <li>
              <Link
                href="/"
                onClick={() => handleNavItemClick()}
                className="menu-item block py-2 px-3 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                onClick={() => handleNavItemClick()}
                className="menu-item block py-2 px-3 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Utm-links"
                onClick={() => {
                  handleNavItemClick()

                }}
                className="menu-item block py-2 px-3 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Quick links
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                onClick={() => handleNavItemClick()}
                className="menu-item block py-2 px-3 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                Contact
              </Link>
            </li>
            <div className="custom-profile flex items-center pl-1 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm py-2 w-30 md:w-auto md:h-10">
              <li>
                <Link
                  href="/Profile"
                  onClick={() => {
                    handleNavItemClick()
                    handleClick();

                  }}

                  className="menu-item flex items-center rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <FaUser className="text-lg" />
                </Link>
              </li>
              <div className="h-6 border-l border-gray-300 mx-2"></div>
              <li className="p-1">
                <LightModeSwitcher />
              </li>
            </div>
            <li>
              <button
                type="button"
                onClick={() => {
                  handleNavItemClick();
                  handleAuthClick();
                }}
                className="bg-blue-600 text-white hover:bg-blue-700 shadow-md font-medium rounded-lg text-sm px-5 py-2.5 mt-[5px] md:mt-0 w-[120px] h-[38px] md:w-auto"
              >
                {isLoggedIn ? "Sign Out" : "Sign In"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
