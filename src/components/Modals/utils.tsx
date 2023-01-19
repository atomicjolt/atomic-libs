import React, { createRef, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

type ModalData =
  | {
      initialized: false;
      appRoot: null;
      modalRoot: null;
    }
  | {
      initialized: true;
      appRoot: Element;
      modalRoot: Element;
    };

interface UseModalOptions {
  open: boolean;
  data?: ModalData;
}

export let ModalDataStore: ModalData = {
  initialized: false,
  appRoot: null,
  modalRoot: null,
};

type RenderModalFunction = (node: React.ReactNode) => JSX.Element | null;

export function useModal(options: UseModalOptions): RenderModalFunction {
  const { open, data = ModalDataStore } = options;

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

  const renderModal = (node: React.ReactNode) => {
    if (!open) return null;
    if (data.initialized) {
      return ReactDOM.createPortal(node, data.modalRoot);
    }

    return <>{node}</>;
  };

  return renderModal;
}

/** Initializes the Modal components. Doing this allows `atomic-elements` to open
 * Modals in a accesibility-friendly way
 * @param node that acts as the insertion point for your react application
 * @param [id] id to reference the modal insertion point by
 */
export function modalInitializer(
  node: Element,
  id: string = "atomic-elements-modal-root"
) {
  // Create the insertion point for the Modals
  // Will be used to create a React portal to
  const modalRoot = document.createElement("div");
  modalRoot.id = id;
  document.body.appendChild(modalRoot);

  // Initialze the shared data store
  ModalDataStore.appRoot = node;
  ModalDataStore.modalRoot = modalRoot;
  ModalDataStore.initialized = true;

  // Setup stylesheet
  const modalStyle = document.createElement("style");
  modalStyle.innerHTML = `
#${id} {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}
`;
  document.head.appendChild(modalStyle);
}
