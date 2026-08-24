const upcomingEventsData = [
  {
    id: 1,
    date: "09-15 Aug, 2026",
    sortDate: "2026-08-15",
    thumbnail: "/pdfs/thumbnails/event1.jpg",
    pdf: "/pdfs/event1.pdf",
  },

  {
    id: 2,
    date: "05 Jun, 2026",
    sortDate: "2026-06-05",
    thumbnail: "/pdfs/thumbnails/event2.jpeg",
    pdf: "/pdfs/event2.pdf",
  },

  {
    id: 3,
    date: "11 July, 2026",
    sortDate: "2026-07-11",
    thumbnail: "/pdfs/thumbnails/event3.png",
    pdf: "/pdfs/event3.pdf",
  },

  {
    id: 4,
    date: "21 Aug, 2026",
    sortDate: "2026-08-21",
    thumbnail: "/pdfs/thumbnails/event4.png",
    pdf: "/pdfs/event4.pdf",
  },
];
const UpcomingEvents = () => {
  // Latest → Oldest
  const sortedEvents = [...upcomingEventsData].sort(
    (a, b) => new Date(b.sortDate) - new Date(a.sortDate),
  );

  return (
    <section className="w-full pb-[70px] pt-2 lg:pb-[90px]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[60px]">
        {/* Section Heading */}
        <h2
          className="
            text-center
            font-['Roboto_Condensed']
            text-[25px]
            font-bold
            text-[#1D85B7]
            sm:text-left
            sm:text-[30px]
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
          {sortedEvents.map((event) => (
            <div
              key={event.id}
              className="
                mx-auto
                flex
                w-[250px]
                flex-col
                sm:mx-0
              "
            >
              {/* PDF Poster */}
              <a href={event.pdf} target="_blank" rel="noopener noreferrer">
                <img
                  src={event.thumbnail}
                  alt={event.date}
                  className="
                    h-[320px]
                    w-full
                    border
                    border-black
                    object-fill
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
                    font-bold
                    text-[#222]
                  "
                >
                  {event.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
