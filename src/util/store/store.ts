import create from "zustand";
import { EditedFortune } from "src/util/type";

type State = {
  editedFortune: EditedFortune;
  updateEditedFortune: (payload: EditedFortune) => void;
  resetEditedFortune: () => void;
};

const toStringDate = (date: Date) => {
  const year = date.getFullYear();
  const month = ("00" + (date.getMonth() + 1)).slice(-2);
  const day = ("00" + date.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
};

const today = toStringDate(new Date());

const useStore = create<State>((set) => ({
  editedFortune: { id: "", date: today, title: "" },
  updateEditedFortune: (payload) =>
    set({
      editedFortune: {
        id: payload.id,
        date: payload.date,
        title: payload.title,
      },
    }),
  resetEditedFortune: () =>
    set({ editedFortune: { id: "", date: today, title: "" } }),
}));

export default useStore;
