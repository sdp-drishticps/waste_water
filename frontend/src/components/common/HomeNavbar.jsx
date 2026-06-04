import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Overview", path: "/overview" },
  { name: "Objectives", sectionId: "objectives" },
  { name: "Pathways", sectionId: "pathways" },
  { name: "Impact", sectionId: "impact" },
  { name: "Facilities", sectionId: "facilities" },
  { name: "Gallery", path: "/gallery" },
];

const handleScroll = (sectionId) => {
  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const HomeNavbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      {/* TOP LOGOS */}
      <div className="absolute left-0 top-[14px] z-50 flex w-full items-center justify-center gap-3 px-4 sm:top-[18px] sm:gap-[22px]">
        <img
          src="/images/logos/drishti-logo.png"
          alt="drishti"
          className="h-[42px] w-auto object-contain sm:h-[50px] lg:h-[56px]"
        />

        <img
          src="/images/logos/iit-logo.png"
          alt="iit"
          className="h-[46px] w-auto object-contain sm:h-[54px] lg:h-[56px]"
        />

        <img
          src="/images/logos/dst-logo.png"
          alt="dst"
          className="h-[38px] w-auto object-contain sm:h-[45px] lg:h-[55px]"
        />

         <img
            src="/images/logos/ncstc-logo.png"
            alt="ncstc"
            className="h-[38px] w-auto object-contain sm:h-[45px] lg:h-[52px]"
          />

      </div>

      {/* DESKTOP NAVBAR */}
      <div className="absolute left-1/2 top-[88px] z-50 hidden -translate-x-1/2 md:block lg:top-[97px]">
        <div
          className="
            flex
            h-[49px]
            w-[700px]
            lg:w-[767px]
            items-center
            justify-center
            rounded-[37px]
            bg-[linear-gradient(180deg,rgba(209,236,244,0.3)_-47.2%,rgba(216,223,227,0.3)_41.99%,rgba(255,255,255,0.3)_192.8%)]
            shadow-[0px_7px_4px_-3px_rgba(0,0,0,0.25),inset_0px_4px_4px_rgba(255,255,255,0.25)]
            backdrop-blur-[8px]
          "
        >
          {/* Nav Items */}
          <div className="flex w-full items-center justify-between px-[35px] lg:px-[50px]">
            {navItems.map((item, index) =>
              item.sectionId ? (
                <button
                  key={index}
                  onClick={() => handleScroll(item.sectionId)}
                  className="
                    cursor-pointer
                    font-['Roboto_Condensed']
                    text-[17px]
                    font-[600]
                    leading-[23px]
                    text-white
                    transition-all
                    duration-300
                    hover:opacity-80
                    lg:text-[20px]
                  "
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={index}
                  to={item.path}
                  className="
                    cursor-pointer
                    font-['Roboto_Condensed']
                    text-[17px]
                    font-[600]
                    leading-[23px]
                    text-white
                    transition-all
                    duration-300
                    hover:opacity-80
                    lg:text-[20px]
                  "
                >
                  {item.name}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>

      {/* MOBILE NAVBAR */}
      <div className="absolute left-0 top-[90px] z-50 flex w-full items-center justify-between px-4 md:hidden">
        {/* Glass Mobile Bar */}
        <div
          className="
            flex
            h-[52px]
            w-full
            items-center
            justify-between
            rounded-full
            px-5
            bg-[linear-gradient(180deg,rgba(209,236,244,0.3)_-47.2%,rgba(216,223,227,0.3)_41.99%,rgba(255,255,255,0.3)_192.8%)]
            shadow-[0px_7px_4px_-3px_rgba(0,0,0,0.25),inset_0px_4px_4px_rgba(255,255,255,0.25)]
            backdrop-blur-[8px]
          "
        >
          <h3 className="font-['Roboto_Condensed'] text-[20px] font-bold text-white">
            Menu
          </h3>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="text-white"
          >
            {mobileMenu ? (
              <HiX className="text-[30px]" />
            ) : (
              <HiMenuAlt3 className="text-[30px]" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="absolute left-1/2 top-[155px] z-50 w-[92%] -translate-x-1/2 overflow-hidden rounded-[24px] border border-white/20 bg-white/10 backdrop-blur-xl md:hidden">
          <div className="flex flex-col py-4">
            {navItems.map((item, index) =>
              item.sectionId ? (
                <button
                  key={index}
                  onClick={() => {
                    handleScroll(item.sectionId);
                    setMobileMenu(false);
                  }}
                  className="
                    w-full
                    text-left
                    border-b
                    border-white/10
                    px-6
                    py-4
                    font-['Roboto_Condensed']
                    text-[18px]
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-white/10
                  "
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setMobileMenu(false)}
                  className="
                    border-b
                    border-white/10
                    px-6
                    py-4
                    font-['Roboto_Condensed']
                    text-[18px]
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-white/10
                  "
                >
                  {item.name}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HomeNavbar;