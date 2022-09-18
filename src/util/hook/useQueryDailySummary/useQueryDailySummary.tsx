import { useQuery } from "react-query";
import { supabase } from "src/util/supabase";

type DailySummary = {
  date: string;
  coalesce: number;
};

/** @package */
export const useQueryDailySummary = () => {
  const getDailySummary = async () => {
    const { data, error } = await supabase.from("value").select("*");

    if (error) {
      throw new Error(error.message);
    }
    return data;
  };
  return useQuery<DailySummary[], Error>({
    queryKey: ["value"],
    queryFn: getDailySummary,
    staleTime: Infinity,
  });
};
