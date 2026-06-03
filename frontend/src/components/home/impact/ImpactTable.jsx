import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import ImpactEventModal from "./ImpactEventModal";

const villages = [
  {
    id: 1,

    name: "Umrikheda",

    total: 80,

    students: 80,

    researchers: 0,

    industry: 0,

    community: 0,

    color: "#D11B72",

    event: {
      date: "11 May, 2026",

      college:
        "Chameli Devi Group of Institutions, College in Village Umrikheda, Madhya Pradesh",

      images: [
        "/images/gallery/gallery-1.jpg",

        "/images/gallery/gallery-2.jpeg",

        "/images/gallery/gallery-3.jpeg",
      ],

      details: [
        "A one-day event titled “Technology-Driven Solutions for Sustainable Engineering” was organized at Chameli Devi   Group of Institutions on the occasion of National Technology Day.",

        "Around 80 participants from diverse academic backgrounds attended the event, including B.Tech.(Civil, Mechanical, Electrical, and Computer Applications), B.Pharm., M. Pharm., and D. Pharm. students.",

        "Dr. Archana Singh delivered an insightful lecture on hydrogel-based materials and their biomedical and environmental applications, emphasizing smart hydrogels for pollutant removal and environmental sustainability.",

        "Dr. Paramita Das presented a lecture on sustainable proton exchange membranes for hydrogen fuel cells, highlighting cellulose nanocrystals and bio-based composite membrane development.",

        "The event also featured a quiz competition on sustainable engineering practices, National Technology Day, and innovative green technologies.",

        "Top performers in the quiz competition were rewarded with gifts for their achievements.",

        "The program concluded with closing remarks by Prof. Kiran Bala.",
      ],
    },
  },

  {
    id: 2,

    name: "Simrol",

    total: 0,

    students: 0,

    researchers: 0,

    industry: 0,

    community: 0,

    color: "#136DD3",
  },

  {
    id: 3,

    name: "Datoda",

    total: 0,

    students: 0,

    researchers: 0,

    industry: 0,

    community: 0,

    color: "#60A912",
  },

  {
    id: 4,

    name: "Jhabua",

    total: 0,

    students: 0,

    researchers: 0,

    industry: 0,

    community: 0,

    color: "#DA263E",
  },

  {
    id: 5,

    name: "Bagiram",

    total: 0,

    students: 0,

    researchers: 0,

    industry: 0,

    community: 0,

    color: "#EA7907",
  },

  {
    id: 6,

    name: "Rau",

    total: 0,

    students: 0,

    researchers: 0,

    industry: 0,

    community: 0,

    color: "#8237B0",
  },

  {
    id: 7,

    name: "Mhow",

    total: 0,

    students: 0,

    researchers: 0,

    industry: 0,

    community: 0,

    color: "#1B83E3",
  },

  {
    id: 8,

    name: "Chikli",

    total: 0,

    students: 0,

    researchers: 0,

    industry: 0,

    community: 0,

    color: "#05A4A3",
  },

  {
    id: 9,

    name: "Gokanya",

    total: 0,

    students: 0,

    researchers: 0,

    industry: 0,

    community: 0,

    color: "#A06910",
  },
];
const ImpactTable = () => {
  const [selectedVillage, setSelectedVillage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { label: "All", icon: null, key: "total" },
    {
      label: "Students",
      icon: "/images/impact/student.png",
      key: "students",
      color: "#136DD3",
    },
    {
      label: "Researchers",
      icon: "/images/impact/researcher.png",
      key: "researchers",
      color: "#7A40AA",
    },
    {
      label: "Industry Experts",
      icon: "/images/impact/industry.png",
      key: "industry",
      color: "#579F26",
    },
    {
      label: "Community Members",
      icon: "/images/impact/community.png",
      key: "community",
      color: "#F98801",
    },
  ];

  const activeCatData = categories.find((c) => c.label === activeCategory);

  // Calculate the maximum value to keep the Recharts X-Axis scale uniform across all rows
  const maxTotal = Math.max(
    ...villages.map((v) =>
      activeCategory === "All" ? v.total : v[activeCatData.key],
    ),
    1,
  );
  const totalEngaged = villages.reduce(
    (acc, curr) =>
      acc + (activeCategory === "All" ? curr.total : curr[activeCatData.key]),
    0,
  );

  // Helper to hide zero values in the chart labels
  const renderLabel = (value) => (value > 0 ? value : "");

  return (
    <>
      <div className="w-full xl:w-[650px] 2xl:w-[650px] rounded-[6px] bg-white p-[10px] sm:p-[14px] md:p-[18px] shadow-[0px_2px_4px_rgba(98,98,98,0.25)]">
        {/* Dynamic Filters */}
        <div className="flex items-center gap-3 md:gap-4 overflow-x-auto no-scrollbar rounded-[4px] border border-[#E2EAF3] bg-[#FAFBFD] px-[10px] py-[3px]">
          {categories.map((cat) => (
            <div
              key={cat.label}
              onClick={() => setActiveCategory(cat.label)}
              className={`flex cursor-pointer items-center gap-[6px] shrink-0 rounded-[3px] px-[8px] md:px-[10px] py-[4px] transition-all ${
                activeCategory === cat.label
                  ? "bg-[#E6E6E6]"
                  : "hover:bg-gray-50"
              }`}
            >
              {cat.icon && (
                <img
                  src={cat.icon}
                  alt={cat.label}
                  className="h-[13px] w-[13px] md:h-[14px] md:w-[14px]"
                />
              )}
              <p
                className={`whitespace-nowrap font-['Roboto_Condensed'] text-[12px] sm:text-[13px] md:text-[14px] ${
                  activeCategory === cat.label ? "font-[600]" : "font-[400]"
                }`}
              >
                {cat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="mt-[18px] md:mt-[20px] overflow-x-auto">
          <div className="flex min-w-[500px] items-center border-b border-[#E8EDF3] pb-[10px]">
            <div className="w-[100px] md:w-[140px] sticky left-0 z-10 bg-white">
              <p className="font-['Roboto_Condensed'] text-[13px] md:text-[15px] font-[600]">
                Village
              </p>
            </div>
            <div className="flex-1 text-center">
              <p className="font-['Roboto_Condensed'] text-[12px] md:text-[14px] font-[600] text-[#6B7280]">
                {activeCategory === "All"
                  ? "No. of People Engaged"
                  : `No. of ${activeCategory} Engaged`}
              </p>
            </div>
            <div className="w-[55px] md:w-[70px] text-right">
              <p className="font-['Roboto_Condensed'] text-[13px] md:text-[15px] font-[600]">
                {activeCategory === "All" ? "Total" : "Count"}
              </p>
            </div>
          </div>

          {/* Rows */}
          <div className="mt-[10px] flex min-w-[500px] flex-col gap-[10px]">
            {villages.map((item) => {
              // Determine precise height based on responsive layouts to keep SVG tracking accurate
              const chartHeight =
                typeof window !== "undefined" && window.innerWidth >= 768
                  ? 24
                  : 22;

              return (
                <div key={item.id} className="flex items-center">
                  {/* Left Column (HTML) */}
                  <div
                    onClick={() => setSelectedVillage(item)}
                    className="flex w-[100px] md:w-[140px] cursor-pointer items-center gap-[8px] md:gap-[10px] sticky left-0 z-10 bg-white"
                  >
                    <div
                      className="flex h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] md:h-[20px] md:w-[20px] shrink-0 items-center justify-center rounded-full text-[9px] sm:text-[10px] md:text-[12px] font-[600] text-white"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.id}
                    </div>
                    <p className="truncate font-['Roboto_Condensed'] text-[13px] sm:text-[14px] md:text-[15px] font-[400] text-black transition-all hover:text-[#136DD3]">
                      {item.name}
                    </p>
                  </div>

                  {/* Middle Column - Dynamic Bars (RECHARTS) */}
                  {/* ADDED min-w-[0] to prevent flexbox collapse initialization errors */}
                  <div
                    onClick={() => setSelectedVillage(item)}
                    className="flex flex-1 min-w-[0] overflow-hidden rounded-[2px] bg-gray-50 h-[22px] md:h-[24px] cursor-pointer"
                  >
                    {/* Explicitly passing pixel height eliminates layout guessing errors */}
                    <ResponsiveContainer
                      width="100%"
                      height={chartHeight}
                      minWidth={0}
                    >
                      <BarChart
                        layout="vertical"
                        data={[item]}
                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                      >
                        <XAxis type="number" hide domain={[0, maxTotal]} />
                        <YAxis type="category" dataKey="name" hide />

                        {activeCategory === "All" ? (
                          <>
                            <Bar
                              dataKey="students"
                              stackId="a"
                              fill="#136DD3"
                              isAnimationActive={false}
                            >
                              <LabelList
                                dataKey="students"
                                position="center"
                                fill="#fff"
                                fontSize={10}
                                fontWeight={600}
                                formatter={renderLabel}
                              />
                            </Bar>
                            <Bar
                              dataKey="researchers"
                              stackId="a"
                              fill="#7A40AA"
                              isAnimationActive={false}
                            >
                              <LabelList
                                dataKey="researchers"
                                position="center"
                                fill="#fff"
                                fontSize={10}
                                fontWeight={600}
                                formatter={renderLabel}
                              />
                            </Bar>
                            <Bar
                              dataKey="industry"
                              stackId="a"
                              fill="#579F26"
                              isAnimationActive={false}
                            >
                              <LabelList
                                dataKey="industry"
                                position="center"
                                fill="#fff"
                                fontSize={10}
                                fontWeight={600}
                                formatter={renderLabel}
                              />
                            </Bar>
                            <Bar
                              dataKey="community"
                              stackId="a"
                              fill="#F98801"
                              isAnimationActive={false}
                            >
                              <LabelList
                                dataKey="community"
                                position="center"
                                fill="#fff"
                                fontSize={10}
                                fontWeight={600}
                                formatter={renderLabel}
                              />
                            </Bar>
                          </>
                        ) : (
                          <Bar
                            dataKey={activeCatData.key}
                            fill={activeCatData.color}
                            isAnimationActive={false}
                          >
                            <LabelList
                              dataKey={activeCatData.key}
                              position="center"
                              fill="#fff"
                              fontSize={10}
                              fontWeight={600}
                              formatter={renderLabel}
                            />
                          </Bar>
                        )}
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Right Column (HTML) */}
                  <div className="w-[55px] md:w-[70px] text-right">
                    <p className="font-['Roboto_Condensed'] text-[13px] md:text-[15px] font-[600] text-black">
                      {activeCategory === "All"
                        ? item.total
                        : item[activeCatData.key]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-[22px] md:mt-[20px] border-t border-[#E8EDF3] pt-[14px]">
            <div className="flex min-w-[500px] items-center">
              <div className="flex items-center gap-[10px] sticky left-0 z-10 bg-white pr-2 max-w-[380px] sm:max-w-none">
                <img
                  src="/images/impact/people-total.png"
                  alt="people"
                  className="h-[18px] w-[18px] sm:h-[20px] sm:w-[20px] md:h-[24px] md:w-[24px] shrink-0"
                />
                <p className="font-['Roboto_Condensed'] text-[13px] sm:text-[18px] md:text-[22px] font-[600] leading-tight text-[#136DD3] whitespace-nowrap">
                  Total {activeCategory === "All" ? "People" : activeCategory}{" "}
                  Engaged Across 8 Villages:
                </p>
              </div>

              {/* Right Side: Total Counter (Pushed to the very end to match the total column) */}
              <div className="ml-auto text-right w-[55px] md:w-[70px]">
                <span className="font-['Roboto_Condensed'] text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-[600] text-[#136DD3]">
                  {totalEngaged}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ImpactEventModal
        selectedVillage={selectedVillage}
        setSelectedVillage={setSelectedVillage}
      />
    </>
  );
};

export default ImpactTable;
