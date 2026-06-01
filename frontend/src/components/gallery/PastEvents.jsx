const galleryData = [
  {
    id: 1,
    date: "11 May, 2026",
    title: "Chameli Devi Group of Institutions",
    location: "College in Village Umrikheda, Madhya Pradesh",
    images: [
      "/images/gallery/gallery-1.jpg",
      "/images/gallery/gallery-2.jpeg",
      "/images/gallery/gallery-3.jpeg",
    ],
  },
];

const PastEvents = () => {
  return (
    <section className="w-full  pb-[70px] lg:pb-[90px] pt-2">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[60px]">
        
        {/* Section Heading */}
        <h2
          className="
            font-['Roboto_Condensed']
            text-[25px]
            font-[700]
            text-[#1D85B7]

            sm:text-[30px]

            lg:text-[30px]
          "
        >
          Past Event
        </h2>

        {/* Event Block */}
        {galleryData.map((event) => (
          <div key={event.id} className="mt-[38px]">
            
            {/* Event Info Card */}
            <div
              className="
                flex
                min-h-[150px]
                w-full
                max-w-[400px]
                flex-col
                items-center
                justify-center
                rounded-[18px]
                bg-[#ECECEC]
                px-[28px]
                py-[26px]
                text-center

                
              "
            >
              <h3
                className="
                  font-['Roboto_Condensed']
                  text-[30px]
                  font-[700]
                  text-[#222222]
                "
              >
                {event.date}
              </h3>

              <p
                className="
                  mt-[18px]
                  font-['Roboto_Condensed']
                  text-[19px]
                  font-[500]
                  leading-[32px]
                  text-[#4A4A4A]
                "
              >
                {event.title}
              </p>

              <p
                className="
                  mt-[3px]
                  font-['Roboto_Condensed']
                  text-[18px]
                  font-[400]
                  leading-[30px]
                  text-[#5A5A5A]
                "
              >
                {event.location}
              </p>
            </div>

            {/* Gallery Images */}
            <div
              className="
                mt-[42px]
                grid
                grid-cols-1
                gap-[24px]

                md:grid-cols-2

                lg:grid-cols-3
              "
            >
              {event.images.map((image, index) => (
                <div
                  key={index}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[6px]
                    border
                    border-[#BDBDBD]
                    bg-white

                    shadow-[0px_4px_14px_rgba(0,0,0,0.08)]
                  "
                >
                  <img
                    src={image}
                    alt={`gallery-${index}`}
                    className="
                      h-[260px]
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-[1.04]

                      sm:h-[320px]

                      lg:h-[340px]
                    "
                  />

                  {/* Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/0
                      transition-all
                      duration-300

                      group-hover:bg-black/10
                    "
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PastEvents;