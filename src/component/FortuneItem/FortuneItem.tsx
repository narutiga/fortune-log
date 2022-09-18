import { FC } from "react";
import { useMutateFortune } from "src/lib/hook/useMutateFortune";
import { IconTrash } from "@tabler/icons";
import { Fortune } from "src/lib/type";

/** @package */
export const FortuneItem: FC<Omit<Fortune, "created_at" | "user_id">> = ({
  id,
  date,
  title,
}) => {
  const { deleteFortuneMutation } = useMutateFortune();
  return (
    <li className="my-3 mb-4 w-full items-center">
      <div className="flex">
        <span className="">⭐️&nbsp;</span>
        <p className="text-zinc-300">{title}</p>
      </div>
      <div className="flex justify-end">
        <p className="text-zinc-300">{date}&nbsp;</p>
        <IconTrash
          className="h-5 w-5 cursor-pointer text-yellow-300"
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
