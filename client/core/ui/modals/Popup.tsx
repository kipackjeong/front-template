import React, { useEffect, useRef, useState } from "react";
import { popupProvider } from "client/lib/providers/popup-provider";
import HFlex from "../layouts/flexes/HFlex";
import { Modal } from "@mui/material";

export enum PopupKind {
  Drawer = "drawer",
  Popup = "popup",
}

export type NewPopup = {
  key?: string;
  element: React.FC<any>;
  kind: PopupKind;
  isOpened?: boolean;
  options?: {
    backdropColor?: string;
    className?: string;
    innerClassName?: string;
  };
  width?: number;
  props?: any;
  x?: number;
  y?: number;
  preventCloseByBackdrop?: boolean;
};

function Popup({ popup, depth }: { popup: NewPopup; depth: number }) {
  const popPopup = popupProvider((state: { popPopup: any }) => state.popPopup);
  const divRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x?: number; y?: number }>({
    x: undefined,
    y: undefined,
  });

  useEffect(() => {
    if (popup.x || popup.y) {
      const { width: popupWidth, height: popupHeight } =
        divRef.current?.getBoundingClientRect()!;
      setPos({
        x: popup.x
          ? Math.min(window.innerWidth - popupWidth - 32, popup.x - popupWidth)
          : undefined,
        y: popup.y
          ? Math.min(window.innerHeight - popupHeight - 32, popup.y)
          : undefined,
      });
    }
  }, [popup]);

  const [open, setOpen] = useState(true);

  return (
    <Modal
      open={open}
      sx={{
        width: "100%",
        maxWidth: 500,
        height: "100%",
        maxHeight: 500,
        bgcolor: "transparent",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClose={() => {
        setOpen(false);
        popup.props?.onClose?.();
      }}
    >
      <HFlex sx={{ borderRadius: 2 }}>
        {React.createElement(popup.element, {
          key: popup.key,
          onClose: () => {
            popup.props?.onClose?.();
            setOpen(false);
          },
          ...popup.props,
          popPopup: () => popPopup(popup.key),
        })}
      </HFlex>
    </Modal>
  );
}

export default Popup;
