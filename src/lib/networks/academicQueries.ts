import { supabase } from "@/lib/createClient";
import { Database } from "database.types";

export async function fetchAcademicData(
  tableName: keyof Database["public"]["Tables"],
) {
  try {
    const { data: fetchedData, error } = await supabase
      .from(tableName)
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Error fetching data:", error);
      return [];
    }

    return fetchedData;
  } catch (err) {
    console.error("Error in fetchAcademicData:", err);
    return [];
  }
}

export async function fetchAcademicDetails(
  mainTable: keyof Database["public"]["Tables"],
  detailsTable: keyof Database["public"]["Tables"],
  detailsId: string,
) {
  try {
    const detailsFields = getDetailsFields(detailsTable);

    const { data: fetchedData, error } = await supabase
      .from(mainTable)
      .select(
        `
          title,
          category,
          date,
          description,
          img,
          type,
          details_id,
          details:${detailsTable} (
            ${detailsFields}
          )
        `,
      )
      .eq("details_id", detailsId)
      .maybeSingle();

    if (error) {
      console.error("Error fetching academic details:", error);
      return null;
    }

    return fetchedData;
  } catch (err) {
    console.error("Error in fetchAcademicDetails:", err);
    return null;
  }
}

function getDetailsFields(detailsTable: string): string {
  switch (detailsTable) {
    case "academic_scholarship_details":
      return `
        img_details,
        open_register,
        category,
        available_to,
        presented_by,
        description_details
      `;

    case "academic_competition_details":
      return `
        img_details,
        open_register,
        submission,
        announcement,
        presented_by,
        description_details
      `;

    case "academic_seminar_details":
      return `
        img_details,
        date,
        time,
        media,
        open_to,
        description_details
      `;

    default:
      throw new Error(`Unknown details table: ${detailsTable}`);
  }
}
