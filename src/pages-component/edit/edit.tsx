import Head from "next/head";
import { FC } from "react";
import { useRouter } from "next/router";
import { FortuneForm } from "src/component/FortuneForm";
import { IconArrowBack } from "@tabler/icons";

/** @pakage */
export const Edit: FC = () => {
  const { push } = useRouter();
  const handleBack = () => {
    push("/log");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-mono text-zinc-800">
      <Head>
        <title>edit</title>
      </Head>
      <main className="flex w-screen flex-1 flex-col items-center bg-zinc-900">
        <div className="pt-32 w-4/5 items-center bg-zinc-900">
          <div className="flex justify-end">
            <IconArrowBack
              className="h-8 w-8 m-2 cursor-pointer text-yellow-300"
              onClick={handleBack}
            />
          </div>
          <FortuneForm />
        </div>
      </main>
    </div>
  );
};
