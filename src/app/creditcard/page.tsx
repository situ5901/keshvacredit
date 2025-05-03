import Head from "next/head";
import Link from "next/link";

export default function CreditCardUnderConstruction() {
  return (
    <>
      <Head>
        <title>Credit Cards – Coming Soon | KeshvaCredit</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🚧 Credit Card Section is Under Construction
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We’re working hard to bring you the best partnered credit card offers.
          Stay tuned for exciting deals and instant approvals!
        </p>
        <Link href="/" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md text-sm font-semibold transition">
          ← Back to Home
        </Link>
      </div>
    </>
  );
}
