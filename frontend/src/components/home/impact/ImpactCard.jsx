import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const impactCards = [
  {
    id: 1,
    badge: "/images/impact/1.png",
    frontTitle: (
      <>
        <span className="font-bold">11 Jul 2026</span>
        <br />
        <p className="leading-5">
          Interactive Awareness Session with the School Students of Jhabua
        </p>
      </>
    ),
    backContent: (
      <img
        src="/images/impact/1stcardback.jpeg"
        alt="event"
        className=" w-50 h-28 rounded object-fill"
      />
    ),
  },

  {
    id: 2,
    badge: "/images/impact/2.png",
    frontTitle: (
      <>
        <span className="font-bold">05 June 2026</span>
        <br />
        <p className="leading-5">
          {" "}
          World Environment Day 2026 Special Event Swami Vivekanand Group of
          Institutions, Indore
        </p>{" "}
      </>
    ),
    backContent: (
      <div>
        <p className="text-[16px] font-normal text-[#333]">
          Sustainable Wastewater Management
        </p>

        <ul className="space-y-0 text-[16px] font-normal text-[#222]">
          <li>• Water Security </li>
          <li>• Resource Recovery</li>
          <li>• Environmental Protection</li>
        </ul>
      </div>
    ),
  },

  {
    id: 3,
    badge: "/images/impact/3.png",
    frontTitle: (
      <>
        <span className="font-bold ">05 June 2026</span>
        <p className="leading-5 ">Sustainability Quiz Competition</p>
      </>
    ),

    backContent: (
      <div className="flex items-center gap-2">
        <img
          src="/images/impact/4thcardback.svg"
          alt="event"
          className="h-20 w-22 rounded object-cover"
        />

        <ul className=" space-y-0 text-[15px] font-normal text-[#222]">
          <li>• Wastewater treatment</li>
          <li>• Environmental conservation</li>
          <li>• Sustainable engineering</li>
          <li>• World Environment Day</li>
        </ul>
      </div>
    ),
  },

  {
    id: 4,
    badge: "/images/impact/4.png",
    frontTitle: (
      <>
        <span className="font-bold">11 May 2026</span>
        <br />
        <p className="leading-5">
          Chameli Devi Group of Institutions National Technology Day Celebration
        </p>
      </>
    ),

    backContent: (
      <ul className="space-y-0 text-[16px] font-normal text-[#222]">
        <li>• 80+ Participants</li>
        <li>• 2 Expert Lectures</li>
        <li>• 5+ Academic Disciplines</li>
        <li>• 1 Sustainability Quiz Competition</li>
      </ul>
    ),
  },

  {
    id: 5,
    badge: "/images/impact/5.png",
    frontTitle: (
      <>
        <span className="font-bold">11 May 2026</span>

        <p className="leading-5">Sustainability Quiz Competition</p>
      </>
    ),

    backContent: (
      <div className="flex items-center gap-2">
        <img
          src="/images/impact/2ndcardback.svg"
          alt="event"
          className="h-20 w-50 rounded object-cover"
        />

        <p className="text-[16px] font-normal text-[#333]">
          “Celebrating innovation through knowledge and participation.”
        </p>
      </div>
    ),
  },
];

const ImpactCard = () => {
  return (
    <div className="mt-12.5 md:mt-15">
      {/* Heading */}
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-['Roboto_Condensed'] text-[18px] font-semibold text-[#1D85B7]">
          Impact Summary
        </h3>

        <div className="flex gap-3">
          <button className="impact-prev flex h-10 w-10 items-center justify-center rounded-full border border-[#1D85B7] text-[#1D85B7] hover:bg-[#1D85B7] hover:text-white">
            &#10094;
          </button>

          <button className="impact-next flex h-10 w-10 items-center justify-center rounded-full border border-[#1D85B7] text-[#1D85B7] hover:bg-[#1D85B7] hover:text-white">
            &#10095;
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".impact-prev",
          nextEl: ".impact-next",
        }}
        slidesPerView={4}
        slidesPerGroup={1}
        spaceBetween={20}
        watchOverflow
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1340: {
            slidesPerView: 4,
          },
        }}
      >
        {impactCards.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="impact-flip-card h-40 md:h-45 xl:h-42">
              <div className="impact-flip-card-inner">
                {/* FRONT */}
                <div
                  className="
                  impact-flip-front
                  p-4
                  md:p-5
                  border
                  border-[#C9D7E2]
                "
                >
                  <img
                    src={item.badge}
                    alt=""
                    className="
                    absolute
                    right-4
                    top-2
                    h-14.5
                    w-14.5
                    object-contain
                  "
                  />

                  <div
                    className="
                    font-['Roboto_Condensed']
                    text-[18px]
                    leading-7.5
                    h-14
                    text-[#333]
                  "
                  >
                    {item.frontTitle}
                  </div>
                </div>

                {/* BACK */}
                <div
                  className="
                  impact-flip-back
                  p-4
                  md:p-5
                  border
                  border-[#C9D7E2]
                "
                >
                  {item.backContent}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImpactCard;
