/** @package */
export type Fortune = {
  id: string;
  created_at: string;
  date: string;
  title: string;
  user_id: string | undefined;
};

/** @package */
export type EditingFortune = Omit<Fortune, "created_at" | "user_id">;
