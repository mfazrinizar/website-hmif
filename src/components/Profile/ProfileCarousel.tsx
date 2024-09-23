import {
  Carousel,
  CarouselContent,
  CarouselImg,
} from "@/components/ui/carousel";
import ProfileCarouselItem from "./ProfileCarouselItem";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export default function ProfileCarousel() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("/data/profile.json").then((res) => {
      setItems(res.data.inti);
    });
  }, []);

  return (
    <section id="profile-carousel">
      <Carousel className="flex flex-col">
        <h1 className="mb-4 text-2xl font-bold text-primary lg:mb-20 xl:text-4xl">
          Our Kabinet
        </h1>
        <CarouselContent>
          {items.map((item, key) => (
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
          {items.map((item, key) => (
            <CarouselImg
              key={item["instagram"] + key}
              index={key}
              src={`/img/profile/${item["nama"]}.png`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}
