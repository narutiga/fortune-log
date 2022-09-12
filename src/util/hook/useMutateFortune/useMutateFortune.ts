import { useQueryClient, useMutation } from "react-query";
import useStore from "src/util/store/store";
import { supabase } from "src/util/supabase";
import { Fortune } from "src/util/type";

/** @package */
export const useMutateFortune = () => {
  const queryClient = useQueryClient();
  const reset = useStore((state) => state.resetEditedFortune);

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
        if (previousFortunes) {
          queryClient.setQueryData("fortunes", [res[0], ...previousFortunes]);
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
    async (id: string) => {
      const { data, error } = await supabase
        .from("fortunes")
        .delete()
        .eq("id", id);
      if (error) throw new Error(error.message);
      return data;
    },
    {
      onSuccess: (_, variables) => {
        const previousFortunes = queryClient.getQueryData<Fortune[]>([
          "fortunes",
        ]);
        if (previousFortunes) {
          queryClient.setQueryData(
            ["fortunes"],
            previousFortunes.filter((fortune) => fortune.id !== variables)
          );
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
