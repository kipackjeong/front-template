import React from "react";
import { Container, Stack, StackProps } from "@mui/material";

export type HStackProps = {} & StackProps;

function HStack({ children, ...rest }: HStackProps) {
  return (
    <Stack
      className="HStack"
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      {...rest}
    >
      {children}
    </Stack>
  );
}

export default HStack;
