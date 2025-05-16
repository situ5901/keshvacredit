"use client";
import { useEffect } from 'react';

interface PopupProps {
  type: string;
  message: string;
  onClose: () => void;
}

export default function Popup({ type, message, onClose }: PopupProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-5 right-5 p-3 rounded text-white z-50 transition-opacity duration-500 ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
      }`}
    >
      {message}
    </div>
  );
} 