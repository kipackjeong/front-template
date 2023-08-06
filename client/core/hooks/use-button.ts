import { MouseEvent, useEffect, useState } from "react";
import { onClickType } from "../types/event-handlers-types";

export default function useButton({ onClick }: { onClick?: onClickType }) {
  const [_clicked, _setClicked] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (_clicked) {
      timer = setTimeout(() => {
        _setClicked(false);
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [_clicked]);

  const _onClick = (e: MouseEvent<HTMLButtonElement>) => {
    _setClicked(true);
    onClick?.(e);
  };

  return {
    _clicked,
    _onClick,
  };
}
