"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

interface UserData {
  name: string;
  department: string;
  message: string;
  createdAt: string;
  time : string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const isLoggedIn = Cookies.get("admin_login");
    if (!isLoggedIn) {
      router.push("/Admin-panel-login");
    }
  }, [router]);

  useEffect(() => {
    async function fetchUserData() {
      try {
        setLoading(true);
        const res = await fetch("https://keshvacredit.com/api/v1/employee/getDailyReport");
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        const users: UserData[] = data.data || data;
        setUserData(users);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchUserData();
  }, []);

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center">Daily Work Report</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="admin-box shadow rounded p-4 bg-white ">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-full">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="text-blue-500 text-2xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Total Messages</h2>
              <p className="text-2xl font-bold">{loading ? "Loading..." : userData.length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Department</th>
              <th className="px-6 py-3">Message</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">time</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {loading ? (
              <tr>
                <td colSpan={4} className="text-center p-4">
                  Loading data...
                </td>
              </tr>
            ) : userData.length > 0 ? (
              userData.map((user, index) => (
                <tr key={index} className="border-b">
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.department}</td>
                  <td className="px-6 py-4">{user.message}</td>
                  <td className="px-6 py-4">{user.createdAt}</td>
                  <td className="px-6 py-4">{user.time}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center p-4">
                  No messages found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
