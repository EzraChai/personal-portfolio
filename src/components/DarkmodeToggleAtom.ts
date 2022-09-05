import { atom } from "jotai";

const GetItemFromlocalStorage = (): boolean => {
  const darkModeFromLocalStorage = localStorage.getItem("darkMode");
  if (darkModeFromLocalStorage === "true") {
    return true;
  }
  return false;
};

const darkMode = atom<boolean>(GetItemFromlocalStorage());

export const darkModeToggle = atom(
  (get) => get(darkMode),
  (get, set) => {
    const currentMode = !get(darkMode);
    set(darkMode, currentMode);
    localStorage.setItem("darkMode", currentMode ? "true" : "false");
  }
);
