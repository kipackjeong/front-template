"use client";
import { EmailOutlined, Google, LogoDevOutlined } from "@mui/icons-material";
import VFlex from "client/core/ui/layouts/flexes/VFlex";
import { useState } from "react";
import LoginForm from "./LoginForm";
import { signIn } from "next-auth/react";
import LoginButton from "./LoginButton";
import { pushPopup } from "client/lib/providers/popup-provider";
import { PopupKind } from "client/core/ui/modals/Popup";

export default function LoginModal({
  open,
  onClose,
  popPopup,
}: {
  open: boolean;
  onClose?: () => void;
  popPopup?: () => void;
}) {
  const [_clickedAny, _setClickedAny] = useState(false);
  console.log("_clickedAny", _clickedAny);

  function _onGoogleButtonClick() {
    signIn("google", { callbackUrl: "/" });
    _setClickedAny(true);
  }

  function _onEmailButtonClick() {
    _setClickedAny(true);
    pushPopup({
      kind: PopupKind.Popup,
      element: LoginForm,
      props: {
        onClose: () => {
          _setClickedAny(false);
        },
      },
    });
  }

  return (
    <VFlex gap={1} sx={{ borderRadius: 2, bgcolor: "transparent" }}>
      <LogoDevOutlined sx={{ fontSize: 70 }} />
      <LoginButton
        text="login with google"
        endIcon={<Google sx={{ color: "white" }} />}
        disabled={_clickedAny}
        onClick={_onGoogleButtonClick}
      />
      <LoginButton
        text="login with mail"
        endIcon={<EmailOutlined />}
        disabled={_clickedAny}
        onClick={_onEmailButtonClick}
      />
    </VFlex>
  );
}
