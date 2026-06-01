import { useState } from "react";

const pathwaysData = [
  {
    id: 0,
    title: "School Students",
    description:
      "Fostering early environmental awareness and basic scientific curiosity.",

    modules: [
      {
        module: "Module 1",
        title: "Basic",
        description: "Simplified science fundamentals of water pollution.",
        icon: "/images/pathways/module.png",
      },

      {
        module: "Module 2",
        title: "Activities",
        description:
          "Interactive awareness quizzes and environmental competitions.",
        icon: "/images/pathways/module.png",
      },

      {
        module: "Module 3",
        title: "Field",
        description:
          "Guided laboratory tours to observe basic science in action.",
        icon: "/images/pathways/module.png",
      },
    ],
  },

  {
    id: 1,
    title: "College & Research",
    description:
      "Deep technical training for academic advancement and operational expertise.",

    modules: [
      {
        module: "Module 1",
        title: "Intermediate",
        description:
          "Hands-on training with GC, HPLC, and UV-Vis Spectrophotometry.",
        icon: "/images/pathways/research.png",
      },

      {
        module: "Module 2",
        title: "Advanced",
        description:
          "Simulation and modeling using BioSolve, Aspen Plus, and SPSS.",
        icon: "/images/pathways/research.png",
      },

      {
        module: "Module 3",
        title: "Implementation",
        description: "Visits to the on-campus Sewage Treatment Plant (STP).",
        icon: "/images/pathways/research.png",
      },
    ],
  },

  {
    id: 2,
    title: "Industry Professionals",
    description:
      "Bridging laboratory innovations with large-scale industrial applications.",

    modules: [
      {
        module: "Module 1",
        title: "Technology",
        description:
          "Analyzing upscaling strategies for new wastewater treatments.",
        icon: "/images/pathways/industry.png",
      },

      {
        module: "Module 2",
        title: "Sustainability",
        description:
          "Integrating renewable energy byproducts into existing plants.",
        icon: "/images/pathways/industry.png",
      },

      {
        module: "Module 3",
        title: "Data",
        description:
          "AI/ML applications for operational efficiency and monitoring.",
        icon: "/images/pathways/industry.png",
      },
    ],
  },

  {
    id: 3,
    title: "Regional Communities",
    description: "Empowering local populations in Simrol, Jhabua, and Mhow.",

    modules: [
      {
        module: "Module 1",
        title: "Awareness",
        description:
          "Understanding the health impacts of untreated wastewater.",
        icon: "/images/pathways/community.png",
      },

      {
        module: "Module 2",
        title: "Innovation",
        description:
          "Submitting innovative local ideas for water conservation.",
        icon: "/images/pathways/community.png",
      },

      {
        module: "Module 3",
        title: "Outreach",
        description:
          "Participating in community-driven environmental assessments.",
        icon: "/images/pathways/community.png",
      },
    ],
  },
];

