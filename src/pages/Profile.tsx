import ProfileTabs from "@/components/Profile/ProfileTabs";
import ProgramCard from "@/components/ProgramCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Profile() {
  return (
    <section id="profile" className="space-y-24 lg:space-y-32 xl:space-y-40">
      <section
        id="profile-hero"
        className="-mx-5 flex flex-col items-center justify-between px-5 md:-mx-12 md:px-12 lg:flex-row lg:px-0 xl:-mx-20"
      >
        <img
          src="/img/profile-1.png"
          alt="profile-1"
          className="hidden w-1/5 lg:block xl:w-1/4"
        />
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-center text-4xl font-bold text-black xl:text-5xl">
              Our Strength Lies
            </h1>
            <h1 className="text-center text-4xl font-bold text-primary xl:text-5xl">
              In Our Team
            </h1>
          </div>
          <p className="text-center text-lg leading-none">
            Kami persembahkan jajaran kabinet HMIF yang penuh <br /> semangat!
            Bersama, kita kuatkan formasi dan wujudkan inovasi!
          </p>
        </div>
        <img
          src="/img/profile-2.png"
          alt="profile-2"
          className="hidden w-1/5 lg:block xl:w-1/4"
        />
      </section>
      <section
        id="profile-tabs"
        className="space-y-24 lg:space-y-32 xl:space-y-40"
      >
        <ProfileTabs />
      </section>
      {/* <section id="profile-programs" className="">
        <h1 className="mb-8 text-center text-2xl font-bold text-primary xl:text-4xl">
          OUR PROGRAMS
        </h1>
        <div className="flex">
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
        </div>
        <Link
          to="/proker"
          className="flex items-center justify-center gap-2 text-3xl font-bold text-primary"
        >
          See More About Program Kerja PMB <ArrowRight className="size-8" />
        </Link>
      </section> */}
    </section>
  );
}
