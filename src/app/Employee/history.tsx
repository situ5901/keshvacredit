'use client';
import React, { useState } from 'react';

interface UserReport {
  _id: string;
  name: string;
  department: string;
  message: string;
  createdAt: string;
}

export default function UserReportPage() {
  const [name, setName] = useState('');
  const [results, setResults] = useState<UserReport[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!name.trim()) return;
    setLoading(true);
    try {
      const res = await fetch('https://keshvacredit.com/api/v1/employee/getUserReport', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      });

      const data: UserReport[] = await res.json();
      setResults(data);
    } catch (error) {
      console.error('Error fetching report:', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Search User Report</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter name..."
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {results.length > 0 ? (
        <div className="space-y-4">
          {results.map((item) => (
            <div
              key={item._id}
              className="p-4 rounded-lg shadow border border-gray-300 bg-white"
            >
              <p><span className="font-semibold">Name:</span> {item.name}</p>
              <p><span className="font-semibold">Department:</span> {item.department}</p>
              <p><span className="font-semibold">Message:</span> {item.message}</p>
              <p><span className="font-semibold">Submission time:</span> {new Date(item.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      ) : (
        !loading && <p className="text-gray-500">No records found.</p>
      )}
    </div>
  );
}
