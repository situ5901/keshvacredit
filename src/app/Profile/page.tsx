"use client";
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

export default function ProfilePage() {
  // Added the income property to the initial state.
  const [profileData, setProfileData] = useState({
    name: '',
    dateOfBirth: '',
    income: '',
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

  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const phone = Cookies.get('user_phone');
    console.log("📞 Phone from cookie:", phone);

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
            companyName: user.companyName || '',
            gender: user.gender || '',
            maritalStatus: user.maritalStatus || ''
          });
        })
        .catch(err => {
          console.error("❌ Error fetching user data:", err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      console.warn("⚠️ No phone number found in cookies.");
      setLoading(false);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEditSave = () => {
    setIsEditing(prev => !prev);
  };

  // Updated renderField function to work with dynamic properties including "income"
  const renderField = (label: string, name: keyof typeof profileData, placeholder = '') => (
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

  if (loading) {
    return <div className="text-center mt-20 text-lg">Loading profile...</div>;
  }

  return (
    <div className="custom-profilepage max-w-4xl mx-auto p-5 mt-20 mb-5 rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <button onClick={handleEditSave} className="profile-edit-button px-4 py-2 rounded">
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-200 rounded p-4">
          {renderField('Name', 'name')}
          {renderField('Date Of Birth', 'dateOfBirth')}
          {renderField('Income', 'income')}
          {/* Uncomment these lines if needed:
          {renderField('Gender', 'gender')}
          {renderField('Marital Status', 'maritalStatus')} */}
          {renderField('Email', 'email')}
          {renderField('Phone', 'phone')}
          {renderField('Pan', 'pan')}
          {renderField('Employment', 'employment')}
          {renderField('Pincode', 'pincode')}
        </div>
      </section>

      {/*
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Residential Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-gray-200 rounded p-4">
          {renderField('State', 'state')}
          {renderField('City', 'city')}
        </div>
      </section>
      */}

      {/*
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Employer Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-200 rounded p-4">
          {renderField('Company Name', 'companyName')}
        </div>
      </section>
      */}

      {/*
      <section>
        <h2 className="text-xl font-semibold mb-2">Applications Applied For</h2>
        <div className="border border-gray-200 rounded p-4">
          <p className="text-gray-700">No applications found.</p>
        </div>
      </section>
      */}
    </div>
  );
}
