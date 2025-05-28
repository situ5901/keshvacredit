'use client';
import React, { useEffect, useState, ChangeEvent } from 'react';
import { motion } from 'framer-motion';

export default function LeaveForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    department: '',
    phone: '',
    email: '',
    reason: '', 
    otherReason: '',
    fromDate: '',
    toDate: '',
    days: 0,
    comments: '',
  });
  const [status, setStatus] = useState<string | null>(null);

  // On checkbox change - only one reason allowed, so set reason to clicked value or '' if unchecked
  const handleReasonChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      reason: checked ? value : '',
      otherReason: checked && value !== 'Other' ? '' : prev.otherReason, // clear otherReason if not other
    }));
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (name === 'reason' && type === 'checkbox') {
      handleReasonChange(e as ChangeEvent<HTMLInputElement>);
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const isOtherSelected = formData.reason === 'Other';

  useEffect(() => {
    const from = new Date(formData.fromDate);
    const to = new Date(formData.toDate);
    if (formData.fromDate && formData.toDate && to >= from) {
      const diff = Math.ceil((to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24)) + 1;
      setFormData(prev => ({ ...prev, days: diff }));
    } else {
      setFormData(prev => ({ ...prev, days: 0 }));
    }
  }, [formData.fromDate, formData.toDate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const reasonString = isOtherSelected
        ? formData.otherReason.trim() || 'Other'
        : formData.reason;

      const res = await fetch('https://keshvacredit.com/api/v1/leaveSend/leaveMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          reason: reasonString,
        }),
      });

      if (!res.ok) throw new Error('Failed to send');

      setStatus('sent');
      setFormData({
        firstName: '',
        lastName: '',
        department: '',
        phone: '',
        email: '',
        reason: '',
        otherReason: '',
        fromDate: '',
        toDate: '',
        days: 0,
        comments: '',
      });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <form
  onSubmit={handleSubmit}
  className="relative z-10 max-w-4xl mx-auto mt-20 p-4 mb-2 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10"
>

      <h1 className="text-3xl font-extrabold text-center bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
        Leave Application Form
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <select
          name="department"
          value={formData.department}
          onChange={handleInputChange}
          className="findrop w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="" disabled>
            Select Department
          </option>
          {['Developer', 'Calling', 'Management'].map(opt => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Phone Number"
          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="mt-4">
        <p className="font-semibold  mb-2">Reason for Leave</p>
        <div className="flex flex-row gap-6 flex-wrap">
          {['Emergency', 'Medical', 'Other'].map(r => (
            <label key={r} className="inline-flex items-center gap-2  hover:text-indigo-600 cursor-pointer select-none">
              <input
                type="checkbox"
                name="reason"
                value={r}
                checked={formData.reason === r}
                onChange={handleInputChange}
                className="accent-purple-500 w-4 h-4"
              />
              {r} Leave
            </label>
          ))}
        </div>
        {isOtherSelected && (
          <input
            type="text"
            name="otherReason"
            value={formData.otherReason}
            onChange={handleInputChange}
            placeholder="Specify Other Reason"
            className="mt-4 w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
        <input
          type="date"
          name="fromDate"
          value={formData.fromDate}
          onChange={handleInputChange}
          placeholder="From Date"
          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="date"
          name="toDate"
          value={formData.toDate}
          onChange={handleInputChange}
          placeholder="To Date"
          className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <input
        type="number"
        name="days"
        value={formData.days}
        readOnly
        placeholder="Number of Days"
        className="mt-3 w-full px-3 py-2 rounded-lg border border-gray-300 cursor-not-allowed"
      />

      <textarea
  name="comments"
  value={formData.comments}
  onChange={handleInputChange}
  placeholder="Comments"
  rows={2}  // changed from 4 to 2
  className="mt-4 w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
/>


      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="mt-6 w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-bold py-3 rounded-xl shadow-inner hover:shadow-xl transition-all"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending...' : 'Submit Application'}
      </motion.button>

      {status === 'sent' && <p className="mt-3 text-green-600">Application sent successfully!</p>}
      {status === 'error' && <p className="mt-3 text-red-600">Error sending application.</p>}
    </form>
  );
}
