import Head from "next/head";
import Link from "next/link";
import { FC, ReactNode } from "react";
import { useQueryClient } from "react-query";
import { supabase } from "src/util/supabase";
import { IconLogout } from "@tabler/icons";

type Title = {
  title: string;
  children: ReactNode;
};

/** @package */
export const Layout: FC<Title> = ({ title, children }) => {
  const queryClient = useQueryClient();
  const signOut = () => {
    supabase.auth.signOut();
    queryClient.removeQueries("fortunes");
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-mono text-zinc-800">
      <Head>
        <title>{title}</title>
      </Head>
      <header className="w-screen h-32 p-4 bg-zinc-800">
        <h1 className="mb-10 font-medium text-2xl text-zinc-300">
          <span>⭐️</span>
          fortune log
        </h1>
        <nav className="flex justify-end ">
          <Link href="/dashboard">
            <a href="replace" className="text-zinc-300">
              home
            </a>
          </Link>
          <Link href="/log">
            <a href="replace" className="ml-8 text-zinc-300">
              log
            </a>
          </Link>
          <IconLogout
            className="ml-8 mr-2 h-6 w-6 cursor-pointer text-yellow-300"
            onClick={signOut}
          />
        </nav>
      </header>
      <main className="flex w-screen flex-1 flex-col items-center justify-center bg-zinc-900">
        <div className="p-8 flex w-4/5 flex-1 flex-col items-center bg-zinc-900">
          {children}
        </div>
      </main>
      <footer className="flex h-12 w-full items-center justify-center bg-zinc-800">
        <p className="text-gray-300">&copy; kino</p>
      </footer>
    </div>
  );
};
