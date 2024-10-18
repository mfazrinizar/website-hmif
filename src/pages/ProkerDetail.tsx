import ProkerDetailItem from "@/components/Proker/ProkerDetailItem";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProkerDetail() {
  const [prokers, setProkers] = useState([]);
  const { nav, prokerName } = useParams();

  useEffect(() => {
    axios.get(`/data/proker.json`).then((res) => {
      setProkers(res.data.data);
    });
  }, []);

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
                eventFormat={proker["eventFormat"]}
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
