import { Followers, User } from "../Types";
import supabase from "../config/supabaseClient";

export const getFollowers = async (myId: string): Promise<Followers[]> => {
  const { data: followers } = await supabase
    .from("followers")
    .select("*")
    .eq("from", myId);
  return followers as Followers[];
};

export const getCurrentUser = async () => {
  const { data } = await supabase.auth.getSession();
  return data.session?.user.identities![0].id;
};

export const getAllUser = async (): Promise<User[]> => {
  const { data: allUser } = await supabase.from("profiles").select("*");
  return allUser as User[];
};

export const addFollower = async (from: string, to: string): Promise<void> => {
  await supabase
    .from("followers")
    .upsert([{ from: from, to: to }])
    .select();
};

export const deleteFollower = async (
  from: string,
  to: string
): Promise<void> => {
  await supabase.from("followers").delete().eq("from", from).eq("to", to);
};
