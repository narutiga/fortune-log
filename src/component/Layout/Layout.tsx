import { FC, ReactNode, useState } from "react";
import { Group } from "@mantine/core";
import { HeaderMenue } from "src/component/Layout/HeaderMenue";
import { Footer } from "src/component/Layout/Footer";

/** @package */
export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Group className="flex min-h-screen flex-col">
      <HeaderMenue />
      <div className="flex-1 flex-col w-screen  items-center">{children}</div>
      <Footer />
    </Group>
  );
};
