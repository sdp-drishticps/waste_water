import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Overview",
    path: "/overview",
  },
  {
    name: "Objectives",
    sectionId: "objectives",
  },
  {
    name: "Pathways",
    sectionId: "pathways",
  },
  {
    name: "Impact",
    sectionId: "impact",
  },
  {
    name: "Facilities",
    sectionId: "facilities",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  const handleSectionNavigation = (sectionId) => {
    navigate("/");

    setTimeout(() => {
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <header
      className="
        relative
        w-full
        overflow-hidden
        bg-[linear-gradient(180deg,#F7F7F7_0%,#1790D0_45%,#1776A7_100%)]
      "
    >
      {/* TOP WHITE GRADIENT */}
      <div
        className="
          absolute
          left-0
          top-0
          h-[70px]
          w-full
          bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.4)_60%,rgba(255,255,255,0)_100%)]
        "
      />

      {/* MAIN WRAPPER */}
      <div
        className="
          relative
          z-20
          mx-auto
          flex
          max-w-[1440px]
          flex-col
          items-center
          px-4
          pb-[35px]
          pt-[18px]
          sm:px-6
          lg:pb-[60px]
          lg:pt-[16px]
        "
      >
        {/* LOGOS */}
        <div className="flex items-center justify-center gap-3 sm:gap-5">
          <img
            src="/images/logos/drishti-logo.png"
            alt="drishti"
            className="h-[42px] w-auto object-contain sm:h-[50px] lg:h-[58px]"
          />

          <img
            src="/images/logos/iit-logo.png"
            alt="iit"
            className="h-[46px] w-auto object-contain sm:h-[54px] lg:h-[62px]"
          />

          <img
            src="/images/logos/dst-logo.png"
            alt="dst"
            className="h-[38px] w-auto object-contain sm:h-[45px] lg:h-[52px]"
          />
        </div>

        {/* DESKTOP NAVBAR */}
        <div className="mt-[22px] hidden md:block">
          <div
            className="
              flex
              h-[58px]
              w-[720px]
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              bg-[linear-gradient(180deg,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.18)_100%)]
              shadow-[0px_4px_10px_rgba(0,0,0,0.18),inset_0px_2px_4px_rgba(255,255,255,0.25)]
              backdrop-blur-[12px]
              lg:w-[820px]
            "
          >
            <div className="flex w-full items-center justify-between px-[38px] lg:px-[55px]">
              {navItems.map((item, index) =>
                item.sectionId ? (
                  <button
                    key={index}
                    onClick={() => handleSectionNavigation(item.sectionId)}
                    className="
        relative
        pb-[1px]
        font-['Roboto_Condensed']
        text-[20px]
        font-[600]
        text-white
        transition-all
        duration-300
        hover:opacity-80
      "
                  >
                    {item.name}
                  </button>
                ) : (
                  <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }) =>
                      `
          relative
          pb-[1px]
          font-['Roboto_Condensed']
          text-[20px]
          font-[600]
          transition-all
          duration-300
          hover:opacity-80
          ${isActive ? "text-black" : "text-white"}
        `
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.name}
                        {isActive && (
                          <span
                            className="
                absolute
                bottom-0
                left-0
                h-[2px]
                w-full
                rounded-full
                bg-black
              "
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                ),
              )}
            </div>
          </div>
        </div>

        {/* MOBILE NAVBAR */}
        <div className="mt-[20px] flex w-full items-center justify-center md:hidden">
          <div
            className="
              flex
              h-[52px]
              w-full
              max-w-[420px]
              items-center
              justify-between
              rounded-full
              border
              border-white/30
              bg-[linear-gradient(180deg,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.18)_100%)]
              px-5
              shadow-[0px_4px_10px_rgba(0,0,0,0.18),inset_0px_2px_4px_rgba(255,255,255,0.25)]
              backdrop-blur-[12px]
            "
          >
            <h3 className="font-['Roboto_Condensed'] text-[18px] font-bold text-white">
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
          <div
            className="
              mt-4
              w-full
              max-w-[420px]
              overflow-hidden
              rounded-[24px]
              border
              border-white/20
              bg-white/10
              shadow-xl
              backdrop-blur-xl
              md:hidden
            "
          >
            <div className="flex flex-col py-2">
              {navItems.map((item, index) =>
                item.sectionId ? (
                  <button
                    key={index}
                    onClick={() => {
                      handleSectionNavigation(item.sectionId);
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
      </div>
    </header>
  );
};

export default Navbar;
