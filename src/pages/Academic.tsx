import { useState, useEffect } from "react";
import AcademicCards from "@/components/Academic/AcademicCards";
import AcademicHero from "@/components/Academic/AcademicHero";
import { fetchAcademicData } from "@/lib/networks/academicQueries";
import { Database } from "database.types";

export default function Academic() {
  const [activeContent, setActiveContent] = useState("scholarship");
  const [visibleCards, setVisibleCards] = useState(3);
  const [data, setData] = useState<any[]>([]);

  // Reset visible cards to 3 when activeContent changes
  useEffect(() => {
    setVisibleCards(3);

    // Fetch data based on active content
    switch (activeContent) {
      case "scholarship":
        fetchData("academic_scholarship");
        break;
      case "competition":
        fetchData("academic_competition");
        break;
      case "seminar":
        fetchData("academic_seminar");
        break;
      default:
        fetchData("academic_scholarship");
    }
  }, [activeContent]);

  async function fetchData(tableName: keyof Database["public"]["Tables"]) {
    const fetchedData = await fetchAcademicData(tableName);
    setData(fetchedData);
  }

  const handleSeeMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 3);
  };

  function titleAcademic() {
    switch (activeContent) {
      case "scholarship":
        return "Explore Scholarship";
      case "competition":
        return "Preparing Competition";
      case "seminar":
        return "Founding Seminar";
      default:
        return "Explore Scholarship";
    }
  }

  return (
    <section>
      <section className="mb-10">
        <AcademicHero />
      </section>
      <section className="mt-24 flex flex-col justify-between space-y-8 text-center lg:flex-row lg:text-start">
        {/* Sidebar */}
        <div className="pt-1 md:mb-0 lg:w-1/4">
          <div>
            <p className="text-lg">What we serve</p>
            <h1 className="inline-block border-b-2 border-primary py-2 text-3xl font-bold text-primary">
              Our Main Menu
            </h1>
          </div>
          <div className="pt-7 text-xl">
            <p
              className={`cursor-pointer pb-3 text-[#636363] ${activeContent === "scholarship" ? "font-medium text-primary" : ""}`}
              onClick={() => setActiveContent("scholarship")}
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
        <div className="flex w-full flex-col justify-between space-y-8 lg:pl-12">
          <h1 className="inline-block py-2 text-3xl font-bold text-primary">
            {titleAcademic()}
          </h1>
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
