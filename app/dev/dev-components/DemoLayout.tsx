import Txt from "@/components/shared/Txt";
import {
  DivProps,
  FlexProps,
  VFlex,
} from "@/components/shared/layouts/flexes/Flex";
import React from "react";

type DemoLayoutProps = {
  title: string;
} & FlexProps;

function DemoLayout({ title, children, ...restProps }: DemoLayoutProps) {
  return (
    <VFlex className="gap-2">
      <Txt value={title} type="text-2xl" />
      <VFlex {...restProps}>{children}</VFlex>
    </VFlex>
  );
}

export default DemoLayout;
