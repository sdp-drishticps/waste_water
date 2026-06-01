const upcomingEventsData = [
  {
    id: 1,
    date: "09-15 Aug, 2026",
    thumbnail: "/pdfs/thumbnails/Wastewater.jpg",
    pdf: "/pdfs/Wastewater.pdf",
  },
  {
    id: 2,
    date: "05 Jun, 2026",
    thumbnail: "/pdfs/thumbnails/Wastewater2.jpeg",
    pdf: "/pdfs/Wastewater2.pdf",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="w-full pb-[70px] pt-2 lg:pb-[90px]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[60px]">
        {/* Section Heading */}
        <h2
          className="
            font-['Roboto_Condensed']
            text-[30px]
            font-[700]
            text-[#1D85B7]
            sm:text-[30px]
            lg:text-[30px]
          "
        >
          Upcoming Events
        </h2>

        {/* Events Grid */}
        <div
          className="
            mt-[50px]
            grid
            grid-cols-1
            gap-x-[50px]
            gap-y-[40px]
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {upcomingEventsData.map((event) => (
            <div key={event.id} className="flex flex-col">
              {/* PDF Poster */}
              <a href={event.pdf} target="_blank" rel="noopener noreferrer">
                <img
                  src={event.thumbnail}
                  alt={event.date}
                  className="
      h-[320px]
      w-[250px]
      object-cover
      border border-[#000000]
      transition-all
      duration-300
      hover:shadow-lg
    "
                />
              </a>

              {/* Date Card */}
              <div
                className="
                  mt-4
                  flex
                  h-[60px]
                  w-[180px]
                  items-center
                  justify-center
                  rounded-[10px]
                  bg-[#EAEAEA]
                  md:w-[210px]
                "
              >
                <p
                  className="
                    font-['Roboto_Condensed']
                    text-[20px]
                    font-[700]
                    text-[#222]
                  "
                >
                  {event.date}
                </p>
              </div>

              {/* Register Button
              <a
                href={event.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-4
                  font-['Roboto_Condensed']
                  text-[18px]
                  font-[400]
                  text-[#1D85B7]
                  transition-all
                  duration-300
                  hover:underline
                "
              >
                Register Now
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
