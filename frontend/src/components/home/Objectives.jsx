const objectivesData = [
  {
    id: 1,
    title: "Science Communication",
    description:
      "Providing a fundamental understanding of the necessity of wastewater treatment, associated challenges, and the potential for renewable energy bioproducts through lectures tailored from school to Ph.D. levels.",
    icon: "/images/objectives/communication.png",
  },
  {
    id: 2,
    title: "Hands-on Awareness",
    description:
      "Advancing theoretical knowledge by offering 2-3 month hands-on training modules. Participants engage in practical experiments and operate sophisticated analytical instruments for water quality testing.",
    icon: "/images/objectives/awareness.png",
  },
  {
    id: 3,
    title: "Real-world Implementation",
    description:
      "Bridging the gap between lab and field through simulation tools (BioSolve, Aspen Plus, AI/ML modeling, and organized industrial STP visits to understand technology upscaling and sustainability.",
    icon: "/images/objectives/implementation.png",
  },
  {
    id: 4,
    title: "Certification programmes",
    description:
      "A series of lectures and hands on trainings on basic, advanced and professional level certification programmes dedicated on the theme of the project by the experts.",
    icon: "/images/objectives/certification.png",
  },
  {
    id: 5,
    title: "Lab and industrial visits",
    description:
      "Arranging visits to labs and industries to provide first hand experience to students towards their career opportunities",
    icon: "/images/objectives/visits.png",
  },
];

const Objectives = () => {
  return (
    <section className="relative overflow-hidden bg-white py-[60px] sm:py-[80px] lg:py-[100px]">
      
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-4">
        
        {/* HEADING */}
        <div className="mb-[40px] text-center lg:mb-[50px]">
          
          <h2 className="font-['Roboto_Condensed'] text-[34px] font-bold text-black sm:text-[42px] lg:text-[52px]">
            Core Objectives
          </h2>

          <p className="mx-auto mt-4 max-w-[1000px] font-['Roboto_Condensed'] text-[16px] font-light leading-[1.6] text-[#555] sm:text-[18px] lg:text-[20px]">
            Three Actionable Pillars —
            <span className="font-bold text-[#1489C8]">
              {" "}
              Communication, Training,{" "}
            </span>
            and
            <span className="font-bold text-[#1489C8]">
              {" "}
              Implementation
            </span>

            <br className="hidden sm:block" />

            We provide a clear roadmap of how academic research will
            translate into tangible environmental benefits.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="flex flex-wrap items-center justify-center gap-x-[20px] gap-y-[50px] sm:gap-x-[24px] sm:gap-y-[60px]">
          
          {objectivesData.map((item) => (
            <div key={item.id} className="relative">
              
              {/* CARD CONTAINER */}
              <div className="relative h-[280px] w-[100%] max-w-[320px] sm:h-[288px] sm:w-[246px]">
                
                {/* SVG BACKGROUND */}
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 246 258"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id={`grad-${item.id}`}
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#D1ECF4" />
                      <stop offset="51.92%" stopColor="#D8DFE3" />
                      <stop offset="100%" stopColor="#FFFFFF" />
                    </linearGradient>
                  </defs>

                  {/* SLOPE */}
                  <path
                    d="
                      M 30 258
                      L 216 258
                      Q 246 258 246 228
                      L 246 52
                      Q 246 22 214 16
                      L 42 0
                      Q 0 0 0 42
                      L 0 228
                      Q 0 258 30 258
                      Z
                    "
                    fill={`url(#grad-${item.id})`}
                    stroke="#B8D8E8"
                    strokeWidth="1.2"
                  />
                </svg>

                {/* CONTENT */}
                <div className="relative z-10 p-[22px] pt-[50px] sm:p-[24px] sm:pt-[58px]">
                  
                  <h3 className="font-['Roboto_Condensed'] text-[18px] font-bold leading-tight text-black sm:text-[20px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 font-['Roboto_Condensed'] text-[14px] leading-[1.5] text-[#444]">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* ICON BOX */}
              <div
                className="
                  absolute
                  -bottom-[28px]
                  left-1/2
                  z-20
                  flex
                  h-[55px]
                  w-[69px]
                  -translate-x-1/2
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[10px]
                  border-2
                  backdrop-blur-[3px]
                "
                style={{
                  background:
                    "linear-gradient(180deg, rgba(209, 236, 244, 0.3) -47.2%, rgba(216, 223, 227, 0.3) 41.99%, rgba(255, 255, 255, 0.3) 192.8%)",

                  boxShadow:
                    "0px 7px 4px -3px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(255, 255, 255, 0.25)",

                  borderImageSource: `
                    radial-gradient(
                      165.65% 389.6% at 50% 50%,
                      rgba(196, 205, 217, 0.0864) 0%,
                      rgba(25, 74, 133, 0.72) 100%
                    ),
                    linear-gradient(
                      180deg,
                      rgba(255, 255, 255, 0) 85.71%,
                      #FFFFFF 100%
                    )
                  `,

                  borderImageSlice: 1,
                  borderColor: "transparent",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-[28px] w-[28px] object-contain sm:h-[30px] sm:w-[30px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;