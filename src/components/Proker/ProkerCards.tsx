import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import ProkerCardItem from "./ProkerCardItem";
import axios from "axios";

type Props = {
  dinas: string;
};

export default function ProkerCards({ dinas }: Props) {
  const [proker, setProker] = useState([]);
  const [sliced, setSliced] = useState(3);

  useEffect(() => {
    axios.get(`/data/proker/${dinas}.json`).then((res) => {
      setProker(res.data.proker);
    });
  }, []);

  function showMoreItems() {
    setSliced(sliced + 3);
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      {proker.slice(0, sliced).map((proker, key) => (
        <ProkerCardItem
          key={key}
          name={proker["name"]}
          eventFormat={proker["eventFormat"]}
          date={proker["date"]}
          description={proker["description"]}
          dinas={dinas}
        />
      ))}

      {/* See more Button */}
      {proker.length >= 3 ? (
        <div className="w-full">
          <Button
            onClick={showMoreItems}
            className="w-full rounded-2xl border-2 border-primary bg-[#F5F5F5] py-6 text-lg text-primary lg:w-11/12"
          >
            See more
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
