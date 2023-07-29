"use client";
import { IconButton, Typography } from "@mui/material";
import {
  Brightness3Outlined,
  Brightness7Outlined,
  LoginOutlined,
} from "@mui/icons-material";
import HStack from "client/core/ui/layouts/flexes/HStack";
import React, { useState } from "react";
import { appProvider } from "client/lib/providers/app-provider";
import LoginModal from "../../auth/login/LoginModal";

type NavbarProps = {};

function Navbar({}: NavbarProps) {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  return (
    <HStack>
      <LoginModal open={openLoginModal} />
      <IconButton
        onClick={() => {
          setOpenLoginModal(true);
        }}
      >
        <LoginOutlined />
      </IconButton>
      <ThemeToggleButton />
    </HStack>
  );
}

const ThemeToggleButton = () => {
  const { colorMode, setColorMode } = appProvider();

  const handleToggle = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  return (
    <HStack>
      <IconButton onClick={handleToggle}>
        {colorMode ? <Brightness7Outlined /> : <Brightness3Outlined />}
      </IconButton>
    </HStack>
  );
};

export default Navbar;
