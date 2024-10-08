import { useEffect, useState } from "react";
import ProkerCardItem from "./ProkerCardItem";
import { Button } from "../ui/button";

type Props = {
    dinas: any,
    item: any,
}

export default function ProkerCards({ dinas, item } : Props) {
    const [proker, setProker] = useState([]);
    const [sliced, setSliced] = useState(3);

    useEffect(() => {
        if(item){
          setProker(item || null);
          console.log(item);
        }
    }, [item]);

    function showMoreItems(){
      setSliced(sliced+3);
    }

    console.log(proker);

  return (
    <div className="flex justify-center items-center flex-col w-full">
      {
        dinas == "all" ?
        proker.flat().slice(0, sliced).map((proker, key) => 
          <ProkerCardItem key={key} eventFormat={proker["eventFormat"]} name={proker["name"]} date={proker["date"]} description={proker["description"]} dinas={proker["dinas"]}/>
        )
        :
        proker.slice(0, sliced).map((proker, key) => 
          <ProkerCardItem key={key} eventFormat={proker["eventFormat"]} name={proker["name"]} date={proker["date"]} description={proker["description"]} dinas={proker["dinas"]}/>
        ) 
      }

    {/* See more Button */}
    {
        proker.length >= 3 ? ( 
        <div className="w-full">
        <Button onClick={showMoreItems} className="w-full rounded-2xl border-2 border-primary bg-[#F5F5F5] py-6 text-lg text-primary lg:w-11/12">
            See more
        </Button>
        </div>

         ) 
        : ""
    }
    </div>
  )
}
