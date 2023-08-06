import DemoLayout from "./dev-components/DemoLayout";
import VFlex from "client/core/ui/layouts/flexes/Flex";
import HFlex from "client/core/ui/layouts/flexes/HFlex";

export default function DevPage() {
  return (
    <VFlex className="gap-4">
      <DemoLayout title="Flex" className="items-start bg-blue-400"></DemoLayout>
      <DemoLayout title="Text"></DemoLayout>
    </VFlex>
  );
}
// dispatch:  425 502 5035
// press 1
// lost and found bldg 25.
