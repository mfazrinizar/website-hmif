import {
  Youtube,
  Instagram,
  Linkedin,
  CircleCheckBig,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FellowInfo from "@/components/FellowInfo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { LinkPreview } from "@/components/ui/link-preview";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProgramCard from "@/components/ProgramCard";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

const testimonials = [
  {
    quote:
      "Seperti padi yang tumbuh subur di sawah tidak akan tumbuh subur di gurun sahara, maka dari itu pilihlah dimana tempatmu seharusnya berada.",
    text: "Selama di HMIF saya mendapatkan banyak sekali pengalaman begitu juga dengan bertambahnya relasi dan pertemanan membuat pengalaman yang didapat tidak hanya sebuah pengalaman pribadi, tapi juga pengalaman bersama. HMIF membuat saya merasakan rumah untuk berbagi kebersamaan dan kekeluargaan yang saling melengkapi satu sama lain, dan juga dapat memberikan ruang pengembangan diri yang baik dari segi profesionalitas.",
    name: "M Dzawil Fadhol Abidullah",
    title: "Ketua Himpunan",
  },
  {
    quote:
      "Jika ada keberhasilan maka ada pengorbanan, jika ingin sukses jangan sia-sia kan waktu anda.",
    text: 'Himpunan mahasiswa informatika adalah wadah yang berarti bagi saya, awal tergabung di dalamnya hanya coba-coba, namun setelah di dalamnya aku menikmati semua yang ada pada HMIF. Suka, duka, canda dan tawa di dalamnya sangat berarti bagi hidup saya, HMIF juga berperan besar atas peningkatan diri saya, mulai dari memanajemen suatu hal, berkomunikasi dengan baik, cara berkemimpinan dan memiliki relasi yang luas. Jika saja saya tidak tergabung, mungkin saya tidak seperti sekarang, Terimakasih HMIF dan rekan" seperjuangan semoga sukses untuk kita semua.',
    name: "Feri Irawan",
    title: "Wakil Ketua Himpunan",
  },
  {
    quote:
      "Bukan nama organisasi yang menentukan kesuksesan, tapi seberapa besar keinginan anggotanya untuk terus belajar dan berkembang.",
    text: "HMIF UNSRI merupakan tempat ternyaman bagi saya untuk menggali segala potensi dalam diri saya. Disini, saya melihat bagaimana solidaritas dan profesionalisme terbentuk dalam setiap proses yang dijalani. Di HMIF, setiap tantangan adalah peluang, dan setiap ide adalah langkah yang digunakan menuju masa depan yang lebih cerah. Lingkungan yang suportif ini menciptakan ikatan yang kuat di antara para anggota, di mana setiap suara didengar dan dihargai. Saya harap seluruh elemen HMIF UNSRI terus mendukung satu sama lain, menciptakan ruang di mana setiap orang merasa aman untuk berbagi gagasan dan mengambil inisiatif—untuk menjadi organisasi yang tidak hanya tumbuh dalam ilmu, tetapi juga dalam semangat kolaborasi dan inovasi.",
    name: "Fildzah Nur Izzati",
    title: "Sekretaris Umum 1",
  },
  {
    quote: "Jalani saja dulu, nanti juga bisa",
    text: "Dari banyak organisasi yang saya ikuti, HMIF menjadi tempat saya mendapatkan banyak pengalaman untuk lingkungan yang lebih luas lagi. HMIF tidak hanya memberikan kesempatan untuk mendapatkan banyak pengalaman, tapi juga mengajarkan bagaimana caranya belajar dari kesalahan. Hal yang paling membuat saya nyaman adalah teman-teman di HMIF. Semoga kamu mendapatkan kesempatan bagus dengan bergabung HMIF.",
    name: "Vellanindhita Noorprameswari Yudoyono",
    title: "Sekretaris Umum 2",
  },
  {
    quote:
      "HMIF bukan hanya tentang kode dan algoritma, tapi juga tentang membangun relasi, kepedulian, dan solusi untuk masyarakat.",
    text: "Saya bangga menjadi bagian dari HMIF, Himpunan Mahasiswa Informatika Universitas Sriwijaya. Di sini, saya tidak hanya belajar tentang teknologi dan pemrograman, tetapi juga tumbuh dalam lingkungan yang mendukung kreativitas, kolaborasi, dan kepemimpinan. Bersama rekan-rekan yang penuh semangat, saya terus mengembangkan diri, berkontribusi dalam berbagai kegiatan, serta ikut serta dalam menciptakan solusi inovatif untuk masyarakat. HMIF adalah tempat di mana kami bukan hanya membentuk masa depan yang lebih baik melalui teknologi, tetapi juga memperkuat rasa persaudaraan dan kebersamaan.",
    name: "Annisa Reida Raheima",
    title: "Bendahara Umum 1",
  },
  {
    quote:
      "Tumbuh bersama dalam sebuah organisasi adalah tentang saling belajar dan mendukung satu sama lain.",
    text: "Saya sangat bangga bisa menjadi bagian dari HMIF Unsri. Di sini, saya tidak hanya belajar banyak hal baru, tetapi juga bertemu dengan orang-orang hebat yang selalu mendukung satu sama lain. Suasana kebersamaan dan semangat kolaborasi yang ada membuat setiap pengalaman di HMIF terasa seru dan bermakna. Menjadi bagian dari keluarga besar HMIF memberikan saya kesempatan untuk berkembang, baik secara pribadi maupun profesional. Saya berharap bisa terus berkontribusi dan membawa manfaat bagi organisasi ini serta teman-teman semua.",
    name: "Revalina Ramadhani",
    title: "Bendahara Umum 2",
  },
];

const images1 = [
  {
    imageUrl: "img/home-about-1.png",
    text: "Kastrad Peduli Kasih",
  },
  {
    imageUrl: "img/home-about-2.png",
    text: "Pelatihan Manajemen Organisasi",
  },
];

const images2 = [
  {
    imageUrl: "img/home-about-3.png",
    text: "MinSoc",
  },
  {
    imageUrl: "img/home-about-4.png",
    text: "Gathering KOMINFO",
  },
];

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
            <LinkPreview url={"https://www.youtube.com/@hmiffasilkomunsri6922"}>
              <Youtube className="text-primary" />
            </LinkPreview>
            <LinkPreview url={"https://www.instagram.com/hmif.unsri/"}>
              <Instagram className="text-primary" />
            </LinkPreview>
            <LinkPreview url={"https://id.linkedin.com/company/hmif-unsri"}>
              <Linkedin className="rounded-md bg-primary p-1 text-white" />
            </LinkPreview>
          </div>
        </div>
      </section>
      <img
        src="/img/home-ellipse-1.png"
        alt="home-ellipse-1"
        className="absolute left-0 -z-10 w-1/2 lg:w-1/3"
      />
      <section
        id="home-about"
        className="flex flex-col items-center justify-between gap-6 lg:flex-row"
      >
        <div className="flex gap-6 lg:w-2/5">
          {/* <DirectionAwareHover imageUrl={`img/home-about-1.png`}>
              <p className="text-xl font-bold"></p>
            </DirectionAwareHover>
            <DirectionAwareHover imageUrl={`img/home-about-2.png`}>
              <p className="text-xl font-bold"></p>
            </DirectionAwareHover>
          </div>
          <div className="space-y-6">
            <DirectionAwareHover imageUrl={`img/home-about-3.png`}>
              <p className="text-xl font-bold"></p>
            </DirectionAwareHover>
            <DirectionAwareHover imageUrl={`img/home-about-4.png`}>
              <p className="text-xl font-bold"></p>
            </DirectionAwareHover> */}
          <div className="mt-12 space-y-6">
            {images1.map((item) => (
              <DirectionAwareHover imageUrl={item.imageUrl}>
                <p className="text-xl font-bold">{item.text}</p>
              </DirectionAwareHover>
            ))}
          </div>
          <div className="space-y-6">
            {images2.map((item) => (
              <DirectionAwareHover imageUrl={item.imageUrl}>
                <p className="text-xl font-bold">{item.text}</p>
              </DirectionAwareHover>
            ))}
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
          <ul className="flex flex-col space-y-4 text-xl">
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
        <h1 className="text-center text-2xl font-bold text-primary xl:text-4xl">
          Get to know our events and participate in it
        </h1>
        <p className="text-center text-lg">
          Lewat acara kami, kami ingin memberikan pengalaman tak terlupakan bagi
          peserta dalam petualangan mereka menjelajahi dunia teknologi yang
          luas.
        </p>
        <div className="flex flex-col lg:flex-row">
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
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          className="hidden md:block"
        />
        <ul className="no-scrollbar flex shrink-0 flex-nowrap gap-4 overflow-auto py-4 md:hidden">
          {testimonials.map((item) => (
            <li
              className="relative w-[350px] max-w-full flex-shrink-0 rounded-2xl bg-white px-8 py-6 md:w-[450px]"
              key={item.name}
            >
              <div className="flex h-full flex-col justify-between">
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <span className="relative z-20 text-base font-semibold leading-[1.6] text-primary">
                  "{item.quote}"
                </span>
                <br />
                <span className="relative z-20 line-clamp-6 text-xs font-normal leading-[1.6] text-black hover:line-clamp-none md:text-sm">
                  {item.text}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center gap-4">
                  <img src="/img/review-dzawil.png" alt="review" />
                  <span className="flex flex-col gap-1">
                    <span className="text-md line-clamp-1 font-normal text-primary">
                      {item.name}
                    </span>
                    <span className="text-md font-normal text-primary">
                      {item.title}
                    </span>
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <img
        src="/img/home-ellipse-2.png"
        alt="home-ellipse-2"
        className="absolute left-0 -z-50 w-1/3 lg:w-1/4"
      />
      <section
        id="home-faq"
        className="relative flex flex-col justify-between gap-8 md:flex-row"
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
          <LinkPreview url="/about" className="flex items-center gap-2 text-xl">
            <Instagram className="size-8 text-primary" />{" "}
            <p className="font-medium text-primary">@hmif.unsri</p>
          </LinkPreview>
        </div>
        <div className="absolute -z-50 hidden h-1/2 w-full bg-[#74DBEF] md:block"></div>
      </section>
    </section>
  );
}
