import { supabase } from "../createClient";

async function setProkerData(data: any) {
  const { error } = await supabase.from("proker").insert(data);
  if (error) console.log(error.message);
}

export { setProkerData };
