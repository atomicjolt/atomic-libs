import React, { useContext, useRef } from "react";
import { AriaModalOverlayProps, useModalOverlay } from "@react-aria/overlays";
import { OverlayTriggerState, useOverlayTriggerState } from "react-stately";

import { useContextProps } from "@hooks/useContextProps";
import { useRenderProps } from "@hooks/useRenderProps";
import { OverlayTriggerStateContext } from "../OverlayTrigger/context";

import { BaseModalProps, ModalChildren } from "./Modal.types";
import { ModalContext } from "./Modal.context";
import { ModalWrapper } from "./Modal.styles";
import { ModalOverlay } from "./components/ModalOverlay";
import { ModalHeader } from "./components/ModalHeader";
import { ModalTitle } from "./components/ModalTitle";
import { ModalBody } from "./components/ModalBody";
import { ModalFooter } from "./components/ModalFooter";
import { useManageModalScroll } from "./hooks/useManageModalScroll";

export interface ModalProps extends BaseModalProps {
  children?: ModalChildren;
}

/**
 * Modal Component to render content overlayed on top of the page content.
 */
export function Modal(props: ModalProps) {
  let ref = useRef(null);
  [props, ref] = useContextProps(ModalContext, props, ref);

  const { children, centered = false, isCentered = centered, ...rest } = props;

  const contextState = useContext(OverlayTriggerStateContext);
  const localState = useOverlayTriggerState(props);
  const state = contextState ?? localState;

  if (!state.isOpen) {
    return null;
  }

  return (
    <ModalInternal state={state} isCentered={isCentered} {...rest}>
      {children}
    </ModalInternal>
  );
}

interface ModalInternalProps extends BaseModalProps, AriaModalOverlayProps {
  state: OverlayTriggerState;
  children: ModalChildren;
  triggerRef?: React.RefObject<HTMLElement | null>;
}

function ModalInternal(props: ModalInternalProps) {
  const {
    children,
    className,
    style,
    state,
    isCentered,
    isOpen,
    triggerRef,
    ensureVisible,
    ...rest
  } = props;
  const ref = useRef<HTMLDivElement | null>(null);
  const { modalProps, underlayProps } = useModalOverlay(props, state, ref);

  useManageModalScroll(
    {
      ensureVisible,
      modalRef: ref,
      scrollOptions: {
        behavior: "instant",
        block: "end",
        inline: "nearest",
      },
    },
    state
  );

  const renderProps = useRenderProps({
    componentClassName: "aje-modal",
    children,
    className,
    style,
  });

  return (
    <ModalOverlay isCentered={isCentered} {...underlayProps}>
      <ModalWrapper
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        ref={ref}
        data-placement={isCentered ? "center" : "top"}
        {...rest}
        {...modalProps}
        {...renderProps}
      >
        {typeof children === "function" ? children(state.close) : children}
      </ModalWrapper>
    </ModalOverlay>
  );
}

/** Wrapper around Flex to provide some sensible defaults for Modals */
Modal.Header = ModalHeader;

/** Wrapper around Heading to provide some sensible defaults for Modals */
Modal.Title = ModalTitle;

/** Wrapper around View to provide some sensible defaults for Modals */
Modal.Body = ModalBody;

/** Wrapper around Flex to provide some sensible defaults for Modals */
Modal.Footer = ModalFooter;
