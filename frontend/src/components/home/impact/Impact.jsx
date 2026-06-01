import { useState } from "react";
import ImpactEventModal from "./ImpactEventModal";
import ImpactCard from "./ImpactCard";

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

const Impact = () => {
  const [selectedVillage, setSelectedVillage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { label: "All", icon: null },
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

   return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white to-[#F1F7FF] py-[40px] md:py-[55px] lg:py-[74px]">
      <div className="mx-auto max-w-[1440px] px-[16px] sm:px-[20px] md:px-[32px] lg:px-[60px]">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-['Roboto_Condensed'] text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-[600] leading-tight text-black">
            Target Impact & Outreach
          </h2>

          <p className="mx-auto mt-[14px] md:mt-[18px] lg:mt-[24px] max-w-[994px] font-['Roboto_Condensed'] text-[14px] sm:text-[15px] md:text-[17px] lg:text-[18px] font-[300] leading-relaxed text-black">
            This visualization illustrates the projected reach of our programs
            across key regional blocks. It provides accountability regarding the
            project's{" "}
            <span className="font-[600] text-[#1D85B7]">
              geographic and demographic focus,
            </span>{" "}
            emphasizing our commitment to widespread environmental education as
            mandated by NCSTC.
          </p>
        </div>

        {/* Main Content */}
    <div className="mt-[40px] md:mt-[55px] lg:mt-[90px] flex flex-col xl:flex-row items-center xl:items-start justify-between gap-[32px] md:gap-[40px] xl:gap-6">
       {/* LEFT MAP */}
<div className="relative w-full xl:max-w-[520px] 2xl:max-w-[630px]">
  
  {/* Location Video */}
  <div
    className="
      absolute
      left-0
      top-0
      z-10

      w-[50px]
      sm:w-[60px]
      md:w-[90px]
      lg:w-[90px]
    "
  >
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-auto object-contain"
    >
      <source
        src="/videos/impact/location-pin.mp4"
        type="video/mp4"
      />
    </video>
  </div>

  {/* Map */}
  <img
    src="/images/impact/map.png"
    alt="map"
    className="
      h-auto
      w-full
      object-contain

    pl-[50px]
sm:pl-[60px]
md:pl-[80px]
xl:pl-[90px]
    "
  />
</div>

          {/* RIGHT TABLE */}
          <div className="w-full xl:w-[620px] 2xl:w-[650px] rounded-[6px] bg-white p-[10px] sm:p-[14px] md:p-[18px] shadow-[0px_2px_4px_rgba(98,98,98,0.25)]">
            {/* Dynamic Filters */}
            <div className="flex items-center gap-3 md:gap-4 overflow-x-auto no-scrollbar rounded-[4px] border border-[#E2EAF3] bg-[#FAFBFD] px-[10px] md:px-[10px] py-[3px]">
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
                      activeCategory === cat.label
                        ? "font-[600]"
                        : "font-[400]"
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
                <div className="w-[100px] md:w-[140px]">
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
                {villages.map((item) => (
                  <div key={item.id} className="flex items-center">
                    <div
                      onClick={() => setSelectedVillage(item)}
                      className="flex w-[100px] md:w-[140px] cursor-pointer items-center gap-[8px] md:gap-[10px]"
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

                    {/* DYNAMIC BARS */}
                    <div
                      onClick={() => setSelectedVillage(item)}
                      className="flex flex-1 overflow-hidden rounded-[2px] bg-gray-50"
                    >
                      {activeCategory === "All" ? (
                        <>
                          <div
                            className="flex h-[22px] md:h-[24px] items-center justify-center bg-[#136DD3] text-[9px] sm:text-[10px] md:text-[11px] font-[600] text-white transition-all duration-500"
                            style={{ width: `${item.students}px` }}
                          >
                            {item.students}
                          </div>

                          <div
                            className="flex h-[22px] md:h-[24px] items-center justify-center bg-[#7A40AA] text-[9px] sm:text-[10px] md:text-[11px] font-[600] text-white transition-all duration-500"
                            style={{ width: `${item.researchers * 2}px` }}
                          >
                            {item.researchers}
                          </div>

                          <div
                            className="flex h-[22px] md:h-[24px] items-center justify-center bg-[#579F26] text-[9px] sm:text-[10px] md:text-[11px] font-[600] text-white transition-all duration-500"
                            style={{ width: `${item.industry * 4}px` }}
                          >
                            {item.industry}
                          </div>

                          <div
                            className="flex h-[22px] md:h-[24px] items-center justify-center bg-[#F98801] text-[9px] sm:text-[10px] md:text-[11px] font-[600] text-white transition-all duration-500"
                            style={{ width: `${item.community * 2}px` }}
                          >
                            {item.community}
                          </div>
                        </>
                      ) : (
                        <div
                          className="flex h-[22px] md:h-[24px] items-center justify-center text-[9px] sm:text-[10px] md:text-[11px] font-[600] text-white transition-all duration-500"
                          style={{
                            width: `${Math.max(
                              (item[
                                categories.find(
                                  (c) => c.label === activeCategory,
                                ).key
                              ] /
                                item.total) *
                                100,
                              10,
                            )}%`,
                            backgroundColor: categories.find(
                              (c) => c.label === activeCategory,
                            ).color,
                          }}
                        >
                          {
                            item[
                              categories.find(
                                (c) => c.label === activeCategory,
                              ).key
                            ]
                          }
                        </div>
                      )}
                    </div>

                    <div className="w-[55px] md:w-[70px] text-right">
                      <p className="font-['Roboto_Condensed'] text-[13px] md:text-[15px] font-[600] text-black">
                        {activeCategory === "All"
                          ? item.total
                          : item[
                              categories.find(
                                (c) => c.label === activeCategory,
                              ).key
                            ]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-[22px] md:mt-[20px] border-t border-[#E8EDF3] pt-[14px] md:pt-[14px]">
                <div className="flex flex-col md:flex-row md:items-center gap-[10px]">
                  <div className="flex items-start md:items-center gap-[10px]">
                    <img
                      src="/images/impact/people-total.png"
                      alt="people"
                      className="h-[18px] w-[18px] sm:h-[20px] sm:w-[20px] md:h-[24px] md:w-[24px]"
                    />

                    <p className="font-['Roboto_Condensed'] text-[17px] sm:text-[20px] md:text-[22px] lg:text-[22px] font-[600] leading-tight text-[#136DD3]">
                      Total{" "}
                      {activeCategory === "All" ? "People" : activeCategory}{" "}
                      Engaged Across 8 Villages:
                    </p>
                  </div>

                  <p className="font-['Roboto_Condensed'] text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-[600] text-[#136DD3] md:ml-auto lg:ml-[12px]">
                    {activeCategory === "All"
                      ? "80"
                      : villages.reduce(
                          (acc, curr) =>
                            acc +
                            curr[
                              categories.find(
                                (c) => c.label === activeCategory,
                              ).key
                            ],
                          0,
                        )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

       <ImpactCard />
      </div>

      {/* Impact Event Modal */}
      <ImpactEventModal
        selectedVillage={selectedVillage}
        setSelectedVillage={setSelectedVillage}
      />
    </section>
  );
};

export default Impact;
