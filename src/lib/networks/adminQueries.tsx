import { supabase } from "../createClient";

async function signInUser({ email, password }: any) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) return false;

  if (data) return true;
}

async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

export { signInUser, getUser };
