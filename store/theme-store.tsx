import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ThemeState {
  darkMode: boolean;
  changeTheme: (changeToDark: boolean) => void;
}

export const useThemeStore = create<ThemeState>()(
  devtools(
    persist((set) => ({
      darkMode: false,
      changeTheme: (changeToDark) =>
        set(() => ({
          darkMode: !changeToDark,
        })),
    }))
  )
);
