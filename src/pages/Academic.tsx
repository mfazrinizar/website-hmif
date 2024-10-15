import { useState, useEffect } from "react";
import AcademicCards from "@/components/Academic/AcademicCards";
import AcademicHero from "@/components/Academic/AcademicHero";

export default function Academic() {
  const [activeContent, setActiveContent] = useState("beasiswa");
  const [visibleCards, setVisibleCards] = useState(3);
  const [data, setData] = useState<any[]>([]);

  // Reset visible cards to 3 when activeContent changes
  useEffect(() => {
    setVisibleCards(3);

    // Fetch data based on active content
    let dataUrl = "";
    switch (activeContent) {
      case "beasiswa":
        dataUrl = "/data/academic/scholarship.json";
        break;
      case "competition":
        dataUrl = "/data/academic/competition.json";
        break;
      case "seminar":
        dataUrl = "/data/academic/seminar.json";
        break;
      default:
        dataUrl = "/data/academic/scholarship.json";
    }

    // Fetch the JSON data
    fetch(dataUrl)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [activeContent]);

  const handleSeeMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 3);
  };

  return (
    <section>
      <section className="mb-10">
        <AcademicHero />
      </section>
      <section className="flex flex-col text-center sm:text-start md:flex-row">
        {/* Sidebar */}
        <div className="mb-8 pt-1 md:mb-0 md:w-1/4">
          <div>
            <p>What we serve</p>
            <h1 className="inline-block border-b-2 border-primary py-2 text-2xl font-bold text-primary">
              Our Main Menu
            </h1>
          </div>
          <div className="pt-7">
            <p
              className={`cursor-pointer pb-3 text-[#636363] ${activeContent === "beasiswa" ? "font-medium text-primary" : ""}`}
              onClick={() => setActiveContent("beasiswa")}
            >
              Explore Scholarship
            </p>
            <p
              className={`cursor-pointer pb-3 text-[#636363] ${activeContent === "competition" ? "font-medium text-primary" : ""}`}
              onClick={() => setActiveContent("competition")}
            >
              Preparing Competition
            </p>
            <p
              className={`cursor-pointer pb-3 text-[#636363] ${activeContent === "seminar" ? "font-medium text-primary" : ""}`}
              onClick={() => setActiveContent("seminar")}
            >
              Founding Seminar
            </p>
          </div>
        </div>

        {/* Konten Utama */}
        <div className="w-full">
          <AcademicCards
            data={data.slice(0, visibleCards)}
            handleSeeMore={handleSeeMore}
            canSeeMore={visibleCards < data.length}
          />
        </div>
      </section>
    </section>
  );
}
