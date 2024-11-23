import { useQuery } from "@tanstack/react-query";
import { supabase } from "../createClient";

interface ColumnProker {
  name: string | null;
  date: string | null;
  event_format: string | null;
  description: string | null;
  dinas: string | null;
  benefits: any | null;
  assets: any | null;
}

async function setProkerData(data: any) {
  const { error } = await supabase.from("proker").insert(data);
  if (error) console.log(error.message);
}

export async function getProkerData() {
  try {
    const { data: fetchedData, error } = await supabase
      .from("proker")
      .select("*");

    if (error) {
      console.error("Error fetching data:", error);
    } else {
      // console.log(fetchedData);
      return fetchedData;
    }
  } catch (err) {
    console.error("Error in fetchData:", err);
  }
}

function useProkerData() {
  const { data } = useQuery<ColumnProker[], Error>({
    queryKey: ["memberQuery"],
    queryFn: () =>
      new Promise<ColumnProker[]>((resolve, reject) => {
        getProkerData()
          .then((res) => {
            if (res) {
              resolve(res);
            } else {
              reject("No data found");
            }
          })
          .catch((err) => {
            reject(err);
          });
      }),
  });

  return data;
}

export { setProkerData, useProkerData };
export type { ColumnProker };
