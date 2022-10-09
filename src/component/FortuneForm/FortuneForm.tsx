import { FC, FormEvent, useCallback } from "react";
import { useRouter } from "next/router";
import { useMutateFortune } from "src/lib/hook/useMutateFortune";
import { toStringDate, useStore } from "src/lib/store";
import { supabase } from "src/lib/supabase";

const today = toStringDate(new Date());

/** @package */
export const FortuneForm: FC = () => {
  const { push } = useRouter();
  const { editingFortune } = useStore();
  const update = useStore((state) => state.updateEditingFortune);
  const { createFortuneMutation, updateFortuneMutation } = useMutateFortune();
  const submitHandler = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (editingFortune.title === "") {
        alert("内容を入力してください");
        return;
      }
      if (editingFortune.id === "")
        createFortuneMutation.mutate({
          date: editingFortune.date,
          title: editingFortune.title,
          user_id: supabase.auth.user()?.id,
        });
      else {
        updateFortuneMutation.mutate({
          id: editingFortune.id,
          date: editingFortune.date,
          title: editingFortune.title,
        });
        push("/log");
      }
    },
    [editingFortune]
  );

  return (
    <form onSubmit={submitHandler}>
      <input
        type="date"
        max={today}
        className="my-2 rounded border text-zinc-300 bg-zinc-800 border-zinc-300 px-3 py-2 text-sm placeholder-zinc-500 focus:border-yellow-400 focus:outline-none"
        value={editingFortune.date}
        onChange={(e) => update({ ...editingFortune, date: e.target.value })}
      />
      <textarea
        cols={50}
        rows={5}
        className="my-2 w-full rounded bg-zinc-800 border border-zinc-300 px-3 py-2 text-base text-zinc-300 placeholder-zinc-400 focus:border-yellow-400 focus:outline-none"
        placeholder="Something good happend ?"
        value={editingFortune.title}
        onChange={(e) => update({ ...editingFortune, title: e.target.value })}
      />
      <div className="my-2 flex justify-end">
        <button
          type="submit"
          className="ml-2 mb-6 rounded-full bg-yellow-300 px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-yellow-200"
        >
          {editingFortune.id === "" ? "log" : "update"}
        </button>
      </div>
    </form>
  );
};
