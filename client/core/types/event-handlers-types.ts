//@ts-nocheck

export type onClickType = (
  e: MouseEvent<HTMLButtonElement, MouseEvent>,
) => Promise<void> | void;
