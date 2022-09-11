/** @package */
export type Fortune = {
  id: string;
  created_at: string;
  date: Date;
  title: string;
  user_id: string | undefined;
};

/** @package */
export type EditedFortune = Omit<Fortune, "created_at" | "user_id">;
