import React from "react";
import { StackProps, Stack } from "@mui/material";
import classNames from "classnames";

export type FlexProps = {
  fullWidth?: boolean;
  fullHeight?: boolean;
} & StackProps;
function Flex({
  className,
  children,
  fullWidth,
  fullHeight,
  maxWidth,
  maxHeight,
  ...rest
}: FlexProps) {
  return (
    <Stack
      className={classNames(className, "Flex")}
      justifyContent={"center"}
      alignItems={"center"}
      width={maxWidth || fullWidth ? "100%" : "fit-content"}
      height={maxHeight || fullHeight ? "100%" : "fit-content"}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      {...rest}
    >
      {children}
    </Stack>
  );
}

export default Flex;
