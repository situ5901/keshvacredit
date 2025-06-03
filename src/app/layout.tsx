import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClientLayout from "./ClientLayout"; 
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KeshvaCredit - Instant Loans and Financial Solutions",
  description:
    "KeshvaCredit offers seamless and reliable financial solutions, empowering you with quick access to loans. Explore a range of services tailored to your financial needs.",
  keywords: ["KeshvaCredit", "instant loan", "financial services", "business loan", "personal loan"],
  metadataBase: new URL("https://keshvacredit.com"),
  openGraph: {
    title: "KeshvaCredit - Instant Loans and Financial Solutions",
    description:
      "Quick and easy financial solutions with KeshvaCredit. Apply for personal or business loans online today.",
    url: "https://keshvacredit.com",
    siteName: "KeshvaCredit",
    type: "website",
    locale: "en_IN"
  },
  robots: "index, follow",
  authors: [{ name: "KeshvaCredit Team", url: "https://keshvacredit.com" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
      <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          rel="stylesheet"
        />
        <meta name="fast2sms" content="hrlKAztOKsIXhHeNdufteV7s6Ol2XU3h" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
