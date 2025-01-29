import React, { useContext, useRef } from "react";
import { AriaModalOverlayProps, useModalOverlay } from "@react-aria/overlays";
import { OverlayTriggerState, useOverlayTriggerState } from "react-stately";
import { useContextProps } from "@hooks/useContextProps";
import { OverlayTriggerStateContext } from "../OverlayTrigger/context";
import { useRenderProps } from "@hooks/useRenderProps";
import { filterDOMProps } from "@react-aria/utils";
import { ModalContext } from "./Modal.context";
import { ModalWrapper } from "./Modal.styles";
import { BaseModalProps, ModalChildren } from "./Modal.types";
import { ModalOverlay } from "./components/ModalOverlay";
import { ModalHeader } from "./components/ModalHeader";
import { ModalTitle } from "./components/ModalTitle";
import { ModalBody } from "./components/ModalBody";
import { ModalFooter } from "./components/ModalFooter";

export interface ModalProps extends BaseModalProps {
  variant?: string;
  children?: ModalChildren;
}

/**
 * Modal Component to render content overlayed on top of the page content.
 */
export function Modal(props: ModalProps) {
  let ref = useRef(null);
  [props, ref] = useContextProps(ModalContext, props, ref);

  const {
    children,
    centered = false,
    isCentered = centered,
    variant = "default",
    ...rest
  } = props;

  const contextState = useContext(OverlayTriggerStateContext);
  const localState = useOverlayTriggerState(props);
  const state = contextState ?? localState;

  if (!state.isOpen) {
    return null;
  }

  return (
    <ModalInternal
      state={state}
      isCentered={isCentered}
      variant={variant}
      {...rest}
    >
      {children}
    </ModalInternal>
  );
}

interface ModalInternalProps extends BaseModalProps, AriaModalOverlayProps {
  state: OverlayTriggerState;
  children: ModalChildren;
  variant?: string;
}

function ModalInternal(props: ModalInternalProps) {
  const { children, state, isCentered } = props;
  const ref = useRef(null);
  const { modalProps, underlayProps } = useModalOverlay(props, state, ref);

  const renderProps = useRenderProps({
    componentClassName: "aje-modal",
    ...props,
  });

  return (
    <ModalOverlay isCentered={isCentered} {...underlayProps}>
      <ModalWrapper
        {...renderProps}
        {...filterDOMProps(props)}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        ref={ref}
        id={props.id}
        {...modalProps}
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
