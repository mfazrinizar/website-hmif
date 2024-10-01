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
    <div className="mb-7 flex w-full h-fit rounded-2xl border border-black p-4 md:p-7 lg:w-11/12">
      <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <img
      src={`img/proker/${dinas}/${name}.png`}
      alt={`${name}`}
      className="mb-4 w-full h-1/2 md:w-1/2 md:mb-0 lg:w-1/4 md:h-full"
      />
      <div className="flex flex-col gap-2 justify-between items-start md:pl-14">
      <p className="inline-block rounded bg-primary px-2 py-1 text-white">
        {eventFormat}
      </p>
      <div className="flex flex-col gap-3 items-start">
      <h1 className="text-xl md:text-3xl font-medium text-primary">
        {name}
      </h1>
      <div className="flex gap-2 items-center justify-center text-primary text-sm">
        <Clock/>
        <p>{date}</p>
        <p>| {dinas}</p>
      </div>
      <p className="text-left pb-5 pt-2">
        {description}
      </p>
      </div>
      <Button className="border-2 border-primary bg-[#F5F5F5] text-primary">
        Learn more
      </Button>
    </div>
      </div>
  </div>
  )
}
