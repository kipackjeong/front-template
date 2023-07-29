import React from "react";
import { AppStackProps, Stack, StackProps, styled } from "@mui/material";

export type HStackProps = {} & AppStackProps;

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
