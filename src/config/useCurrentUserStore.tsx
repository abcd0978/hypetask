import { create } from "zustand";

type CurrentUserStore = {
  currentUserId: string;
  setCurrentUserId: (id: string) => void;
};

export const useCurrentUserStore = create<CurrentUserStore>()((set) => ({
  currentUserId: "",
  setCurrentUserId: (id) => set((state) => ({ currentUserId: id })),
}));
