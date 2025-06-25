"use client";
import React, { useState } from "react";
import * as XLSX from "xlsx";
import axios from "axios";
import { saveAs } from "file-saver";

const CHUNK_SIZE = 5000;

const FilterUploadPage = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState("");
  const [progressPercent, setProgressPercent] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [finalResults, setFinalResults] = useState<any[] | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("📁 File selected:", file.name);
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setLoading(true);
    setProgress("");
    setProgressPercent(0);
    setFinalResults(null);

    const reader = new FileReader();

    reader.onload = async (evt) => {
      const bstr = evt.target?.result;
      const workbook = XLSX.read(bstr, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as any[][];

      const phoneNumbers = data.flat().filter((v) => typeof v === "number");
      console.log("📞 Total phone numbers found:", phoneNumbers.length);

     const results : any[] = [];
     
      for (let i = 0; i < phoneNumbers.length; i += CHUNK_SIZE) {
        const chunk = phoneNumbers.slice(i, i + CHUNK_SIZE);
        console.log(`🚀 Sending chunk ${i}–${i + chunk.length}`);

        try {
          const res = await axios.post(
            "https://keshvacredit.com/api/v1/Test/filterdata",
            { phones: chunk },
            { headers: { "Content-Type": "application/json" } }
          );

          console.log("✅ API response:", res.data);

          if (res.data.success && res.data.data) {
            const raw = res.data.data;

            // If primitive array, convert to objects
            const formatted =
              Array.isArray(raw) && typeof raw[0] !== "object"
                ? raw.map((val) => ({ phone: val }))
                : raw;

            results.push(...formatted);
          }
        } catch (err) {
          console.error("❌ Error in chunk:", chunk, err);
        }

        setProgress(`Processed: ${i + chunk.length} / ${phoneNumbers.length}`);
        setProgressPercent(Math.round(((i + chunk.length) / phoneNumbers.length) * 100));
      }

      console.log("🎯 Final filtered results:", results);
      setFinalResults(results);
      setLoading(false);
      setProgress("✅ Done! Ready to download.");
      setProgressPercent(100);
    };

    reader.readAsBinaryString(selectedFile);
  };

  const handleDownloadCSV = () => {
    if (!finalResults) return;

    const ws = XLSX.utils.json_to_sheet(finalResults);
    const csv = XLSX.utils.sheet_to_csv(ws);

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "filtered_users.csv");
    console.log("📥 CSV downloaded with", finalResults.length, "rows");
  };

  return (
    <div className="max-w-xl mx-auto mt-20 p-6 mb-5 shadow-md rounded border border-gray-200 ">
      <h1 className="text-2xl font-bold mb-6 text-center">📤 Upload Phone Numbers</h1>

      <input
        type="file"
        accept=".xlsx,.xls,.csv"
        onChange={handleFileChange}
        className="block w-full mb-4"
      />

      {selectedFile && (
        <button
          onClick={handleUpload}
          disabled={loading}
          className="w-full bg-blue-600  font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Processing..." : "Upload & Filter"}
        </button>
      )}

      {loading && (
        <div className="mt-4">
          <p className="text-gray-700 font-medium mb-1">{progress}</p>
          <div className="w-full h-3 bg-gray-200 rounded overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-200"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
      )}

      {!loading && finalResults && finalResults.length > 0 && (
        <button
          onClick={handleDownloadCSV}
          className="w-full mt-4 bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700 transition"
        >
          ⬇️ Download CSV
        </button>
      )}

      {!loading && progress && (
        <p className="mt-4 text-green-600 font-semibold">{progress}</p>
      )}
    </div>
  );
};

export default FilterUploadPage;
