import { Palette } from "@mui/material";
import { create } from "zustand";
import { ColorMode } from "../global/design/theme";

export const appProvider = create<{
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
}>((set) => ({
  colorMode: "light",
  setColorMode: (colorMode: ColorMode) => {
    set((state) => ({
      ...state,
      colorMode,
    }));
  },
}));
