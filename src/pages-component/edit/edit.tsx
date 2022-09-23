import Head from "next/head";
import { FC } from "react";
import { FortuneForm } from "src/component/FortuneForm";

/** @pakage */
export const Edit: FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-mono text-zinc-800">
      <Head>
        <title>edit</title>
      </Head>
      <main className="flex w-screen flex-1 flex-col items-center justify-center bg-zinc-800">
        <FortuneForm />
      </main>
    </div>
  );
};
