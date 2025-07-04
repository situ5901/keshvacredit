"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Menu, X } from "lucide-react"; // Optional icons, install lucide-react

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    Cookies.remove("admin_login");
    router.push("/Admin-panel-login");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar on route change
  useEffect(() => {

    router.prefetch("/Admin_panel-page/dashboard");
    router.prefetch("/Admin_panel-page/users");
    router.prefetch("/Admin_panel-page/settings");
  }, [router]);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={` fixed md:static mt-18 top-0 left-0   w-64 bg-gray-800 text-white transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4 md:justify-start md:space-x-2 border-b border-gray-700">
          <span className="text-lg font-semibold">Admin Panel</span>
          <button
            className="md:hidden text-white"
            onClick={toggleSidebar}
            aria-label="Close Sidebar"
          >
            <X size={20} />
          </button>
        </div>
        <nav>
          <ul>
            <li className="px-4 py-2 hover:bg-gray-700">
              <Link href="/Admin_panel-page/dashboard">Dashboard</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <Link href="/Admin_panel-page/users">Analytics</Link>
            </li>
             <li className="px-4 py-2 hover:bg-gray-700">
              <Link href="/Admin_panel-page/moneyviewstatus">Money-View-Status</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <Link href="/Admin_panel-page/workupdate">daily-Work-update</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-700">
              <button
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <div className="mt-20 md:hidden bg-gray-800 text-white flex items-center justify-between p-4 shadow">
          <button onClick={toggleSidebar} aria-label="Toggle Sidebar">
            <Menu size={24} />
          </button>
        </div>
        <main className="p-4 md:p-6 mt-1 md:mt-12">{children}</main>
      </div>
    </div>
  );
}
