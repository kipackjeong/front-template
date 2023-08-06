import React from "react";
import { StackProps, styled } from "@mui/material";
import Flex, { FlexProps } from "./Flex";
import classNames from "classnames";

export type HFlexProps = {} & Omit<FlexProps, "flexDirection">;

/**By default
 * - display: flex
 * - flexDirection: row
 * - justifyContent: center
 * - alignItems: center
 */
function HFlex({ className, children, ...rest }: HFlexProps) {
  return (
    <Flex
      className={classNames(className, "HFlex")}
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      {...rest}
    >
      {children}
    </Flex>
  );
}

export default HFlex;
