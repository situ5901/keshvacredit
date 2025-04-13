"use client";
import React, { useState, useEffect } from "react";
import { crmramfin } from "../../APIS/UserData/UserInfoApi";

interface PartnerInfo {
  data?: string[];
}

type PartnerData = {
  [partner: string]: PartnerInfo;
};

export default function DashboardPage() {
  // Shared entries per page state.
  const [entriesPerPage, setEntriesPerPage] = useState(5);

  // Separate current page state for each partner.
  const [currentPageRamFin, setCurrentPageRamFin] = useState(1);
  const [currentPageZype, setCurrentPageZype] = useState(1);

  // API data and loading state.
  const [partnerData, setPartnerData] = useState<PartnerData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPartnerData = async () => {
      try {
        const response = await crmramfin();
        if (response && response.success) {
          setPartnerData(response);
        }
      } catch (error) {
        console.error("Error fetching partner data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPartnerData();
  }, []);

  // Extract data for each partner (defaulting to empty arrays if missing)
  const ramfinData: string[] =
    partnerData && partnerData["RamFin"] && Array.isArray(partnerData["RamFin"].data)
      ? partnerData["RamFin"].data!
      : [];
  const zypeData: string[] =
    partnerData && partnerData["Zype"] && Array.isArray(partnerData["Zype"].data)
      ? partnerData["Zype"].data!
      : [];

  // Paginate RamFin Data
  const totalEntriesRamFin = ramfinData.length;
  const totalPagesRamFin = Math.ceil(totalEntriesRamFin / entriesPerPage);
  const showingFromRamFin = (currentPageRamFin - 1) * entriesPerPage + 1;
  const showingToRamFin = Math.min(currentPageRamFin * entriesPerPage, totalEntriesRamFin);
  const paginatedRamFin = ramfinData.slice(
    (currentPageRamFin - 1) * entriesPerPage,
    currentPageRamFin * entriesPerPage
  );

  // Paginate Zype Data
  const totalEntriesZype = zypeData.length;
  const totalPagesZype = Math.ceil(totalEntriesZype / entriesPerPage);
  const showingFromZype = (currentPageZype - 1) * entriesPerPage + 1;
  const showingToZype = Math.min(currentPageZype * entriesPerPage, totalEntriesZype);
  const paginatedZype = zypeData.slice(
    (currentPageZype - 1) * entriesPerPage,
    currentPageZype * entriesPerPage
  );

  // Handle changes to entries per page (shared for both partners)
  const handleEntriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newEntries = parseInt(e.target.value);
    setEntriesPerPage(newEntries);
    setCurrentPageRamFin(1);
    setCurrentPageZype(1);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p>Overview of your admin panel statistics</p>
      </div>

      {/* Stat Cards Section (if needed) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
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
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Users</h2>
              <p className="text-2xl font-bold">164234</p>
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
                viewBox="0 0 576 512"
                className="text-green-500 text-2xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Leads</h2>
              <p className="text-2xl font-bold">564577</p>
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
                viewBox="0 0 288 512"
                className="text-yellow-500 text-2xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Revenue</h2>
              <p className="text-2xl font-bold">$12,345</p>
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
              <h2 className="text-lg font-semibold">Growth</h2>
              <p className="text-2xl font-bold">24%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Shared Entries Dropdown */}
      <div className="flex items-center space-x-1 mt-10 mb-4">
        <label className="font-medium">Show</label>
        <select
          value={entriesPerPage}
          onChange={handleEntriesChange}
          className="option-b border rounded p-2"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <span>entries</span>
      </div>

      {loading ? (
        <p>Loading partner data...</p>
      ) : (
        <div className="space-y-8">
          {/* RamFin Section  hh*/}
          <div>
            <h2 className="text-xl font-semibold mb-4">RamFin</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border rounded-lg">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">Sr.No</th>
                    <th className="px-4 py-2 border">Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedRamFin.map((phone, index) => (
                    <tr key={`ramfin-${index}`}>
                      <td className="border px-4 py-2">
                        {(currentPageRamFin - 1) * entriesPerPage + index + 1}
                      </td>
                      <td className="border px-4 py-2">{phone}</td>
                    </tr>
                  ))}
                  <tr className="font-bold">
                    <td className="border px-4 py-2" colSpan={2}>
                      Total Entries: {totalEntriesRamFin}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Pagination Controls for RamFin */}
            <div className="mt-4 flex flex-col md:flex-row justify-between items-center gap-4">
              <span className="text-sm font-medium">
                Showing {showingFromRamFin} to {showingToRamFin} of {totalEntriesRamFin} entries
              </span>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setCurrentPageRamFin(Math.max(currentPageRamFin - 1, 1))}
                  disabled={currentPageRamFin === 1}
                  className="px-3 py-1 border rounded p-2 disabled:opacity-50"
                >
                  Prev
                </button>
                <button
                  onClick={() =>
                    setCurrentPageRamFin(
                      currentPageRamFin < totalPagesRamFin ? currentPageRamFin + 1 : currentPageRamFin
                    )
                  }
                  disabled={currentPageRamFin === totalPagesRamFin}
                  className="px-3 py-1 border rounded p-2 disabled:opacity-50"
                >
                  Next
                </button>
                <span className="text-sm">
                  Page {currentPageRamFin} of {totalPagesRamFin}
                </span>
              </div>
            </div>
          </div>

          {/* Zype Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Zype</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border rounded-lg">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">Sr.No</th>
                    <th className="px-4 py-2 border">Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedZype.map((phone, index) => (
                    <tr key={`zype-${index}`}>
                      <td className="border px-4 py-2">
                        {(currentPageZype - 1) * entriesPerPage + index + 1}
                      </td>
                      <td className="border px-4 py-2">{phone}</td>
                    </tr>
                  ))}
                  <tr className="font-bold">
                    <td className="border px-4 py-2" colSpan={2}>
                      Total Entries: {totalEntriesZype}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex flex-col md:flex-row justify-between items-center gap-4">
              <span className="text-sm font-medium">
                Showing {showingFromZype} to {showingToZype} of {totalEntriesZype} entries
              </span>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setCurrentPageZype(Math.max(currentPageZype - 1, 1))}
                  disabled={currentPageZype === 1}
                  className="px-3 py-1 border rounded p-2 disabled:opacity-50"
                >
                  Prev
                </button>
                <button
                  onClick={() =>
                    setCurrentPageZype(
                      currentPageZype < totalPagesZype ? currentPageZype + 1 : currentPageZype
                    )
                  }
                  disabled={currentPageZype === totalPagesZype}
                  className="px-3 py-1 border rounded p-2 disabled:opacity-50"
                >
                  Next
                </button>
                <span className="text-sm">
                  Page {currentPageZype} of {totalPagesZype}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
