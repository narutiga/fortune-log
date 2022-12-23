import { FC, useCallback } from "react";
import { useRouter } from "next/router";
import { Layout } from "src/component/Layout";
import { Heatmap } from "src/component/Heatmap";
import { FortuneList } from "src/component/FortuneList";
import { useStore } from "src/lib/store";
import { ActionIcon, createStyles } from "@mantine/core";
import { IconPlus } from "@tabler/icons";
import { useQueryMyFortunes } from "src/lib/hook/useQueryFortunes";
import { Fortune } from "src/lib/type";

const useStyles = createStyles((theme, _params) => ({
  icon: {
    height: "40px",
    width: "40px",
    marginLeft: "auto",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.yellow[2]
        : theme.colors.yellow[5],
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.yellow[0],
    borderRadius: "50px",
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.yellow[4]
          : theme.colors.yellow[3],
    },
  },
}));

/** @package */
export const Dashboard: FC = () => {
  const { classes } = useStyles();
  const { push } = useRouter();
  const reset = useStore((state) => state.resetEditingFortune);
  const createFortune = useCallback(() => {
    reset();
    push("/edit");
  }, []);
  const { data: fortunes, status } = useQueryMyFortunes();

  return (
    <Layout>
      <Heatmap />
      <div className="mr-auto ml-auto w-full md:w-4/5 max-w-lg">
        <ActionIcon className={classes.icon} onClick={() => createFortune()}>
          <IconPlus />
        </ActionIcon>
      </div>
      <FortuneList fortunes={fortunes} status={status} />
    </Layout>
  );
};
