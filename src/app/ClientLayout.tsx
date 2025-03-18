"use client"; // ✅ Now this can use client-side hooks and context

import { ModalProvider } from "@/app/context/ModalContext";
import Navbar from "./Navbar/page";
import Footer from "./Footer/Footer";
import GlobalModal from "./Component/Modals/GlobalModal";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ModalProvider>
      <Navbar />
      {children}
      <GlobalModal />
      <Footer />
    </ModalProvider>
  );
}
