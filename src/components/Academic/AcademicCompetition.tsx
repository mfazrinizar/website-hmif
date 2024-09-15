import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AcademicCompetition() {
  return (
    <div className="px-2 md:w-full md:px-8">
      <p className="pb-8 text-center text-3xl font-bold text-primary md:whitespace-nowrap md:text-start">
        PREPARING COMPETITION
      </p>

      {/* Card 1 */}
      <div className="mb-7 flex w-full flex-col rounded-2xl border border-black p-4 md:flex-row md:p-7 lg:w-11/12">
        <img
          src="img/competition_invofest.png"
          alt="competition_invofest"
          className="mb-4 w-full md:mb-0 md:w-1/4"
        />
        <div className="pl-0 pt-3 md:pl-14">
          <p className="inline-block rounded bg-primary px-2 py-1 text-white">
            Online
          </p>
          <h1 className="pb-6 pt-7 text-xl font-bold md:text-2xl">
            INVOFEST 2024
          </h1>
          <div className="flex items-center justify-center sm:justify-normal">
            <Clock className="text-primary" />
            <p className="pl-2 text-primary">1 - 27 September 2024</p>
          </div>
          <p className="pb-5 pt-2">
            Invofest (Informatics Vocational Festival) adalah festival tahunan
            yang bertujuan untuk menginspirasi dan memberdayakan Indonesia muda
            dalam menghadapi era digital. Dengan mengusung tema “AI for a
            Sustainable Future: The Role of Generation Z in the Digital Era”.
          </p>
          <Button className="border-2 border-primary bg-[#F5F5F5] text-primary">
            Learn more
          </Button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="mb-7 flex w-full flex-col rounded-2xl border border-black p-4 md:flex-row md:p-7 lg:w-11/12">
        <img
          src="img/competition_srifoton.png"
          alt="competition_srifoton"
          className="mb-4 w-full md:mb-0 md:w-1/4"
        />
        <div className="pl-0 pt-3 md:pl-14">
          <p className="inline-block rounded bg-primary px-2 py-1 text-white">
            Hybrid
          </p>
          <h1 className="pb-6 pt-7 text-xl font-bold md:text-2xl">
            SRIFOTON 2024
          </h1>
          <div className="flex items-center justify-center sm:justify-normal">
            <Clock className="text-primary" />
            <p className="pl-2 text-primary">September 2024</p>
          </div>
          <p className="pb-5 pt-2">
            SRIFOTON 2024 adalah sebuah kompetisi nasional tahunan di bidang IT
            yang mewadahi mahasiswa IT se-Indonesia untuk mengembangkan serta
            menyalurkan minat dan bakat mereka dalam dunia IT. SRIFOTON 2024
            mengusung tema “Digital Innovation for a Sustainable Future”.
          </p>
          <Button className="border-2 border-primary bg-[#F5F5F5] text-primary">
            Learn more
          </Button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="mb-7 flex w-full flex-col rounded-2xl border border-black p-4 md:flex-row md:p-7 lg:w-11/12">
        <img
          src="img/competition_techpo.png"
          alt="competition_techpo"
          className="mb-4 w-full md:mb-0 md:w-1/4"
        />
        <div className="pl-0 pt-3 md:pl-14">
          <p className="inline-block rounded bg-primary px-2 py-1 text-white">
            Hybrid
          </p>
          <h1 className="pb-6 pt-7 text-xl font-bold md:text-2xl">
            TECHPO 2024
          </h1>
          <div className="flex items-center justify-center sm:justify-normal">
            <Clock className="text-primary" />
            <p className="pl-2 text-primary">1 - 15 September 2024</p>
          </div>
          <p className="pb-5 pt-2">
            Techphoria merupakan serangkaian acara IT tahunan dengan fokus
            kompetisi yang diperuntukan Universitas se-Indonesia untuk
            meningkatkan kesadaran tentang peranan IT serta meningkatkan nilai
            keilmuan dan komprehensif di bidang ilmu teknologi informasi
            komputer.
          </p>
          <Button className="border-2 border-primary bg-[#F5F5F5] text-primary">
            Learn more
          </Button>
        </div>
      </div>

      {/* See more Button */}
      <Button className="w-full rounded-2xl border-2 border-primary bg-[#F5F5F5] py-6 text-lg text-primary md:w-11/12">
        See more
      </Button>
    </div>
  );
}
