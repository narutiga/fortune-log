import { FC, useCallback } from "react";
import { useRouter } from "next/router";
import { useMutateFortune } from "src/lib/hook/useMutateFortune";
import { useStore } from "src/lib/store";
import { Fortune } from "src/lib/type";
import { supabase } from "src/lib/supabase";
import { IconPencil, IconTrash } from "@tabler/icons";
import { ActionIcon, createStyles, Text } from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => ({
  text: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.dark[4],
  },
  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.yellow[2]
        : theme.colors.yellow[5],
    marginLeft: 8,
  },
}));

/** @package */
export const FortuneItem: FC<Omit<Fortune, "created_at">> = ({
  id,
  date,
  title,
  user_id,
}) => {
  const { classes } = useStyles();
  const { push } = useRouter();
  const { editingFortune } = useStore();
  const { deleteFortuneMutation } = useMutateFortune();
  const update = useStore((state) => state.updateEditingFortune);
  const userId = supabase.auth.user()?.id;

  const editFortune = useCallback(() => {
    update({ ...editingFortune, id, date, title });
    push("/edit");
  }, []);

  return (
    <li className="my-3 mb-6 w-full items-center">
      <div className="flex mb-2">
        <span className="">⭐️&nbsp;</span>
        <Text className={classes.text}>{title}</Text>
      </div>
      <div className="flex justify-end">
        <Text className={classes.text}>{date}&nbsp;</Text>
        {userId === user_id ? (
          <>
            <ActionIcon className={classes.icon} onClick={() => editFortune()}>
              <IconPencil />
            </ActionIcon>
            <ActionIcon
              className={classes.icon}
              onClick={() => {
                deleteFortuneMutation.mutate({
                  id,
                  date,
                });
              }}
            >
              <IconTrash />
            </ActionIcon>
          </>
        ) : null}
      </div>
    </li>
  );
};
