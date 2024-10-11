import { Clock } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

type Props = {
  eventFormat: string,
  name: string,
  date: any,
  description: string,
  dinas: string,
  nav: string
};

export default function ProkerCardItem({
  eventFormat,
  name,
  date,
  description,
  dinas,
  nav
}: Props) {
  const navigate = useNavigate();

  return (
    <div className="mb-7 flex h-fit w-full rounded-2xl border border-black p-4 md:h-auto md:p-7 lg:w-11/12">
      <div className="flex h-fit w-full flex-col md:flex-row gap-6 md:h-auto md:gap-0">
          <img
            src={`img/proker/${dinas}/${name}.png`}
            alt={`${name}`}
            className="mb-4 md:mb-0 rounded-lg object-cover  w-full md:w-1/3 lg:w-1/4"
          />
        <div className="flex flex-col items-start justify-between gap-2 md:pl-8 lg:pl-14">
          <p className="inline-block rounded bg-primary px-2 py-1 text-white">
            {eventFormat}
          </p>
          <div className="flex flex-col items-start gap-3">
            <div className="line-clamp-1 overflow-hidden text-ellipsis">
              <h1 className="text-start text-xl font-medium text-primary md:text-3xl">
                {name}
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-primary">
              <Clock />
              <div className="flex flex-row flex-wrap gap-1 text-start">
                <p>{date}</p>
                <p>| {dinas}</p>
              </div>
            </div>
            <div className="line-clamp-5 max-h-32 min-h-32 w-fit overflow-hidden text-ellipsis pb-5 pt-2">
              <p className="text-left">{description}</p>
            </div>
          </div>
          <Button
            onClick={() => navigate(`/proker/${nav}/${name}`)}
            className="border-2 border-primary bg-[#F5F5F5] text-primary"
          >
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
}
