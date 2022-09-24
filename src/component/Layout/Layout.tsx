import { FC, ReactNode, useCallback } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { supabase } from "src/lib/supabase";
import { IconLogout } from "@tabler/icons";
import { useStore } from "src/lib/store";

type Title = {
  title: string;
  children: ReactNode;
};

/** @package */
export const Layout: FC<Title> = ({ title, children }) => {
  const queryClient = useQueryClient();
  const reset = useStore((state) => state.resetEditingFortune);
  const { pathname } = useRouter();
  const signOut = useCallback(() => {
    supabase.auth.signOut();
    queryClient.removeQueries("fortunes");
    queryClient.removeQueries("value");
    reset();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-mono text-zinc-800">
      <Head>
        <title>{title}</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>⭐️</text></svg>"
        ></link>
      </Head>
      <header className="w-screen h-32 p-4 bg-zinc-800">
        <Link href="/dashboard">
          <a href="replace">
            <h1 className="mb-10 font-medium text-2xl text-zinc-300">
              <span>⭐️</span>
              fortune log
            </h1>
          </a>
        </Link>
        <nav className="flex justify-end ">
          {pathname === "/dashboard" ? (
            <Link href="/log">
              <a
                href="replace"
                className="ml-8 text-zinc-300 hover:text-yellow-200"
              >
                log
              </a>
            </Link>
          ) : (
            <Link href="/dashboard">
              <a href="replace" className="text-zinc-300 hover:text-yellow-200">
                home
              </a>
            </Link>
          )}
          <IconLogout
            className="ml-8 mr-2 h-6 w-6 cursor-pointer text-yellow-300"
            onClick={signOut}
          />
        </nav>
      </header>
      <main className="flex w-screen flex-1 flex-col items-center bg-zinc-900">
        <div className="pt-8 w-4/5 items-center bg-zinc-900">{children}</div>
      </main>
      <footer className="flex h-12 w-full items-center justify-center bg-zinc-800">
        <p className="text-gray-300">&copy; kino</p>
      </footer>
    </div>
  );
};
