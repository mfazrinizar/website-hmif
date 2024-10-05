import { useState } from "react";
import AcademicCards from "@/components/Academic/AcademicCards";
import AcademicHero from "@/components/Academic/AcademicHero";

export default function Academic() {
  const [activeContent, setActiveContent] = useState("beasiswa");

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
          <AcademicCards dataUrl={`/data/academic/${activeContent}.json`} />
        </div>
      </section>
    </section>
  );
}
