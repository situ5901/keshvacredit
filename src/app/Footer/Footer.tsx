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
      router.push("/short-term-loan"); // ✅ Token & Phone both exist
    } else {
      openModal(); // ❌ If either is missing, open modal
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
            <div className="flex justify-start mt-3 ml-2 mb-1 space-x-3 sm:space-x-4 lg:space-x-5">
              <a href="#" className="hover:opacity-80 text-xl">
                <i className="fab fa-facebook"></i>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:opacity-80 text-xl">
                <i className="fab fa-twitter"></i>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://whatsapp.com/channel/0029Vb5j8WU65yD5kbrEth19 " className="hover:opacity-80 text-xl">
                <i className="fab fa-whatsapp"></i>
                <span className="sr-only">WhatsApp</span>
              </a>

              <a href="#" className="hover:opacity-80 text-xl">
                <i className="fab fa-instagram"></i>
                <span className="sr-only">Instagram</span>
              </a>
            </div>
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

            {/* Follow Us Section */}
            <div className="text-center">
              <h2 className="mb-6 text-sm font-semibold">FOLLOW US</h2>
              <ul className="font-medium flex flex-col items-center gap-4">
                <li>
                  <Link
                    href="https://whatsapp.com/channel/0029Vb5j8WU65yD5kbrEth19"
                    className="hover:opacity-80 text-3xl text-green-500"
                  >
                    <i className="fab fa-whatsapp"></i>
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
