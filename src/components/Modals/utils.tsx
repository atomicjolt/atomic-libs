import React, { useEffect } from "react";
import ReactDOM from "react-dom";

interface ModalData {
  appRoot: Element;
  modalRoot: Element;
  initialized: boolean;
}

export let SharedModalData: ModalData = {
  initialized: false,
} as ModalData;

export function useModal(open: boolean, data: ModalData = SharedModalData) {
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

  return (node: React.ReactNode) => {
    if (!open) return null;
    if (data.initialized) {
      // @ts-ignore
      return ReactDOM.createPortal(node, data.modalRoot);
    }
    // TODO: Figure out why TS gets mad
    // when this isn't wrapped in a fragment
    return <>{node}</>;
  };
}

export function modalInitializer(node: Element) {
  const modalRoot = document.createElement("div");
  modalRoot.id = "atomic-elements-modal-root";
  document.body.appendChild(modalRoot);
  (SharedModalData.appRoot = node), (SharedModalData.modalRoot = modalRoot);
  SharedModalData.initialized = true;
}
