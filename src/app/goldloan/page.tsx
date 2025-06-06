import Head from "next/head";
import Link from "next/link";

export default function GoldLoanUnderConstruction() {
  return (
    <>
      <Head>
        <title>Gold Loan – Coming Soon | KeshvaCredit</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🚧 Gold Loan Coming Soon
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We are preparing exciting gold loan offers just for you. Thanks for your patience!
        </p>
        <Link href="/" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md text-sm font-semibold transition">
          ← Back to Home
        </Link>
      </div>
    </>
  );
}
