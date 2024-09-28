import {
  Carousel,
  CarouselContent,
  CarouselImg,
} from "@/components/ui/carousel";
import ProfileCarouselItem from "./ProfileCarouselItem";

import { useEffect, useState } from "react";
import axios from "axios";

type Props = {
  divisi: string;
};

export default function ProfileCarousel({ divisi }: Props) {
  const [inti, setInti] = useState([]);
  const [staff, setStaff] = useState([[]]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios.get(`/data/profile/${divisi}.json`).then((res) => {
      setInti(res.data.inti);
      if (res.data.staff) setStaff(res.data.staff);
      setTitle(res.data.title);
    });
  }, []);

  return (
    <section id="profile-carousel" className="space-y-8">
      {inti && (
        <Carousel className="flex flex-col">
          <h1 className="mb-4 self-start text-2xl font-bold uppercase text-primary lg:mb-20 xl:text-4xl">
            bph {title}
          </h1>
          <CarouselContent>
            {inti.map((item, key) => (
              <ProfileCarouselItem
                nama={item["nama"]}
                jabatan={item["jabatan"]}
                angkatan={item["angkatan"]}
                instagram={item["instagram"]}
                email={item["email"]}
                key={item["instagram"] + key}
              />
            ))}
          </CarouselContent>
          <div className="embla__dots no-scrollbar relative mt-8 flex items-center gap-8 self-end overflow-scroll overflow-y-hidden whitespace-nowrap lg:mt-0 lg:w-1/2">
            {inti.map((item, key) => (
              <CarouselImg
                key={item["instagram"] + key}
                index={key}
                src={`/img/profile/${item["nama"]}.png`}
              />
            ))}
          </div>
        </Carousel>
      )}
      {staff[0].length > 1 && (
        <Carousel className="flex flex-col">
          <h1 className="mb-4 self-start text-2xl font-bold uppercase text-primary lg:mb-20 xl:text-4xl">
            staff {title}
          </h1>
          <CarouselContent>
            {staff[0].map((item, key) => (
              <ProfileCarouselItem
                nama={item["nama"]}
                jabatan={item["jabatan"]}
                angkatan={item["angkatan"]}
                instagram={item["instagram"]}
                email={item["email"]}
                key={item["instagram"] + key}
              />
            ))}
          </CarouselContent>
          <div className="embla__dots no-scrollbar relative mt-8 flex items-center gap-8 self-end overflow-scroll overflow-y-hidden whitespace-nowrap lg:mt-0 lg:w-1/2">
            {staff[0].map((item, key) => (
              <CarouselImg
                key={item["instagram"] + key}
                index={key}
                src={`/img/profile/${item["nama"]}.png`}
              />
            ))}
          </div>
        </Carousel>
      )}
      {staff[1] && (
        <Carousel className="flex flex-col">
          <CarouselContent>
            {staff[1].map((item, key) => (
              <ProfileCarouselItem
                nama={item["nama"]}
                jabatan={item["jabatan"]}
                angkatan={item["angkatan"]}
                instagram={item["instagram"]}
                email={item["email"]}
                key={item["instagram"] + key}
              />
            ))}
          </CarouselContent>
          <div className="embla__dots no-scrollbar relative mt-8 flex items-center gap-8 self-end overflow-scroll overflow-y-hidden whitespace-nowrap lg:mt-0 lg:w-1/2">
            {staff[1].map((item, key) => (
              <CarouselImg
                key={item["instagram"] + key}
                index={key}
                src={`/img/profile/${item["nama"]}.png`}
              />
            ))}
          </div>
        </Carousel>
      )}
    </section>
  );
}
