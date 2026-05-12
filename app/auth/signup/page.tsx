"use client";

import { useState } from "react";

import { supabase } from "@/lib/supabase";

export default function SignupPage() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      alert("Account created successfully!");
    }

  };

  return (
    <main className="min-h-screen bg-[#0F1115] text-white flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-[#1A1D24] border border-[#2A2F3A] rounded-[32px] p-8">

        <h1 className="text-4xl font-bold">
          Create Account
        </h1>

        <p className="text-gray-400 mt-3">
          Join My House Cost NG
        </p>

        {/* Email */}
        <div className="mt-8">

          <label className="text-sm text-gray-300">
            Email Address
          </label>

          <input
            type="email"
            placeholder="you@example.com"
            className="w-full mt-2 p-4 rounded-2xl bg-[#0F1115] border border-[#2A2F3A] outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />

        </div>

        {/* Password */}
        <div className="mt-5">

          <label className="text-sm text-gray-300">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            className="w-full mt-2 p-4 rounded-2xl bg-[#0F1115] border border-[#2A2F3A] outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />

        </div>

        {/* Button */}
        <button
          onClick={handleSignup}
          disabled={loading}
          className="w-full bg-[#D4A84F] text-black p-4 rounded-2xl font-bold text-lg mt-8"
        >

          {loading ? "Creating..." : "Create Account"}

        </button>

      </div>

    </main>
  );
}