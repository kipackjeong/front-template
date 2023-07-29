import DemoLayout from "./dev-components/DemoLayout";
import VStack from "client/core/ui/layouts/flexes/VStack";
import HStack from "client/core/ui/layouts/flexes/HStack";

export default function DevPage() {
  return (
    <VStack className="gap-4">
      <DemoLayout title="Flex" className="items-start bg-blue-400"></DemoLayout>
      <DemoLayout title="Text"></DemoLayout>
    </VStack>
  );
}
// dispatch:  425 502 5035
// press 1
// lost and found bldg 25.
