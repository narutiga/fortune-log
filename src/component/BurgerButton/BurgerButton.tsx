import { useState } from "react";
import { Burger } from "@mantine/core";

/** @package */
export const BurgerButton = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <Burger
      opened={opened}
      onClick={() => setOpened((o) => !o)}
      title={title}
    />
  );
};
