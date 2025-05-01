"use client";
import Link from "next/link";
import Image from "next/image";
import { useModal } from "@/app/context/ModalContext";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

function Footer() {
  const router = useRouter();
  const { openModal } = useModal();
  const handleClick = () => {
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

            {/* Social Media Icons - Always Aligned Left */}
           
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
                    onClick={handleClick}
                    className="hover:underline text-left"
                  >
                    Personal Loan
                  </button>
                </li>
                <br />
                <li>
                  <button
                    onClick={handleClick}
                    className="hover:underline text-left"
                  >
                    Business Loan
                  </button>
                </li>
              </ul>
            </div>
            <div className="ml-3">
              <h2 className="mb-6 text-sm font-semibold">FOLLOW US</h2>
              <ul className="font-medium flex flex-col  gap-4">
              <li>
                  <Link
                    href="https://www.linkedin.com/company/keshvacredit/" // <-- apna LinkedIn profile link daalna
                      className="hover:opacity-80 "
                  >
                   Linkedin
                  </Link>
              
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/share/1ATVmsgGNK/" // <-- yahan apna Facebook link daal
                    className="hover:opacity-80 "
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/keshva_credit" // <-- yahan apna Insta link daal
                    className="hover:opacity-80 "
                  >
                     Instagram
                  </Link>
                </li>
                   <li>
                  <Link
                    href="https://whatsapp.com/channel/0029Vb5j8WU65yD5kbrEth19"
                   className="hover:opacity-80 "
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
                <li className="mb-4">
                  <Link href="/Privacy">Privacy Policy</Link>
                </li>
                <li className="mb-4">
                  <Link href="/Lendercontact">Lender Contacts</Link>
                </li>
                <li className="mb-4">
                  <Link href="/grivience">Lender Grievances</Link>
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
        <hr className="w-full sm:mx-auto mt-1 mb-2 " />

        {/* Footer Bottom */}
        <div className=" text-center h-2 ">
          <span className="text-sm ">
            © 2025 Keshvacredit™. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
