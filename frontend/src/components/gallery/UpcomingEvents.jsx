
const upcomingEventsData = [
  {
    id: 1,
    date: "09-15 Aug, 2026",
    thumbnail: "/pdfs/thumbnails/event1.jpg",
    pdf: "/pdfs/event1.pdf",
  },
  {
    id: 2,
    date: "05 Jun, 2026",
    thumbnail: "/pdfs/thumbnails/event2.jpeg",
    pdf: "/pdfs/event2.pdf",
  },
   {
    id: 2,
    date: "11 July, 2026",
    thumbnail: "/pdfs/thumbnails/event3.jpeg",
    pdf: "/pdfs/event3.pdf",

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
            text-[25px]
            font-[700]
            text-[#1D85B7]
            text-center
            sm:text-left
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
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {upcomingEventsData.map((event) => (
            /* Card wrapper modified with mx-auto for small devices */
            <div key={event.id} className="flex w-[250px] flex-col mx-auto sm:mx-0">
              {/* PDF Poster */}
              <a href={event.pdf} target="_blank" rel="noopener noreferrer">
                <img
                  src={event.thumbnail}
                  alt={event.date}
                  className="
                    h-[320px]
                    w-full
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
                  w-full
                  items-center
                  justify-center
                  rounded-[10px]
                  bg-[#EAEAEA]
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