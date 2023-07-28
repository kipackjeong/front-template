import React from "react";

export type TxtProps = {
  value: string;
  type?: TxtType;
  lineHeight?: LineHeight;
  className?: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export default function Txt({
  value,
  type = "text-md",
  lineHeight,

  ...restProps
}: TxtProps) {
  return (
    <p
      className={`Txt ${type}${lineHeight ? `/${lineHeight}` : ""}${
        restProps["className"] ? ` ${restProps["className"]}` : ""
      }`}
    >
      {value}
    </p>
  );
}

/*
 *
 * Property Types
 *
 */

export type TxtType =
  | "text-9xl"
  | "text-8xl"
  | "text-7xl"
  | "text-6xl"
  | "text-5xl"
  | "text-4xl"
  | "text-3xl"
  | "text-2xl"
  | "text-xl"
  | "text-lg"
  | "text-base"
  | "text-md"
  | "text-sm"
  | "text-xs";
export type LineHeight = string;
