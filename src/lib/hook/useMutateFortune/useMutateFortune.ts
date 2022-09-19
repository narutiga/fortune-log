import { useQueryClient, useMutation } from "react-query";
import useStore from "src/lib/store/store";
import { supabase } from "src/lib/supabase";
import { Fortune } from "src/lib/type";

type Value = {
  date: string;
  coalesce: number;
};

/** @package */
export const useMutateFortune = () => {
  const queryClient = useQueryClient();
  const reset = useStore((state) => state.resetEditingFortune);

  const createFortuneMutation = useMutation(
    async (fortune: Omit<Fortune, "id" | "created_at">) => {
      const { data, error } = await supabase.from("fortunes").insert(fortune);
      if (error) throw new Error(error.message);
      return data;
    },
    {
      onSuccess: (res) => {
        const previousFortunes = queryClient.getQueryData<Fortune[]>([
          "fortunes",
        ]);
        const previousValues = queryClient.getQueryData<Value[]>(["value"]);
        if (previousFortunes) {
          queryClient.setQueryData(
            ["fortunes"],
            [...previousFortunes, res[0]].sort((a, b) =>
              b.date.localeCompare(a.date)
            )
          );
        }
        if (previousValues) {
          const newValues = previousValues.map((value) =>
            value.date === res[0].date
              ? {
                  ...value,
                  coalesce: ++value.coalesce,
                }
              : value
          );
          queryClient.setQueryData(["value"], newValues);
        }
        reset();
      },
      onError: (err: any) => {
        alert(err.message);
        reset();
      },
    }
  );

  const deleteFortuneMutation = useMutation(
    async (fortune: Omit<Fortune, "created_at" | "title" | "user_id">) => {
      const { data, error } = await supabase
        .from("fortunes")
        .delete()
        .eq("id", fortune.id);
      if (error) throw new Error(error.message);
      return data;
    },
    {
      onSuccess: (_, variables) => {
        const previousFortunes = queryClient.getQueryData<Fortune[]>([
          "fortunes",
        ]);
        const previousValues = queryClient.getQueryData<Value[]>(["value"]);
        if (previousFortunes) {
          queryClient.setQueryData(
            ["fortunes"],
            previousFortunes.filter((fortune) => fortune.id !== variables.id)
          );
        }
        if (previousValues) {
          const newValues = previousValues.map((value) =>
            value.date === variables.date
              ? {
                  ...value,
                  coalesce: --value.coalesce,
                }
              : value
          );
          queryClient.setQueryData(["value"], newValues);
        }
        reset();
      },
      onError: (err: any) => {
        alert(err.message);
        reset();
      },
    }
  );

  return { deleteFortuneMutation, createFortuneMutation };
};
