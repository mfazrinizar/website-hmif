import { Button } from "@/components/ui/button";
import AcademicCardsItem from "./AcademicCardsItem";

interface AcademicCardsProps {
  data: Array<{
    title: string;
    category: string;
    date: string;
    description: string;
    img: string;
    type: string;
    details_id: string;
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
    <div className="flex flex-col">
      {data.map((item, index) => (
        <AcademicCardsItem
          key={index}
          title={item.title}
          category={item.category}
          date={item.date}
          description={item.description}
          img={item.img}
          type={item.type}
          details_id={item.details_id}
        />
      ))}

      {canSeeMore && (
        <Button
          onClick={handleSeeMore}
          className="w-full rounded-2xl py-6 text-lg text-primary lg:w-11/12"
          variant={"outline"}
        >
          See more
        </Button>
      )}
    </div>
  );
}
