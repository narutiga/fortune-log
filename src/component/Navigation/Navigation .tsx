import { createStyles, Text, ThemeIcon } from "@mantine/core";
import { IconHome, IconList, IconUser } from "@tabler/icons";
import Link from "next/link";
import { Dispatch, FC, SetStateAction } from "react";

const useStyles = createStyles((theme) => ({
  text: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.dark[3],
  },
  icon: {
    marginRight: "16px",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.yellow[1]
        : theme.colors.yellow[5],
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    alignSelf: "center",
  },
}));

type Props = {
  opened: boolean;
  onClick: Dispatch<SetStateAction<boolean>>;
};

/** @package */
export const Navigation: FC<Props> = (props) => {
  const { classes } = useStyles();
  return (
    <div
      className={`w-screen md:w-64 ${
        props.opened ? "block" : "hidden"
      } md:block `}
    >
      <ul className="flex w-max flex-1 flex-col mt-16">
        <li className="flex mb-8">
          <ThemeIcon className={classes.icon}>
            <IconUser />
          </ThemeIcon>
          <Text className={classes.text}>Account（準備中）</Text>
        </li>
        <li className="flex mb-8">
          <button
            onClick={() => props.onClick(false)}
            className="bg-transparent p-0 appearance-none outline-none focus:outline-none border-none"
          >
            <Link href="/dashboard">
              <a href="replace" className=" no-underline flex">
                <ThemeIcon className={classes.icon}>
                  <IconHome />
                </ThemeIcon>
                <Text className={classes.text}>Home</Text>
              </a>
            </Link>
          </button>
        </li>
        <li className="flex">
          <ThemeIcon className={classes.icon}>
            <IconList />
          </ThemeIcon>
          <Text className={classes.text}>TimeLine（準備中）</Text>
        </li>
      </ul>
    </div>
  );
};
