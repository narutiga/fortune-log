import Head from "next/head";
import { FC } from "react";
import { useRouter } from "next/router";
import { FortuneForm } from "src/component/FortuneForm";
import { IconArrowBack } from "@tabler/icons";
import { ActionIcon } from "@mantine/core";
import { Layout } from "src/component/Layout";

/** @pakage */
export const Edit: FC = () => {
  const { push } = useRouter();
  const handleBack = () => {
    push("/log");
  };

  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center justify-center font-mono">
        <main className="flex w-screen flex-1 flex-col items-center">
          <div className="w-4/5 items-center">
            <div className="flex justify-end">
              {/* <ActionIcon
                onClick={handleBack}
                size="lg"
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[7]
                      : theme.colors.gray[0],
                  color:
                    theme.colorScheme === "dark"
                      ? theme.colors.yellow[1]
                      : theme.colors.yellow[6],
                })}
              >
                <IconArrowBack size={20} />
              </ActionIcon> */}
            </div>
            <FortuneForm />
          </div>
        </main>
      </div>
    </Layout>
  );
};
