"use client";
import React, { useState } from 'react';

export default function ProfilePage() {
  // Editing mode toggle
  const [isEditing, setIsEditing] = useState(false);

  // Profile fields in state
  const [profileData, setProfileData] = useState({
    name: '',
    dateOfBirth: '',
    gender: '',
    maritalStatus: '',
    email: '',
    phone: '',
    pan: '',
    employment: '',
    state: '',
    city: '',
    pincode: '',
    companyName: '',
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Toggle between Edit and Save
  const handleEditSave = () => {
    setIsEditing((prev) => !prev);
    // If you need to submit data when saving, you can do so here.
  };

  // Helper to conditionally render text vs. input
  const renderField = (label: string, name: keyof typeof profileData, placeholder = '') => {
    return (
      <div>
        <p className="text-gray-600">{label}</p>
        {isEditing ? (
          <input
            name={name}
            value={profileData[name]}
            onChange={handleChange}
            placeholder={placeholder}
            className="w-full p-2 mt-1 border rounded"
          />
        ) : (
          <p className="font-medium mt-1">{profileData[name] || 'NA'}</p>
        )}
      </div>
    );
  };

  return (
    <div className=" custom-profilepage max-w-4xl mx-auto p-5 mt-25 mb-5 rounded-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <button
          onClick={handleEditSave}
          className="profile-edit-button  px-4 py-2 rounded "
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>

      {/* Personal Information */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
        <div className="custom-profilepage grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-200 rounded p-4">
          {renderField('Name', 'name', 'Enter name')}
          {renderField('Date Of Birth', 'dateOfBirth', 'YYYY-MM-DD')}
          {renderField('Gender', 'gender', 'Male / Female / Other')}
          {renderField('Marital Status', 'maritalStatus', 'Single / Married')}
          {renderField('Email', 'email', 'Enter email')}
          {renderField('Phone', 'phone', 'Enter phone number')}
          {renderField('Pan', 'pan', 'Enter PAN')}
          {renderField('Employment', 'employment', 'Enter employment status')}
        </div>
      </section>

      {/* Residential Information */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Residential Information</h2>
        <div className="custom-profilepage grid grid-cols-1 md:grid-cols-3 gap-4 border border-gray-200 rounded p-4">
          {renderField('State', 'state', 'Enter state')}
          {renderField('City', 'city', 'Enter city')}
          {renderField('Pincode', 'pincode', 'Enter pincode')}
        </div>
      </section>

      {/* Employer Information */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Employer Information</h2>
        <div className="custom-profilepage grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-200 rounded p-4">
          {renderField('Company Name', 'companyName', 'Enter company name')}
        </div>
      </section>

      {/* Applications Applied For */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Applications Applied For</h2>
        <div className="custom-profilepage border border-gray-200 rounded p-4">
          <p className="text-gray-700">
            {/* Replace with dynamic content if needed */}
            No applications found.
          </p>
        </div>
      </section>
    </div>
  );
}
