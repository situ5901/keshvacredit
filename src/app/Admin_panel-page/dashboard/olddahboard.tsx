"use client";
import React, { useEffect, useState } from "react";
import Fatakpay from "./fatakpay"
import Zype from "./zype"
import Samfin from "./Ramfin"
import { crmramfin } from "../../APIS/UserData/UserInfoApi";
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
export default function DashboardPage() {
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = Cookies.get('admin_login');
    if (!isLoggedIn) {
      router.push('/Admin-panel-login');
    }
  }, [router]); // ✅ Added router as dependency
  

  interface PartnerInfo {
    data?: string[];
  }
  type PartnerData = {
    [partner: string]: PartnerInfo & { success?: boolean };
  };
  const [partnerData, setPartnerData] = useState<PartnerData | null>(null);

useEffect(() => {
  async function fetchPartnerData() {
    try {
      const response = await crmramfin();
      if (response?.success) {
        setPartnerData(response);
      }
    } catch (err) {
      console.error("Error fetching partner data:", err);
    }
  }
  fetchPartnerData();
}, []);


  const ramfinData = partnerData?.RamFin?.data || [];
  const zypeData = partnerData?.Zype?.data || [];
  const fatakpayData = partnerData?.FatakPayPL?.data || [];

  const totalEntriesRamFin = ramfinData.length;
  const totalEntriesZype = zypeData.length;
  const totalEntriesFatakPayPL = fatakpayData.length;
  const totalEntries = totalEntriesRamFin + totalEntriesZype + totalEntriesFatakPayPL;

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p>Overview of your admin panel statistics</p>
      </div>

      {/* Stat Cards Section (if needed) */}
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Users Card */}
        <div className="admin-box shadow rounded p-4">
          <div className="flex items-center">
            <div className="p-3 rounded-full">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="text-2xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
              </svg>
            </div>
            <div className="ml-4 mb-6">
              <h2 className="text-lg font-semibold">Total Leads</h2>
              <p className="text-2xl font-bold">{totalEntries}</p>
            </div>
          </div>
        </div>

        {/* Leads Card */}
        <div className="admin-box shadow rounded p-4">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-full">
            <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-red-500 text-2xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">ramfin</h2>
              <p className="text-2xl font-bold">{totalEntriesRamFin}</p>
            </div>
          </div>
        </div>

        {/* Revenue Card */}
        <div className="admin-box shadow rounded p-4">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-3 rounded-full">
            <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-red-500 text-2xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">zype</h2>
              <p className="text-2xl font-bold">{totalEntriesZype}</p>
            </div>
          </div>
        </div>

        {/* Growth Card */}
        <div className="admin-box shadow rounded p-4">
          <div className="flex items-center">
            <div className="bg-red-100 p-3 rounded-full">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-red-500 text-2xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">fatakpay</h2>
              <p className="text-2xl font-bold">{totalEntriesFatakPayPL}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Shared Entries Dropdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <Samfin />
  <Zype />
  <Fatakpay />
</div>


    </div>
  );
}
