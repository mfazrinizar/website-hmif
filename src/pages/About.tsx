import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function About() {
  return (
    <section id="about" className="space-y-24 lg:space-y-32 xl:space-y-40">
      <section id="about-hero" className="flex items-center justify-between">
        <div className="space-y-4 md:w-1/2">
          <h1 className="text-3xl font-bold text-primary xl:text-4xl">
            About HMIF
          </h1>
          <p className="text-justify text-base xl:text-xl">
            Himpunan Mahasiswa Informatika (HMIF) adalah organisasi
            kemahasiswaan khusus untuk mahasiswa Jurusan Teknik Informatika.
            Berdiri sejak tahun 2008, HMIF berperan sebagai wadah yang mendukung
            pengembangan di bidang akademik dan non-akademik, serta menyediakan
            berbagai kegiatan yang bermanfaat bagi para mahasiswa. HMIF memiliki
            7 dinas dengan 8 divisi yang berfokus pada berbagai aspek untuk
            meningkatkan kompetensi dan kolaborasi mahasiswa.
          </p>
        </div>
        <img
          src="img/big-logo-hmif.png"
          alt="logo-hmif"
          className="hidden size-1/3 md:block"
        />
      </section>
      <img
        src="img/ellipse-4.png"
        alt="ellipse-4"
        className="absolute right-0 top-10 -z-50 w-1/3"
      />
      <section id="about-visi-misi" className="space-y-10">
        <h1 className="text-center text-3xl font-bold text-primary xl:text-4xl">
          VISI & MISI
        </h1>
        <div className="grid grid-cols-2 content-center gap-10 md:grid-cols-4">
          <img
            src="img/visi.png"
            alt="visi"
            className="w-56 self-center drop-shadow-xl xl:w-80"
          />
          <img
            src="img/misi.png"
            alt="visi"
            className="w-56 self-center drop-shadow-xl xl:w-80"
          />
          <div className="col-span-2 space-y-4 self-center md:ms-10">
            <h3 className="text-3xl font-bold text-primary">VISI</h3>
            <p className="text-justify text-base xl:text-xl">
              Terwujudnya formasi berdaya cipta tinggi dan nilai kompetensi
              tinggi dengan berlandaskan asas kekeluargaan agar dapat tercipta
              ekosistem yang baik bagi setiap elemen Himpunan Mahasiswa
              Informatika UNSRI
            </p>
          </div>
          <div className="col-span-2 space-y-4 md:col-span-4">
            <h3 className="text-3xl font-bold text-primary">MISI</h3>
            <ul className="list-decimal px-4 text-justify text-base xl:text-xl">
              <li>
                Mewujudkan nilai kompetensi tinggi terhadap berbagai bidang baik
                akademik maupun non-akademik.
              </li>
              <li>
                Menjadikan lingkungan jurusan sebagai ekosistem pendidikan yang
                baik dengan menjunjung tinggi nilai adab dan etika.
              </li>
              <li>
                Meningkatkan kordinasi antar setiap elemen civitas akademika.
              </li>
              <li>
                Mewadahi aspirasi, pemikiran dan daya cipta anggotanya dalam
                rangka strategi peningkatan proker pada titik maksimal.
              </li>
              <li>
                Menjembatani dan mengakomodasi hal-hal positif untuk membangun
                rasa solidaritas dan menumbuhkan kesadaran atas kinerja sepenuh
                hati.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="about-logo-info" className="space-y-10">
        <h1 className="text-3xl font-bold text-primary xl:text-4xl">
          FILOSOFI LOGO ANTAVARTA
        </h1>
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <img
            src="img/logo-antavarta.png"
            alt="logo-antavarta"
            className="w-1/2"
          />
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-primary">Tujuh Planet</h3>
              <p className="text-justify text-base xl:text-xl">
                melambangkan keberagaman dan keharmonisan dinas, menciptakan
                sistem kuat. Setiap planet merepresentasikan peran khusus dalam
                entitas yang kompak.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-primary">
                Garis Orbit Bersinggungan
              </h3>
              <p className="text-justify text-base xl:text-xl">
                Mencerminkan kesatuan, interkoneksi, dan kerjasama di dalam
                sistem. Hubungan yang harmonis dan saling mendukung terbentuk
                melalui keterkaitan erat antara elemen-elemen tersebut.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-primary">
                Tiga Jalur Orbit
              </h3>
              <p className="text-justify text-base xl:text-xl">
                Mencerminkan kesatuan dalam keragaman. Setiap jalur mewakili
                perbedaan individu atau elemen, sementara arah yang sama
                menunjukkan tujuan atau visi bersama. Ini dapat mencerminkan
                kerjasama, harmoni, dan keberagaman dalam mencapai suatu tujuan.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="about-gallery" className="space-y-4">
        <div className="flex flex-col justify-evenly gap-4 md:flex-row">
          <div className="grid space-y-4 overflow-hidden md:w-1/2">
            <div className="w-full space-y-4">
              <h1 className="text-3xl font-bold text-primary xl:text-4xl">
                OUR GALLERY
              </h1>
              <p className="text-base lg:text-xl">
                Kilasan momen terbaik HMIF: kolaborasi, semangat, dan
                kebersamaan dalam setiap momen!
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 self-end">
              <DirectionAwareHover imageUrl={`img/gallery-1.png`}>
                <p className="text-xl font-bold"></p>
              </DirectionAwareHover>
              <DirectionAwareHover imageUrl={`img/gallery-2.png`}>
                <p className="text-xl font-bold"></p>
              </DirectionAwareHover>
            </div>
          </div>
          <div className="md:w-1/2">
            <DirectionAwareHover
              className="h-full"
              imageUrl={`img/gallery-3.png`}
            >
              <p className="text-xl font-bold"></p>
            </DirectionAwareHover>
          </div>
        </div>
        <div className="flex flex-col justify-evenly gap-4 md:flex-row">
          <DirectionAwareHover imageUrl={`img/gallery-4.png`}>
            <p className="text-xl font-bold"></p>
          </DirectionAwareHover>
          <div className="grid grid-cols-2 gap-4">
            <DirectionAwareHover imageUrl={`img/gallery-5.png`}>
              <p className="text-xl font-bold"></p>
            </DirectionAwareHover>
            <DirectionAwareHover imageUrl={`img/gallery-6.png`}>
              <p className="text-xl font-bold"></p>
            </DirectionAwareHover>
            <DirectionAwareHover imageUrl={`img/gallery-7.png`}>
              <p className="text-xl font-bold"></p>
            </DirectionAwareHover>
            <DirectionAwareHover imageUrl={`img/gallery-8.png`}>
              <p className="text-xl font-bold"></p>
            </DirectionAwareHover>
          </div>
        </div>
      </section>
    </section>
  );
}
