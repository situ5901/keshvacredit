"use client";
import React, { useState, useEffect } from "react";
import { crmramfin } from "../../APIS/UserData/UserInfoApi";

interface PartnerInfo {
  data?: string[];
}
type PartnerData = {
  [partner: string]: PartnerInfo & { success?: boolean };
};

export default function DashboardPage() {
  const [entriesPerPage, setEntriesPerPage] = useState<number>(5);
  const [currentPageFatakPayPL, setCurrentPageFatakPayPL] = useState<number>(1);
  const [partnerData, setPartnerData] = useState<PartnerData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPartnerData = async () => {
      try {
        const response = await crmramfin();
        if (response?.success) {
          setPartnerData(response);
        }
      } catch (err) {
        console.error("Error fetching partner data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPartnerData();
  }, []);

  // Safely pull out FatakPayPL data (or default to empty array)
  const fatakdata = Array.isArray(partnerData?.FatakPayPL?.data)
    ? partnerData!.FatakPayPL!.data!
    : [];

  // Pagination calculations
  const totalEntriesFatakPayPL = fatakdata.length;
  const totalPagesFatakPayPL = Math.ceil(totalEntriesFatakPayPL / entriesPerPage);
  const showingFromFatakPayPL = totalEntriesFatakPayPL > 0
    ? (currentPageFatakPayPL - 1) * entriesPerPage + 1
    : 0;
  const showingToFatakPayPL = Math.min(currentPageFatakPayPL * entriesPerPage, totalEntriesFatakPayPL);
  const paginatedFatakPayPL = fatakdata.slice(
    (currentPageFatakPayPL - 1) * entriesPerPage,
    currentPageFatakPayPL * entriesPerPage
  );

  // Reset page to 1 whenever entriesPerPage changes
  const handleEntriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPageFatakPayPL(1);
  };

  return (
    <div className="p-6">
      {/* Entries‑per‑page selector */}
      <div className="flex items-center space-x-2 mb-4">
        <label htmlFor="entries" className="font-medium">Show</label>
        <select
          id="entries"
          value={entriesPerPage}
          onChange={handleEntriesChange}
          className="findrop border rounded p-2"
        >
          {[5, 10, 25, 50, 100].map(n => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
        <span>entries</span>
      </div>

      {loading ? (
        <p>Loading partner data...</p>
      ) : (
        <div className="space-y-8">
          {/* FatakPayPL Table */}
          <div>
            <h2 className="text-xl font-semibold mb-4">FatakPay</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border rounded-lg">
                <thead>
                  <tr >
                    <th className="px-4 py-2 border">Sr.No</th>
                    <th className="px-4 py-2 border">Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedFatakPayPL.map((phone, idx) => (
                    <tr key={idx} className="border-t">
                      <td className="border px-4 py-2">{showingFromFatakPayPL + idx}</td>
                      <td className="border px-4 py-2">{phone}</td>
                    </tr>
                  ))}
                  <tr className="font-bold">
                    <td className="px-4 py-2" colSpan={2}>
                      Total Entries: {totalEntriesFatakPayPL}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            <div className="mt-4 flex flex-col md:flex-row justify-between items-center gap-4">
              <span className="text-sm font-medium">
                Showing {showingFromFatakPayPL} to {showingToFatakPayPL} of {totalEntriesFatakPayPL} entries
              </span>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setCurrentPageFatakPayPL(prev => Math.max(prev - 1, 1))}
                  disabled={currentPageFatakPayPL === 1}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >
                  Prev
                </button>
                <button
                  onClick={() => setCurrentPageFatakPayPL(prev => Math.min(prev + 1, totalPagesFatakPayPL))}
                  disabled={currentPageFatakPayPL === totalPagesFatakPayPL}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >
                  Next
                </button>
                <span className="text-sm">
                  Page {currentPageFatakPayPL} of {totalPagesFatakPayPL}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
