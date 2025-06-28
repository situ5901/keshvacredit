"use client";

import { useEffect } from "react";
import { ModalProvider } from "@/app/context/ModalContext";
import Navbar from "./Navbar/page";
import Footer from "./Footer/Footer";
import GlobalModal from "./Component/Modals/GlobalModal";
import Bot from "./bott/page";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const disableInspect = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
      }
    };

    const disableRightClick = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener("keydown", disableInspect);
    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("keydown", disableInspect);
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

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
