import {
  default as MuiModal,
  ModalProps as MuiModalProps,
} from "@mui/material/Modal";
import VStack from "../layouts/flexes/VStack";
import { use, useEffect, useState } from "react";
import HStack from "../layouts/flexes/HStack";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

export type ModalProps = {} & MuiModalProps;

function Modal({ children, open, ...rest }: ModalProps) {
  const [_open, _setOpen] = useState(open);

  useEffect(() => {
    if (!open) {
      _setOpen((prev) => !prev);
    }
  }, [open]);

  return (
    <MuiModal
      open={_open}
      onClose={(event, reason) => {
        if (reason && reason == "backdropClick") return;
        _setOpen(false);
      }}
      {...rest}
    >
      <VStack fw fh>
        <HStack width="100%">
          <HStack flexGrow={1} />
          <IconButton
            onClick={() => {
              _setOpen(false);
            }}
          >
            <Close />
          </IconButton>
        </HStack>
        <VStack bgcolor={"background.paper"} padding={2}>
          {children}
        </VStack>
      </VStack>
    </MuiModal>
  );
}

export default Modal;
