import { Button } from "@mui/material";
import VFlex from "client/core/ui/layouts/flexes/Flex";
import { appProvider } from "client/lib/providers/app-provider";
import Home from "client/lib/scenes/Home";

export default function HomePage() {
  return (
    <VFlex className="HomePage" fullWidth fullHeight>
      <Home />
    </VFlex>
  );
}
