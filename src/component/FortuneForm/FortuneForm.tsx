import { FC, FormEvent, useCallback } from "react";
import { useRouter } from "next/router";
import { useMutateFortune } from "src/lib/hook/useMutateFortune";
import { useStore } from "src/lib/store";
import { supabase } from "src/lib/supabase";
import dayjs from "dayjs";
import { Box, Button, createStyles, Group, Textarea } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import "dayjs/locale/ru";

const useStyles = createStyles((theme, _params, getRef) => ({
  button: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.dark[3],
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.yellow[2]
        : theme.colors.yellow[3],
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.yellow[4]
          : theme.colors.yellow[2],
    },
  },
  input: {
    "&:focus": {
      outline: "none",
    },
  },
}));

/** @package */
export const FortuneForm: FC = () => {
  const { classes } = useStyles();
  const { push } = useRouter();
  const { editingFortune } = useStore();
  const { createFortuneMutation, updateFortuneMutation } = useMutateFortune();

  const form = useForm({
    initialValues: {
      date: dayjs(editingFortune.date).toDate(),
      title: editingFortune.title,
    },
  });

  const handleSubmitFortune = () => {
    if (editingFortune.id === "") {
      createFortuneMutation.mutate({
        date: dayjs(form.values.date).format("YYYY-MM-DD"),
        title: form.values.title,
        user_id: supabase.auth.user()?.id,
      });
      form.reset();
    } else {
      updateFortuneMutation.mutate({
        id: editingFortune.id,
        date: dayjs(form.values.date).format("YYYY-MM-DD"),
        title: form.values.title,
      });
      form.reset();
      push("/log");
    }
  };

  return (
    <Box sx={{ maxWidth: 300, margin: 100 }} mx="auto" mt="0">
      <form onSubmit={form.onSubmit(handleSubmitFortune)}>
        <DatePicker
          className="mb-4 w-40 focus:outline-none"
          required
          locale="ja"
          size="md"
          maxDate={new Date()}
          value={form.values.date}
          onChange={(date) =>
            date === null ? "" : form.setFieldValue("date", date)
          }
          inputFormat="YYYY-MM-DD"
        />
        <Textarea
          className={classes.input}
          required
          placeholder="Something good happend ?"
          autosize
          minRows={4}
          size="md"
          {...form.getInputProps("title")}
        />
        <Group position="right" mt="md">
          <Button type="submit" className={classes.button}>
            {editingFortune.id === "" ? "log" : "update"}
          </Button>
        </Group>
      </form>
    </Box>
  );
};
