import { supabase } from "@/lib/createClient";
import { useQuery } from "@tanstack/react-query";

interface ColumnMember {
  name: string | null;
  instagram: string | null;
  email: string | null;
  position_id: string | null;
  division_id: string | null;
}

async function getMemberData() {
  try {
    const { data: fetchedData, error } = await supabase
      .from("member")
      .select("name, email, instagram ,position_id, division_id");

    if (error) {
      console.error("Error fetching member data:", error);
      return null;
    }

    if (!fetchedData) {
      console.warn("No member data found.");
      return null;
    }

    return fetchedData;
  } catch (err) {
    console.error("Unexpected error:", err);
    return null;
  }
}

function useMemberData() {
  const { data, error, isLoading } = useQuery<ColumnMember[], Error>({
    queryKey: ["memberQuery"],
    queryFn: () =>
      new Promise<ColumnMember[]>((resolve, reject) => {
        getMemberData()
          .then((res) => {
            // console.log(res);
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

export { useMemberData };
export type { ColumnMember };
