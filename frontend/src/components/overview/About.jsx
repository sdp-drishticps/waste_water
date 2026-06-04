import React from "react";

const investigators = [
  {
    name: "Prof. Kiran Bala",
    role: "Principal Investigator",
    designation: "Professor",
    organization: "MFSoS, IIT Indore",
    image: "/images/overview/kiran-bala.png",
    icon: "/images/overview/linkedin.png",
    link: "https://www.linkedin.com/in/kiran-bala-491b9515/",
    website: "https://sites.google.com/view/aetsiiti",
    orglink: "https://www.linkedin.com/in/algal-ecotechnology",
  },
  {
    name: "Dr. Atreyee Ghosh",
    role: "Co-Investigator",
    designation: "Sr. Scientific Officer",
    organization: "IITI DRISHTI CPS Foundation",
    image: "/images/overview/atreyee-ghosh.jpeg",
    icon: "/images/overview/linkedin.png",
    link: "https://www.linkedin.com/in/atreyee-ghosh-896470128/",
    website: "https://drishticps.iiti.ac.in/",
    orglink: "https://www.linkedin.com/company/iiti-drishti-cps-foundation-iit-indore",
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
        <div className="mt-[60px] flex flex-col items-center gap-10 lg:mt-[100px] xl:flex-row xl:justify-center xl:gap-0">
          {investigators.map((person, index) => (
            <React.Fragment key={index}>
              {/* Investigator Card */}
              <div className="flex w-full max-w-[600px] flex-col items-center gap-[20px] sm:flex-row sm:items-stretch">
                {/* Image */}
                <div className="h-[280px] w-full max-w-[260px] shrink-0 overflow-hidden rounded-[16px] border border-[1px] border-[#B1B1B1]">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content */}
<div className="mx-auto flex min-h-[280px] w-[260px] sm:w-full sm:h-[260px] flex-1 flex-col items-center justify-between rounded-[16px] bg-[#F4F4F4] px-[24px] py-[24px] text-center">                  {/* Top */}
                  <div>
                    <p className="font-['Roboto_Condensed'] text-[18px] font-bold text-[#2E4A59] lg:text-[20px]">
                      {person.role}
                    </p>

                    <h3 className="mt-1 flex items-center justify-center gap-2 font-['Roboto_Condensed'] text-[22px] font-bold text-[#1D85B7] lg:text-[24px]">
                      <span>
                        <a
                          href={person.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center rounded-[12px] transition-all duration-300 hover:scale-105"
                        >
                          <img
                            src={person.icon}
                            alt="social"
                            className="h-[18px] w-[18px]"
                          />
                        </a>
                      </span>
                      {person.name}
                    </h3>
                  </div>

                  {/* Center */}
                  <div>
                    <p className="mt-3 font-['Roboto_Condensed'] text-[18px] font-normal text-[#4A4A4A] lg:text-[20px]">
                      {person.designation}
                    </p>

                    <p className="mt-1 block font-['Roboto_Condensed'] text-[18px] text-[#4A4A4A]">
                      {person.organization}
                    </p>
                  </div>

                  {/* Bottom Icons */}
                  <div className="mt-4 flex items-center gap-4 sm:mt-1">
                    {/* Website Icon */}
                    <a
                      href={person.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-[46px] w-[46px] items-center justify-center rounded-[12px] bg-[#aaaaaa15] shadow-md transition-all duration-300 hover:scale-105"
                    >
                      <img
                        src="/images/overview/web.png"
                        alt="website"
                        className="h-[22px] w-[22px]"
                      />
                    </a>

                    {/* Org LinkedIn Icon */}
                    <a
                      href={person.orglink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-[46px] w-[46px] items-center justify-center rounded-[12px] bg-[#AAAAAA15] shadow-md transition-all duration-300 hover:scale-105"
                    >
                      <img
                        src={person.icon}
                        alt="social"
                        className="h-[22px] w-[22px]"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* Divider */}
              {index === 0 && (
                <>
                  {/* Desktop Divider - Fixed breakpoint from lg to xl */}
                  <div className="mx-[50px] hidden h-[260px] w-[1px] bg-[#D9D9D9] xl:block" />

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