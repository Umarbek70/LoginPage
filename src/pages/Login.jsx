import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Email va password bo'sh bo'lmasa dashboardga o'tadi
    if (email !== "" && password!== "") {
      navigate("/dashboard");
    } else {
      alert("Email va passwordni kiriting!");
    }
  };

  return (
    <div className="w-full h-screen flex bg-gray-100">

      {/* Chap taraf (Image) */}
      <div className="hidden md:flex w-1/2 bg-black relative">
        <img
          src="https://images.unsplash.com/photo-1521790361543-f645cf042ec4"
          className="w-full h-full object-cover opacity-80"
          alt="background"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Welcome Back!</h1>
        </div>
      </div>

      {/* O'ng taraf (Login form) */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">

        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">

          <h2 className="text-3xl font-bold text-gray-800 mb-2">Sign in</h2>
          <p className="text-gray-500 mb-6">
            Kirish uchun email va parolni kiriting
          </p>

          <form onSubmit={handleLogin} className="space-y-5">

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="youremail@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
