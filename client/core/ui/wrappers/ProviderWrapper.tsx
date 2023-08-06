"use client";
import { StackProps, ThemeProvider } from "@mui/material";
import ThemeRegistry from "./ThemeRegistry";
import { popupProvider } from "client/lib/providers/popup-provider";
import Popup from "../modals/Popup";

type ProviderWrapperProps = {} & StackProps;
function ProviderWrapper({ children }: ProviderWrapperProps) {
  const { popups } = popupProvider();

  return (
    <ThemeRegistry options={{ key: "mui" }}>
      <>
        {children}
        {popups.map((popup, i) => (
          <Popup key={popup.key} popup={popup} depth={i} />
        ))}
      </>
    </ThemeRegistry>
  );
}

export default ProviderWrapper;
