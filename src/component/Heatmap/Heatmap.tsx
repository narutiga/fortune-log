import { useQuery } from "react-query";
import { Spinner } from "src/component/Spinner";
import { supabase } from "src/util/supabase";

type Value = {
  date: string;
  coalesce: number;
};

const useQueryValue = () => {
  const getValue = async () => {
    const { data, error } = await supabase.from("value").select("*");

    if (error) {
      throw new Error(error.message);
    }
    return data;
  };
  return useQuery<Value[], Error>({
    queryKey: ["value"],
    queryFn: getValue,
    staleTime: Infinity,
  });
};

/** @package */
export const Heatmap = () => {
  const { data: values, status } = useQueryValue();
  if (status === "loading") return <Spinner />;
  if (status === "error") return <p>{"Error"}</p>;
  if (values === undefined) return <div></div>;
  return (
    <ul className="flex flex-col flex-wrap content-center h-22 md:h-26">
      {values.map((value) => (
        <li
          key={value.date}
          className={` ml-0.5 md:ml-1 mb-0.5 md:mb-1 w-2.5 md:w-3 h-2.5 md;h-3 rounded-sm ${
            value.coalesce === 0
              ? "bg-zinc-600"
              : value.coalesce < 3
              ? "bg-yellow-100"
              : value.coalesce < 5
              ? "bg-yellow-300"
              : "bg-yellow-500"
          }`}
        ></li>
      ))}
    </ul>
  );
};
