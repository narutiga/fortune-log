import { FC } from "react";
import { createStyles, Container } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  footer: {
    width: "100%",
    marginTop: "20px",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
}));

/** @package */
export const Footer: FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <p className="text-center">&copy; kino</p>
      </Container>
    </div>
  );
};
