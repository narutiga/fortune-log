import { FC, ReactNode } from "react";
import { Group } from "@mantine/core";
import { HeaderMenue } from "src/component/Layout/HeaderMenue";
import { Footer } from "src/component/Layout/Footer";

/** @package */
export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Group className="flex min-h-screen flex-col items-center justify-center">
      {/* <header className="w-screen h-32 p-4"> */}
      <HeaderMenue />
      <main className="flex w-screen flex-1 flex-col items-center">
        <div className="pt-8 w-4/5 items-center">{children}</div>
      </main>
      <Footer />
    </Group>
  );
};
