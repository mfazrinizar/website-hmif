import { useQuery } from "@tanstack/react-query";
import { supabase } from "../createClient";
import { ColumnMember } from "./profileQueries";

async function signInUser({ email, password }: any) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) throw new Error(error.message);

  const token = data.session.access_token;

  if (token) {
    document.cookie = `supabase_token=${data.session?.access_token}; Max-Age=3600; Path=/; Secure; HttpOnly; SameSite=Strict`;
    return token;
  }

  throw new Error("Token not Found!!!");
}

async function getDataUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

async function deleteImage() {
  const { data, error } = await supabase.storage
    .from("test")
    .remove(["halo/test1.jpg"]);

  if (error || data.length == 0) {
    throw new Error(error?.message);
  }

  return data;
}

async function getDataByName(tableName: any, name: any) {
  try {
    const { data: fetchedData, error } = await supabase
      .from(tableName)
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

function useDataByName(tableName: any, name: any) {
  const { data } = useQuery<ColumnMember[], Error>({
    queryKey: ["memberQuery"],
    queryFn: () =>
      new Promise<ColumnMember[]>((resolve, reject) => {
        getDataByName(tableName, name)
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

async function signOutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

async function deleteData(tableName: any, title: any, name: any) {
  const { data } = await supabase
    .from(tableName)
    .delete()
    .eq(title, name)
    .select("*");

  return {
    success: true,
    message: "Data successfully deleted!",
    deletedRows: data,
  };
}

export {
  signInUser,
  getDataUser,
  signOutUser,
  deleteData,
  useDataByName,
  deleteImage,
};
