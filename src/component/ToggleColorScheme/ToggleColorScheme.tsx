import { ActionIcon, Group, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons";

/** @package */
export const ToggleColorScheme = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group>
      <ActionIcon
        onClick={() => toggleColorScheme()}
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
        {colorScheme === "dark" ? (
          <IconSun size={20} />
        ) : (
          <IconMoon size={20} />
        )}
      </ActionIcon>
    </Group>
  );
};
