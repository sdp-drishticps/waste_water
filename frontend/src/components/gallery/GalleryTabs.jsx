const GalleryTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-[436px] border border-[#9F9F9F] rounded-[10px] p-1 bg-white">
        
        <button
          onClick={() => setActiveTab("past")}
          className={`
            flex-1 h-[46px]
            rounded-[10px]
            text-[18px] md:text-[22px]
            font-medium
            transition-all duration-300
            ${
              activeTab === "past"
                ? "bg-[#F6F6F6] shadow-md text-[#1D85B7]"
                : "bg-transparent text-[#1D85B7]"
            }
          `}
        >
          Past Events
        </button>

        <button
          onClick={() => setActiveTab("upcoming")}
          className={`
            flex-1 h-[46px]
            rounded-[10px]
            text-[18px] md:text-[22px]
            font-medium
            transition-all duration-300
            ${
              activeTab === "upcoming"
                ? "bg-[#F6F6F6] shadow-md text-[#1D85B7]"
                : "bg-transparent text-[#1D85B7]"
            }
          `}
        >
          Upcoming Events
        </button>

      </div>
    </div>
  );
};

export default GalleryTabs;