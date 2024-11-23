import ProkerDetailItem from "@/components/Proker/ProkerDetailItem";
import { supabase } from "@/lib/createClient";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProkerDetail() {
  const [prokers, setProkers] = useState<any[]>([]);
  const { nav, prokerName } = useParams();

  useEffect(() => {
    // axios.get(`/data/proker.json`).then((res) => {
    //   setProkers(res.data.data);
    // });
    getData();
  }, []);

  async function getData() {
    try {
      const { data: fetchedData, error } = await supabase
        .from("proker")
        .select("*");

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        console.log(fetchedData);
        setProkers(fetchedData);
      }
    } catch (err) {
      console.error("Error in fetchData:", err);
    }
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
