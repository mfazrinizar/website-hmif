import { useEffect, useState } from "react";
import AcademicCardsItem from "@/components/Academic/AcademicCardsItem";

interface CardData {
  title: string;
  category: string;
  date: string;
  description: string;
  img: string;
}

interface AcademicCardsProps {
  dataUrl: string;
}

export default function AcademicCards({ dataUrl }: AcademicCardsProps) {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(dataUrl);
      const data = await response.json();
      setCards(data);
    };

    fetchData();
  }, [dataUrl]);

  return (
    <div>
      {cards.map((card, index) => (
        <AcademicCardsItem
          key={index}
          title={card.title}
          category={card.category}
          date={card.date}
          description={card.description}
          img={card.img}
        />
      ))}
      <button className="w-full rounded-2xl border-2 border-primary bg-[#F5F5F5] py-3 text-lg font-medium text-primary md:w-11/12">
        See more
      </button>
    </div>
  );
}
