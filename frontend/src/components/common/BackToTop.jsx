import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed
        
        bottom-6
        right-6
        z-50
        flex
        items-center
        gap-2
        rounded-full
            bg-white/95
            border border-gray-200
            shadow-[0_4px_12px_rgba(0,0,0,0.12)]
        px-4
        py-3
        transition-all
        duration-300
       hover:bg-gray-50
            hover:scale-105
      
        ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }
      `}
    >
      <FaArrowUp  className="text-lg text-[#1D85B7]" />
    </button>
  );
};

export default BackToTop;