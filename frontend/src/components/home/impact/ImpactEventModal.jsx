import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { getLenis } from "../../../utils/lenis";
const STEP_ICONS = [
  "/images/impact/impactmodal/step1icon.png",
  "/images/impact/impactmodal/step2icon.png",
  "/images/impact/impactmodal/step3icon.png",
  "/images/impact/impactmodal/step4icon.png",
];

const ImpactEventModal = ({ selectedVillage, setSelectedVillage }) => {
  {
    /* for stop bg body scroll */
  }
  useEffect(() => {
    if (!selectedVillage) return;

    const lenis = getLenis();

    lenis?.stop();

    return () => {
      lenis?.start();
    };
  }, [selectedVillage]);

  if (!selectedVillage || !selectedVillage.event) return null;

  const event = selectedVillage.event;
  const totalSteps = event.timeline?.length || 0;

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs"
      data-lenis-prevent
    >
      <div className="relative w-full max-w-287.5 rounded-3xl bg-[#f2f2f2] shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={() => setSelectedVillage(null)}
          className="absolute right-6 top-6 z-50 text-gray-500 hover:text-black transition-colors"
        >
          <IoClose size={28} />
        </button>

        <div
          className="h-[90vh] overflow-y-auto p-6 md:p-12"
          data-lenis-prevent
        >
          {/* Header */}
          <div className="text-center  pb-3">
            <h2 className="text-[26px] font-bold text-black font-['Roboto_Condensed']">
              {event.date}
            </h2>
            <p className="mt-1 text-[18px] font-medium text-[#2487bf]">
              {event.college}
            </p>
          </div>

          {/* Content Body */}
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1px_0.8fr]">
            {/* LEFT SIDE: Event Journey */}
            <div>
              <h3 className="mb-8 text-[22px] font-medium text-[#A6A6A6] tracking-wide font-['Roboto_Condensed']">
                Event Journey
              </h3>

              {/* Desktop Dynamic Timeline Layout */}
              <div
                className="relative hidden lg:block"
                style={{ minHeight: `${totalSteps * 180}px` }} // height according to steps
              >
                {event.timeline?.map((step, idx) => {
                  const isEven = idx % 2 === 0;
                  const currentTop = idx * 180; //gap between steps
                  const iconSrc = STEP_ICONS[idx % STEP_ICONS.length]; // 4 or more icons safe indexing

                  return (
                    <div
                      key={idx}
                      className="absolute inset-x-0"
                      style={{ top: `${currentTop}px` }}
                    >
                      {isEven ? (
                        /*  */
                        <div className="absolute left-0 top-0 flex items-start">
                          <img
                            src={iconSrc}
                            alt={`Step ${step.step}`}
                            className="h-19.5 w-19.5 shrink-0 object-contain"
                          />
                          <div className="ml-5 w-90">
                            <h4 className="font-bold text-gray-900 text-[16px]">
                              {step.title}
                            </h4>
                            <p className="text-[14px] leading-6 text-[#555] mt-1">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="absolute left-82.5 top-0">
                            <img
                              src={iconSrc}
                              alt={`Step ${step.step}`}
                              className="h-19.5 w-19.5 shrink-0 object-contain"
                            />
                          </div>
                          <div className="absolute left-4 top-1.25 w-77.5 text-left">
                            <h4 className="font-bold text-gray-900 text-[16px]">
                              {step.title}
                            </h4>
                            <p className="text-[14px] leading-6 text-[#555] mt-1">
                              {step.description}
                            </p>
                          </div>
                        </>
                      )}

                      {/* Dashed Lines */}
                      {idx < totalSteps - 1 &&
                        (isEven ? (
                          <>
                            <div className="absolute left-9.75 top-19.5 h-15.5 border-l-2 border-dashed border-[#B8B8B8]" />
                            <div className="absolute left-9.75 top-35 h-px w-82.5 border-t-2 border-dashed border-[#B8B8B8]" />
                            <div className="absolute left-92.25 top-35 h-10 border-r-2 border-dashed border-[#B8B8B8]" />
                          </>
                        ) : (
                          <>
                            <div className="absolute left-92.25 top-19.5 h-15.5 border-r-2 border-dashed border-[#B8B8B8]" />
                            <div className="absolute left-9.75 top-35 h-px w-82.5 border-t-2 border-dashed border-[#B8B8B8]" />
                            <div className="absolute left-9.75 top-35 h-10 border-l-2 border-dashed border-[#B8B8B8]" />
                          </>
                        ))}
                    </div>
                  );
                })}
              </div>

              {/* Mobile Timeline Layout Fallback*/}
              <div className="block lg:hidden space-y-1">
                {event.timeline?.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center min-w-14">
                      <img
                        src={STEP_ICONS[idx % STEP_ICONS.length]}
                        alt={`Step ${idx + 1}`}
                        className="w-11.5 h-11.5 min-w-14 min-h-14 max-w-14 max-h-14"
                      />

                      {idx < totalSteps - 1 && (
                        <div className="w-0.5 h-24 border-l-2 border-dashed border-gray-300 my-5 sm:my-3" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-[15px]">
                        {step.title}
                      </h4>
                      <p className="text-sm text-[#555] mt-1 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Middle Divider */}
            <div className="hidden lg:block bg-gray-300 w-px h-full self-stretch" />

            {/* RIGHT SIDE: Learnings & Graphic Showcase */}
            <div className="flex flex-col justify-between max-h-125">
              <div>
                <h3 className="mb-6 text-[22px] font-medium text-[#A6A6A6] tracking-wide ">
                  What Students Learned
                </h3>

                <h4 className="font-bold text-[18px] text-[#222] mb-4">
                  {event.learningTitle}
                </h4>

                <ul className="space-y-3">
                  {event.learning?.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[15px] text-[#444] leading-3.75"
                    >
                      <span className="text-[18px] shrink-0">
                        {item.emoji || "🌎"}
                      </span>
                      <span>{item.text || item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Gallery Frame */}
              {event.mainImage && (
                <div className="mt-8 aspect-video overflow-hidden rounded-lg border border-gray-300 shadow-md">
                  <img
                    src={event.mainImage}
                    alt="Event Showcase"
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactEventModal;
