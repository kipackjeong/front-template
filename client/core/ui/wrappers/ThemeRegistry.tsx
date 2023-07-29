// app/ThemeRegistry.tsx
"use client";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import React, { useEffect } from "react";
import { ColorMode, getDesignTokens } from "client/lib/global/design/theme";
import useEmotionCache from "client/core/hooks/use-emotion-cache";
import {
  Box,
  IconButton,
  PaletteMode,
  Theme,
  createTheme,
} from "@mui/material";
import { appProvider } from "client/lib/providers/app-provider";
import { Brightness4Outlined, Brightness7Outlined } from "@mui/icons-material";

// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
export default function ThemeRegistry(props: any) {
  const { options, children } = props;
  const { cache } = useEmotionCache(options);
  const { colorMode, setColorMode } = appProvider();

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      setColorMode("dark");
      // Theme set to dark.
    } else {
      setColorMode("light");
      // Theme set to light.
    }
  }, [setColorMode]);

  // Update the theme only if the mode changes
  const theme = React.useMemo(
    () => createTheme(getDesignTokens(colorMode) as Partial<Theme>),
    [colorMode],
  );

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
}
