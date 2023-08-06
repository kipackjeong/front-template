import Txt from "@/lib/client/components/shared/Txt";
import { StackProps } from "@mui/material";
import VFlex from "client/core/ui/layouts/flexes/Flex";
import { title } from "process";
import React from "react";

type DemoLayoutProps = {
  title: string;
} & StackProps;

function DemoLayout({ title, children, ...restProps }: DemoLayoutProps) {
  return (
    <VFlex className="gap-2">
      <Txt value={title} type="text-2xl" />
      <VFlex {...restProps}>{children}</VFlex>
    </VFlex>
  );
}

export default DemoLayout;
