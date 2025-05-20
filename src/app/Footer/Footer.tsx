"use client";
import Link from "next/link";
import Image from "next/image";
import { useModal } from "@/app/context/ModalContext";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
  "Ladakh",
  "Chandigarh",
];

const formatStateForUrl = (stateName: string): string =>
  stateName.toLowerCase().replace(/\s+/g, "-");

function Footer() {
  const router = useRouter();
  const { openModal } = useModal();
  const [learnOpen, setLearnOpen] = useState<boolean>(false);

  const handleClickLoan = () => {
    const token = Cookies.get("user_token");
    const phone = Cookies.get("user_phone");

    if (token && phone) {
      router.push("/short-term-loan");
    } else {
      openModal();
    }
  };

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
                <li className="mb-4">
                  <button
                    onClick={handleClickLoan}
                    className="hover:underline text-left"
                  >
                    Personal Loan
                  </button>
                </li>
                <li className="mb-4">
                  <button
                    onClick={handleClickLoan}
                    className="hover:underline text-left"
                  >
                    Business Loan
                  </button>
                </li>
              </ul>
            </div>

            {/* Social Section */}
            <div className="ml-3">
              <h2 className="mb-6 text-sm font-semibold">FOLLOW US</h2>
              <ul className="font-medium flex flex-col gap-4">
                <li>
                  <Link
                    href="https://www.linkedin.com/company/keshvacredit/"
                    className="hover:opacity-80 hover:underline "
                  >
                    Linkedin
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/share/1ATVmsgGNK/"
                    className="hover:opacity-80 hover:underline"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/keshva_credit"
                    className="hover:opacity-80 hover:underline "
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://whatsapp.com/channel/0029Vb5j8WU65yD5kbrEth19"
                    className="hover:opacity-80 hover:underline"
                  >
                    WhatsApp
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
              <ul className="font-medium">
                <li className="mb-4 hover:underline">
                  <Link href="/Privacy">Privacy Policy</Link>
                </li>
                <li className="mb-4 hover:underline">
                  <Link href="/Lendercontact">Lender Contacts</Link>
                </li>
                <li className="mb-4 hover:underline">
                  <Link href="/grivience">Lender Grievances</Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:underline">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="w-full sm:mx-auto mt-1 mb-2 " />
        <div className="w-full text-center relative">
          <span className="text-sm  block">
            © 2025 Keshvacredit™. All Rights Reserved.
          </span>
          {/* Toggle */}
          <button
            onClick={() => setLearnOpen(!learnOpen)}
            className="inline-flex items-center  font-bold text-sm hover:text-blue-400 focus:outline-none"
          >
            Click for more loan option&apos;s&nbsp;{learnOpen ? "▲" : "▼"}
          </button>

          {/* Expanded links */}
          {learnOpen && (
            <ul className="flex flex-wrap justify-center gap-2 mt-4 mb-4 px-4">
              {states.map((stateName: string) => (
                <li key={stateName}>
                  <Link
                    href={`/loans/${formatStateForUrl(stateName)}`}
                    className="text-sm  hover:text-blue-400 hover:underline"
                  >
                    <h1>|| Personal Loan in {stateName} ||</h1>

                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
