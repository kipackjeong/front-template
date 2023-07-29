import { EmailOutlined, Google, LogoDev } from "@mui/icons-material";
import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import {
  CircularProgress,
  FormControl,
  TextField,
  styled,
} from "@mui/material";
import VStack from "client/core/ui/layouts/flexes/VStack";
import Modal from "client/core/ui/modals/Modal";
import { useState } from "react";

export default function LoginModal({ open }: { open: boolean }) {
  const [clickedAny, setClickedAny] = useState(false);
  const [clickedLoginWithEmail, setClickedLoginWithEmail] = useState(false);

  function onAnyButtonClick() {
    setClickedAny(true);
  }

  return (
    <Modal
      className="LoginModal"
      open={open}
      style={{ height: "100vh", width: "100vw" }}
    >
      <>
        <VStack width={500} height={500} gap={1}>
          <LoginButton
            text="login with google"
            endIcon={<Google />}
            disabled={clickedAny}
            onClick={onAnyButtonClick}
          />
          <LoginButton
            text="login with email"
            endIcon={<EmailOutlined />}
            disabled={clickedAny}
            onClick={() => {
              onAnyButtonClick();
              setClickedLoginWithEmail(true);
            }}
          />
        </VStack>

        <Modal open={clickedLoginWithEmail}>
          <LoginForm />
        </Modal>
      </>
    </Modal>
  );
}

function LoginForm() {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);

  return (
    <form className="LoginForm" style={{ width: 320, height: 420 }}>
      <VStack fw fh gap={2} padding={4}>
        <VStack fh fw>
          <LogoDev
            shapeRendering="circle"
            sx={{ width: "50%", height: "50%" }}
          />
        </VStack>
        <FormControl fullWidth>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            fullWidth
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            fullWidth
          />
        </FormControl>
      </VStack>
    </form>
  );
}

const LoadingButtonStyled = styled(LoadingButton)(({ theme }) => ({
  backgroundColor: "primary",
  maxWidth: 200,
  width: "100%",
  height: 56,
  borderRadius: 8,
  fontSize: 14,
  fontWeight: 700,
  ":disabled": {
    backgroundColor: "#808080",
  },
  "& .MuiButton-endIcon": {},
}));

function LoginButton({
  text,
  endIcon,
  onClick,
  ...rest
}: { text: string; onClick?: () => void } & LoadingButtonProps) {
  const [_clicked, _setClicked] = useState(false);
  const _onClick = () => {
    _setClicked(true);
    onClick?.();
  };
  return (
    <LoadingButtonStyled
      onClick={_onClick}
      loading={_clicked}
      loadingIndicator={
        <CircularProgress size={24} sx={{ color: "text.primary" }} />
      }
      {...rest}
    >
      {text}
    </LoadingButtonStyled>
  );
}
