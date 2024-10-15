import { Link } from "react-router-dom";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
} from "../ui/breadcrumb";
import { ArrowRight, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import ProgramCard from "../ProgramCard";
import BreadcrumpCard from "../BreadcrumpCard";
import { setBreadCrumb } from "@/lib/networks/breadCrumbQueries";

type Props = {
  name: string;
  nav: any;
  eventFormat: string;
  dinas: string;
  date: string;
  description: string;
  benefits: any;
};

export default function ProkerDetailItem({
  name,
  nav,
  eventFormat,
  dinas,
  date,
  description,
  benefits,
}: Props) {
  const [prokerDinas, setProkerDinas] = useState<any[]>([]);

  useEffect(() => {
    axios.get(`/data/proker.json`).then((res) => {
      const filteredProker = res.data.data
        .flat()
        .filter((e: any) => e["dinas"] === dinas && e["name"] !== name);
      setProkerDinas(filteredProker);
    });
  }, []);

  return (
    <section className="flex flex-col gap-8">
      <div>
        <BreadcrumpCard page={"Proker HMIF"} linkPage={"proker"}>
          <BreadcrumbItem>
            <BreadcrumbLink
              className="capitalize"
              href="/proker"
              onClick={() => setBreadCrumb(nav)}
            >
              {nav}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <ArrowRight />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-semibold text-primary">
              {name}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumpCard>
      </div>

      <div className="flex flex-col gap-4">
        <p className="inline-block w-fit rounded bg-primary px-3 py-1 text-white">
          {eventFormat}
        </p>
        <h1 className="text-4xl">{name}</h1>
        <div className="flex gap-2">
          <p>Presented by</p>
          <p className="uppercase">{dinas}</p>
        </div>
        <div className="flex w-full items-center justify-center">
          <div className="flex w-full flex-col gap-4 lg:w-3/4">
            <img
              src={`/img/proker/${dinas}/${name}.png`}
              alt={name}
              className="h-[500px] w-full object-cover"
            />
            <div className="flex w-full flex-col gap-2">
              <div className="flex justify-start gap-2 py-2 text-primary">
                <Clock />
                <p>{date}</p>
              </div>
              <p>{description}</p>
              <div>
                <p>Benefits:</p>
                <ul className="px-12">
                  {benefits.map((benefit: any, key: number) => (
                    <li className="list-disc" key={key}>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {prokerDinas.length > 0 && (
        <section className="mt-10 flex flex-col items-center justify-center">
          <h1 className="text-center text-2xl font-bold uppercase text-primary xl:text-4xl">
            Our Programs
          </h1>
          <p className="my-8 w-full text-center md:w-3/4">
            “Memulai petualangan untuk terhubung dengan teman sebaya, para
            profesional, dan pengalaman pendidikan di seluruh kampus, dan
            temukan berbagai kesempatan yang menanti Anda!”
          </p>
          <div className="flex flex-col lg:flex-row">
            {prokerDinas.slice(0, 3).map((item: any, key: any) => (
              <ProgramCard
                key={key}
                eventFormat={item["eventFormat"]}
                name={item["name"]}
                date={item["date"]}
                description={item["description"]}
                dinas={item["dinas"]}
              />
            ))}
          </div>
          <Link
            to={"/proker"}
            className="text flex items-center justify-center gap-2 font-semibold text-primary"
          >
            <p className="text-xl lg:text-2xl">See More Our Programs</p>
            <ArrowRight className="size-8" />
          </Link>
        </section>
      )}
    </section>
  );
}
