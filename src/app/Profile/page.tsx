"use client";
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

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
        <p className="font-medium mt-1">{profileData[name] || 'NA'}</p>
      )}
    </div>
  );

  if (loading) {
    return <div className="text-center mt-20 text-lg">Loading profile...</div>;
  }

  return (
    <div className="custom-profilepage max-w-4xl mx-auto p-5 mt-22 mb-5 rounded-2xl border shadow">
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
          {renderField('Employment', 'employment', 'text', false, ['Salaried', 'Self Employed'])}
          {renderField('Gender', 'gender', 'text', false, ['Male', 'Female', 'Other'])}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Residential Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-200 rounded p-4">
          {renderField('State', 'state')}
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
