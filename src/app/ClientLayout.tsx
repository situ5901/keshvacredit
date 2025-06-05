"use client";

import { ModalProvider } from "@/app/context/ModalContext";
import Navbar from "./Navbar/page";
import Footer from "./Footer/Footer";
import GlobalModal from "./Component/Modals/GlobalModal";
import Bot from "./bott/page";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      <Navbar />
      {children}
      <GlobalModal />
      <Bot />
      <Footer />
    </ModalProvider>
  );
}
