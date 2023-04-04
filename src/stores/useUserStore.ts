import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  jwt: string;
  profile: {
    [x: string]: any;
  };
}

interface UserStore {
  currentUser: User | null;
  setCurrentUser: (user: User) => void;
  logout: () => void;
}

const useUserStore = create(
  persist<UserStore>(
    (set, get) => ({
      currentUser: null,
      setCurrentUser: (user) =>
        set((state) => {
          return { currentUser: user };
        }),
      logout: () => set({ currentUser: null }),
    }),
    { name: process.env.NEXT_PUBLIC_CURRENTUSER_LOCAL_KEY as string }
  )
);

export default useUserStore;
