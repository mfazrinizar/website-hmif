import { FormAspiration } from "@/components/Aspiration/FormAspiration";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Aspiration() {
  return (
    <section id="aspiration" className="mx-auto space-y-12 text-center">
      <div className="mx-auto space-y-8 text-center md:w-3/4">
        <div className="mx-auto space-y-8 md:w-3/4">
          <h1 className="text-3xl font-bold text-primary xl:text-4xl">
            Aspiration
          </h1>
          <p className="text-center text-base xl:text-xl">
            Bagikan aspirasi, saran, dan ide Anda untuk membantu kami tumbuh dan
            berkembang. Pendapat Anda sangat berarti bagi kemajuan bersama.
          </p>
        </div>
        <div className="rounded-xl border-2 border-muted">
          <FormAspiration />
        </div>
      </div>
      <section
        id="aspiration-faq"
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
          <Link
            to={"/"}
            className="flex items-center gap-4 text-sm font-medium text-primary duration-300 hover:text-2xl lg:text-2xl"
          >
            <p>More questions</p>
            <ArrowRight className="" />
          </Link>
        </div>
        <Accordion type="single" collapsible className="space-y-8 md:w-1/2">
          <AccordionItem value="item-1">
            <AccordionTrigger>Apa tujuan aspirasi ini ?</AccordionTrigger>
            <AccordionContent>
              Aspirasi ini dibuat untuk mengumpulkan umpan balik, saran, dan ide
              dari mahasiswa agar dapat membantu meningkatkan kegiatan, program,
              dan organisasi kami secara keseluruhan.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Bisakah saya mengirimkan aspirasi secara anonim ?
            </AccordionTrigger>
            <AccordionContent>
              Ya, Anda dapat memilih untuk tidak mengisi kolom nama jika Anda
              lebih suka tetap anonim. Namun, memberikan informasi kontak Anda
              dapat membantu kami untuk menindaklanjuti aspirasi Anda jika
              diperlukan.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Bagaimana cara mengirimkan aspirasi saya ?
            </AccordionTrigger>
            <AccordionContent>
              Anda dapat mengirimkan aspirasi melalui formulir yang disediakan
              di halaman ini. Pastikan untuk menyertakan semua detail yang
              relevan agar kami dapat memahami aspirasi Anda dengan lebih baik.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Apa yang terjadi setelah mengirimkan aspirasi saya ?
            </AccordionTrigger>
            <AccordionContent>
              Setelah Anda mengirimkan aspirasi Anda, tim kami akan meninjau
              umpan balik tersebut. Kami akan mempertimbangkan masukan Anda
              dalam perencanaan dan pengambilan keputusan. Jika diperlukan, kami
              mungkin akan menghubungi Anda untuk klarifikasi lebih lanjut.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Apa aspirasi saya akan dijaga kerahasiaannya ?
            </AccordionTrigger>
            <AccordionContent>
              Ya, semua pengiriman akan diperlakukan dengan kerahasiaan.
              Identitas dan informasi pribadi Anda tidak akan dibagikan tanpa
              izin Anda.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </section>
  );
}
