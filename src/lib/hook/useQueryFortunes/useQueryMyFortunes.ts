import { useQuery } from "react-query";
import { supabase } from "src/lib/supabase";
import { Fortune } from "src/lib/type";

/** @package */
export const useQueryMyFortunes = () => {
  const getFortunes = async () => {
    const { data, error } = await supabase
      .from("fortunes")
      .select("*")
      .eq("user_id", supabase.auth.user()?.id)
      .order("date", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(10);

    if (error) {
      throw new Error(error.message);
    }
    return data;
  };
  return useQuery<Fortune[], Error>({
    queryKey: ["fortunes"],
    queryFn: getFortunes,
    staleTime: Infinity,
  });
};
