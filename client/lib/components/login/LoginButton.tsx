"use client";
import { Google } from "@mui/icons-material";
import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { CircularProgress } from "@mui/material";
import useButton from "client/core/hooks/use-button";
import { onClickType } from "client/core/types/event-handlers-types";

export default function LoginButton({
  text,
  onClick,
  ...rest
}: {
  text: string;
  onClick?: onClickType;
} & LoadingButtonProps) {
  const { _clicked, _onClick } = useButton({ onClick });

  return (
    <LoadingButton
      sx={{
        maxWidth: 300,
        width: "100%",
        height: 48,
        p: 2,
        bgColor: "primary",
        borderRadius: 1,
        fontSize: 16,
        fontWeight: 700,
        ":disabled": {
          backgroundColor: "#808080",
        },
        "& .MuiButton-endIcon": {},
      }}
      loadingIndicator={
        <CircularProgress size={24} sx={{ color: "text.primary" }} />
      }
      onClick={_onClick}
      loading={_clicked}
      {...rest}
    >
      {text}
    </LoadingButton>
  );
}
