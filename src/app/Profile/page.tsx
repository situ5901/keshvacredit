"use client";
import React, { useEffect, useState, useCallback } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useModal } from "@/app/context/ModalContext";

interface ProfileData {
  name: string;
  dateOfBirth: string;
  income: string;
  gender: string;
  email: string;
  phone: string;
  pan: string;
  employment: string;
  state: string;
  city: string;
  pincode: string;
  company_name: string;
  loanAmount: string;
}

export default function ProfilePage() {
  const [profileData, setProfileData] = useState<ProfileData>({
    name: '',
    dateOfBirth: '',
    income: '',
    gender: '',
    email: '',
    phone: '',
    pan: '',
    employment: '',
    state: '',
    city: '',
    pincode: '',
    company_name: '',
    loanAmount: '',
  });

  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const { openModal } = useModal();

  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [isEmptyProfile, setIsEmptyProfile] = useState(false);

  // ✅ useCallback version of calculateCompletion
  const calculateCompletion = useCallback(() => {
    const fields = Object.values(profileData);
    const filledFields = fields.filter(field => field && field.trim() !== '').length;
    return Math.round((filledFields / fields.length) * 100);
  }, [profileData]);

  useEffect(() => {
    const percentage = calculateCompletion();
    setCompletionPercentage(percentage);
    setIsEmptyProfile(percentage === 0);
  }, [calculateCompletion]); // ✅ No more warning

  useEffect(() => {
    const phone = Cookies.get('user_phone');
    if (phone) {
      axios
        .post('https://keshvacredit.com/api/v1/api/getUsers', { phone })
        .then(res => {
          const user = res.data;
          setProfileData({
            name: user.name || '',
            dateOfBirth: user.dob || '',
            income: user.income || '',
            email: user.email || '',
            phone: user.phone || '',
            pan: user.pan || '',
            employment: user.employment || '',
            state: user.state || '',
            city: user.city || '',
            pincode: user.pincode || '',
            company_name: user.company_name || '',
            gender: user.gender || '',
            loanAmount: user.loanAmount || '',
          });
        })
        .catch(err => console.error("❌ Error fetching user data:", err))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
      setIsEmptyProfile(true);
    }
  }, []);

  const handleUpdate = async () => {
    setUpdating(true);
    try {
      const {
        phone,
        email,
        loanAmount,
        state,
        name,
        dateOfBirth,
        income,
        gender,
        pan,
        employment,
        city,
        pincode,
        company_name,
      } = profileData;

      await axios.put('https://keshvacredit.com/api/v1/api/updateUser', {
        phone,
        email,
        loanAmount,
        state,
        name,
        dob: dateOfBirth,
        income,
        gender,
        pan,
        employment,
        city,
        pincode,
        company_name,
      });

      setPopupMessage("✅ Profile updated successfully!");
      setShowPopup(true);
      setIsEditing(false);
      setCompletionPercentage(calculateCompletion());
    } catch (error) {
      console.error("❌ Update failed:", error);
      setPopupMessage("❌ Failed to update profile.");
      setShowPopup(true);
    } finally {
      setUpdating(false);
    }
  };

  const renderField = (
    label: string,
    name: keyof ProfileData,
    type = 'text',
    disabled = false,
    options?: string[]
  ) => (
    <div>
      <label className="text-gray-600">{label}</label>
      {isEditing && !disabled ? (
        options ? (
          <select
            value={profileData[name]}
            onChange={e => setProfileData({ ...profileData, [name]: e.target.value })}
            className="prdrop2 w-full mt-1 p-2 border rounded"
          >
            <option value="">Select</option>
            {options.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            value={profileData[name]}
            onChange={e => setProfileData({ ...profileData, [name]: e.target.value })}
            className=" prdrop2 w-full mt-1 p-2 border rounded"
            disabled={disabled}
          />
        )
      ) : (
        <p className="font-medium mt-1">{profileData[name] || 'Not Provided'}</p>
      )}
    </div>
  );

  if (loading) {
    return <div className="text-center mt-20 text-lg">Loading profile...</div>;
  }

  if (isEmptyProfile) {
    const handleClick = () => openModal();
    return (
      <div className="max-w-4xl mx-auto p-5 mt-22 mb-5 rounded-2xl border shadow text-center">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4">Complete Your Profile</h1>
          <p className="text-gray-600 mb-6">
            It looks like your profile is empty. Please complete your profile to continue.
          </p>
          <button
            onClick={handleClick}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Sign in to continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="custom-profilepage max-w-4xl mx-auto p-5 mt-22 mb-5 rounded-2xl border shadow">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium">Profile Completion</span>
          <span className="text-sm font-medium">{completionPercentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <button
          onClick={isEditing ? handleUpdate : () => setIsEditing(true)}
          disabled={updating}
          className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {isEditing ? (updating ? 'Saving...' : 'Save') : 'Edit'}
        </button>
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-200 rounded p-4">
          {renderField('Name', 'name')}
          {renderField('Date Of Birth', 'dateOfBirth', 'date')}
          {renderField('Income', 'income', 'number')}
          {renderField('Email', 'email', 'email')}
          {renderField('Phone', 'phone', 'text', true)}
          {renderField('Pan', 'pan')}
          {renderField('Employment', 'employment', 'text', false, ['Salaried', 'Self-employed'])}
          {renderField('Gender', 'gender', 'text', false, ['Male', 'Female', 'Other'])}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Residential Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-200 rounded p-4">
          {renderField('State', 'state', 'text', false, [
            "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
            "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
            "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
            "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
            "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
            "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
            "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi",
            "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
          ])}
          {renderField('City', 'city')}
          {renderField('Pincode', 'pincode')}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Employer Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-200 rounded p-4">
          {renderField('Company/Organization', 'company_name')}
          {renderField('Loan Amount', 'loanAmount', 'number')}
        </div>
      </section>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-none shadow-lg p-6 text-center max-w-md">
            <p className="text-lg font-medium mb-4">{popupMessage}</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
