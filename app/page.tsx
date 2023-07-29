"use client";
import { Button } from "@mui/material";
import VStack from "client/core/ui/layouts/flexes/Stack";
import { appProvider } from "client/lib/providers/app-provider";

export default function Home() {
  return (
    <VStack>
      <Button variant="contained" color="primary" sx={{ color: "white" }}>
        Hello
      </Button>
    </VStack>
  );
}
