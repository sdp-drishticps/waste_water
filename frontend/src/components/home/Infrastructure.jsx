import { useRef } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const infrastructureData = [
  {
    id: 1,
    title: "Wet Lab\nSpace",
    description:
      "Fully equipped experimental spaces designed for conducting fundamental chemical and biological wastewater treatments and wet lab experiments.",
    video: "/videos/infrastructure/wetlab.mp4",
  },
  {
    id: 2,
    title: "Sophisticated\nInstrumentation",
    description:
      "High-end analytical instruments including Gas Chromatography (GC) and High-Performance Liquid Chromatography (HPLC) for precise water quality analysis.",
    video: "/videos/infrastructure/instrumentation.mp4",
  },
  {
    id: 3,
    title: "Sewage Treatment Plant\n(STP)",
    description:
      "On-campus functional STP utilized as a live training ground for process observation and scaling experiments.",
    video: "/videos/infrastructure/stp.mp4",
  },
  {
    id: 4,
    title: "Computing\nLab",
    description:
      "Dedicated spaces equipped with advanced software (BioSolve, Aspen Plus, SPSS) for process simulation, modeling, and AI/ML data analysis.",
    video: "/videos/infrastructure/computing.mp4",
  },
  {
    id: 5,
    title: "Automation &\nTinkering Lab",
    description:
      "Electronic labs focused on building, testing, and tinkering with automated sensor systems for real-time water quality monitoring.",
    video: "/videos/infrastructure/automation.mp4",
  },
];

const Infrastructure = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -500,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 500,
      behavior: "smooth",
    });
  };

  const cardStyle = {
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.30) 37.97%, rgba(216,223,227,0.30) 90.99%, rgba(209,236,244,0.30) 192.8%)",
    boxShadow:
      "0px 7px 4px -3px rgba(0,0,0,0.18), inset 0px 4px 4px rgba(255,255,255,0.22)",
    border: "1px solid rgba(210,220,230,0.7)",
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[linear-gradient(180deg,#FFFFFF_26.52%,#F2F7FF_100%)]
        py-[60px]
        sm:py-[80px]
        lg:h-[771px]
        lg:py-0
      "
    >
      {/* Heading */}
      <div className="px-4 text-center sm:px-6 lg:px-0 lg:pt-[83px]">
        <h2
          className="
            font-['Roboto_Condensed']
            text-[32px]
            font-[600]
            leading-[1.2]
            text-black
            sm:text-[40px]
            lg:text-[52px]
            lg:leading-[47px]
          "
        >
          World-Class Infrastructure
        </h2>

        <p
          className="
            mx-auto
            mt-[18px]
            max-w-[1100px]
            font-['Roboto_Condensed']
            text-[16px]
            font-[300]
            leading-[1.6]
            text-black
            sm:text-[17px]
            lg:w-[80%]
            lg:text-[18px]
            lg:leading-[21px]
          "
        >
          Discover the extensive facilities available at
          <span className="mx-1 font-[600] text-[#1D85B7]">
            IIT Indore and DRISHTI CPS Foundation
          </span>
          that support our hands-on training. Click through
          the list to understand the specific equipment and
          environments utilized to deliver high-quality,
          practical education in wastewater management.
        </p>
      </div>

      {/* Cards Section With Navigation */}
      <div className="relative mt-[40px] lg:mt-[36px] mx-2 sm:mx-5">
        
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          aria-label="Scroll Left"
          className="
            absolute
            left-2
            top-[60%]
            z-40
            flex
            h-[40px]
            w-[40px]
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-white/95
            border border-gray-200
            shadow-[0_4px_12px_rgba(0,0,0,0.12)]
            backdrop-blur-sm
            transition-all
            duration-300
            hover:bg-gray-50
            hover:scale-105
            hover:shadow-[0_6px_16px_rgba(0,0,0,0.18)]
            active:scale-95
            sm:left-4
            sm:h-[48px]
            sm:w-[48px]
            lg:left-6
            lg:h-[54px]
            lg:w-[54px]
          "
        >
          <FaChevronLeft className="pr-[2px] text-[16px] text-[#1D85B7] sm:text-[18px] lg:text-[20px]" />
        </button>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          aria-label="Scroll Right"
          className="
            absolute
            right-2
            top-[60%]
            z-40
            flex
            h-[40px]
            w-[40px]
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-white/95
            border border-gray-200
            shadow-[0_4px_12px_rgba(0,0,0,0.12)]
            backdrop-blur-sm
            transition-all
            duration-300
            hover:bg-gray-50
            hover:scale-105
            hover:shadow-[0_6px_16px_rgba(0,0,0,0.18)]
            active:scale-95
            sm:right-4
            sm:h-[48px]
            sm:w-[48px]
            lg:right-6
            lg:h-[54px]
            lg:w-[54px]
          "
        >
          <FaChevronRight className="pl-[2px] text-[16px] text-[#1D85B7] sm:text-[18px] lg:text-[20px]" />
        </button>

        {/* Cards Scroll */}
        <div
          ref={scrollRef}
          className="
            overflow-x-auto
            scrollbar-hide
            px-[10px]
            sm:px-[30px]
            lg:pl-[20px]
            lg:pr-0
          "
        >
          <div className="flex gap-[20px] pr-[20px] sm:gap-[28px] lg:gap-[39px] lg:pr-[40px]">
            {infrastructureData.map((item) => (
              <div
                key={item.id}
                className="
                  relative
                  min-w-[300px]
                  pt-[85px]
                  sm:min-w-[360px]
                  lg:min-w-[448px]
                  lg:pt-[105px]
                "
              >
                {/* Video Icon */}
                <div
                  className="
                    absolute
                    left-[10px]
                    top-0
                    z-10
                    h-[70px]
                    w-[82px]
                    sm:h-[78px]
                    sm:w-[90px]
                    lg:left-[12px]
                    lg:h-[83px]
                    lg:w-[98px]
                  "
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-contain"
                  >
                    <source
                      src={item.video}
                      type="video/mp4"
                    />
                  </video>
                </div>

                {/* Card */}
                <div
                  className="
                    relative
                    min-h-[270px]
                    rounded-[6px]
                    px-[24px]
                    py-[40px]
                    sm:px-[32px]
                    sm:pt-[48px]
                    lg:h-[303px]
                    lg:px-[49px]
                    lg:pt-[61px]
                  "
                  style={cardStyle}
                >
                  {/* Title */}
                  <h3
                    className="
                      whitespace-pre-line
                      font-['Roboto_Condensed']
                      text-[24px]
                      font-[400]
                      leading-[1.2]
                      text-black
                      sm:text-[28px]
                      lg:text-[32px]
                      lg:leading-[35px]
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-[22px]
                      max-w-[309px]
                      font-['Roboto_Condensed']
                      text-[15px]
                      font-[300]
                      leading-[1.5]
                      text-black
                      lg:mt-[26px]
                      lg:text-[16px]
                      lg:leading-[19px]
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;