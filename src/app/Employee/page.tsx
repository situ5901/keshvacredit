'use client'
import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import LeavePage from './leave'
import History from './history'

export default function WorkPanel() {
  const [form, setForm] = useState({ name: '', message: '', department: '' })
  const [popup, setPopup] = useState('')
  const [activeTab, setActiveTab] = useState<'work' | 'leave' | 'history'>('work')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await fetch('https://keshvacredit.com/api/v1/employee/dailyRepost', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()
      if (res.ok) {
        setPopup(data.message || 'Submitted successfully ✅')
        setForm({ name: '', message: '', department: '' })
      } else {
        setPopup(data.message || 'Submission failed ❌')
      }

      setTimeout(() => setPopup(''), 4000)
    } catch (err) {
      console.error('Error submitting form:', err)
      setPopup('Something went wrong ❌')
      setTimeout(() => setPopup(''), 4000)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 pt-4 mt-15 relative">
      {/* ✅ Popup */}
      {popup && (
        <div className="fixed top-4 right-4 bg-green-100 text-green-800 px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 z-50">
          <CheckCircle2 className="w-5 h-5" />
          <span>{popup}</span>
        </div>
      )}

      {/* ✅ Tabs */}
      <div className="w-full max-w-xl sticky top-0 z-10 pb-4 pt-2">
        <div className="flex space-x-6 justify-center">
          <button
            onClick={() => setActiveTab('work')}
            className={`px-6 py-3 rounded-2xl font-semibold transition
              ${activeTab === 'work'
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-white text-indigo-700 border border-indigo-600 hover:bg-indigo-50'}`}
          >
            📝 Work Update
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-6 py-3 rounded-2xl font-semibold transition
              ${activeTab === 'history'
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-white text-indigo-700 border border-indigo-600 hover:bg-indigo-50'}`}
          >
            📜update History
          </button>
          <button
            onClick={() => setActiveTab('leave')}
            className={`px-6 py-3 rounded-2xl font-semibold transition
              ${activeTab === 'leave'
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-white text-indigo-700 border border-indigo-600 hover:bg-indigo-50'}`}
          >
            🏖️ Leave
          </button>
        </div>
      </div>

      {/* ✅ Tab Content */}
      <div className="mt-6 w-full flex justify-center">
        {activeTab === 'work' && (
          <div
            className="w-full max-w-xl rounded-2xl p-8 space-y-6"
            style={{
              boxShadow:
                '0 0 0 2px rgba(100, 149, 237, 0.4), 0 4px 12px rgba(138, 43, 226, 0.2)',
            }}
          >
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Daily Work Update
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Department</label>
                <select
                  name="department"
                  value={form.department}
                  onChange={handleChange}
                  required
                  className=" findrop w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                >
                  <option value="" disabled>Select Department</option>
                  <option value="Calling">📞 Calling</option>
                  <option value="Development">💻 Development</option>
                  <option value="Management">🗂️ Management</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Work Description</label>
                <textarea
                  name="message"
                  placeholder="What did you do today?"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
              >
                ✅ Submit Work
              </button>
            </form>
          </div>
        )}

        {activeTab === 'history' && <History />}
        {activeTab === 'leave' && <LeavePage />}
      </div>
    </div>
  )
}
