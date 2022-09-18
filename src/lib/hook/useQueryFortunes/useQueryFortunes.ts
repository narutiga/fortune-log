import { useQuery } from "react-query";
import { supabase } from "src/lib/supabase";
import { Fortune } from "src/lib/type";

/** @package */
export const useQueryFortunes = () => {
  const getFortunes = async () => {
    const { data, error } = await supabase
      .from("fortunes")
      .select("*")
      .order("date", { ascending: false });

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
