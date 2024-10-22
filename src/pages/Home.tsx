import {
  Youtube,
  Instagram,
  Linkedin,
  CircleCheckBig,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import EventCard from "@/components/EventCard";
import ReviewCard from "@/components/ReviewCard";
import FellowInfo from "@/components/FellowInfo";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProgramCard from "@/components/ProgramCard";

export default function Home() {
  const navigate = useNavigate();

  const [event, setEvent] = useState<any[]>([]);

  useEffect(() => {
    const temp: any[] = [];
    axios.get(`/data/proker.json`).then((res) => {
      console.log(res.data.data);
      temp.push(res.data.data[2][4]);
      temp.push(res.data.data[2][0]);
      temp.push(res.data.data[4][0]);
      setEvent(temp);
    });

    console.log(event);
  }, []);

  return (
    <section id="home" className="space-y-24 lg:space-y-32 xl:space-y-40">
      <section
        id="home-hero"
        className="flex flex-col items-center justify-between lg:flex-row"
      >
        <div className="grid gap-8 lg:w-3/5">
          <h1 className="text-4xl font-bold text-primary xl:text-5xl">
            HMIF Fasilkom <br /> Universitas Sriwijaya
          </h1>
          <p className="text-lg">
            Selamat datang di website resmi HMIF Fasilkom Universitas Sriwijaya!
            Kami adalah Himpunan Mahasiswa Informatika Fakultas Ilmu Komputer
            Universitas Sriwijaya, yang lebih dikenal sebagai HMIF Fasilkom
            UNSRI. Sebagai organisasi yang mewadahi mahasiswa Informatika di
            Universitas Sriwijaya, HMIF Fasilkom UNSRI memiliki tujuan untuk
            mendukung dan mengembangkan potensi mahasiswa dalam bidang
            teknologi, informatika, dan ilmu komputer.
          </p>
          <div className="flex gap-4 self-end md:w-1/2">
            <FellowInfo qty={40} text="Program Kerja Terlaksana" />
            <FellowInfo qty={120} text="Member HMIF 2024" />
          </div>
        </div>
        <div className="hidden space-y-6 lg:block lg:w-1/3">
          <img
            src="img/home-hero-img.png"
            alt="home-hero-img"
            className="mx-auto"
          />
          <div className="flex items-center justify-center gap-4">
            <p className="text-xl text-primary">Follow Us</p>
            <Link to={"https://www.youtube.com/@hmiffasilkomunsri6922"}>
              <Youtube className="text-primary" />
            </Link>
            <Link to={"https://www.instagram.com/hmif.unsri/"}>
              <Instagram className="text-primary" />
            </Link>
            <Link to={"https://id.linkedin.com/company/hmif-unsri"}>
              <Linkedin className="rounded-md bg-primary p-1 text-white" />
            </Link>
          </div>
        </div>
      </section>
      <section
        id="home-about"
        className="flex flex-col items-center justify-between gap-6 lg:flex-row"
      >
        <div className="flex gap-6 lg:w-2/5">
          <div className="mt-6 space-y-6">
            <img src="img/home-about-1.png" alt="home-about-1" className="" />
            <img src="img/home-about-2.png" alt="home-about-2" className="" />
          </div>
          <div className="space-y-6">
            <img src="img/home-about-3.png" alt="home-about-3" className="" />
            <img src="img/home-about-4.png" alt="home-about-4" className="" />
          </div>
        </div>
        <div className="space-y-4 lg:w-1/2">
          <h3 className="text-2xl font-bold text-primary">About Us</h3>
          <p className="text-left text-lg lg:text-justify">
            Himpunan Mahasiswa Informatika alias HMIF adalah sebuah Organisasi
            Kemahasiswaan khusus Jurusan Teknik Informatika yang bergerak dalam
            bidang Akademik maupun Non-Akademik yang dapat menjadi wadah bagi
            para Mahasiswa Jurusan Teknik Informatika
          </p>
          <ul className="space-y-4 text-xl">
            <li className="flex items-center gap-4">
              <CircleCheckBig className="size-8 text-primary" />
              <p>HMIF sudah berdiri sejak tahun 2008</p>
            </li>
            <li className="flex items-center gap-4">
              <CircleCheckBig className="size-8 text-primary" />
              <p>Memiliki total 7 dinas dengan 8 divisi</p>
            </li>
            <li className="flex items-center gap-4">
              <CircleCheckBig className="size-8 text-primary" />
              <p>Terdapat banyak Program Kerja Keren</p>
            </li>
          </ul>

          <Button
            variant={"outline"}
            size={"lg"}
            onClick={() => navigate("/proker")}
          >
            More Info
          </Button>
        </div>
      </section>
      <section
        id="home-event"
        className="flex flex-col items-center justify-between gap-8"
      >
        <h1 className="text-2xl font-bold text-primary xl:text-4xl">
          Get to know our events and participate in it
        </h1>
        <p className="text-center text-lg">
          Lewat acara kami, kami ingin memberikan pengalaman tak terlupakan bagi
          peserta dalam petualangan mereka menjelajahi dunia teknologi yang
          luas.
        </p>
        <div className="flex">
          {event &&
            event.map((item: any) => (
              <ProgramCard
                eventFormat={item["eventFormat"]}
                name={item["name"]}
                date={item["date"]}
                description={item["description"]}
                dinas={item["dinas"]}
                src={undefined}
                type={"proker"}
              />
            ))}
        </div>

        <Link
          to="/proker"
          className="flex items-center gap-4 text-sm font-medium text-primary duration-300 hover:text-2xl lg:text-2xl"
        >
          <p>See More About Program Kerja HMIF</p>
          <ArrowRight className="" />
        </Link>
      </section>
      <section
        id="home-review"
        className="-mx-5 space-y-8 bg-[#74DBEF] p-8 px-5 md:-mx-12 md:px-12 xl:-mx-20 xl:px-20"
      >
        <h1 className="text-2xl font-bold text-primary xl:text-4xl">
          What do They say?
        </h1>
        <Carousel
          opts={{
            align: "start",
          }}
          className="overflow-hidden"
        >
          <CarouselContent className="gap-8">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <ReviewCard />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
      <section
        id="home-faq"
        className="flex flex-col justify-between gap-8 md:flex-row"
      >
        <div className="space-y-8 md:w-2/5">
          <h1 className="text-2xl font-bold text-primary xl:text-4xl">
            Have any questions?
          </h1>
          <p className="text-justify text-lg">
            Beberapa pertanyaan mengenai HMIF Fasilkom UNSRI disini, jika ada
            pertanyaan lebih lanjut silahkan hubungi email kami di{" "}
            <Link to="/about" className="text-primary">
              hmif.unsri@gmail.com
            </Link>{" "}
            Terima kasih!
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-8 md:w-1/2">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <section
        id="home-cta"
        className="relative -mx-5 flex items-center justify-center bg-[#74DBEF] px-5 py-8 md:-mx-12 md:bg-transparent md:px-12 xl:-mx-20 xl:px-20"
      >
        <img
          src="img/hand-iphone.png"
          alt="hand-iphone"
          className="hidden w-1/2 md:block lg:w-2/5"
        />
        <div className="space-y-8 md:w-1/2 lg:w-2/5">
          <h1 className="text-2xl font-bold text-primary xl:text-4xl">
            Follow us on Instagram for the latest updates and fun activities!
          </h1>
          <Link to="/about" className="flex items-center gap-2 text-xl">
            <Instagram className="size-8 text-primary" />{" "}
            <p className="font-medium text-primary">@hmif.unsri</p>
          </Link>
        </div>
        <div className="absolute -z-50 hidden h-1/2 w-full bg-[#74DBEF] md:block"></div>
      </section>
    </section>
  );
}
