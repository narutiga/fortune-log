import {
  ActionIcon,
  Burger,
  Container,
  createStyles,
  Header,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { IconHome, IconList, IconLogout } from "@tabler/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, FC, SetStateAction, useCallback } from "react";
import { useQueryClient } from "react-query";
import { ToggleColorScheme } from "src/component/ToggleColorScheme";
import { useStore } from "src/lib/store";
import { supabase } from "src/lib/supabase";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    color:
      theme.colorScheme === "dark"
        ? theme.colors.yellow[1]
        : theme.colors.yellow[5],
  },
  text: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.dark[2],
  },
  icon: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    color:
      theme.colorScheme === "dark"
        ? theme.colors.yellow[1]
        : theme.colors.yellow[6],
    alignSelf: "center",
    marginRight: 10,
    marginLeft: 4,
  },
}));

type Props = {
  opened: boolean;
  onClick: Dispatch<SetStateAction<boolean>>;
  title: string;
};

/** @package */
export const HeaderMenue: FC<Props> = (props) => {
  const queryClient = useQueryClient();
  const reset = useStore((state) => state.resetEditingFortune);
  const { pathname } = useRouter();
  const signOut = useCallback(() => {
    supabase.auth.signOut();
    queryClient.removeQueries("fortunes");
    queryClient.removeQueries("value");
    reset();
  }, []);
  const { classes } = useStyles();

  return (
    <Header height={80} className="px-0 w-full sticky top-0 z-50">
      <Container size={3000} px={20} className={classes.header}>
        <Burger
          opened={props.opened}
          onClick={() => props.onClick((o) => !o)}
          title={props.title}
          size="sm"
          className="md:hidden"
        />
        <Link href="/dashboard">
          <a href="replace" className="no-underline">
            <h1 className="flex items-center my-auto ml-0 md:ml-4 font-semibold text-3xl md:text-4xl">
              <span className="mr-1 md:mr-4">⭐️</span>
              <Text className={classes.text}>fortune log</Text>
            </h1>
          </a>
        </Link>
        <nav className="flex justify-end h-10">
          {/* {pathname === "/dashboard" ? (
            <Link href="/log">
              <a href="replace" className="flex justify-center">
                <ThemeIcon className={classes.icon}>
                  <IconList />
                </ThemeIcon>
              </a>
            </Link>
          ) : (
            <Link href="/dashboard">
              <a href="replace" className="flex justify-center">
                <ThemeIcon className={classes.icon}>
                  <IconHome />
                </ThemeIcon>
              </a>
            </Link>
          )}
          <ActionIcon onClick={signOut} className={classes.icon}>
            <IconLogout />
          </ActionIcon> */}
          <ToggleColorScheme />
        </nav>
      </Container>
    </Header>
  );
};
