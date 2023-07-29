import React from "react";
import { Container, Stack, StackProps } from "@mui/material";

export type VStackProps = {
  fw?: boolean;
  fh?: boolean;
  mw?: number | string;
  mh?: number | string;
} & StackProps;

function VStack({ children, fw, fh, mw, mh, ...rest }: VStackProps) {
  const restObj = new Object(rest);

  return (
    <Stack
      className="VStack"
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={mw || fw ? "100%" : "fit-content"}
      height={mh || fh ? "100%" : "fit-content"}
      maxWidth={mw}
      maxHeight={mh}
      {...rest}
    >
      {children}
    </Stack>
  );
}

export default VStack;
