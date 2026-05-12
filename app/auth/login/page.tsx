"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {

    setLoading(true);

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    setLoading(false);

    if (error) {

      alert(error.message);

    } else {

      alert("Login successful!");

      router.push("/dashboard");

    }

  };

  return (
    <main className="min-h-screen bg-[#0F1115] text-white flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-[#1A1D24] border border-[#2A2F3A] rounded-[32px] p-8">

        <h1 className="text-4xl font-bold">
          Welcome Back
        </h1>

        <p className="text-gray-400 mt-3">
          Login to your account
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
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-[#D4A84F] text-black p-4 rounded-2xl font-bold text-lg mt-8"
        >

          {loading ? "Logging in..." : "Login"}

        </button>

      </div>

    </main>
  );
}