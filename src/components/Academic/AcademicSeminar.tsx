import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AcademicSeminar() {
  return (
    <div className="px-2 md:w-full md:px-8">
      <p className="pb-8 text-center text-3xl font-bold text-primary md:whitespace-nowrap md:text-start">
        FOUNDING SEMINAR
      </p>

      {/* Card 1 */}
      <div className="mb-7 flex w-full flex-col rounded-2xl border border-black p-4 md:flex-row md:p-7 lg:w-11/12">
        <img
          src="img/webinar_AI.png"
          alt="webinar_AI"
          className="mb-4 w-full md:mb-0 md:w-1/4"
        />
        <div className="pl-0 pt-3 md:pl-14">
          <p className="inline-block rounded bg-primary px-2 py-1 text-white">
            Online
          </p>
          <h1 className="pb-6 pt-7 text-xl font-bold md:text-2xl">
            Webinar AI dalam Bisnis
          </h1>
          <div className="flex items-center justify-center sm:justify-normal">
            <Clock className="text-primary" />
            <p className="pl-2 text-primary">28 September 2024</p>
          </div>
          <p className="pb-5 pt-2">
            Artificial intelligence adalah software komputer yang dapat belajar,
            menganalisis data, membuat beberapa keputusan dan mengatasi masalah
            seperti halnya manusia. Lalu bagaimana penerapan artificial
            intelligence ini dalam bisnis?
          </p>
          <Button className="border-2 border-primary bg-[#F5F5F5] text-primary">
            Learn more
          </Button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="mb-7 flex w-full flex-col rounded-2xl border border-black p-4 md:flex-row md:p-7 lg:w-11/12">
        <img
          src="img/webinar_investasi.png"
          alt="webinar_investasi"
          className="mb-4 w-full md:mb-0 md:w-1/4"
        />
        <div className="pl-0 pt-3 md:pl-14">
          <p className="inline-block rounded bg-primary px-2 py-1 text-white">
            Online
          </p>
          <h1 className="pb-6 pt-7 text-xl font-bold md:text-2xl">
            Webinar Investasi 2024
          </h1>
          <div className="flex items-center justify-center sm:justify-normal">
            <Clock className="text-primary" />
            <p className="pl-2 text-primary">6 September 2024</p>
          </div>
          <p className="pb-5 pt-2">
            Pengen tahu bagaimana cara menghasilkan keuntungan besar dari tren
            investasi terbaru? Aa Pram ada info webinar nih, yuk ikuti webinar
            "Memanfaatkan Peluang Cuan Jutaan Dari Cryptocurrency".
          </p>
          <Button className="border-2 border-primary bg-[#F5F5F5] text-primary">
            Learn more
          </Button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="mb-7 flex w-full flex-col rounded-2xl border border-black p-4 md:flex-row md:p-7 lg:w-11/12">
        <img
          src="img/webinar_workshop.png"
          alt="webinar_workshop"
          className="mb-4 w-full md:mb-0 md:w-1/4"
        />
        <div className="pl-0 pt-3 md:pl-14">
          <p className="inline-block rounded bg-primary px-2 py-1 text-white">
            Hybrid
          </p>
          <h1 className="pb-6 pt-7 text-xl font-bold md:text-2xl">
            Webinar and Workshop
          </h1>
          <div className="flex items-center justify-center sm:justify-normal">
            <Clock className="text-primary" />
            <p className="pl-2 text-primary">14 - 17 September 2024</p>
          </div>
          <p className="pb-5 pt-2">
            The 2024 AICOMS-Q dilaksanakan selama 4 hari berturut-turut mulai
            Sabtu, 14 September 2024 hingga Selasa, 17 September 2024, secara
            Hybrid (Online dan Offline) dari Telkom University dan Institut
            Teknologi, Bandung.
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
