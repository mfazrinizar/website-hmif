import { supabase } from "@/lib/createClient";
import { Database } from "database.types";

export async function getData(table: keyof Database["public"]["Tables"]) {
  try {
    const { data: fetchedData, error } = await supabase
      .from(table)
      .select(
        `
          name, 
          instagram, 
          email,
          position_id,
          division_id
        `,
      )
      .maybeSingle();

    if (error) {
      console.error("Error fetching academic details:", error);
      return null;
    }

    return fetchedData;
  } catch (err) {
    return null;
  }
}
