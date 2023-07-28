import React, { HTMLAttributes } from "react";
export type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
export type FlexProps = {
  className?: string;
  sx?: string;
  flexDir?: FlexDirection;
  pX?: number;
  pY?: number;
  fullW?: boolean;
  fullH?: boolean;
  maxW?: number | string;
  maxH?: number | string;
  w?: number | string;
  h?: number | string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
export function Flex({
  children,
  className = "",
  w = "fit-content",
  h = "fit-content",
  fullW,
  fullH,
  maxW,
  maxH,
  ...restProps
}: FlexProps) {
  const defaultStyles = "Flex z-0 flex justify-center item-middle";
  const definedStyles = className;

  return (
    <div
      className={`${defaultStyles} ${definedStyles}`}
      style={{
        width: fullW || maxW ? "100%" : w,
        height: fullH || maxH ? "100%" : h,
        maxWidth: maxW,
        maxHeight: maxH,
      }}
      {...restProps}
    >
      {children}
    </div>
  );
}

export function HFlex({ children, className, ...restProps }: FlexProps) {
  const defaultStyle = `HFlex z-0 `;
  return (
    <Flex className={"flex-row " + className} {...restProps}>
      {children}
    </Flex>
  );
}

export function VFlex({ children, className, ...restProps }: FlexProps) {
  return (
    <Flex className={"flex-col " + className} {...restProps}>
      {children}
    </Flex>
  );
}

export type FlexDirection = "row" | "col";
