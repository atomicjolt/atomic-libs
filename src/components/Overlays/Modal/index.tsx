import React, { useContext, useRef } from "react";
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
import { useContextProps } from "../../../hooks/useContextProps";
import { ModalContext } from "./context";
import { OverlayTriggerStateContext } from "../OverlayTrigger/context";

type CloseModal = () => void;
export interface BaseModalProps extends HasClassName, OverlayTriggerProps {
  id?: string;
  children?: React.ReactNode | ((close: CloseModal) => React.ReactNode);

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
  const {
    children,
    centered = false,
    variant = "default",
    className,
    ...rest
  } = useContextProps(ModalContext, props);

  const contextState = useContext(OverlayTriggerStateContext);
  const localState = useOverlayTriggerState(props);
  const state = contextState ?? localState;

  const variantClassName = useVariantClass("aje-modal", variant);

  if (!state.isOpen) {
    return null;
  }

  return (
    <ModalOverlay
      {...rest}
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
          onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          ref={ref}
          id={props.id}
          {...modalProps}
        >
          {typeof children === "function" ? children(state.close) : children}
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
