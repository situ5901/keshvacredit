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
  const handleClickbusiness = () => {
    const token = Cookies.get("user_token");
    const phone = Cookies.get("user_phone");

    if (token && phone) {
      router.push("/business-loan");
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
            <p className="text-sm text-center mt-2 font-bold uppercase">SAFE AND SECURE</p>
          </div>


          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
            {/* Resources Section */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase underline">Resources</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <button onClick={handleClickLoan} className="hover:underline text-left">
                    Personal Loan
                  </button>
                </li>
                <li className="mb-4">
                  <button onClick={handleClickbusiness} className="hover:underline text-left">
                    Business Loan
                  </button>
                </li>
                <li className="mb-4">
                  <Link href="/directlender" className="hover:underline">
                    Direct lender loan
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/creditcard" className="hover:underline">
                    Credit Card
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/goldloan" className="hover:underline">
                    Gold Loan
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Section */}
            <div className="ml-3">
              <h2 className="mb-6 text-sm font-semibold  uppercase underline ">FOLLOW US</h2>
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
                <li>
                  <Link
                    href="https://www.youtube.com/@KeshvaCreditFilmy"
                    className="hover:opacity-80 hover:underline"
                  >
                    YouTube
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com/KeshvaCredit?s=09"
                    className="hover:opacity-80 hover:underline"
                  >
                    X (Twitter)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase underline">Legal</h2>
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

            {/* Important Links Section */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase underline">other</h2>
              <ul className="font-medium">
                <li className="mb-4 hover:underline">
                  <Link href="/blog">Our Blogs</Link>
                </li>
                <li className="mb-4 hover:underline">
                  <Link href="/Careers">register as partner</Link>
                </li>
                <li className="mb-4 hover:underline">
                  <Link href="/Contact">Contact us </Link>
                </li>
                <li className="mb-4 hover:underline">
                  <Link href="/faq">FAQ</Link>
                </li>
                <li className="mb-4 hover:underline">
                  <Link href="/allcalculators">EMI Calculator</Link>
                </li>
                <li className="mb-4 hover:underline">
                  <Link href="https://sachet.rbi.org.in/">RBI sachet</Link>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <hr className="w-full sm:mx-auto mt-1 mb-2 " />
        <div className="w-full text-center relative">
          <span className="text-sm block">
            © 2025 Keshvacredit™. All Rights Reserved -
            CIN: <span className="font-medium">U70200HR2025PTC129612</span>
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
          <div className="flex flex-wrap  gap-6 justify-center text-sm ">
            <a href="https://myaadhaar.uidai.gov.in/" target="_blank" className="hover:underline">Download Aadhaar Card</a>
            <a href="https://www.incometax.gov.in/iec/foportal/" target="_blank" className="hover:underline">Check PAN Card Status</a>
            <a href="https://www.bankifsccode.com/" target="_blank" className="hover:underline">Find Bank IFSC Code</a>
            <a href="https://uidai.gov.in/my-aadhaar/get-aadhaar.html" target="_blank" className="hover:underline">Check Aadhaar Status</a>
            <a href="https://www.cibil.com/" target="_blank" className="hover:underline">View Your CIBIL Score</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
