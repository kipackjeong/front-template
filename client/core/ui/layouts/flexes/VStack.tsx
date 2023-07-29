import { AppStackProps, Stack } from "@mui/material";
import React from "react";

type VStackProps = {} & Omit<AppStackProps, "flexDirection">;

function VStack({ children, ...rest }: VStackProps) {
  return (
    <Stack
      className="VStack"
      flexDirection="column"
      justifyContent={"center"}
      alignItems={"center"}
      {...rest}
    >
      {children}
    </Stack>
  );
}

export default VStack;
