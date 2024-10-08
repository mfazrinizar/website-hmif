import { Clock } from "lucide-react";
import { Button } from "./ui/button";

type Props = {
  eventFormat: string;
  name: string;
  date: any;
  description: string;
  dinas: string;
};

export default function ProgramCard({
  eventFormat,
  name,
  date,
  description,
  dinas,
}: Props) {
  return (
    <div className="relative mb-7 h-fit w-full rounded-2xl p-4 md:h-auto md:p-7 lg:w-1/3">
      <p className="absolute left-10 top-10 rounded bg-primary px-2 py-1 text-white">
        {eventFormat}
      </p>
      <img
        src={`img/proker/${dinas}/${name}.png`}
        alt={`${name}`}
        className="mb-4 max-h-60 w-full rounded-t-2xl object-cover md:mb-0 md:h-full"
      />
      <div className="flex min-h-80 flex-col items-start justify-between gap-2 rounded-b-2xl border border-black p-6">
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center justify-center gap-2 text-sm text-primary">
            <Clock />
            <div className="flex flex-row flex-wrap gap-1 text-start">
              <p>{date}</p>
            </div>
          </div>
          <div className="line-clamp-1 overflow-hidden text-ellipsis">
            <h1 className="text-start text-xl font-medium text-primary md:text-3xl">
              {name}
            </h1>
          </div>
          <div className="w-fit text-ellipsis pb-5 pt-2">
            <p className="line-clamp-5 text-left">{description}</p>
          </div>
        </div>
        <Button className="" type="submit">
          More Info
        </Button>
      </div>
    </div>
  );
}
