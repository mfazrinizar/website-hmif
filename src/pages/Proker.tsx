import ProkerTabs from "@/components/Proker/ProkerTabs";

export default function Proker() {
  return (
    <section id="proker" className="space-y-24 lg:space-y-32 xl:space-y-40">
      <section id="proker-hero" className="-mt-20 h-[90vh]">
        <div className="flex h-full w-full items-center justify-end">
          <img
            className="absolute bottom-0 left-0 right-0 -z-10 h-full w-full object-cover"
            src="/img/proker/hero.png"
            alt="background image"
          />
          <div className="flex items-center justify-center bg-primary lg:-mx-20 lg:w-8/12">
            <div className="flex flex-col gap-3 px-10 py-14 xl:px-14 xl:py-20">
              <h1 className="text-3xl font-bold text-white lg:text-4xl xl:text-5xl">
                ACHIEVING THE DREAM WITH{" "}
              </h1>
              <h1 className="text-3xl font-bold text-[#FFEA54] lg:text-4xl xl:text-5xl">
                OUR PROGRAMS
              </h1>
              <p className="text-white lg:text-lg">
                Eksplorasi potensi diri, kembangkan keterampilan, dan capai
                tujuan. Tingkatkan potensi bersama kami. Explore HMIF's Vision
                and Mission Through Our Program Goals!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <ProkerTabs />
      </section>
    </section>
  );
}
