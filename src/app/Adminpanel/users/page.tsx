// app/adminpanel/users/page.tsx
import React from 'react';

export default function UsersPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search users..."
          className="p-2 border border-gray-300 rounded w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">ID</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Name</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Email</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Role</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* User Row 1 */}
            <tr className="border-b hover:bg-gray-100">
              <td className="py-4 px-4 text-sm text-gray-600">1</td>
              <td className="py-4 px-4 text-sm text-gray-600">John Doe</td>
              <td className="py-4 px-4 text-sm text-gray-600">john@example.com</td>
              <td className="py-4 px-4 text-sm text-gray-600">Admin</td>
              <td className="py-4 px-4 text-sm text-gray-600">Active</td>
            </tr>
            {/* User Row 2 */}
            <tr className="border-b hover:bg-gray-100">
              <td className="py-4 px-4 text-sm text-gray-600">2</td>
              <td className="py-4 px-4 text-sm text-gray-600">Jane Smith</td>
              <td className="py-4 px-4 text-sm text-gray-600">jane@example.com</td>
              <td className="py-4 px-4 text-sm text-gray-600">User</td>
              <td className="py-4 px-4 text-sm text-gray-600">Inactive</td>
            </tr>
            {/* User Row 3 */}
            <tr className="border-b hover:bg-gray-100">
              <td className="py-4 px-4 text-sm text-gray-600">3</td>
              <td className="py-4 px-4 text-sm text-gray-600">Bob Johnson</td>
              <td className="py-4 px-4 text-sm text-gray-600">bob@example.com</td>
              <td className="py-4 px-4 text-sm text-gray-600">User</td>
              <td className="py-4 px-4 text-sm text-gray-600">Active</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
