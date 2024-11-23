import { supabase } from "../createClient";

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

async function signOutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export { signInUser, getDataUser, signOutUser };
