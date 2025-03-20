"use client";
import Link from "next/link";
import Image from "next/image";
import { useModal } from "@/app/context/ModalContext";

function Footer() {
  const { openModal } = useModal();

  return (
    <footer id="footer" className="border-t transition-colors duration-300">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="-mt-5 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                className="h-15 me-3"
                width={200}
                height={230}
                alt="Logo"
              />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* Resources Section */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">
                Resources
              </h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link href="/creditcard" className="hover:underline">
                    Credit Card
                  </Link>
                </li>
                <li>
                  <button
                    onClick={openModal}
                    className="hover:underline text-left"
                  >
                    Personal Loan
                  </button>
                </li>
                <br />
                <li>
                  <button
                    onClick={openModal}
                    className="hover:underline text-left"
                  >
                    Business Loan
                  </button>
                </li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div>
              <h2 className="mb-6 text-sm font-semibold">Follow us</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    On Working
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link href="/Privacy">Privacy Policy</Link>
                </li>
                <li className="mb-4">
                  <Link href="/">Lender Contacts</Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 sm:mx-auto lg:my-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col items-center text-center">
          <span className="text-sm">
            © 2025 Keshvacredit™. All Rights Reserved.
          </span>

          {/* Social Media Icons */}
          <div className="flex justify-center mt-4 space-x-5">
            <a href="#" className="hover:opacity-80">
              <i className="fab fa-facebook"></i>
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="hover:opacity-80">
              <i className="fab fa-twitter"></i>
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="hover:opacity-80">
              <i className="fab fa-github"></i>
              <span className="sr-only">Github</span>
            </a>
            <a href="#" className="hover:opacity-80">
              <i className="fab fa-instagram"></i>
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
