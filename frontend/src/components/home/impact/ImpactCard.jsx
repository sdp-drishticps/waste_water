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
    id: 3,
    badge: "/images/impact/3.png",
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

  {
    id: 4,
    badge: "/images/impact/4.png",
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
    id: 5,
    badge: "/images/impact/5.png",
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
];

const ImpactCard = () => {
  return (
    <div className="mt-12.5 md:mt-15">
      <h3 className="mb-5 font-['Roboto_Condensed'] text-[18px] font-semibold text-[#1D85B7]">
        Impact Summary
      </h3>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {impactCards.map((item) => (
          <div
            key={item.id}
            className="
  impact-flip-card
  h-40
  md:h-45
  xl:h-42
  w-full
"
          >
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

                <div className="">
                  <div
                    className="
                      font-['Roboto_Condensed']
                      text-[18px]
                      leading-7.5
                      h-14
                      
                      text-[#333] md:text-[18px] 
                    "
                  >
                    {item.frontTitle}
                  </div>
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
        ))}
      </div>
    </div>
  );
};

export default ImpactCard;
