"use client";
import { StackProps, ThemeProvider } from "@mui/material";

type ProviderWrapperProps = {} & StackProps;
function ProviderWrapper({ children }: ProviderWrapperProps) {
  return <>{children}</>;
}

export default ProviderWrapper;
