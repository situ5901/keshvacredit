// app/adminpanel/users/page.tsx
"use client";
import React, { useState } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
};

export default function UsersPage() {
  // Dummy data for users
  const initialUsers: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Active' },
  ];

  const [users, setUsers] = useState<User[]>(initialUsers);

  const removeUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      <p className="mb-4">Click the button to remove a user from the website:</p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">ID</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Name</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Email</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Role</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Status</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b hover:bg-gray-100">
                <td className="py-4 px-4 text-sm text-gray-600">{user.id}</td>
                <td className="py-4 px-4 text-sm text-gray-600">{user.name}</td>
                <td className="py-4 px-4 text-sm text-gray-600">{user.email}</td>
                <td className="py-4 px-4 text-sm text-gray-600">{user.role}</td>
                <td className="py-4 px-4 text-sm text-gray-600">{user.status}</td>
                <td className="py-4 px-4 text-sm text-gray-600">
                  <button
                    onClick={() => removeUser(user.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan={6} className="py-4 px-4 text-center text-sm text-gray-600">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
