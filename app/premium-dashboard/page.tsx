"use client";

import Link from "next/link";

export default function PremiumDashboard() {

  const kpis = [

    {
      title: "Total Project Estimate",
      value: "₦78,500,000",
      subtitle: "All inclusive estimate",
      icon: "💼",
    },

    {
      title: "Estimated Duration",
      value: "6 Months",
      subtitle: "Total build time",
      icon: "📅",
    },

    {
      title: "Current Phase",
      value: "Roofing",
      subtitle: "In progress",
      icon: "🏗️",
    },

    {
      title: "Completion",
      value: "35%",
      subtitle: "Overall progress",
      icon: "📊",
    },

  ];

  const reportItems = [

  {
    title: "Foundation BOQ",
    value: "₦4,050,000",
    icon: "🏛️",
  },

  {
    title: "Roofing Estimate",
    value: "₦6,000,000",
    icon: "🏠",
  },

  {
    title: "Plumbing Cost",
    value: "₦2,850,000",
    icon: "🚿",
  },

  {
    title: "Electrical Cost",
    value: "₦2,400,000",
    icon: "⚡",
  },

  {
    title: "Labour Breakdown",
    value: "₦4,200,000",
    icon: "👷",
  },

  {
    title: "Material Estimate",
    value: "₦21,100,000",
    icon: "🧱",
  },

  {
    title: "Finishes Cost",
    value: "₦15,800,000",
    icon: "🎨",
  },

  {
    title: "Services Cost",
    value: "₦7,700,000",
    icon: "🔧",
  },

];

const progressItems = [

  {
    stage: "Foundation",
    progress: 100,
    color: "bg-green-500",
  },

  {
    stage: "Structure",
    progress: 65,
    color: "bg-green-500",
  },

  {
    stage: "Roofing",
    progress: 30,
    color: "bg-[#D4A84F]",
  },

  {
    stage: "Finishes",
    progress: 10,
    color: "bg-gray-300",
  },

];

const costTimeline = [

  {
    month: "Month 1",
    cost: "₦8M",
  },

  {
    month: "Month 2",
    cost: "₦18M",
  },

  {
    month: "Month 3",
    cost: "₦35M",
  },

  {
    month: "Month 4",
    cost: "₦52M",
  },

  {
    month: "Month 5",
    cost: "₦70M",
  },

];

const liveProject = {

  current: "Roofing",

  next: "Interior Finishes",

  completion: "3 Months Remaining",

  risk:
    "Heavy rainfall may slow roofing installation timelines.",

};

const marketUpdates = [

  {
    material: "Cement",
    change: "+12%",
    status: "up",
  },

  {
    material: "Steel",
    change: "+8%",
    status: "up",
  },

  {
    material: "Tiles",
    change: "-3%",
    status: "down",
  },

  {
    material: "Aluminium Roofing",
    change: "+5%",
    status: "up",
  },

];

const contractors = [

  {
    name: "BuildPro Nigeria",
    specialty: "Luxury Duplex Construction",
    location: "Lagos",
    rating: "4.9",
  },

  {
    name: "Prime Structure Ltd",
    specialty: "Commercial Buildings",
    location: "Abuja",
    rating: "4.8",
  },

  {
    name: "Elite Homes",
    specialty: "Residential Projects",
    location: "Port Harcourt",
    rating: "4.7",
  },

];

const suppliers = [

  {
    name: "Dangote Cement Distributor",
    category: "Cement Supplier",
    location: "Lagos",
  },

  {
    name: "Premium Roofing Sheets Ltd",
    category: "Roofing Materials",
    location: "Abuja",
  },

  {
    name: "Lagos Electrical Hub",
    category: "Electrical Supplies",
    location: "Port Harcourt",
  },

  {
    name: "Royal Plumbing World",
    category: "Plumbing Materials",
    location: "Ibadan",
  },

];

const materialIntelligence = [

  {
    material: "Cement Bags",
    value: "1,250 Bags",
    icon: "🧱",
  },

  {
    material: "Blocks Estimate",
    value: "18,500 Blocks",
    icon: "🏢",
  },

  {
    material: "Reinforcement",
    value: "14 Tons",
    icon: "🔩",
  },

  {
    material: "Sharp Sand",
    value: "8 Trucks",
    icon: "🏖️",
  },

  {
    material: "Granite Volume",
    value: "12 Trucks",
    icon: "🪨",
  },

];
  return (

    <main className="min-h-screen bg-[#0B0F19] text-white p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between mb-8">

          <div>

            <h1 className="text-5xl font-bold tracking-tight">

              Premium Construction Dashboard

            </h1>

            <p className="text-gray-400 mt-3 text-lg">

              Advanced project intelligence,
              planning tools and contractor ecosystem.

            </p>

          </div>

          <div className="border border-[#D4A84F] text-[#D4A84F] px-5 py-2 rounded-xl text-sm font-semibold">

            👑 PREMIUM ACCESS

          </div>

        </div>

        {/* KPI CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

          {kpis.map((item) => (

            <div
              key={item.title}
              className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6"
            >

              <div className="flex items-center justify-between">

                <div className="text-4xl">
                  {item.icon}
                </div>

              </div>

              <p className="text-gray-400 text-sm mt-4">
                {item.title}
              </p>

              <h2 className="text-4xl font-bold mt-2">
                {item.value}
              </h2>

              <p className="text-gray-500 text-sm mt-2">
                {item.subtitle}
              </p>

            </div>

          ))}

        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">

          {/* LEFT COLUMN */}
          <div className="space-y-6">

 <div className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6">

  <div className="flex items-start justify-between">

    <div>

      <h2 className="text-3xl font-bold">

        Full Construction Report

      </h2>

      <p className="text-gray-400 mt-2">

        Professional BOQ & Planning Report

      </p>

    </div>

    <Link
  href="/premium-dashboard/full-report"
  className="border border-[#D4A84F] text-[#D4A84F] px-4 py-2 rounded-xl text-sm font-semibold"
>

  View Full Report ↗

</Link>

  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">

    {reportItems.map((item) => (

      <div
        key={item.title}
        className="bg-[#0B1220] border border-[#1F2937] rounded-2xl p-5"
      >

        <div className="text-3xl">
          {item.icon}
        </div>

        <p className="text-lg font-semibold mt-5">

          {item.title}

        </p>

        <p className="text-[#D4A84F] text-2xl font-bold mt-3">

          {item.value}

        </p>

      </div>

    ))}

  </div>

</div>            

           <div className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6">

  <div className="flex items-start justify-between">

    <div>

      <h2 className="text-3xl font-bold">

        Verified Contractor Directory

      </h2>

      <p className="text-gray-400 mt-2">

        Trusted construction professionals

      </p>

    </div>

    <div className="text-5xl">
      👷
    </div>

  </div>

  <div className="space-y-5 mt-8">

    {contractors.map((contractor) => (

      <div
        key={contractor.name}
        className="bg-[#0B1220] border border-[#1F2937] rounded-2xl p-5"
      >

        <div className="flex items-start justify-between">

          <div>

            <h3 className="text-2xl font-bold">

              {contractor.name}

            </h3>

            <p className="text-gray-400 mt-2">

              {contractor.specialty}

            </p>

            <p className="text-sm text-gray-500 mt-3">

              📍 {contractor.location}

            </p>

          </div>

          <div className="bg-[#1F2937] px-4 py-2 rounded-xl text-[#D4A84F] font-bold">

            ⭐ {contractor.rating}

          </div>

        </div>

        <div className="flex gap-3 mt-6">

          <button className="bg-[#D4A84F] text-black px-5 py-3 rounded-xl font-semibold">

            Request Consultation

          </button>

          <button className="border border-[#1F2937] px-5 py-3 rounded-xl font-semibold">

            View Profile

          </button>

        </div>

      </div>

    ))}

  </div>

</div>

         

            <div className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6">

  <div className="flex items-start justify-between">

    <div>

      <h2 className="text-3xl font-bold">

        Supplier Recommendations

      </h2>

      <p className="text-gray-400 mt-2">

        Trusted material suppliers & procurement partners

      </p>

    </div>

    <div className="text-5xl">
      🏢
    </div>

  </div>

  <div className="space-y-5 mt-8">

    {suppliers.map((supplier) => (

      <div
        key={supplier.name}
        className="bg-[#0B1220] border border-[#1F2937] rounded-2xl p-5"
      >

        <div className="flex items-start justify-between">

          <div>

            <h3 className="text-2xl font-bold">

              {supplier.name}

            </h3>

            <p className="text-gray-400 mt-2">

              {supplier.category}

            </p>

            <p className="text-sm text-gray-500 mt-3">

              📍 {supplier.location}

            </p>

          </div>

          <div className="bg-[#1F2937] px-4 py-2 rounded-xl text-[#D4A84F] font-bold">

            VERIFIED

          </div>

        </div>

        <div className="flex gap-3 mt-6">

          <button className="bg-[#D4A84F] text-black px-5 py-3 rounded-xl font-semibold">

            Contact Supplier

          </button>

          <button className="border border-[#1F2937] px-5 py-3 rounded-xl font-semibold">

            View Products

          </button>

        </div>

      </div>

    ))}

  </div>

</div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">

            <div className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6">

  <div className="flex items-start justify-between">

    <div>

      <h2 className="text-3xl font-bold">

        Project Progress Tracker

      </h2>

      <p className="text-gray-400 mt-2">

        Real-time construction progress

      </p>

    </div>

    <div className="text-right">

      <p className="text-5xl font-bold text-[#D4A84F]">

        35%

      </p>

      <p className="text-gray-400 text-sm mt-1">

        Overall Completion

      </p>

    </div>

  </div>

  {/* Overall Progress */}
  <div className="w-full h-4 bg-[#0B1220] rounded-full mt-8 overflow-hidden">

    <div
      className="h-full bg-[#D4A84F] rounded-full"
      style={{
        width: "35%",
      }}
    />

  </div>

  {/* Progress Items */}
  <div className="space-y-6 mt-10">

    {progressItems.map((item) => (

      <div key={item.stage}>

        <div className="flex items-center justify-between">

          <p className="text-lg font-semibold">

            {item.stage}

          </p>

          <p className="text-sm text-gray-400">

            {item.progress}%

          </p>

        </div>

        <div className="w-full h-3 bg-[#0B1220] rounded-full mt-3 overflow-hidden">

          <div
            className={`h-full rounded-full ${item.color}`}
            style={{
              width: `${item.progress}%`,
            }}
          />

        </div>

      </div>

    ))}

  </div>

</div>

            <div className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6">

  <div className="flex items-start justify-between">

    <div>

      <h2 className="text-3xl font-bold">

        Cost Over Time Tracker

      </h2>

      <p className="text-gray-400 mt-2">

        Projected cumulative spending

      </p>

    </div>

    <button className="border border-[#D4A84F] text-[#D4A84F] px-4 py-2 rounded-xl text-sm font-semibold">

      View Full Chart

    </button>

  </div>

  <div className="space-y-5 mt-8">

    {costTimeline.map((item) => (

      <div
        key={item.month}
        className="bg-[#0B1220] border border-[#1F2937] rounded-2xl p-5 flex items-center justify-between"
      >

        <div>

          <p className="text-xl font-semibold">

            {item.month}

          </p>

          <p className="text-gray-400 text-sm mt-2">

            Projected cumulative spend

          </p>

        </div>

        <p className="text-3xl font-bold text-[#D4A84F]">

          {item.cost}

        </p>

      </div>

    ))}

  </div>

</div>

            <div className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6">

  <div className="flex items-start justify-between">

    <div>

      <h2 className="text-3xl font-bold">

        Live Project Phase

      </h2>

      <p className="text-gray-400 mt-2">

        Real-time construction stage intelligence

      </p>

    </div>

    <div className="text-5xl">
      🏗️
    </div>

  </div>

  <div className="space-y-5 mt-8">

    {/* Current */}
    <div className="bg-[#0B1220] border border-[#1F2937] rounded-2xl p-5">

      <p className="text-gray-400 text-sm">

        Current Phase

      </p>

      <h3 className="text-3xl font-bold mt-3">

        {liveProject.current}

      </h3>

    </div>

    {/* Next */}
    <div className="bg-[#0B1220] border border-[#1F2937] rounded-2xl p-5">

      <p className="text-gray-400 text-sm">

        Next Phase

      </p>

      <h3 className="text-3xl font-bold mt-3">

        {liveProject.next}

      </h3>

    </div>

    {/* Completion */}
    <div className="bg-[#0B1220] border border-[#1F2937] rounded-2xl p-5">

      <p className="text-gray-400 text-sm">

        Estimated Completion

      </p>

      <h3 className="text-3xl font-bold mt-3 text-[#D4A84F]">

        {liveProject.completion}

      </h3>

    </div>

    {/* Risk Alert */}
    <div className="bg-[#2A2418] border border-[#4A3A1A] rounded-2xl p-5">

      <p className="text-[#D4A84F] text-sm leading-relaxed">

        ⚠️ {liveProject.risk}

      </p>

    </div>

  </div>

</div>

            <div className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6">

  <div className="flex items-start justify-between">

    <div>

      <h2 className="text-3xl font-bold">

        Market Intelligence

      </h2>

      <p className="text-gray-400 mt-2">

        Live construction material trends

      </p>

    </div>

    <div className="text-5xl">
      📡
    </div>

  </div>

  <div className="space-y-5 mt-8">

    {marketUpdates.map((item) => (

      <div
        key={item.material}
        className="bg-[#0B1220] border border-[#1F2937] rounded-2xl p-5 flex items-center justify-between"
      >

        <div>

          <p className="text-xl font-semibold">

            {item.material}

          </p>

          <p className="text-gray-400 text-sm mt-2">

            Monthly price fluctuation

          </p>

        </div>

        <div
          className={`text-2xl font-bold ${
            item.status === "up"
              ? "text-red-400"
              : "text-green-400"
          }`}
        >

          {item.change}

        </div>

      </div>

    ))}

  </div>

  {/* Market Insight */}
  <div className="bg-[#2A2418] border border-[#4A3A1A] rounded-2xl p-5 mt-6">

    <p className="text-[#D4A84F] leading-relaxed text-sm">

      📈 Cement and steel prices are currently experiencing
      inflationary pressure. Early material procurement is recommended
      to reduce future construction costs.

    </p>

  </div>

</div>

          </div>

        </div>

      </div>

    </main>

  );

}