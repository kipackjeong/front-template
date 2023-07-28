import Txt from "@/components/shared/Txt";
import { HFlex, VFlex } from "@/components/shared/layouts/flexes/Flex";
import DemoLayout from "./dev-components/DemoLayout";

export default function DevPage() {
  return (
    <VFlex className="gap-4">
      <DemoLayout title="Flex" className="items-start bg-blue-400">
        <Txt value="HFlex" />
        <HFlex w={200} h={200}></HFlex>
      </DemoLayout>
      <DemoLayout title="Text" fullW>
        <Txt type="text-sm" value="text-sm" />
      </DemoLayout>
    </VFlex>
  );
}
// dispatch:  425 502 5035
// press 1
// lost and found bldg 25.
