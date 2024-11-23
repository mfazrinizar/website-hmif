import ProkerDetailItem from "@/components/Proker/ProkerDetailItem";
import { supabase } from "@/lib/createClient";
import { getProkerData } from "@/lib/networks/prokerQueries";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProkerDetail() {
  const [prokers, setProkers] = useState<any[]>([]);
  const { nav, prokerName } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const prokerData = await getProkerData();
    setProkers(prokerData ?? []);
  }

  return (
    <div>
      {prokers.flat().map((proker: string | any, key) => {
        if (
          proker["name"].toLowerCase().split(" ").join("-") == prokerName &&
          proker
        ) {
          return (
            <section id="prokerDetail">
              <ProkerDetailItem
                key={key}
                name={proker["name"]}
                nav={nav}
                event_format={proker["event_format"]}
                dinas={proker["dinas"]}
                date={proker["date"]}
                description={proker["description"]}
                benefits={proker["benefits"]}
                assets={proker["assets"]}
              />
            </section>
          );
        }
      })}
    </div>
  );
}
