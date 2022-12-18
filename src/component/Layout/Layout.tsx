import { FC, ReactNode, useState } from "react";
import { Group } from "@mantine/core";
import { HeaderMenue } from "src/component/Layout/HeaderMenue";
import { Footer } from "src/component/Layout/Footer";
import { Navigation } from "src/component/Navigation";

/** @package */
export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <Group className="flex min-h-screen flex-col">
      <HeaderMenue opened={opened} onClick={setOpened} title={title} />
      <div className="flex-1 flex-col w-screen  items-center">
        <div className="flex">
          <Navigation opened={opened} onClick={setOpened} />
          <div
            className={`mr-auto ml-auto pt-8 w-4/5 items-center ${
              opened ? "hidden" : "block"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </Group>
  );
};
