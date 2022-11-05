import create from "zustand";
import { EditingFortune } from "src/lib/type";
import dayjs from "dayjs";

type State = {
  editingFortune: EditingFortune;
  updateEditingFortune: (payload: EditingFortune) => void;
  resetEditingFortune: () => void;
};

/** @package */
export const useStore = create<State>((set) => ({
  editingFortune: {
    id: "",
    date: dayjs(new Date()).format("YYYY-MM-DD"),
    title: "",
  },
  updateEditingFortune: (payload) =>
    set({
      editingFortune: {
        id: payload.id,
        date: payload.date,
        title: payload.title,
      },
    }),
  resetEditingFortune: () =>
    set({
      editingFortune: {
        id: "",
        date: dayjs(new Date()).format("YYYY-MM-DD"),
        title: "",
      },
    }),
}));
