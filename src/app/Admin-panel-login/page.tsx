'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { User, Lock } from 'lucide-react'

export default function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
useEffect(() => {
  const isLoggedIn = Cookies.get("admin_login");
  if (isLoggedIn === "true") {
    router.push("/Admin_panel-page");
  }
}, [router]); 


  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const staticUsername = 'admin'
    const staticPassword = 'parveen123'
    if (username === staticUsername && password === staticPassword) {
      Cookies.set('admin_login', 'true', { expires: 7 })
      router.push('/Admin_panel-page')
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <div className="custom-bg min-h-screen mt-15 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 p-4 sm:p-6">
      <div className="max-w-md w-full text-center mb-6 sm:mb-8 px-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-900 mb-1 sm:mb-2 drop-shadow-lg">
          Welcome Admin!
        </h1>
        <p className="text-indigo-900/90 font-medium text-sm sm:text-base">
          Please sign in to access the admin dashboard and manage the platform.
        </p>
      </div>

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white/30 border border-white/40 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-10 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 rounded-3xl blur-3xl opacity-30 pointer-events-none" />
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-indigo-900 mb-8 sm:mb-10 drop-shadow">
          🔐 Admin Login
        </h2>

        {error && (
          <p className="text-red-600 text-sm text-center mb-5 font-semibold">{error}</p>
        )}

        <div className="relative mb-6 sm:mb-8">
          <input
            type="text"
            id="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="peer w-full px-3 sm:px-4 pt-6 pb-2 bg-white/70 rounded-lg border border-gray-400 text-indigo-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition text-sm sm:text-base"
            placeholder="Username"
          />
          <label
            htmlFor="username"
            className="absolute left-3 sm:left-4 top-3 text-indigo-600 text-sm transition-all pointer-events-none
              peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-indigo-400
              peer-focus:top-0.5 peer-focus:text-sm peer-focus:text-indigo-700 peer-focus:bg-white/80 peer-focus:px-1 peer-focus:-translate-y-3"
            style={{ borderRadius: '4px' }}
          >
            <User className="inline-block w-4 h-4 mr-1 align-text-bottom" /> Username
          </label>
          <p className="mt-1 text-xs sm:text-sm text-indigo-700/80">
            Enter your admin username
          </p>
        </div>

        <div className="relative mb-8 sm:mb-10">
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="peer w-full px-3 sm:px-4 pt-6 pb-2 bg-white/70 rounded-lg border border-gray-400 text-indigo-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition text-sm sm:text-base"
            placeholder="Password"
          />
          <label
            htmlFor="password"
            className="absolute left-3 sm:left-4 top-3 text-indigo-600 text-sm transition-all pointer-events-none
              peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-indigo-400
              peer-focus:top-0.5 peer-focus:text-sm peer-focus:text-indigo-700 peer-focus:bg-white/80 peer-focus:px-1 peer-focus:-translate-y-3"
            style={{ borderRadius: '4px' }}
          >
            <Lock className="inline-block w-4 h-4 mr-1 align-text-bottom" /> Password
          </label>
          <p className="mt-1 text-xs sm:text-sm text-indigo-700/80">
            Your secure admin password
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-3 rounded-xl shadow-lg hover:scale-105 transition-transform font-semibold text-sm sm:text-base"
        >
          Sign In
        </button>
      </form>
    </div>
  )
}
