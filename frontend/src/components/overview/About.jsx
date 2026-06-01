import React from "react";

const investigators = [
  {
    name: "Prof. Kiran Bala",
    role: "Principal Investigator",
    designation: "Professor",
    organization: "MFSoS, IIT Indore",
    image: "/images/overview/kiran-bala.png",
    icon: "/images/overview/web.png",

    // ADD THIS
    link: "https://sites.google.com/view/aetsiiti",
  },

  {
    name: "Dr. Atreyee Ghosh",
    role: "Co-Investigator",
    designation: "Sr. Scientific Officer",
    organization: "IITI DRISHTI CPS Foundation",
    image: "/images/overview/atreyee-ghosh.jpeg",
    icon: "/images/overview/linkedin.png",

    // ADD THIS
    link: "https://www.linkedin.com/in/atreyee-ghosh-896470128/",
  },
];

const About = () => {
  return (
    <section className="w-full bg-white py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[100px]">
        {/* Heading Section */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-[12px]">
          <h2 className="font-['Roboto_Condensed'] text-[32px] font-bold text-[#1D85B7] sm:text-[38px] lg:text-[44px]">
            About the Project
          </h2>

          <span className="font-['Roboto_Condensed'] text-[16px] font-medium text-black sm:text-[18px] lg:text-[20px]">
            (Duration: 2026-2027)
          </span>
        </div>

        {/* Description Text */}
        <div className="mt-[28px] flex flex-col gap-[22px] lg:mt-[40px] lg:gap-[30px]">
          <p className="max-w-[1240px] font-['Roboto_Condensed'] text-[16px] font-light leading-[28px] text-[#4A4A4A] sm:text-[17px] lg:text-[19px]">
            This project, funded by the Department of Science & Technology (DST)
            under the National Council for Science and Technology Communication
            (NCSTC), is hosted at the Indian Institute of Technology Indore. The
            initiative focuses on connecting communities with innovative
            technologies for wastewater treatment and renewable energy to
            promote environmental sustainability. Aligned with the United
            Nations Sustainable Development Goals (SDGs) for Clean Water &
            Sanitation and Affordable & Clean Energy, the project bridges the
            gap between scientific research and public understanding through
            expert lectures, hands-on workshops, laboratory training, outreach
            activities, and community engagement programs.
          </p>

          <p className="max-w-[1240px] font-['Roboto_Condensed'] text-[16px] font-light leading-[28px] text-[#4A4A4A] sm:text-[17px] lg:text-[19px]">
            Aligned with the United Nations Sustainable Development Goals (SDGs)
            for Clean Water & Sanitation and Affordable & Clean Energy, the
            project bridges the gap between scientific research and public
            understanding through expert lectures, hands-on workshops,
            laboratory training, outreach activities, and community engagement
            programs.
          </p>
        </div>

        {/* Investigators Section */}
        <div className="mt-[60px] flex flex-col items-center gap-10 lg:mt-[100px] lg:flex-row lg:items-center lg:justify-center lg:gap-0">
          {investigators.map((person, index) => (
            <React.Fragment key={index}>
              {/* Investigator Block */}
              <div className="flex w-full max-w-[540px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-center sm:gap-[20px]">
                {/* Profile Image */}
                <div className="mx-auto h-[260px] w-full max-w-[240px] shrink-0 overflow-hidden rounded-[15px] sm:mx-0 sm:h-[280px] border border-gray-400 ">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Info Card */}
                <div className="flex h-auto min-h-[260px] w-full flex-col items-center justify-between rounded-[15px] bg-[#F2F3F5] px-[20px] py-[28px] text-center sm:h-[280px] sm:max-w-[280px] sm:px-[20px] sm:py-[35px]">
                  <div>
                    <p className="font-['Roboto_Condensed'] text-[18px] font-bold text-[#1E3A4C] lg:text-[19px]">
                      {person.role}
                    </p>

                    <h3 className="mt-[4px] font-['Roboto_Condensed'] text-[20px] font-bold text-[#1D85B7] lg:text-[22px]">
                      {person.name}
                    </h3>
                  </div>

                  <div className="mt-6">
                    <p className="font-['Roboto_Condensed'] text-[16px] font-normal text-[#555555] lg:text-[18px]">
                      {person.designation}
                    </p>

                    <a
                      href={
                        person.organization === "IITI DRISHTI CPS Foundation"
                          ? "https://drishticps.iiti.ac.in/"
                          : undefined
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-['Roboto_Condensed'] text-[15px] font-normal text-[#555555] transition-colors duration-300 lg:text-[17px]"
                    >
                      {person.organization}
                    </a>
                  </div>

                  {/* Social Icon Button */}
                  {/* Social Icon Button */}
                  <a
                    href={person.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
    mt-6
    flex
    h-[44px]
    w-[44px]
    items-center
    justify-center
    rounded-[10px]
    shadow-sm
    transition-all
    duration-300
    hover:scale-105
  "
                  >
                    <img
                      src={person.icon}
                      alt="social"
                      className="h-[22px] w-[22px] object-contain"
                    />
                  </a>
                </div>
              </div>

              {/* Divider */}
              {index === 0 && (
                <>
                  {/* Desktop Divider */}
                  <div className="mx-[50px] hidden h-[280px] w-[1.5px] bg-[#E0E0E0] lg:block" />

                  {/* Mobile Divider */}
                  <div className="h-[1.5px] w-full max-w-[300px] bg-[#E0E0E0] lg:hidden" />
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
