// src/components/common/Footer.jsx

import {
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import footerVideo from "/videos/water-ripple-bg/water-ripple.mp4";

const Footer = () => {
  return (
    <footer className="relative min-h-[700px] overflow-hidden md:min-h-[620px] lg:h-[507px] lg:min-h-0">
      
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src={footerVideo}
          type="video/mp4"
        />
      </video>

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-[#00679b]/35" />

      {/* Main Wrapper */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center justify-center px-4 py-8 sm:px-6 md:px-8 lg:px-[58px]">
        
        {/* Footer Glass Box */}
        <div
          className="
            w-full
            rounded-[6px]
            border
            px-4
            py-6
            sm:px-6
            md:px-8
            lg:h-[372px]
            lg:px-[30px]
            lg:pt-[28px]
            lg:pb-[14px]
            shadow-[0px_7px_4px_-3px_rgba(0,0,0,0.25),inset_0px_4px_4px_rgba(255,255,255,0.18)]
            backdrop-blur-[2px]
          "
          style={{
            background:
              "linear-gradient(180deg, rgba(209,236,244,0.22) -47.2%, rgba(216,223,227,0.22) 41.99%, rgba(255,255,255,0.22) 192.8%)",

            borderImage:
              "radial-gradient(165.65% 389.6% at 50% 50%, rgba(196,205,217,0.10) 0%, rgba(255,255,255,0.7) 100%) 1",
          }}
        >
          
          {/* TOP */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            
            {/* Left Text */}
            <div className="max-w-[400px] text-white">
              
              <h2 className="text-[14px] leading-[1.6] font-normal sm:text-[15px] lg:text-[17px]">
                A project sanctioned by the Department of Science &
                Technology, NCSTC, Government of India.
              </h2>

              <p className="mt-5 text-[14px] font-normal sm:text-[15px] lg:mt-[26px] lg:text-[17px]">
                Host Institution: IIT Indore
              </p>
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-[20px]">
              
              {/* PI */}
              <div className="w-full rounded-[12px] bg-white/12 px-[22px] py-[16px] sm:w-[200px]">
                
                <p className="text-[16px] font-semibold leading-[1.3] text-[#29485f]">
                  Principal Investigator
                </p>

                <h3 className="mt-[4px] text-[16px] font-bold text-white">
                  Prof. Kiran Bala
                </h3>
              </div>

              {/* Co PI */}
              <div className="w-full rounded-[12px] bg-white/12 px-[22px] py-[16px] sm:w-[200px]">
                
                <p className="text-[16px] font-semibold leading-[1.3] text-[#29485f]">
                  Co-Investigator
                </p>

                <h3 className="mt-[4px] text-[16px] font-bold text-white">
                  Dr. Atreyee Ghosh
                </h3>
              </div>
            </div>
          </div>

          {/* Middle Empty Area */}
          <div className="h-10 md:h-14 lg:h-[148px]" />

          {/* Resources */}
          <div className="flex flex-col gap-4 border-b border-white/35 pb-[20px] text-white lg:flex-row lg:items-center lg:justify-between">
            
            <h3 className="text-[16px] font-bold">
              Resources :
            </h3>

            <a
              href="#"
              className="text-[14px] font-normal hover:text-cyan-200 sm:text-[16px]"
            >
              • Publications & Booklets
            </a>

            <a
              href="#"
              className="text-[14px] font-normal hover:text-cyan-200 sm:text-[16px]"
            >
              • Assessment Portal
            </a>

            <a
              href="#"
              className="text-[14px] font-normal hover:text-cyan-200 sm:text-[16px]"
            >
              • Certificate Validation
            </a>

            <a
              href="#"
              className="text-[14px] font-normal hover:text-cyan-200 sm:text-[16px]"
            >
              • Monitoring & Evaluation
            </a>
          </div>

          {/* Bottom */}
          <div className="mt-[14px] flex flex-col items-start gap-4 text-white lg:flex-row lg:items-center lg:justify-center lg:gap-[24px]">
            
            {/* Address */}
            <div className="flex items-start gap-[8px] text-[14px] sm:text-[15px] lg:items-center lg:text-[16px]">
              
              <FaMapMarkerAlt className="mt-1 shrink-0 text-[13px] lg:mt-0" />

              <p className="leading-[1.6]">
                Indian Institute of Technology Indore,
                Simrol, Khandwa Road, Indore, MP, 453552
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-[8px] text-[14px] font-normal sm:text-[15px] lg:text-[16px]">
              
              <FaEnvelope className="shrink-0 text-[13px]" />

              <a href="mailto:project.ncstc@iiti.ac.in">
                project.ncstc@iiti.ac.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;