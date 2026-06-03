import ImpactCard from "./ImpactCard";
import ImpactTable from "./ImpactTable";

const Impact = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(to_bottom,#FFFFFF_10%,#FFFFFF_30%,#F1F7FF_60%,#F1F7FF_100%)] py-[40px] md:py-[55px] lg:py-[74px]">
      <div className="mx-auto max-w-[1440px] px-[16px] sm:px-[20px] md:px-[32px] lg:px-[60px]">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-['Roboto_Condensed'] text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-[600] leading-tight text-black">
            Target Impact & Outreach
          </h2>

          <p className="mx-auto mt-[14px] md:mt-[18px] lg:mt-[24px] max-w-[994px] font-['Roboto_Condensed'] text-[14px] sm:text-[15px] md:text-[17px] lg:text-[18px] font-[300] leading-relaxed text-black">
            This visualization illustrates the projected reach of our programs
            across key regional blocks. It provides accountability regarding the
            project's{" "}
            <span className="font-[600] text-[#1D85B7]">
              geographic and demographic focus,
            </span>{" "}
            emphasizing our commitment to widespread environmental education as
            mandated by NCSTC.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-[40px] md:mt-[55px] lg:mt-[90px] flex flex-col xl:flex-row items-center xl:items-start justify-between gap-[32px] md:gap-[40px] xl:gap-6">
          {/* LEFT MAP */}
          <div className="relative w-full xl:max-w-[520px] 2xl:max-w-[630px]">
            {/* Location Video */}
            <div className="absolute pt-1 hidden lg:block left-0 md:-left-18  top-0 z-10 lg:w-[90px]"
 >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-contain"
              >
                <source
                  src="/videos/impact/location-pin.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            {/* Map */}
            <img
              src="/images/impact/map.png"
              alt="map"
              className=" h-auto w-full object-contain pl-[10px] " />
          </div>

          {/* RIGHT TABLE */}

          <ImpactTable />
        </div>

        {/* Impact Card */}

        <ImpactCard />
      </div>
    </section>
  );
};

export default Impact;
