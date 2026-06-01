import { IoClose } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const EventModal = ({ selectedVillage, setSelectedVillage }) => {
  if (!selectedVillage?.event) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm " >
      
      {/* MODAL CONTAINER */}
      <div className="relative w-full max-w-[1100px] rounded-2xl bg-[#f2f4f6] shadow-2xl">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setSelectedVillage(null)}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center hover:scale-105 transition-transform"
        >
          <IoClose className="text-2xl text-gray-600" />
        </button>

        {/* SCROLLABLE INNER CONTENT */}
        <div className="custom-scrollbar max-h-[93vh] overflow-y-auto p-8 md:p-10">
          
          {/* HEADER */}
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-black md:text-[22px]">
              {selectedVillage.event.date}
            </h2>
            <p className="mx-auto mt-1 max-w-4xl text-lg text-[#328bbd] md:text-[20px]">
              {selectedVillage.event.college}
            </p>
          </div>

          {/* BODY CONTENT */}
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
            
            {/* LEFT SIDE: TEXT DETAILS */}
            <div className="flex-1 pr-0 lg:pr-6">
              <h3 className="mb-5 text-lg font-semibold text-[#328bbd]">
                Details of event
              </h3>
              
              <div className="flex flex-col gap-6">
                {selectedVillage.event.details.map((detail, index) => (
                  <div key={index} className="flex items-start gap-4">
                    {/* STAR ICON */}
                    <FaStar className="mt-[5px] shrink-0 text-sm text-[#328bbd]" />
                    
                    {/* TEXT */}
                    <p className="text-[14px] leading-relaxed text-[#444444]">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE: IMAGES */}
            <div className="w-full shrink-0 lg:w-[320px]">
              <div className="flex flex-col gap-4">
                {selectedVillage.event.images.map((img, index) => (
                  <div
                    key={index}
                    className="overflow-hidden border border-gray-700 bg-white shadow-sm"
                  >
                    <img
                      src={img}
                      alt={`Event highlight ${index + 1}`}
                      className="h-[140px] w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;