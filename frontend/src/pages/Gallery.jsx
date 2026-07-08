import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import GalleryTabs from "../components/gallery/GalleryTabs";
import PastEvents from "../components/gallery/PastEvents";
import UpcomingEvents from "../components/gallery/UpcomingEvents";

const Gallery = () => {
  const [searchParams] = useSearchParams();

  const defaultTab =
    searchParams.get("tab") === "upcoming"
      ? "upcoming"
      : "past";

  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <section className="pt-15 ">
      <div className="container mx-auto px-4">
        <GalleryTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <div>
          {activeTab === "past" ? (
            <PastEvents />
          ) : (
            <UpcomingEvents />
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;