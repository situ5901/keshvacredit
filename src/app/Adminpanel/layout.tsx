"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleLogout = () => {
    // Remove the admin login cookie
    Cookies.remove('admin_login');

    // Redirect to the login page
    router.push('/Admin-panel-login');
  };

  return (
    <div className=" flex mt-18">
      {/* Sidebar */}
      <aside className="w-64  bg-gray-800 text-white">
        <div className="p-4 text-lg font-semibold">Admin Panel</div>
        <nav>
          <ul>
            <li className="px-4 py-2 hover:bg-gray-700">
              <Link href="/Adminpanel/dashboard">Dashboard</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <Link href="/Adminpanel/users">Analytics</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <Link href="/Adminpanel/settings">Manage users</Link>
            </li>
            <li className="px-4 py-2 ">
              <button
                onClick={handleLogout}
                className="w-full text-left text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg "
              >
                Logout
              </button>
            </li>

          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}