import { immer } from 'zustand/middleware/immer';
import { NewPopup } from "client/core/ui/modals/Popup";
import _ from "lodash";
import { nanoid } from "nanoid";
import { create } from "zustand";

export const pushPopup = (popup: NewPopup) =>
  popupProvider.setState((state) => state.pushPopup(popup));

export const popupProvider = create(
  immer<{
    popups: NewPopup[];
    pushPopup: (popup: NewPopup) => void;
    popPopup: (key?: string) => void;
  }>((set) => ({
    popups: [],
    pushPopup: async (popup: NewPopup) => {
      let abort = false;
      const key = nanoid();
      popup = {
        key,
        ...popup,
        isOpened: false,
      };

      set((state) => {
        // if there is a popup with the same key, don't push it
        if (
          popup.key &&
          state.popups.find((p: NewPopup) => p.key === popup.key)
        ) {
          abort = true;
          return;
        }
        state.popups.push(popup);
      });
      if (abort) {
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 0));
      set((state) => {
        const openedPopup = state.popups.find(
          (p: any): boolean => p.key === popup.key,
        );
        if (openedPopup) {
          openedPopup.isOpened = true;
        }
      });
    },
    popPopup: async (key?: string) => {
      let abort = false;
      set((state) => {
        key ||= _.last(state.popups as NewPopup[])?.key;
        const popup = state.popups.find((p: NewPopup) => p.key === key);
        if (!popup) {
          abort = true;
          return;
        }
        popup.isOpened = false;
      });
      if (abort) {
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 200));
      set((state) => {
        const popupIndex = state.popups.findIndex(
          (p: NewPopup) => p.key === key,
        );
        if (popupIndex === -1) {
          return;
        }
        state.popups.splice(popupIndex, 1);
      });
    },
  })),
);
