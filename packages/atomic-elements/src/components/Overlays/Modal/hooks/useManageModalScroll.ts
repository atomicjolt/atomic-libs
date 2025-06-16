import React, { useEffect, useRef } from "react";
import { OverlayTriggerState } from "react-stately";

interface UseManageModalScrollProps {
  ensureVisible?: boolean;
  modalRef: React.RefObject<HTMLElement | null>;
  scrollOptions?: boolean | ScrollIntoViewOptions;
}

/**
 * Custom hook that manages modal scrolling behavior and focus restoration.
 *
 * When the modal opens and `ensureVisible` is true, this hook will:
 * - Store the currently focused element
 * - Scroll the modal into view using the provided scroll options
 *
 * When the modal closes or the component unmounts, it will:
 * - Restore focus to the previously focused element
 * - Reset the stored focus reference
 */
export function useManageModalScroll(
  props: UseManageModalScrollProps,
  state: OverlayTriggerState
) {
  const { modalRef, ensureVisible, scrollOptions } = props;
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (state.isOpen && ensureVisible) {
      previousFocus.current = document.activeElement as HTMLElement | null;
      modalRef.current?.scrollIntoView(scrollOptions);
    }

    return () => {
      // Restore previous focus, which will move the page back to where it was.
      // 99% of the time this will be the element that was focused before the modal opened.
      previousFocus.current?.focus();
      previousFocus.current = null;
    };
  }, [state.isOpen, ensureVisible]);
}
