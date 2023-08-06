"use client";
import { useTheme } from "@mui/material";
import { appProvider } from "client/lib/providers/app-provider";
import React from "react";

type BackgroundProps = {};

function Background({}: BackgroundProps) {
  const theme = useTheme();
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.background.default,
        zIndex: -1,
      }}
    ></div>
  );
}

export default Background;
