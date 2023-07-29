import Txt from "@/lib/client/components/shared/Txt";
import { StackProps } from "@mui/material";
import VStack from "client/core/ui/layouts/flexes/Stack";
import { title } from "process";
import React from "react";

type DemoLayoutProps = {
  title: string;
} & StackProps;

function DemoLayout({ title, children, ...restProps }: DemoLayoutProps) {
  return (
    <VStack className="gap-2">
      <Txt value={title} type="text-2xl" />
      <VStack {...restProps}>{children}</VStack>
    </VStack>
  );
}

export default DemoLayout;
