const impactCards = [
  {
    id: 1,
    badge: "/images/impact/1.png",
    frontTitle:
      "11 May 2026\n National Technology Day Celebration Chameli Devi Group of Institutions",

    backContent: (
      <ul className="space-y-1 text-[16px] font-semibold text-[#222]">
        <li>• 80+ Participants</li>
        <li>• 2 Expert Lectures</li>
        <li>• 5+ Academic Disciplines</li>
        <li>• 1 Sustainability Quiz Competition</li>
      </ul>
    ),
  },

  {
    id: 2,
    badge: "/images/impact/2.png",
    frontTitle: "Sustainability Quiz Competition",

    backContent: (
      <div className="flex items-center gap-3">
        <img
          src="/images/impact/event-1.jpeg"
          alt="event"
          className="h-[80px] w-[220px] rounded object-cover"
        />

        <p className="text-[16px] font-semibold text-[#333]">
          “Celebrating innovation through knowledge and participation.”
        </p>
      </div>
    ),
  },

  {
    id: 3,
    badge: "/images/impact/3.png",
    frontTitle:
      "Expert Session 1",

    backContent: (
      <p className="text-center text-[16px] leading-[32px] font-medium">
       Hydrogel-Based Materials for Biomedical and Environmental Applications.
      </p>
    ),
  },

  {
    id: 4,
    badge: "/images/impact/4.png",
    frontTitle:
      "Expert Session 2",

    backContent: (
      <p className="text-center text-[16px] leading-[32px] font-medium">
        Sustainable Proton Exchange Membranes for Hydrogen Fuel Cells.
      </p>
    ),
  },
];

const ImpactCard = () => {
  return (
    <div className="mt-[50px] md:mt-[60px]">
      <h3 className="mb-[20px] font-['Roboto_Condensed'] text-[18px] font-[600] text-[#1D85B7]">
        Impact Summary
      </h3>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {impactCards.map((item) => (
         <div
  key={item.id}
 className="
  impact-flip-card
  h-[160px]
  md:h-[180px]
  xl:h-[160px]
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
                    right-[16px]
                    top-[8px]
                    h-[58px]
                    w-[58px]
                    object-contain
                  "
                />

                <div className="">
                  <p
                    className="
                      whitespace-pre-line
                      font-['Roboto_Condensed']
                      text-[18px]
                      leading-[30px]
                      text-[#333]
                      text-[16px] md:text-[18px]
                    "
                  >
                    {item.frontTitle}
                  </p>
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