import galleryData from "./galleryData";

import { useEffect, useState } from "react";
import { getLenis } from "../../../src/utils/lenis";

const PastEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
  if (!selectedImage) return;

  const lenis = getLenis();
  lenis?.stop();

  return () => {
    lenis?.start();
  };
}, [selectedImage]);
  
  // ======================
  // Gallery View
  // ======================
  if (selectedEvent) {
    return (
      <section className="w-full pb-17.5 lg:pb-22.5 pt-5">
        <div className="mx-auto max-w-360 px-4 sm:px-6 md:px-10 lg:px-15">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-[20px] font-bold text-[#1D85B7]">
                {selectedEvent.title}
              </h2>

              <p className="text-[#666] mt-1">{selectedEvent.date}</p>
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

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-4">
            {selectedEvent.images.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid mb-6 overflow-hidden rounded-lg shadow-md bg-white cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-auto transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Modal for selected image view */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 text-white text-5xl leading-none hover:text-gray-300"
            >
              &times;
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt=""
              onClick={(e) => e.stopPropagation()}
              className="
        max-h-[90vh]
        max-w-[95vw]
        object-contain
        rounded-lg
        shadow-2xl
      "
            />
          </div>
        )}
      </section>
    );
  }

  // ======================
  // Event Listing View
  // ======================
  return (
    <>
      <section className="w-full pb-17.5 lg:pb-22.5 pt-2">
        <div className="mx-auto max-w-360 px-4 sm:px-6 md:px-10 lg:px-15">
          <h2
            className="
            text-[25px]
            font-bold
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
                    className="h-68 border-2  w-full object-cover"
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
                  <h3 className="text-[24px] font-bold text-[#222]">
                    {event.date}
                  </h3>

                  <p className="mt-3 text-[18px] font-medium text-[#444]">
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
    </>
  );
};

export default PastEvents;
