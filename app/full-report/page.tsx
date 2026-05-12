"use client";

const breakdown = [
  {
    title: "Foundation BOQ",
    items: [
      ["Excavation", "₦850,000"],
      ["Concrete", "₦1,400,000"],
      ["Reinforcement", "₦1,150,000"],
      ["Hardcore Filling", "₦650,000"],
    ],
  },

  {
    title: "Roofing Estimate",
    items: [
      ["Roof Structure", "₦2,800,000"],
      ["Roof Covering", "₦1,950,000"],
      ["Ceiling Works", "₦1,250,000"],
    ],
  },

  {
    title: "Plumbing Estimate",
    items: [
      ["Piping", "₦950,000"],
      ["Sanitary Fittings", "₦1,300,000"],
      ["Water Installation", "₦600,000"],
    ],
  },

  {
    title: "Electrical Estimate",
    items: [
      ["Wiring", "₦1,200,000"],
      ["Lighting", "₦750,000"],
      ["Distribution Board", "₦450,000"],
    ],
  },

  {
    title: "Labour Breakdown",
    items: [
      ["Bricklayers", "₦1,500,000"],
      ["Carpenters", "₦1,200,000"],
      ["Electricians", "₦850,000"],
      ["Plumbers", "₦650,000"],
    ],
  },

  {
    title: "Material Estimate",
    items: [
      ["Blocks", "₦2,400,000"],
      ["Cement", "₦3,100,000"],
      ["Iron Rods", "₦2,750,000"],
      ["Tiles", "₦1,850,000"],
    ],
  },
];

export default function FullReportPage() {

  return (
    <main className="min-h-screen bg-[#0F1115] text-white px-4 py-8">

      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="bg-[#1A1D24] border border-[#2A2F3A] rounded-[32px] p-6">

          <h1 className="text-4xl font-bold">
            Full Construction Report
          </h1>

          <p className="text-gray-400 mt-3">
            Professional BOQ & Planning Report
          </p>

        </div>

        {/* Breakdown Sections */}
        <div className="space-y-6 mt-6">

          {breakdown.map((section) => (

            <div
              key={section.title}
              className="bg-[#1A1D24] border border-[#2A2F3A] rounded-[32px] p-6"
            >

              <h2 className="text-2xl font-bold mb-5">
                {section.title}
              </h2>

              <div className="space-y-4">

                {section.items.map((item) => (

                  <div
                    key={item[0]}
                    className="flex items-center justify-between border-b border-[#2A2F3A] pb-3"
                  >

                    <p className="text-gray-300">
                      {item[0]}
                    </p>

                    <p className="font-semibold">
                      {item[1]}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}