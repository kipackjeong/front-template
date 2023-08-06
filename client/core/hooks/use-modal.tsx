"use client";
import { useCallback, useEffect, useState } from "react";

export function useModal({
  open,
  onOpen,
  onClose,
}: {
  open: boolean;
  onOpen?: () => void;
  onClose?: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
}) {
  const [_open, _setOpen] = useState(open);

  const _onOpen = useCallback(
    function () {
      onOpen?.();
    },
    [onOpen],
  );

  useEffect(() => {
    if (open) {
      _onOpen();
    }
    _setOpen(open);
  }, [_onOpen, open]);

  function _onClose(e: any, reason: any) {
    onClose?.(e, reason);
    _setOpen(false);
  }

  return {
    _open,
    _onClose,
    _onOpen,
  };
}
