import ImpactCard from "./ImpactCard";
import ImpactTable from "./ImpactTable";

const Impact = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(to_bottom,#FFFFFF_10%,#FFFFFF_30%,#F1F7FF_60%,#F1F7FF_100%)] py-10 md:py-13.75 lg:py-18.5">
      <div className="mx-auto max-w-360 px-4 sm:px-5 md:px-8 lg:px-12.5">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-['Roboto_Condensed'] text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-semibold leading-tight text-black">
            Target Impact & Outreach
          </h2>

          <p className="mx-auto mt-3.5 md:mt-4.5 lg:mt-6 max-w-248.5 font-['Roboto_Condensed'] text-[14px] sm:text-[15px] md:text-[17px] lg:text-[18px] font-light leading-relaxed text-black">
            This visualization illustrates the projected reach of our programs
            across key regional blocks. It provides accountability regarding the
            project's{" "}
            <span className="font-semibold text-[#1D85B7]">
              geographic and demographic focus,
            </span>{" "}
            emphasizing our commitment to widespread environmental education as
            mandated by NCSTC.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-10 md:mt-13.75 lg:mt-22.5 flex flex-col xl:flex-row items-center xl:items-start justify-between gap-8 md:gap-10 xl:gap-6">
          {/* LEFT MAP */}
          <div className="relative w-full xl:max-w-130 2xl:max-w-157.5">
            {/* Location Video */}
            <div className="absolute pt-1 hidden lg:block left-0 md:-left-18  top-0 z-10 lg:w-22.5"
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
              className=" h-auto w-full object-contain pl-2.5 " />
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
