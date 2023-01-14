import React, { createRef, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useClickOutside } from "../../hooks";

interface ModalData {
  appRoot: Element;
  modalRoot: Element;
  initialized: boolean;
}

interface UseModalOptions {
  open: boolean;
  data?: ModalData;
}

export let SharedModalData: ModalData = {
  initialized: false,
} as ModalData;

type UseModalReturn<E extends HTMLElement> = [
  (node: React.ReactNode) => JSX.Element | null,
  React.RefObject<E>
];

export function useModal<E extends HTMLElement>(
  options: UseModalOptions
): UseModalReturn<E> {
  const { open, data = SharedModalData } = options;
  useEffect(() => {
    if (data.initialized) {
      if (open) {
        data.appRoot.setAttribute("aria-hidden", "true");
      } else {
        data.appRoot.removeAttribute("aria-hidden");
      }
      return () => data.appRoot.removeAttribute("aria-hidden");
    }
  }, [open, data.appRoot, data.initialized]);

  const ref = useRef<E | null>(null);

  const renderModal = (node: React.ReactNode) => {
    if (!open) return null;
    if (data.initialized) {
      return ReactDOM.createPortal(node, data.modalRoot);
    }
    // TODO: Figure out why TS gets mad
    // when this isn't wrapped in a fragment
    return <>{node}</>;
  };

  return [renderModal, ref];
}

export function modalInitializer(node: Element) {
  const modalRoot = document.createElement("div");
  modalRoot.id = "atomic-elements-modal-root";
  document.body.appendChild(modalRoot);
  (SharedModalData.appRoot = node), (SharedModalData.modalRoot = modalRoot);
  SharedModalData.initialized = true;
}
