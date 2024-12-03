import { Button } from "./ui/button";
import { Clock } from "lucide-react";

export default function EventCard() {
  return (
    <div className="relative">
      <label className="absolute left-2 top-2 rounded-full bg-primary px-4 py-1 text-white">
        Online
      </label>
      <img src="img/ifpedia-img.png" alt="if-pedia-img" />
      <div className="space-y-4 rounded-b-2xl border-x-2 border-b-2 border-muted-foreground p-4">
        <div className="flex items-center gap-2">
          <Clock className="text-primary" />{" "}
          <p className="text-lg font-normal text-primary">29 Jan 2024</p>
        </div>
        <h3 className="text-medium text-2xl text-primary">
          Judul Program Kerja
        </h3>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur
        </p>
        <Button className="bg-primary">More Info</Button>
      </div>
    </div>
  );
}