const Pathways = () => {
  const [activePathway, setActivePathway] = useState(0);

  const activeModules = pathwaysData[activePathway].modules;

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-[40px]
        md:py-[70px]
      "
      id="pathways"
    >
      {/* WRAPPER */}
      <div className="mx-auto max-w-[1440px] px-[20px] md:px-[40px] xl:px-[70px]">
        {/* HEADING */}
        <div className="text-center">
          <h2
            className="
              font-['Roboto_Condensed']
              text-[36px]
              md:text-[52px]
              font-[700]
              leading-[44px]
              md:leading-[60px]
              text-black
            "
          >
            Custom Educational Pathways
          </h2>

          <p
            className="
              mx-auto
              mt-[16px]
              md:mt-[22px]
              max-w-[990px]
              font-['Roboto_Condensed']
              text-[16px]
              md:text-[18px]
              font-[300]
              leading-[24px]
              md:leading-[26px]
              text-[#333]
            "
          >
            Explore the tailored training programs designed for our diverse
            target audiences. This interactive tool allows you to select a
            stakeholder group and view the specific curriculum, ranging from
            basic awareness to advanced
            <span className="font-[700] text-[#1D85B7]">
              {" "}
              technical modeling, ensuring relevant skill development.
            </span>
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="relative mt-[40px] md:mt-[90px] flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-0">
          {/* LEFT SECTION */}
          <div className="relative w-full max-w-[760px]">
            {/* VERTICAL DIVIDER - Hidden on smaller screens to prevent layout breakage */}
            <div
              className="
                hidden
                lg:block
                absolute
                left-1/2
                top-[-2px]
                h-[610px]
                w-[1px]
                -translate-x-1/2
                bg-[#DADADA]
              "
            />

            {/* HORIZONTAL DIVIDER - Hidden on smaller screens */}
            <div
              className="
                hidden
                lg:block
                absolute
                left-0
                top-1/2
                h-[1px]
                w-full
                -translate-y-1/2
                bg-[#DADADA]
              "
            />

          {/* GRID */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-0">
  {pathwaysData.map((item, index) => (
    <div key={index}>
      {/* CARD */}
      <div
        onClick={() => setActivePathway(index)}
        className={`
          relative
          min-h-[285px]
          lg:h-[285px]
          cursor-pointer
          px-[20px]
          md:px-[28px]
          md:m-4
          pt-[30px]
          md:pt-[48px]
          transition-all
          duration-300
          rounded-[12px]

          ${
            activePathway === index
              ? "bg-[#F4F7FB] shadow-[0px_2px_10px_rgba(0,0,0,0.08)]"
              : "bg-gray-50 md:bg-transparent hover:bg-[#FAFCFE]"
          }
        `}
      >
        {/* TOP */}
        <div className="flex items-start justify-between">
          <h3
            className="
              max-w-[80%]
              md:max-w-[270px]
              font-['Roboto_Condensed']
              text-[24px]
              md:text-[28px]
              font-[700]
              leading-[30px]
              md:leading-[34px]
              text-black
            "
          >
            {item.title}
          </h3>

          <img
            src="/images/pathways/arrow.png"
            alt="arrow"
            className="
              mt-[4px]
              h-[22px]
              w-[22px]
              object-contain
            "
          />
        </div>

        {/* DESCRIPTION */}
        <p
          className="
            absolute
            pt-5
            left-[20px]
            md:left-[28px]
            w-[85%]
            md:w-[240px]
            font-['Roboto_Condensed']
            text-[15px]
            md:text-[16px]
            font-[300]
            leading-[22px]
            text-[#333]
          "
        >
          {item.description}
        </p>

        {/* VIEW BUTTON */}
        {activePathway !== index && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActivePathway(index);
            }}
            className="
              absolute
              bottom-[20px]
              md:bottom-[28px]
              right-[20px]
              md:right-[28px]
              flex
              items-center
              gap-[4px]
              rounded-full
              border
              border-[#7CC4EA]
              px-[10px]
              py-[2px]
              text-[14px]
              font-semibold
              text-[#2A8DCC]
              transition-all
              duration-300
              hover:bg-[#EAF6FD]
            "
          >
            View
            <img
              src="/images/pathways/arrow-blue.png"
              alt="view"
              className="h-[12px] w-[12px]"
            />
          </button>
        )}
      </div>

      {/* MOBILE/TABLET MODULES */}
      {activePathway === index && (
        <div className="mt-4 flex flex-col gap-4 lg:hidden">
          {item.modules.map((module, moduleIndex) => (
            <div
              key={moduleIndex}
              className="
                rounded-[12px]
                border
                border-[#67B8E8]
                bg-white
                px-[18px]
                py-[18px]
              "
            >
              <div className="flex items-start justify-between">
                <div>
                  <p
                    className="
                      font-['Roboto_Condensed']
                      text-[17px]
                      font-[700]
                      text-[#1D85B7]
                    "
                  >
                    {module.module}
                  </p>

                  <h4
                    className="
                      mt-[10px]
                      font-['Roboto_Condensed']
                      text-[18px]
                      font-[700]
                      text-black
                    "
                  >
                    {module.title}
                  </h4>
                </div>

                <img
                  src={module.icon}
                  alt={module.title}
                  className="h-[30px] w-[30px] object-contain"
                />
              </div>

              <p
                className="
                  mt-[12px]
                  font-['Roboto_Condensed']
                  text-[15px]
                  font-[300]
                  leading-[20px]
                  text-[#333]
                "
              >
                {module.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  ))}
</div>

</div> 
          {/* CENTER TIMELINE - Hidden on mobile/tablet to allow vertical stacking */}
          <div className="relative hidden lg:block w-[150px]">
            {/* DASHED LINE */}
            <div
              className="
    absolute
    left-1/2
    top-[63px]
    h-[400px]
    w-[1.7px]
    -translate-x-1/2
    bg-[repeating-linear-gradient(to_bottom,#1D85B7_0px,#1D85B7_8px,transparent_8px,transparent_25px)]
  "
            />

            {/* CIRCLES */}
            {[48, 220, 410].map((top, index) => (
              <div
                key={index}
                className="
                  absolute
                  left-1/2
                  -translate-x-1/2
                "
                style={{ top }}
              >
                <div className="relative flex items-center justify-center">
                  <div
                    className="
                      h-[58px]
                      w-[54px]
                      bg-white
                      rounded-full
                    "
                  />

                  {/* ACTUAL DOT */}
                  <div
                    className="
                      absolute
                      h-[14px]
                      w-[14px]
                      rounded-full
                      bg-[#1D85B7]
                    "
                  />
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT MODULES */}
          <div className="hidden lg:block lg:w-[300px]">
            <div className="flex flex-col md:flex-row lg:flex-col gap-4 lg:gap-[26px]">
              {activeModules.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex-1
                    min-h-[160px]
                    h-auto
                    rounded-[12px]
                    border
                    border-[#67B8E8]
                    bg-white
                    px-[18px]
                    py-[18px]
                  "
                >
                  {/* TOP */}
                  <div className="flex items-start justify-between">
                    <div>
                      <p
                        className="
                          font-['Roboto_Condensed']
                          text-[17px]
                          font-[700]
                          text-[#1D85B7]
                        "
                      >
                        {item.module}
                      </p>

                      <h4
                        className="
                          mt-[10px]
                          md:mt-[18px]
                          font-['Roboto_Condensed']
                          text-[18px]
                          font-[700]
                          text-black
                        "
                      >
                        {item.title}
                      </h4>
                    </div>

                    <img
                      src={item.icon}
                      alt={item.title}
                      className="
                        h-[30px]
                        w-[30px]
                        object-contain
                      "
                    />
                  </div>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-[12px]
                      md:mt-[16px]
                      font-['Roboto_Condensed']
                      text-[15px]
                      md:text-[16px]
                      font-[300]
                      leading-[20px]
                      text-[#333]
                    "
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pathways;
