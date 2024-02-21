import React, { useRef } from "react";
import { AriaModalOverlayProps, Overlay, useModalOverlay } from "react-aria";
import {
  OverlayTriggerProps,
  OverlayTriggerState,
  useOverlayTriggerState,
} from "react-stately";
import { useVariantClass } from "../../../hooks";
import { HasClassName } from "../../../types";
import { ModalBackground, ModalWrapper } from "./BasicModal.styles";
import classNames from "classnames";

export interface BaseModalProps extends HasClassName, OverlayTriggerProps {
  children?: React.ReactNode;
  /** Centers the modal within the viewport */
  centered?: boolean;
}

export interface BasicModalProps extends BaseModalProps {
  variant?: string;
}

/** The most basic Modal that atomic-element offers. Makes no assumptiosn or enforcements on how / where
 * the content of the modal should be rendered.
 *
 * Unless you absolutely need to, you are probably better served using one of the other modals provided
 */
export default function BasicModal(props: BasicModalProps) {
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
