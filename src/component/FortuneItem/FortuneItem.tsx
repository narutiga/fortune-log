import { FC, useCallback } from "react";
import { useRouter } from "next/router";
import { useMutateFortune } from "src/lib/hook/useMutateFortune";
import { useStore } from "src/lib/store";
import { Fortune } from "src/lib/type";
import { IconPencil, IconTrash } from "@tabler/icons";

/** @package */
export const FortuneItem: FC<Omit<Fortune, "created_at" | "user_id">> = ({
  id,
  date,
  title,
}) => {
  const { push } = useRouter();
  const { editingFortune } = useStore();
  const { deleteFortuneMutation } = useMutateFortune();
  const update = useStore((state) => state.updateEditingFortune);

  const handleClick = useCallback(
    (fortune: Omit<Fortune, "created_at" | "user_id">) => {
      update({ ...editingFortune, id, date, title });
      push("/edit");
    },
    []
  );

  return (
    <li className="my-3 mb-4 w-full items-center">
      <div className="flex">
        <span className="">⭐️&nbsp;</span>
        <p className="text-zinc-300">{title}</p>
      </div>
      <div className="flex justify-end">
        <p className="m-2 text-zinc-300">{date}&nbsp;</p>
        <IconPencil
          className="h-5 w-5 m-2 cursor-pointer text-yellow-300"
          onClick={() => handleClick({ id, date, title })}
        />
        <IconTrash
          className="h-5 w-5 m-2 cursor-pointer text-yellow-300"
          onClick={() => {
            deleteFortuneMutation.mutate({
              id,
              date,
            });
          }}
        />
      </div>
    </li>
  );
};
