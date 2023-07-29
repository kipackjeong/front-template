import {
  Components,
  Palette,
  PaletteMode,
  Theme,
  darkScrollbar,
} from "@mui/material";
import { Component } from "react";
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export type CustomPalette = Partial<Palette> & {
  background: {
    paper: string;
    default: string;
    gradient: string;
  };
};
export const darkPalette: CustomPalette = {
  background: {
    paper: "#191919", // Dark Grey
    default: "#212121",
    gradient: "linear-gradient(135deg, #292929, #1A1A1A);",
  },
  text: {
    primary: "#F2EFE9",
    secondary: "#B0AFAA",
    disabled: "",
  },
  mode: "dark",
  primary: {
    main: "#6160ca",
    light: "",
    dark: "",
    contrastText: "",
  },
  secondary: {
    main: "#CF6D78",
    light: "",
    dark: "",
    contrastText: "",
  },
  success: {
    main: "#7F9E86",
    light: "",
    dark: "",
    contrastText: "",
  },
  error: {
    main: "#B83F35",
    light: "",
    dark: "",
    contrastText: "",
  },
  warning: {
    main: "#DCA264",
    light: "",
    dark: "",
    contrastText: "",
  },
  info: {
    main: "#4B7DB1",
    light: "",
    dark: "",
    contrastText: "",
  },
};

export const lightPalette: CustomPalette = {
  mode: "light",
  background: {
    paper: "#ffffff", // Antique White
    default: "#f5f5f4", // Light Beige
    gradient: "linear-gradient(135deg, #F2EFE9, #B0AFAA)", // Slightly Darker Grey
  },
  text: {
    primary: "#1A1A1A", // Dark Grey Text
    secondary: "#4A4A4A", // Slightly Dark Grey Text
    disabled: "#B0AFAA", // Light Grey Text
  },
  primary: {
    main: "#825ECE",
    light: "",
    dark: "",
    contrastText: "", // Muted Purple
  },
  secondary: {
    main: "#CF6D78",
    light: "",
    dark: "",
    contrastText: "", // Dusty Rose
  },
  success: {
    main: "#7F9E86",
    light: "",
    dark: "",
    contrastText: "", // Olive Green
  },
  error: {
    main: "#B83F35",
    light: "",
    dark: "",
    contrastText: "", // Rust Red
  },
  warning: {
    main: "#DCA264",
    light: "",
    dark: "",
    contrastText: "", // Tan
  },
  info: {
    main: "#4B7DB1",
    light: "",
    dark: "",
    contrastText: "", // Faded Blue
  },
};

// https://mui.com/material-ui/customization/theme-components/

const components: Components = {
  MuiSvgIcon: {
    styleOverrides: {
      //@ts-ignore
      root: ({ theme }: { theme: Theme }) => ({
        color: theme.palette.text.primary,
      }),
    },
  },
  MuiLoadingButton: {
    styleOverrides: {
      //@ts-ignore
      root: ({ theme }: { theme: Theme }) => ({
        color: theme.palette.text.primary,
      }),
    },

    defaultProps: {
      variant: "contained",
      // The props to change the default for.
      // disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
  MuiTypography: {
    styleOverrides: {
      //@ts-ignore
      root: ({ theme }: { theme: Theme }) => ({
        color: theme.palette.text.primary,
      }),
    },
  },
};

export const getDesignTokens = (mode: ColorMode): Partial<Theme> => {
  const palette = mode === "light" ? lightPalette : darkPalette;

  //@ts-ignore
  return { palette, components };
};

export type ColorMode = "light" | "dark";
