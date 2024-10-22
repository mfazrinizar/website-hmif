import ProgramCard from "../ProgramCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { ArrowRight } from "lucide-react";

import { rndImage } from "@/lib/genImage";

type Props = {
  proker: any[];
};

export default function ProfilePrograms({ proker }: Props) {
  const [programs, setPrograms] = useState<any[]>([]);

  console.log(proker?.[0]);

  useEffect(() => {
    if (proker?.length > 3) setPrograms(rndImage({ array: proker }));
    // if (proker?.length > 3) console.log(proker);
    else setPrograms(proker);
  }, [proker]);

  return (
    <section id="profile-programs">
      <h1 className="mb-8 text-center text-2xl font-bold text-primary xl:text-4xl">
        Our Programs
      </h1>

      <div className="flex flex-col lg:flex-row">
        {programs &&
          programs
            .flat()
            .map((item: any) => (
              <ProgramCard
                key={item["assets"]}
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
        to={"/proker"}
        className="text flex items-center justify-center gap-2 font-bold text-primary"
      >
        <p className="text-3xl">See More About Program Kerja INTI</p>
        <ArrowRight className="size-8" />
      </Link>
    </section>
  );
}
