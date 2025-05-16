'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function PartnerDashboard() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [uploadMessage, setUploadMessage] = useState<string>('');
  const [duplicatesCount, setDuplicatesCount] = useState<number>(0);
  const [notDuplicatesCount, setNotDuplicatesCount] = useState<number>(0);

  // Check if the user is logged in
  useEffect(() => {
    const isLoggedIn = Cookies.get('partner_login');
    if (!isLoggedIn) {
      router.push('/Partner-login');
    }
  }, [router]);

  // Handle Logout
  const handleLogout = () => {
    Cookies.remove('partner_login');
    router.push('/Partner-login');
  };

  // Handle File Change
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
  };

  // Handle Excel File Upload
  const handleUpload = async () => {
    if (!file) {
      setUploadMessage('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('YOUR_API_URL_HERE', { // Replace with your API URL
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setUploadMessage('File uploaded successfully!');

        // Update counts from response
        setDuplicatesCount(data.duplicates.length);
        setNotDuplicatesCount(data.notDuplicates.length);

        // Save file URLs for download
        Cookies.set('duplicate_file', data.duplicateFileUrl);
        Cookies.set('not_duplicate_file', data.notDuplicateFileUrl);
      } else {
        setUploadMessage(`Upload failed: ${response.statusText}`);
      }
    } catch {
      setUploadMessage('Error uploading file.');
    }
  };

  // Download File
  const handleDownload = (fileType: 'duplicate' | 'not_duplicate') => {
    const fileUrl = Cookies.get(`${fileType}_file`);
    if (fileUrl) {
      window.open(fileUrl, '_blank');
    } else {
      setUploadMessage('File not available for download.');
    }
  };

  return (
    <div className="rounded-3xl mt-15 flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-8">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-fadeIn">
        <div className="p-10 space-y-8 text-center">
          <h1 className="text-5xl font-extrabold text-gray-800">
            🚀 Welcome <span className="text-purple-600">Partner</span>!
          </h1>
          <p className="text-lg text-gray-600">
            You’ve entered the <span className="font-semibold text-blue-600">Partner Dashboard</span>.
          </p>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg shadow-md hover:bg-red-600 transition"
          >
            Logout
          </button>

          {/* Excel Upload Section */}
          <div className="mt-10 bg-gradient-to-r from-white via-gray-50 to-white rounded-2xl p-6 border border-dashed border-purple-300 shadow-inner text-left space-y-4 text-gray-700">
            <h2 className="text-2xl font-bold text-purple-600">📂 Upload Excel File</h2>
            <input
              type="file"
              accept=".xlsx, .xls"
              onChange={handleFileChange}
              className="block w-full p-2 border rounded-lg mb-4"
            />
            <button
              onClick={handleUpload}
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Upload File
            </button>
            {uploadMessage && (
              <p className="text-green-500 mt-2">{uploadMessage}</p>
            )}
          </div>

          {/* Status Boxes */}
          <div className="flex justify-center gap-6 mt-8">
            {/* Duplicate Status Box */}
            <div className="flex flex-col items-center p-6 bg-red-100 text-red-800 rounded-xl shadow-md w-60">
              <h3 className="text-xl font-semibold">Status: Duplicate</h3>
              <p className="text-2xl font-bold">{duplicatesCount}</p>
              <button
                onClick={() => handleDownload('duplicate')}
                className="mt-3 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Download Duplicates
              </button>
            </div>

            {/* Not Duplicate Status Box */}
            <div className="flex flex-col items-center p-6 bg-green-100 text-green-800 rounded-xl shadow-md w-60">
              <h3 className="text-xl font-semibold">Status: Not Duplicate</h3>
              <p className="text-2xl font-bold">{notDuplicatesCount}</p>
              <button
                onClick={() => handleDownload('not_duplicate')}
                className="mt-3 px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                Download Not Duplicates
              </button>
            </div>
          </div>

          <div className="mt-5 bg-gray-100 p-4 rounded-lg text-gray-600">
            <p>Manage your data, track duplicates, and download filtered results.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
