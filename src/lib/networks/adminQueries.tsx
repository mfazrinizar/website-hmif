import { supabase } from "../createClient";

async function signInUser({ email, password }: any) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) throw new Error(error.message);

  if (data) return true;
}

async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

async function signOutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export { signInUser, getUser, signOutUser };
