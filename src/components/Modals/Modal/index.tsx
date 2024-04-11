import React, { useRef } from "react";
import { AriaModalOverlayProps, Overlay, useModalOverlay } from "react-aria";
import {
  OverlayTriggerProps,
  OverlayTriggerState,
  useOverlayTriggerState,
} from "react-stately";
import { useVariantClass } from "../../../hooks";
import { HasClassName } from "../../../types";
import {
  ModalBackground,
  ModalWrapper,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "./Modal.styles";
import classNames from "classnames";

export interface BaseModalProps extends HasClassName, OverlayTriggerProps {
  children?: React.ReactNode;
  /** Centers the modal within the viewport */
  centered?: boolean;
}

export interface ModalProps extends BaseModalProps {
  variant?: string;
}

/**
 * Modal Component to render content overlayed on top of the page content.
 */
export function Modal(props: ModalProps) {
  const { children, centered = false, variant = "default", className } = props;
  const state = useOverlayTriggerState(props);
  // const { overlayProps } = useOverlayTrigger({ type: "dialog" }, state);

  const variantClassName = useVariantClass("aje-modal", variant);

  if (!state.isOpen) {
    return null;
  }

  return (
    <ModalOverlay
      {...props}
      state={state}
      className={classNames(className, variantClassName)}
      centered={centered}
    >
      {children}
    </ModalOverlay>
  );
}

interface ModalOverlayProps extends BaseModalProps, AriaModalOverlayProps {
  state: OverlayTriggerState;
}

function ModalOverlay(props: ModalOverlayProps) {
  const { children, state, centered, className } = props;
  const ref = useRef(null);
  const { modalProps, underlayProps } = useModalOverlay(props, state, ref);

  return (
    <Overlay>
      <ModalBackground
        {...underlayProps}
        className={classNames({ "is-centered": centered })}
      >
        <ModalWrapper
          className={classNames("aje-modal", className)}
          onClick={(e) => e.stopPropagation()}
          ref={ref}
          {...modalProps}
        >
          {children}
        </ModalWrapper>
      </ModalBackground>
    </Overlay>
  );
}

ModalHeader.displayName = "Modal.Header";
Modal.Header = ModalHeader;
ModalTitle.displayName = "Modal.Title";
Modal.Title = ModalTitle;
ModalBody.displayName = "Modal.Body";
Modal.Body = ModalBody;
ModalFooter.displayName = "Modal.Footer";
Modal.Footer = ModalFooter;

export default Modal;
