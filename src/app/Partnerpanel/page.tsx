'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import * as XLSX from 'xlsx';

type ExcelRow = (string | number | null | undefined)[];
type ApiResponseItem = {
  phone: string | number;
  status: 'Duplicate' | 'Not Duplicate' | string;
};
type ApiResponse = {
  data: ApiResponseItem[];
};

export default function PartnerDashboard() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [uploadMessage, setUploadMessage] = useState<string>('');
  const [processing, setProcessing] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [duplicates, setDuplicates] = useState<ExcelRow[]>([]);
  const [notDuplicates, setNotDuplicates] = useState<ExcelRow[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [phoneColumnIndex, setPhoneColumnIndex] = useState<number | null>(null);

  useEffect(() => {
    const isLoggedIn = Cookies.get('partner_login');
    if (!isLoggedIn) {
      router.push('/partnerlogin');
    }
  }, [router]);

  const handleLogout = () => {
    Cookies.remove('partner_login');
    router.push('/partnerlogin');
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
    setUploadMessage('');
    setProgress(0);
  };

  const handleUpload = async () => {
    if (!file) {
      setUploadMessage('Please select a file to upload.');
      return;
    }

    setProcessing(true);
    setUploadMessage('Processing...');
    setProgress(0);

    try {
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData: ExcelRow[] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      if (jsonData.length === 0) {
        setUploadMessage('❌ Empty Excel file');
        setProcessing(false);
        return;
      }

      const headers = jsonData[0] as string[];
      setHeaders(headers);

      const rows = jsonData.slice(1);
      const keywords = [
        'phone', 'mobile', 'number', 'contact',
        'phonenumber', 'phone_number', 'mobile_number',
        'contact_number', 'contactnumber', 'mobilenumber'
      ];

      const detectedIndex = headers.findIndex((h) =>
        keywords.some((keyword) => String(h).toLowerCase().replace(/[^a-z]/g, '').includes(keyword))
      );

      if (detectedIndex === -1) {
        setUploadMessage('❌ No phone-related column found');
        setProcessing(false);
        return;
      }

      setPhoneColumnIndex(detectedIndex);

      const BATCH_SIZE = 5000;
      let duplicatesList: ExcelRow[] = [];
      let notDuplicatesList: ExcelRow[] = [];

      for (let i = 0; i < rows.length; i += BATCH_SIZE) {
        const batch = rows.slice(i, i + BATCH_SIZE);

      const batchPhones = batch
  .map((row) => row[detectedIndex])
  .filter((num) => {
    if (num === null || num === undefined) return false;
    const digits = String(num).replace(/\D/g, '').slice(-10);
    return digits.length === 10 && /^\d+$/.test(digits);
  })
  .map((num) => Number(String(num).replace(/\D/g, '').slice(-10)));


        console.log("Sending to API:", batchPhones); // Debug

        if (batchPhones.length > 0) {
          const response = await fetch('https://keshvacredit.com/api/v1/getAll/check-data', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ phone: batchPhones }),
          });

          if (response.ok) {
            const result: ApiResponse = await response.json();
            const phoneStatusMap = new Map<string, string>(
              result.data.map((item) => [String(item.phone), item.status])
            );

            console.log("Response from API:", result.data); // Debug

            batch.forEach((row) => {
              const rawPhone = row[detectedIndex];
              if (rawPhone === null || rawPhone === undefined) return;

              const phone = String(rawPhone).replace(/\D/g, '').slice(-10);
              const status = phoneStatusMap.get(phone);

              console.log(`Checking phone ${phone}: ${status}`); // Debug

              if (status === 'Duplicate') {
                duplicatesList.push(row);
              } else if (status === 'Not Duplicate') {
                notDuplicatesList.push(row);
              }
            });
          }
        }

        const newProgress = Math.min(100, ((i + BATCH_SIZE) / rows.length) * 100);
        setProgress(newProgress);
      }

      setDuplicates(duplicatesList);
      setNotDuplicates(notDuplicatesList);
      setUploadMessage('✅ Processing completed successfully!');
    } catch (error) {
      console.error('Error:', error);
      setUploadMessage('❌ Error processing file. Please try again.');
    }

    setProcessing(false);
  };


  const downloadExcel = (rows: ExcelRow[], fileName: string) => {
    const ws = XLSX.utils.aoa_to_sheet([headers, ...rows]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Data');
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  };

  return (
    <div className="rounded-2xl mt-18 flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl overflow-hidden animate-fadeIn">
        <div className="p-6 space-y-6 text-center">
          <p className="text-xl text-gray-600">
            Welcome to Keshvacredit <span className="font-semibold text-blue-600">Partner Dashboard</span>.
          </p>

          <button
            onClick={handleLogout}
            className="px-3 py-1.5 bg-red-500 text-white text-xs font-medium rounded-md shadow-md hover:bg-red-600 transition"
          >
            Logout
          </button>

          <div className="bg-gradient-to-r from-white via-gray-50 to-white rounded-xl p-4 border border-dashed border-purple-300 shadow-inner text-left space-y-3 text-gray-700">
            <h2 className="text-lg font-bold text-purple-600">📂 Upload Excel File</h2>
            <input
              type="file"
              accept=".xlsx, .xls, .csv"
              onChange={handleFileChange}
              className="block w-full p-1 border rounded-md text-sm"
            />
            {progress > 0 && (
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            )}
            <button
              onClick={handleUpload}
              className="px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded-md shadow-md hover:bg-blue-700 transition"
              disabled={processing}
            >
              {processing ? `Processing (${Math.round(progress)}%)` : 'Upload File'}
            </button>
            {uploadMessage && (
              <p
                className={`text-xs mt-2 text-center ${uploadMessage.startsWith('✅')
                    ? 'text-green-600'
                    : uploadMessage.startsWith('❌')
                      ? 'text-red-600'
                      : 'text-blue-600'
                  }`}
              >
                {uploadMessage}
              </p>
            )}
          </div>

          {!processing && phoneColumnIndex !== null && (duplicates.length > 0 || notDuplicates.length > 0) && (
            <div className="flex justify-center gap-4 mt-6 flex-wrap">
              <div className="flex flex-col items-center p-4 bg-red-100 text-red-800 rounded-lg shadow w-60">
                <h3 className="text-base font-semibold">Status: Duplicate</h3>
                <p className="text-xl font-bold">{duplicates.length}</p>
                <button
                  onClick={() => downloadExcel(duplicates, 'Duplicates')}
                  className="mt-2 px-3 py-1.5 bg-red-500 text-white rounded hover:bg-red-600 text-xs transition"
                >
                  Download Duplicates
                </button>
              </div>

              <div className="flex flex-col items-center p-4 bg-green-100 text-green-800 rounded-lg shadow w-60">
                <h3 className="text-base font-semibold">Status: Not Duplicate</h3>
                <p className="text-xl font-bold">{notDuplicates.length}</p>
                <button
                  onClick={() => downloadExcel(notDuplicates, 'Not_Duplicates')}
                  className="mt-2 px-3 py-1.5 bg-green-500 text-white rounded hover:bg-green-600 text-xs transition"
                >
                  Download Not Duplicates
                </button>
              </div>
            </div>
          )}

          <div className="mt-4 bg-gray-100 p-3 rounded text-sm text-gray-600">
            <p>Track duplicates, and download filtered results.</p>
          </div>
        </div>
      </div>
    </div>
  );
}