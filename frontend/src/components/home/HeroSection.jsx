import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();

const handleUpcomingEvents = () => {
  navigate("/gallery?tab=upcoming");
};


  return (
    <section className="relative h-[760px] w-full overflow-hidden sm:h-[820px] lg:h-[808px] ">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.36)]" />

      {/* Top White Gradient */}
      <div
        className="
          absolute
          left-0
          top-0
          h-[140px]
          w-full
          bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.55)_38%,rgba(255,255,255,0)_100%)]

          sm:h-[160px]
          lg:h-[185px]
        "
      />

      {/* UPCOMING EVENTS */}
      {/* <div
        onClick={handleUpcomingEvents}
        className="
          absolute
          right-[18px]
          top-[22%]
          z-30
          cursor-pointer
          border-b-[3px]
          border-[#B30000]
          pb-[3px]
            upcoming-events-blink


          sm:right-[35px]
          sm:top-[20%]

          lg:right-[20px]
          lg:top-[98px]
          lg:me-6
        "
      >
        <p
          className="
            font-['Roboto_Condensed']
            text-[18px]
            font-[700]
            leading-[1]
            text-[#B30000]

            sm:text-[18px]

            lg:text-[20px]
          "
        >
          Upcoming Events
        </p>
      </div> */}

      {/* Main Content */}
      <div className="relative z-10 mx-auto h-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[60px]">
        <div className="flex h-full flex-col justify-center pt-[120px] sm:pt-[170px] xl:flex-row xl:items-start xl:justify-between xl:pt-[245px]">
          {/* LEFT CONTENT */}
          <div className="w-full max-w-[760px]">
            {/* Tag */}
            <div
              className="
                inline-flex
                min-h-[41px]
                items-center
                rounded-[10px]
                bg-[rgba(255,255,255,0.14)]
                px-[18px]
                py-2
                backdrop-blur-[8px]
                sm:px-[22px]
              "
            >
              <p
                className="
                  font-['Roboto_Condensed']
                  text-[15px]
                  font-[500]
                  leading-[22px]
                  text-white
                  sm:text-[17px]
                  lg:text-[20px]
                "
              >
                DST-NCSTC Sanctioned Initiative
              </p>
            </div>

            {/* Heading */}
            <h1
              className="
                mt-[22px]
                max-w-full
                font-['Roboto_Condensed']
                text-[34px]
                font-[500]
                leading-[1.2]
                tracking-[-1px]
                text-white
                sm:text-[44px]
                md:text-[50px]
                lg:w-[760px]
                lg:text-[52px]
                lg:leading-[62px]
                lg:tracking-[-1.5px]
              "
            >
              Connecting Communities to Innovative Wastewater Technologies
            </h1>
          </div>

          {/* RIGHT CONTENT */}
          <div
  className="
    mt-[40px]
    w-full
    max-w-[420px]
    lg:max-w-[450px]
    xl:max-w-[560px]
    lg:ml-[10px]
    xl:ml-5
    lg:mt-[82px]
  "
>
          <p
  className="
    font-['Roboto_Condensed']
    text-[16px]
    font-[300]
    leading-[25px]
    text-white
    sm:text-[17px]
    lg:text-[16px]
    max-w-[560px]
  "
>
              Welcome to the official portal for the IIT Indore and DRISHTI CPS
              Foundation joint initiative. We are bridging the gap between
              cutting-edge wastewater research and community implementation to
              achieve environmental sustainability and harness renewable energy.
              Join our upcoming hands-on training modules,<span
  onClick={handleUpcomingEvents}
  className="
  ms-1
    font-bold
    text-[#1489C8]
    cursor-pointer
    underline
    hover:text-[#1DA1F2]
    transition-all
    duration-300
  "
>
  Registration is open
</span>
            </p>

           <div className="relative mt-[32px] inline-block p-[1.5px] overflow-hidden rounded-[37px] group cursor-pointer transition-all duration-300 hover:scale-[1.02]">
              {/* Rotating Border Layer */}
              <div 
                className="absolute inset-[-1000%] animate-border-rotate bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_70%,#FFFFFF_100%)]" 
              />

              {/* Inner Button Content */}
              <button
                onClick={handleUpcomingEvents}
                className="
                  relative
                  flex
                  h-[44px]
                  w-[190px]
                  items-center
                  justify-center
                  rounded-[37px]
                  bg-[linear-gradient(180deg,rgba(209,236,244,0.3)_-47.2%,rgba(216,223,227,0.3)_41.99%,rgba(255,255,255,0.3)_192.8%)]
                  backdrop-blur-md
                  shadow-[0px_7px_4px_-3px_rgba(0,0,0,0.25),inset_0px_4px_4px_rgba(255,255,255,0.25)]
                "
              >
                <div className="flex items-center gap-[10px]">
                  <img
                    src="/images/hero/register.png"
                    alt="register"
                    className="h-[18px] w-[18px] object-contain"
                  />
                  <span className="font-['Roboto_Condensed'] text-[16px] font-[600] leading-[21px] text-white sm:text-[18px]">
                    Upcoming Events
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
