"use client";
import { IconButton } from "@mui/material";
import {
  Brightness3Outlined,
  Brightness7Outlined,
  LoginOutlined,
  LogoDevRounded,
} from "@mui/icons-material";
import React, { useState } from "react";
import { appProvider } from "client/lib/providers/app-provider";
import LoginModal from "../../login/LoginModal";
import { pushPopup } from "client/lib/providers/popup-provider";
import { PopupKind } from "client/core/ui/modals/Popup";
import HFlex from "client/core/ui/layouts/flexes/HFlex";
import { useRouter } from "next/navigation";
import Link from "next/link";

type NavbarProps = {};

function Navbar({}: NavbarProps) {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const router = useRouter();

  return (
    <HFlex className="Navbar" fullWidth p={1} sx={{ boxShadow: 2 }}>
      <Link
        href={"/"}
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <LogoDevRounded sx={{ fontSize: 48 }} />
      </Link>
      <HFlex flex={1} />
      <IconButton
        onClick={() => {
          setOpenLoginModal(true);
          pushPopup({
            kind: PopupKind.Popup,
            element: LoginModal,
          });
        }}
        size="large"
      >
        <LoginOutlined />
      </IconButton>
      <ThemeToggleButton />
    </HFlex>
  );
}

const ThemeToggleButton = () => {
  const { colorMode, setColorMode } = appProvider();

  const handleToggle = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  return (
    <HFlex>
      <IconButton onClick={handleToggle} size="large">
        {colorMode ? <Brightness7Outlined /> : <Brightness3Outlined />}
      </IconButton>
    </HFlex>
  );
};

export default Navbar;
