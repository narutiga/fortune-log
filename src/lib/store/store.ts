import create from "zustand";
import { EditingFortune } from "src/lib/type";

type State = {
  editingFortune: EditingFortune;
  updateEditingFortune: (payload: EditingFortune) => void;
  resetEditingFortune: () => void;
};

/** @package */
export const toStringDate = (date: Date) => {
  const year = date.getFullYear();
  const month = ("00" + (date.getMonth() + 1)).slice(-2);
  const day = ("00" + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
};

const today = toStringDate(new Date());

/** @package */
export const useStore = create<State>((set) => ({
  editingFortune: { id: "", date: today, title: "" },
  updateEditingFortune: (payload) =>
    set({
      editingFortune: {
        id: payload.id,
        date: payload.date,
        title: payload.title,
      },
    }),
  resetEditingFortune: () =>
    set({ editingFortune: { id: "", date: today, title: "" } }),
}));
