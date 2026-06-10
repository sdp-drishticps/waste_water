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
import villages from "./data/villagesData";


const ImpactTable = () => {
  const [selectedVillage, setSelectedVillage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { label: "All", icon: null, key: "total" },
    { label: "Students", icon: "/images/impact/student.png", key: "students", color: "#136DD3" },
    { label: "Researchers", icon: "/images/impact/researcher.png", key: "researchers", color: "#7A40AA" },
    { label: "Industry Experts", icon: "/images/impact/industry.png", key: "industry", color: "#579F26" },
    { label: "Community Members", icon: "/images/impact/community.png", key: "community", color: "#F98801" },
  ];

  const activeCatData = categories.find((c) => c.label === activeCategory);

  const maxTotal = Math.max(
    ...villages.map((v) => (activeCategory === "All" ? v.total : v[activeCatData.key])),
    1
  );
  
  const totalEngaged = villages.reduce(
    (acc, curr) => acc + (activeCategory === "All" ? curr.total : curr[activeCatData.key]),
    0
  );

  const renderLabel = (value) => (value > 0 ? value : "");

  const handleRowClick = (item) => {
    if (item.event) {
      setSelectedVillage(item);
    }
  };

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
                activeCategory === cat.label ? "bg-[#E6E6E6]" : "hover:bg-gray-50"
              }`}
            >
              {cat.icon && <img src={cat.icon} alt={cat.label} className="h-[13px] w-[13px] md:h-[14px] md:w-[14px]" />}
              <p className={`whitespace-nowrap font-['Roboto_Condensed'] text-[12px] sm:text-[13px] md:text-[14px] ${activeCategory === cat.label ? "font-[600]" : "font-[400]"}`}>
                {cat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="mt-[18px] md:mt-[20px] overflow-x-auto">
          <div className="flex min-w-[500px] items-center border-b border-[#E8EDF3] pb-[10px]">
            <div className="w-[100px] md:w-[140px] sticky left-0 z-10 bg-white">
              <p className="font-['Roboto_Condensed'] text-[13px] md:text-[15px] font-[600]">Village</p>
            </div>
            <div className="flex-1 text-center">
              <p className="font-['Roboto_Condensed'] text-[12px] md:text-[14px] font-[600] text-[#6B7280]">
                {activeCategory === "All" ? "No. of People Engaged" : `No. of ${activeCategory} Engaged`}
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
              const chartHeight = typeof window !== "undefined" && window.innerWidth >= 768 ? 24 : 22;
              const hasEvent = !!item.event;

              return (
                <div key={item.id} className="flex items-center">
                  {/* Left Column */}
                  <div
                    onClick={() => handleRowClick(item)}
                    className={`flex w-[110px] md:w-[140px] items-center gap-[8px] md:gap-[10px] sticky left-0 z-10 bg-white ${hasEvent ? "cursor-pointer" : "cursor-default"}`}
                  >
                    <div className="flex w-[110px] md:w-[130px] items-center justify-between sticky left-0 z-10 bg-white">
                      <div className="flex items-center gap-[8px] md:gap-[10px] min-w-0">
                        <div
                          className="flex h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] md:h-[20px] md:w-[20px] shrink-0 items-center justify-center rounded-full text-[9px] sm:text-[10px] md:text-[12px] font-[600] text-white"
                          style={{ backgroundColor: item.color }}
                        >
                          {item.id}
                        </div>
                        <p className="truncate font-['Roboto_Condensed'] text-[13px] sm:text-[14px] md:text-[15px] hover:text-[#136DD3]">
                          {item.name}
                        </p>
                      </div>
                      {hasEvent && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedVillage(item);
                          }}
                          className="ml-auto shrink-0 mr-1 md:mr-0 text-gray-500 hover:text-black transition-colors"
                        >
                          <img
                            src="/images/impact/eyeicon.png"
                            alt="View"
                            className="w-6 h-6 md:w-7 md:h-7 opacity-70 hover:opacity-100 transition-all duration-200"
                          />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Middle Column */}
                  <div
                    onClick={() => handleRowClick(item)}
                    className={`flex flex-1 min-w-[20px] overflow-hidden rounded-[2px] bg-gray-50 h-[22px] md:h-[24px] ${hasEvent ? "cursor-pointer" : "cursor-default"}`}
                  >
                    <ResponsiveContainer width="100%" height={chartHeight} minWidth={0}>
                      <BarChart layout="vertical" data={[item]} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                        <XAxis type="number" hide domain={[0, maxTotal]} />
                        <YAxis type="category" dataKey="name" hide />
                        {activeCategory === "All" ? (
                          <>
                            <Bar dataKey="students" stackId="a" fill="#136DD3" isAnimationActive={false}>
                              <LabelList dataKey="students" position="center" fill="#fff" fontSize={10} fontWeight={600} formatter={renderLabel} />
                            </Bar>
                            <Bar dataKey="researchers" stackId="a" fill="#7A40AA" isAnimationActive={false}>
                              <LabelList dataKey="researchers" position="center" fill="#fff" fontSize={10} fontWeight={600} formatter={renderLabel} />
                            </Bar>
                            <Bar dataKey="industry" stackId="a" fill="#579F26" isAnimationActive={false}>
                              <LabelList dataKey="industry" position="center" fill="#fff" fontSize={10} fontWeight={600} formatter={renderLabel} />
                            </Bar>
                            <Bar dataKey="community" stackId="a" fill="#F98801" isAnimationActive={false}>
                              <LabelList dataKey="community" position="center" fill="#fff" fontSize={10} fontWeight={600} formatter={renderLabel} />
                            </Bar>
                          </>
                        ) : (
                          <Bar dataKey={activeCatData.key} fill={activeCatData.color} isAnimationActive={false}>
                            <LabelList dataKey={activeCatData.key} position="center" fill="#fff" fontSize={10} fontWeight={600} formatter={renderLabel} />
                          </Bar>
                        )}
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Right Column */}
                  <div className="w-[55px] md:w-[70px] text-right">
                    <p className="font-['Roboto_Condensed'] text-[13px] md:text-[15px] font-semibold text-black">
                      {activeCategory === "All" ? item.total : item[activeCatData.key]}
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
                <img src="/images/impact/people-total.png" alt="people" className="h-[18px] w-[18px] sm:h-[20px] sm:w-[20px] md:h-[24px] md:w-[24px] shrink-0" />
                <p className="font-['Roboto_Condensed'] text-[13px] sm:text-[18px] md:text-[22px] font-semibold leading-tight text-[#136DD3] whitespace-nowrap">
                  Total {activeCategory === "All" ? "People" : activeCategory} Engaged Across 8 Villages:
                </p>
              </div>
              <div className="ml-auto text-right w-13.75 md:w-17.5">
                <span className="font-['Roboto_Condensed'] text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-semibold text-[#136DD3]">
                  {totalEngaged}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ImpactEventModal selectedVillage={selectedVillage} setSelectedVillage={setSelectedVillage} />
    </>
  );
};

export default ImpactTable;