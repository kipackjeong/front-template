import React from "react";
import {
  AppStackProps,
  Container,
  StackProps,
  Stack as MuiStack,
} from "@mui/material";

declare module "@mui/material/Stack" {
  interface AppStackProps extends StackProps {
    fullWidth?: boolean;
    fullHeight?: boolean;
  }
}

function Stack({
  children,
  fullWidth,
  fullHeight,
  maxWidth,
  maxHeight,
  ...rest
}: AppStackProps) {
  return (
    <MuiStack
      className="Stack"
      justifyContent={"center"}
      alignItems={"center"}
      width={maxWidth || fullWidth ? "100%" : "fit-content"}
      height={maxHeight || fullHeight ? "100%" : "fit-content"}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      {...rest}
    >
      {children}
    </MuiStack>
  );
}

export default Stack;
