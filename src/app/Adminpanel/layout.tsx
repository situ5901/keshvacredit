import React from 'react';
import Link from 'next/link';

export default function AdminPanelLayout({
  children,
}: {  
  children: React.ReactNode;
}) {
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
              <Link href="/Adminpanel/settings">Settings</Link>
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