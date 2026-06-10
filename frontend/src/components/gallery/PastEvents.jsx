import { useState } from "react";
import galleryData from "./galleryData";


const PastEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // ======================
  // Gallery View
  // ======================
  if (selectedEvent) {
    return (
      <section className="w-full pb-[70px] lg:pb-[90px] pt-5">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[60px]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-[20px] font-[700] text-[#1D85B7]">
                {selectedEvent.title}
              </h2>

              <p className="text-[#666] mt-1">
                {selectedEvent.date}
              </p>
            </div>

            <button
              onClick={() => setSelectedEvent(null)}
              className="
                px-5
                py-2
                border
                border-[#1D85B7]
                text-[#1D85B7]
                rounded-md
                font-medium
                hover:bg-[#1D85B7]
                hover:text-white
                transition-all
              "
            >
              Back
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {selectedEvent.images.map((image, index) => (
              <div
                key={index}
                className="
                  overflow-hidden
                  rounded-lg
                  shadow-md
                  bg-white
                "
              >
                <img
                  src={image}
                  alt=""
                  className="
                    h-75
                    w-full
                    object-cover
                    transition
                    duration-500
                    hover:scale-105
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ======================
  // Event Listing View
  // ======================
  return (
    <section className="w-full pb-[70px] lg:pb-[90px] pt-2">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[60px]">
        <h2
          className="
            text-[25px]
            font-[700]
            text-[#1D85B7]
            sm:text-[30px]
          "
        >
          Past Events
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryData.map((event) => (
            <div
              key={event.id}
              className="
                overflow-hidden
                rounded-md
                bg-[#ECECEC]
                shadow-md
              "
            >
              <div className="relative">
                <img
                  src={event.thumbimg}
                  alt={event.title}
                  className="h-[230px] border border-2  w-full object-cover"
                />

                <button
                  onClick={() => setSelectedEvent(event)}
                  className="
                    absolute
                    right-3
                    top-3
                    rounded
                    bg-white/90
                    px-4
                    py-1
                    text-sm
                    font-medium
                    shadow
                    hover:bg-white
                  "
                >
                  View
                </button>
              </div>

              <div className="p-5 text-center">
                <h3 className="text-[24px] font-[700] text-[#222]">
                  {event.date}
                </h3>

                <p className="mt-3 text-[18px] font-[500] text-[#444]">
                  {event.title}
                </p>

                <p className="mt-2 text-[16px] text-[#666]">
                  {event.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEvents;