import FellowInfo from "@/components/FellowInfo";

export default function AcademicHero() {
  return (
    <section
      id="home-hero"
      className="flex flex-col items-center justify-between lg:flex-row"
    >
      {/* Bagian Kiri (Teks) */}
      <div className="grid gap-6 lg:w-2/5">
        <p className="font-medium">EXPLORE YOUR FUTURE</p>
        <h1 className="text-4xl font-bold text-primary xl:text-5xl">
          It's Time to Advance Your Academic Journey
        </h1>
        <p className="text-base xl:text-lg">
          Jelajahi berbagai beasiswa, seminar, dan perlombaan yang tersedia
          untuk mendukung minat Anda!
        </p>
        <div className="flex justify-center gap-2 self-end pt-10 text-center md:w-1/2 lg:justify-normal lg:gap-x-12">
          <FellowInfo qty={30} text="Scholarship" />
          <FellowInfo qty={20} text="Competition" />
          <FellowInfo qty={20} text="Seminar" />
        </div>
      </div>

      {/* Bagian Kanan (Gambar) */}
      <div className="flex w-full justify-center lg:w-3/5 lg:justify-end">
        <img
          src="img/academic_preview.png"
          alt="academic_preview"
          className="w-5/6"
        />
      </div>
    </section>
  );
}
