import create from "zustand/react";
import { EditedFortune } from "src/util/type";

type State = {
  editedFortune: EditedFortune;
  resetEditedFortune: () => void;
};

// const formatDate = (date: Date) => {
//   const year = date.getFullYear();
//   const month = ("00" + (date.getMonth() + 1)).slice(-2);
//   const day = ("00" + date.getDate()).slice(-2);
//   return `${year}-${month}-${day}`;
// };

// const today = formatDate(new Date());
const today = new Date();

const useStore = create<State>((set) => ({
  editedFortune: { id: "", date: today, title: "" },
  resetEditedFortune: () =>
    set({ editedFortune: { id: "", date: today, title: "" } }),
}));

export default useStore;
