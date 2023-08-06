import React from "react";
import Stack, { FlexProps } from "./Flex";
import Flex from "./Flex";
import classNames from "classnames";

type VFlexProps = {} & Omit<FlexProps, "flexDirection">;

/**By default
 * - display: flex
 * - flexDirection: column
 * - justifyContent: center
 * - alignItems: center
 */
function VFlex({ className, children, ...rest }: VFlexProps) {
  return (
    <Flex
      className={classNames(className, "VFlex")}
      flexDirection="column"
      justifyContent={"center"}
      alignItems={"center"}
      {...rest}
    >
      {children}
    </Flex>
  );
}

export default VFlex;
