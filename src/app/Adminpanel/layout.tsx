"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { Menu, X } from 'lucide-react'; // Hamburger and close icons

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    Cookies.remove('admin_login');
    router.push('/Admin-panel-login');
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Mobile Topbar */}
      <div className="md:hidden flex items-center justify-between mt-20 bg-gray-800 text-white p-4">
        <div className="text-lg font-semibold">Admin Panel</div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white w-64 p-4 space-y-2 absolute md:relative z-10 md:z-auto transition-all duration-300 ease-in-out 
        ${isSidebarOpen ? 'left-0' : '-left-64'} mt-30 md:left-0 top-0 h-full md:h-auto md:block`}
      >
        <div className="hidden md:block text-lg font-semibold mt-20 mb-4">Admin Panel</div>
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
            <li className="px-4 py-2">
              <button
                onClick={handleLogout}
                className="w-full text-left text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 mt-16 md:mt-0">
        {children}
      </main>
    </div>
  );
}
