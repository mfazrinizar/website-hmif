import { Button } from "@/components/ui/button";
import AcademicCardsItem from "./AcademicCardsItem";

interface AcademicCardsProps {
  data: Array<{
    title: string;
    category: string;
    date: string;
    description: string;
    img: string;
  }>;
  handleSeeMore: () => void;
  canSeeMore: boolean;
}

export default function AcademicCards({
  data,
  handleSeeMore,
  canSeeMore,
}: AcademicCardsProps) {
  return (
    <div>
      {data.map((item, index) => (
        <AcademicCardsItem
          key={index}
          title={item.title}
          category={item.category}
          date={item.date}
          description={item.description}
          img={item.img}
        />
      ))}

      {canSeeMore && (
        <Button
          onClick={handleSeeMore}
          className="w-full rounded-2xl border-2 border-primary bg-[#F5F5F5] py-6 text-lg text-primary md:w-11/12"
        >
          See more
        </Button>
      )}
    </div>
  );
}
