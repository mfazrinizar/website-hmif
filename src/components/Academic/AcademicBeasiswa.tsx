import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AcademicBeasiswa() {
  return (
    <div className="px-2 md:w-full md:px-8">
      <p className="pb-8 text-center text-3xl font-bold text-primary sm:text-start md:whitespace-nowrap">
        EXPLORE SCHOLARSHIP
      </p>

      {/* Card 1 */}
      <div className="mb-7 flex w-full flex-col rounded-2xl border border-black p-4 md:flex-row md:p-7 lg:w-11/12">
        <img
          src="img/beasiswa_bca.png"
          alt="beasiswa_bca"
          className="mb-4 w-full md:mb-0 md:w-1/4"
        />
        <div className="pl-0 pt-3 md:pl-14">
          <p className="inline-block rounded bg-primary px-2 py-1 text-white">
            Undergraduate
          </p>
          <h1 className="pb-6 pt-7 text-xl font-bold md:text-2xl">
            Beasiswa Bakti BCA
          </h1>
          <div className="flex items-center justify-center sm:justify-normal">
            <Clock className="text-primary" />
            <p className="pl-2 text-primary">July - August 2024</p>
          </div>
          <p className="pb-5 pt-2">
            Beasiswa Bakti BCA merupakan program unggulan dari BCA yang telah
            berlangsung sejak tahun 1999. Program ini bertujuan untuk memberikan
            dukungan kepada mahasiswa/i Indonesia yang berprestasi, baik di
            bidang akademis maupun non-akademis.
          </p>
          <Button className="border-2 border-primary bg-[#F5F5F5] text-primary">
            Learn more
          </Button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="mb-7 flex w-full flex-col rounded-2xl border border-black p-4 md:flex-row md:p-7 lg:w-11/12">
        <img
          src="img/beasiswa_ayopintar.png"
          alt="beasiswa_ayopintar"
          className="mb-4 w-full md:mb-0 md:w-1/4"
        />
        <div className="pl-0 pt-3 md:pl-14">
          <p className="inline-block rounded bg-primary px-2 py-1 text-white">
            Undergraduate
          </p>
          <h1 className="pb-6 pt-7 text-xl font-bold md:text-2xl">
            Pendidikan Ayo pintar 2024
          </h1>
          <div className="flex items-center justify-center sm:justify-normal">
            <Clock className="text-primary" />
            <p className="pl-2 text-primary">13 August - 27 December 2024</p>
          </div>
          <p className="pb-5 pt-2">
            Beasiswa Pendidikan Ayo Pintar merupakan program beasiswa yang
            ditawarkan oleh Ayo Pintar dan ditujukan untuk Pelajar, Gap Year
            serta Mahasiswa. Tujuan program adalah untuk mendukung pendidikan
            generasi muda dapat berprestasi dan berinovasi.
          </p>
          <Button className="border-2 border-primary bg-[#F5F5F5] text-primary">
            Learn more
          </Button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="mb-7 flex w-full flex-col rounded-2xl border border-black p-4 md:flex-row md:p-7 lg:w-11/12">
        <img
          src="img/beasiswa_bsi.png"
          alt="beasiswa_bsi"
          className="mb-4 w-full md:mb-0 md:w-1/4"
        />
        <div className="pl-0 pt-3 md:pl-14">
          <p className="inline-block rounded bg-primary px-2 py-1 text-white">
            Undergraduate
          </p>
          <h1 className="pb-6 pt-7 text-xl font-bold md:text-2xl">
            BSI Scholarship 2024
          </h1>
          <div className="flex items-center justify-center sm:justify-normal">
            <Clock className="text-primary" />
            <p className="pl-2 text-primary">2 September - 13 October 2024</p>
          </div>
          <p className="pb-5 pt-2">
            Beasiswa BSI 2024 menawarkan bantuan biaya kuliah dan uang saku
            untuk mahasiswa tahun ke-2 dengan prestasi akademik atau
            non-akademik, serta pelatihan dan magang di industri ekonomi
            syariah.
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
