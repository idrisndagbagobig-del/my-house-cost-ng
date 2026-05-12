"use client";

import jsPDF from "jspdf";
import { useRef } from "react";

const reportSections = [

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

const materialIntelligence = [

  {
    label: "Cement Bags",
    value: "1,250 Bags",
  },

  {
    label: "Blocks Estimate",
    value: "18,500 Blocks",
  },

  {
    label: "Reinforcement",
    value: "14 Tons",
  },

  {
    label: "Sharp Sand",
    value: "8 Trucks",
  },

  {
    label: "Granite Volume",
    value: "12 Trucks",
  },

];

const summaryCosts = [

  ["Foundation Cost", "₦4,050,000"],

  ["Roofing Cost", "₦6,000,000"],

  ["Finishes Cost", "₦15,800,000"],

  ["Services Cost", "₦7,700,000"],

];

export default function FullReportPage() {

    const reportRef = useRef<HTMLDivElement>(null);

const downloadPDF = () => {

  const pdf = new jsPDF();

  pdf.setFontSize(22);

  pdf.text(
    "My House Cost NG - Premium Report",
    20,
    20
  );

  pdf.setFontSize(14);

  pdf.text("Foundation Cost: ₦4,050,000", 20, 50);

  pdf.text("Roofing Cost: ₦6,000,000", 20, 65);

  pdf.text("Finishes Cost: ₦15,800,000", 20, 80);

  pdf.text("Services Cost: ₦7,700,000", 20, 95);

  pdf.text("Cement Bags: 1,250 Bags", 20, 120);

  pdf.text("Blocks Estimate: 18,500 Blocks", 20, 135);

  pdf.text("Reinforcement: 14 Tons", 20, 150);

  pdf.text("Granite Volume: 12 Trucks", 20, 165);

  pdf.text("Estimated Build Duration: 6 Months", 20, 190);

  pdf.text("Maintenance Forecast: ₦450,000/year", 20, 205);

  pdf.save("MyHouseCostNG-Premium-Report.pdf");

};

  return (

    <main className="min-h-screen bg-[#0B0F19] text-white p-6">

      <div
  ref={reportRef}
  className="max-w-7xl mx-auto"
>

        {/* Header */}
        <div className="flex items-start justify-between mb-10">

          <div>

            <h1 className="text-5xl font-bold">

              Full Construction Report

            </h1>

            <p className="text-gray-400 mt-3 text-lg">

              Professional BOQ, Material Intelligence & Planning Report

            </p>

          </div>

          <button
  onClick={downloadPDF}
  className="bg-[#D4A84F] text-black px-6 py-4 rounded-2xl font-bold"
>

  Download Premium PDF

</button>

        </div>

        {/* Summary Costs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-10">

          {summaryCosts.map((item) => (

            <div
              key={item[0]}
              className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6"
            >

              <p className="text-gray-400">

                {item[0]}

              </p>

              <h2 className="text-3xl font-bold text-[#D4A84F] mt-4">

                {item[1]}

              </h2>

            </div>

          ))}

        </div>

        {/* Material Intelligence */}
        <div className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6 mb-10">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-3xl font-bold">

                Material Intelligence

              </h2>

              <p className="text-gray-400 mt-2">

                Estimated material requirements

              </p>

            </div>

            <div className="text-5xl">
              🧠
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-8">

            {materialIntelligence.map((item) => (

              <div
                key={item.label}
                className="bg-[#0B1220] border border-[#1F2937] rounded-2xl p-5"
              >

                <p className="text-gray-400">

                  {item.label}

                </p>

                <h3 className="text-2xl font-bold text-[#D4A84F] mt-4">

                  {item.value}

                </h3>

              </div>

            ))}

          </div>

        </div>

        {/* Report Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {reportSections.map((section) => (

            <div
              key={section.title}
              className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6"
            >

              <h2 className="text-3xl font-bold">

                {section.title}

              </h2>

              <div className="space-y-5 mt-8">

                {section.items.map((item) => (

                  <div
                    key={item[0]}
                    className="flex items-center justify-between border-b border-[#1F2937] pb-4"
                  >

                    <p className="text-lg">

                      {item[0]}

                    </p>

                    <p className="text-xl font-bold text-[#D4A84F]">

                      {item[1]}

                    </p>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

        {/* Maintenance Forecast */}
        <div className="bg-[#111827] border border-[#1F2937] rounded-3xl p-6 mt-10">

          <h2 className="text-3xl font-bold">

            Maintenance Forecast

          </h2>

          <p className="text-gray-400 mt-2">

            Estimated annual property maintenance projection

          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">

            <div className="bg-[#0B1220] rounded-2xl p-5">

              <p className="text-gray-400">
                Electrical Maintenance
              </p>

              <h3 className="text-2xl font-bold text-[#D4A84F] mt-4">
                ₦350,000 / year
              </h3>

            </div>

            <div className="bg-[#0B1220] rounded-2xl p-5">

              <p className="text-gray-400">
                Plumbing Maintenance
              </p>

              <h3 className="text-2xl font-bold text-[#D4A84F] mt-4">
                ₦280,000 / year
              </h3>

            </div>

            <div className="bg-[#0B1220] rounded-2xl p-5">

              <p className="text-gray-400">
                Finishes Maintenance
              </p>

              <h3 className="text-2xl font-bold text-[#D4A84F] mt-4">
                ₦450,000 / year
              </h3>

            </div>

          </div>

        </div>

      </div>

    </main>

  );

}