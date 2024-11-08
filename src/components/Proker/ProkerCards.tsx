import { useEffect, useState } from "react";
import ProkerCardItem from "./ProkerCardItem";
import { Button } from "../ui/button";

type Props = {
  dinas: string;
  item: any;
  nav: string;
};

export default function ProkerCards({ dinas, item, nav }: Props) {
  const [proker, setProker] = useState([]);
  const [sliced, setSliced] = useState(3);

  useEffect(() => {
    if (item) {
      if (dinas == "all") {
        setProker(item || []);
        console.log(item);
      } else {
        const filteredProker = item.filter(
          (proker: any) => proker.dinas === dinas,
        );
        setProker(filteredProker);
      }
    }
  }, [item]);

  function showMoreItems() {
    setSliced(sliced + 3);
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      {dinas == "all"
        ? proker
            .flat()
            .slice(0, sliced)
            .map((proker: any, key: any) => (
              <ProkerCardItem
                key={key}
                eventFormat={proker["event_format"]}
                name={proker["name"]}
                date={proker["date"]}
                description={proker["description"]}
                dinas={proker["dinas"]}
                nav={nav}
              />
            ))
        : proker
            .slice(0, sliced)
            .map((proker: any, key: any) => (
              <ProkerCardItem
                key={key}
                eventFormat={proker["event_format"]}
                name={proker["name"]}
                date={proker["date"]}
                description={proker["description"]}
                dinas={proker["dinas"]}
                nav={nav}
              />
            ))}

      {/* See more Button */}
      {dinas == "all"
        ? sliced < proker.flat().length && (
            <div className="w-full">
              <Button
                onClick={showMoreItems}
                className="w-full rounded-2xl py-6 text-lg text-primary lg:w-11/12"
                variant={"outline"}
              >
                See more
              </Button>
            </div>
          )
        : sliced < proker.length && (
            <div className="w-full">
              <Button
                onClick={showMoreItems}
                className="w-full rounded-2xl py-6 text-lg text-primary lg:w-11/12"
                variant={"outline"}
              >
                See more
              </Button>
            </div>
          )}
    </div>
  );
}
