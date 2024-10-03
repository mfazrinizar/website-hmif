import { Clock } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
  eventFormat: string,
  name: string,
  date: any,
  description: string,
  dinas: string
};

export default function ProkerCardItem({eventFormat, name, date, description, dinas} : Props) {
  return (
    <div className="mb-7 flex w-full h-fit md:h-auto rounded-2xl border border-black p-4 md:p-7 lg:w-11/12">
      <div className="flex flex-col w-full h-fit md:h-auto md:flex-row gap-6 md:gap-0">
      <img
        src={`img/proker/${dinas}/${name}.png`}
        alt={`${name}`}
        className="mb-4 w-full h-1/2 md:w-1/3 md:mb-0 lg:w-1/4 md:h-full object-cover rounded-md"
      />
      <div className="flex flex-col gap-2 justify-between items-start md:pl-8 lg:pl-14">
      <p className="inline-block rounded bg-primary px-2 py-1 text-white">
        {eventFormat}
      </p>
      <div className="flex flex-col gap-3 items-start">
        <div className="overflow-hidden text-ellipsis line-clamp-1">
          <h1 className="text-start text-xl md:text-3xl font-medium text-primary">
            {name}
          </h1>
        </div>
        <div className="flex gap-2 items-center justify-center text-primary text-sm">
          <Clock/>
          <div className="flex flex-row flex-wrap gap-1 text-start">
            <p>{date}</p>
            <p>| {dinas}</p>
          </div>

        </div>
        <div className="pb-5 pt-2 w-fit min-h-32 max-h-32 overflow-hidden text-ellipsis line-clamp-5">
          <p className="text-left">
            {description}
          </p>
        </div>
        </div>
          <Button className="border-2 border-primary bg-[#F5F5F5] text-primary">
            Learn more
          </Button>
        </div>
      </div>
  </div>
  )
}
