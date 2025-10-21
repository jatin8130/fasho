'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setIsLoggedIn(true);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("user", JSON.stringify({ email }));
      setIsLoggedIn(true);
    } else {
      alert("Please enter both email and password.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    const user = JSON.parse(localStorage.getItem("user"));
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Welcome!</h2>
          <p className="mb-4 text-gray-700">
            Logged in as <b>{user.email}</b>
          </p>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className='bg-[#F6F6F6] h-[1cm] w-[100%] flex items-center gap-2 sm:pl-10 pl-3 text-sm'>
        <Link className="hover:text-orange-600" href={'/'}>Home</Link>
        <span>/</span>
        <button>Log in to your account</button>
      </div>
      <div className="flex justify-center sm:my-[2cm] my-[0.7cm]">
        <form onSubmit={handleLogin} className="w-[80%] sm:w-[50%] text-gray-800">
          <h2 className="sm:text-2xl text-xl font-bold text-center mb-6">Log in to your account</h2>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200 bg-transparent"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring focus:ring-blue-200 bg-transparent"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
              >
                {showPassword ?
                  <span class="material-symbols-outlined">
                    visibility_off
                  </span> :
                  <span class="material-symbols-outlined">
                    visibility
                  </span>}
              </button>
            </div>
          </div>

          {/* Forgot password + Create account */}
          <div className="flex justify-between text-sm mb-4">
            <button className="text-blue-500 hover:underline">
              Forgot your password?
            </button>
            <button className="text-blue-500 hover:underline">
              No account? Create one
            </button>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-lg transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
