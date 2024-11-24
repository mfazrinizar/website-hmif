import { supabase } from "@/lib/createClient";
import { useQuery } from "@tanstack/react-query";

interface ColumnMember {
  name: string | null;
  instagram: string | null;
  email: string | null;
  position_id: string | null;
  division_id: string | null;
  assets: string | null;
}

async function getMemberData() {
  try {
    const { data: fetchedData, error } = await supabase
      .from("member")
      .select("*");

    if (error) {
      return null;
    }

    if (!fetchedData) {
      return null;
    }

    return fetchedData;
  } catch (err) {
    return null;
  }
}

async function getMemberDataByName(name: any) {
  try {
    const { data: fetchedData, error } = await supabase
      .from("member")
      .select("*")
      .eq("name", name);

    if (error) {
      return null;
    }

    if (!fetchedData) {
      return null;
    }

    return fetchedData;
  } catch (err) {
    return null;
  }
}

async function deleteMemberData(title: any, name: any) {
  const { data } = await supabase
    .from("member")
    .delete()
    .eq(title, name)
    .select("*");

  return {
    success: true,
    message: "Data successfully deleted!",
    deletedRows: data,
  };
}

async function updateMemberData(item: any) {
  console.log(item);

  const { data, error } = await supabase
    .from("member")
    .update({ instagram: item.instagram })
    .eq("name", "widys");

  return { data, error };
}

function useMemberData() {
  const { data } = useQuery<ColumnMember[], Error>({
    queryKey: ["memberQuery"],
    queryFn: () =>
      new Promise<ColumnMember[]>((resolve, reject) => {
        getMemberData()
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

async function updateImage() {}

async function setMemberData(data: any) {
  const { error } = await supabase.from("member").insert(data);
  if (error) console.log(error.message);
}

export { useMemberData, setMemberData, deleteMemberData, updateMemberData };
export type { ColumnMember };
