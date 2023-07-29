import { useState } from "react";

export default function useButton({
  onClick,
}: {
  onClick?: () => Promise<void> | void;
}) {
  const [_clicked, _setClicked] = useState(false);
  const _onClick = () => {
    _setClicked(true);
    onClick?.();
  };

  return {
    _clicked,
    _onClick,
  };
}
