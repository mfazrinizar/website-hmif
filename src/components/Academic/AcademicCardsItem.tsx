import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  category: string;
  date: string;
  description: string;
  img: string;
  type: string;
  details_id: string;
}

export default function AcademicCardsItem({
  title,
  category,
  date,
  description,
  img,
  type,
  details_id,
}: CardProps) {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    const formattedTitle = title.toLowerCase().split(" ").join("-");
    navigate(`/academic/${type.toLowerCase()}/${formattedTitle}`, {
      state: { details_id },
    });
  };

  return (
    <div className="mb-7 flex w-full flex-col rounded-2xl border border-black p-7 md:w-full md:flex-row md:text-start">
      <img
        src={import.meta.env.VITE_SUPABASE_BUCKET_URL + img}
        alt={title}
        className="mb-4 w-full md:mb-0 md:w-1/4"
      />
      <div className="pl-0 pt-3 md:pl-14">
        <p className="inline-block rounded bg-primary px-2 py-1 text-white">
          {category}
        </p>
        <h1 className="pb-6 pt-7 text-2xl font-bold text-primary">{title}</h1>
        <div className="flex items-center">
          <Clock className="text-primary" />
          <p className="pl-2 text-primary">{date}</p>
        </div>
        <p className="pb-5 pt-2">{description}</p>
        <Button onClick={handleLearnMore} className="" variant={"outline"}>
          Learn more
        </Button>
      </div>
    </div>
  );
}
