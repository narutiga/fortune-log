import { ActionIcon, createStyles } from "@mantine/core";
import { IconPlus } from "@tabler/icons";
import { useRouter } from "next/router";
import { FC } from "react";
import { FortuneForm } from "src/component/FortuneForm";
import { FortuneList } from "src/component/FortuneList";
import { Heatmap } from "src/component/Heatmap";
import { Layout } from "src/component/Layout";

const useStyles = createStyles((theme, _params, getRef) => ({
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

  return (
    <Layout>
      <Heatmap />
      <ActionIcon className={classes.icon} onClick={() => push("/edit")}>
        <IconPlus />
      </ActionIcon>
      <FortuneList />
    </Layout>
  );
};
