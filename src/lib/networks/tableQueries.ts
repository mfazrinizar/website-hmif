import { supabase } from "../createClient";

async function getTableStructureWithFunction(tableName: string) {
  const { data, error } = await supabase.rpc("get_table_structure", {
    table_name: tableName as string,
  });

  if (error) {
    console.error("Error:", error);
  } else {
    return data;
  }
}

export { getTableStructureWithFunction };
