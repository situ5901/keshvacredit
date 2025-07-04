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
  const [currentPageZype, setCurrentPageZype] = useState<number>(1);
  const [partnerData, setPartnerData] = useState<PartnerData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchPartnerData() {
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
    }
    fetchPartnerData();
  }, []);

  // Zype data & pagination
  const zypeData: string[] = Array.isArray(partnerData?.Zype?.data)
    ? partnerData.Zype!.data!
    : [];
  const totalEntriesZype = zypeData.length;
  const totalPagesZype = Math.ceil(totalEntriesZype / entriesPerPage);
  const showingFromZype = totalEntriesZype > 0
    ? (currentPageZype - 1) * entriesPerPage + 1
    : 0;
  const showingToZype = Math.min(currentPageZype * entriesPerPage, totalEntriesZype);
  const paginatedZype = zypeData.slice(
    (currentPageZype - 1) * entriesPerPage,
    currentPageZype * entriesPerPage
  );

  // Reset page to 1 whenever entriesPerPage changes
  const handleEntriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const n = Number(e.target.value);
    setEntriesPerPage(n);
    setCurrentPageZype(1);
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
          {/* Zype Table */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Zype</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border rounded-lg">
                <thead >
                  <tr>
                    <th className="px-4 py-2 border">Sr.No</th>
                    <th className="px-4 py-2 border">Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedZype.map((phone, idx) => (
                    <tr key={idx} className="border-t">
                      <td className="border px-4 py-2">{showingFromZype + idx}</td>
                      <td className="border px-4 py-2">{phone}</td>
                    </tr>
                  ))}
                  <tr className="font-bold">
                    <td className="px-4 py-2" colSpan={2}>
                      Total Entries: {totalEntriesZype}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Zype Pagination */}
            <div className="mt-4 flex flex-col md:flex-row justify-between items-center gap-4">
              <span className="text-sm font-medium">
                Showing {showingFromZype} to {showingToZype} of {totalEntriesZype} entries
              </span>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setCurrentPageZype(p => Math.max(p - 1, 1))}
                  disabled={currentPageZype === 1}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >
                  Prev
                </button>
                <button
                  onClick={() => setCurrentPageZype(p => Math.min(p + 1, totalPagesZype))}
                  disabled={currentPageZype === totalPagesZype}
                  className="px-3 py-1 border rounded disabled:opacity-50"
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
