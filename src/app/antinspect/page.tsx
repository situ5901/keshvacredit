"use client";
import { useEffect } from "react";

const AntiInspect = () => {
  useEffect(() => {
    // Block right-click
    const blockContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", blockContextMenu);

    // Block F12, Ctrl+Shift+I/J/U/C
    const blockKeys = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", blockKeys);

    // Optional: Detect devtools open via width difference
    const devToolCheck = setInterval(() => {
      if (window.outerWidth - window.innerWidth > 100) {
        document.body.innerHTML = "<h1>Dev Tools not allowed 🚫</h1>";
      }
    }, 1000);

    // Cleanup
    return () => {
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("keydown", blockKeys);
      clearInterval(devToolCheck);
    };
  }, []);

  return null;
};

export default AntiInspect;
