 "use client";
    import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

type Report = {
  id: string;

  project_name: string;

  location: string;

  finish: string;

  estimated_cost: number;
};

export default function Dashboard() {
    const [reports, setReports] =
  useState<Report[]>([]);

const [loading, setLoading] =
  useState(true);
const [userEmail, setUserEmail] =
  useState("");

  const getUser = async () => {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.email) {

    setUserEmail(user.email);

  }

};

getUser();

  useEffect(() => {

  const fetchReports = async () => {

    const { data, error } =
      await supabase
        .from("reports")
       .select("*")
.eq("user_email", userEmail)
        .order("created_at", {
          ascending: false,
        });

    if (!error && data) {

      setReports(data);

    }

    setLoading(false);

  };

  fetchReports();

}, [userEmail]);

  return (
    <main className="min-h-screen bg-[#0F1115] text-white flex">

      {/* Sidebar */}
      <aside className="w-64 bg-[#1A1D24] border-r border-[#2A2F3A] p-6 hidden md:block">

        <h1 className="text-2xl font-bold">
          My House <span className="text-[#D4A84F]">Cost NG</span>
        </h1>

        <div className="mt-10 space-y-4">

          <button className="w-full text-left p-4 rounded-2xl bg-[#22252D]">
            Dashboard
          </button>

          <button className="w-full text-left p-4 rounded-2xl hover:bg-[#22252D]">
            Saved Reports
          </button>

          <button className="w-full text-left p-4 rounded-2xl hover:bg-[#22252D]">
            Premium Plans
          </button>

          <button className="w-full text-left p-4 rounded-2xl hover:bg-[#22252D]">
            Contractors
          </button>

          <button className="w-full text-left p-4 rounded-2xl hover:bg-[#22252D]">
            Settings
          </button>

        </div>

      </aside>

      {/* Main Content */}
      <section className="flex-1 p-6">

        {/* Header */}
        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-3xl font-bold">
              Dashboard
            </h2>

            <p className="text-gray-400 mt-1">
              Welcome back 👋
            </p>
          </div>

          <div className="bg-[#1A1D24] border border-[#2A2F3A] rounded-2xl px-4 py-2">
            Abdullahi
          </div>

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">

          <div className="bg-[#1A1D24] border border-[#2A2F3A] rounded-3xl p-6">

            <p className="text-gray-400">
              Total Reports
            </p>

            <h3 className="text-4xl font-bold mt-3">
              12
            </h3>

          </div>

          <div className="bg-[#1A1D24] border border-[#2A2F3A] rounded-3xl p-6">

            <p className="text-gray-400">
              Premium Reports
            </p>

            <h3 className="text-4xl font-bold mt-3">
              4
            </h3>

          </div>

          <div className="bg-[#1A1D24] border border-[#2A2F3A] rounded-3xl p-6">

            <p className="text-gray-400">
              Saved Projects
            </p>

            <h3 className="text-4xl font-bold mt-3">
              9
            </h3>

          </div>

        </div>

        {/* Recent Reports */}
        <div className="bg-[#1A1D24] border border-[#2A2F3A] rounded-3xl p-6 mt-8">

          <div className="flex items-center justify-between">

            <h3 className="text-2xl font-bold">
              Recent Reports
            </h3>

            <button className="text-[#D4A84F]">
              View All
            </button>

          </div>

          <div className="space-y-4 mt-6">

  {loading ? (

    <p className="text-gray-400">
      Loading reports...
    </p>

  ) : reports.length === 0 ? (

    <p className="text-gray-400">
      No reports yet.
    </p>

  ) : (

    reports.map((report) => (

      <div
        key={report.id}
        className="flex items-center justify-between border border-[#2A2F3A] rounded-2xl p-4"
      >

        <div>

          <p className="font-semibold">
            {report.project_name}
          </p>

          <p className="text-gray-400 text-sm mt-1">
            {report.location} • {report.finish}
          </p>

        </div>

        <div className="text-right">

          <p className="font-bold">
            ₦
            {Number(
              report.estimated_cost
            ).toLocaleString()}
          </p>

          <p className="text-green-400 text-sm mt-1">
            Saved
          </p>

        </div>

      </div>

    ))

  )}

</div>

        </div>

      </section>

    </main>
  );
}