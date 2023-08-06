"use client";
import { LogoDev } from "@mui/icons-material";
import {
  Button,
  Card,
  FormControl,
  Icon,
  TextField,
  alpha,
} from "@mui/material";
import VFlex from "client/core/ui/layouts/flexes/VFlex";
import { useState } from "react";
import LoginButton from "./LoginButton";
import HFlex from "client/core/ui/layouts/flexes/HFlex";

export default function LoginForm({
  onLogin,
  onClose,
}: {
  onLogin?: () => void;
  onClose?: () => void;
}) {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);

  return (
    <HFlex
      margin="auto"
      fullWidth
      fullHeight
      bgcolor={(theme) => alpha(theme.palette.background.paper, 0.95)}
    >
      <form className="LoginForm" style={{ width: 320, height: 420 }}>
        <VFlex fullWidth fullHeight justifyContent="start" p={4} gap={2}>
          <VFlex fullWidth fullHeight>
            <LogoDev shapeRendering="circle" sx={{ fontSize: 48 }} />
          </VFlex>

          <FormControl fullWidth>
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </FormControl>
          <FormControl fullWidth>
            <LoginButton
              text="login"
              variant="contained"
              type="submit"
              onClick={async (e) => {
                e.preventDefault();
                if (!email || !password) return;

                const res = await fetch("/api/auth/login", {
                  headers: {
                    "Content-Type": "application/json",
                  },
                  method: "POST",
                  body: JSON.stringify({
                    email,
                    password,
                  }),
                });
                onClose?.();
              }}
            />
          </FormControl>
        </VFlex>
      </form>
    </HFlex>
  );
}
