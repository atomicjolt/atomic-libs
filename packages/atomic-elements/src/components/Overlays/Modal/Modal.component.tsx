import React, { useContext, useRef } from "react";
import {
  AriaModalOverlayProps,
  Overlay,
  useModalOverlay,
} from "@react-aria/overlays";
import {
  OverlayTriggerProps,
  OverlayTriggerState,
  useOverlayTriggerState,
} from "react-stately";
import { RenderStyleProps } from "../../../types";
import {
  ModalBackground,
  ModalWrapper,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "./Modal.styles";
import classNames from "classnames";
import { useContextPropsV2 } from "../../../hooks/useContextProps";
import { ModalContext } from "./Modal.context";
import { OverlayTriggerStateContext } from "../OverlayTrigger/context";
import { useRenderProps } from "@hooks";
import { filterDOMProps } from "@react-aria/utils";

type CloseModal = () => void;

export interface BaseModalProps
  extends RenderStyleProps<never>,
    OverlayTriggerProps {
  id?: string;
  /** Centers the modal within the viewport */
  centered?: boolean;
}

export interface ModalProps extends BaseModalProps {
  variant?: string;
  children?: React.ReactNode | ((close: CloseModal) => React.ReactNode);
}

/**
 * Modal Component to render content overlayed on top of the page content.
 */
export function Modal(props: ModalProps) {
  let ref = useRef(null);
  [props, ref] = useContextPropsV2(ModalContext, props, ref);

  const { children, centered = false, variant = "default", ...rest } = props;

  const contextState = useContext(OverlayTriggerStateContext);
  const localState = useOverlayTriggerState(props);
  const state = contextState ?? localState;

  if (!state.isOpen) {
    return null;
  }

  return (
    <ModalOverlay state={state} centered={centered} variant={variant} {...rest}>
      {children}
    </ModalOverlay>
  );
}

interface ModalOverlayProps extends BaseModalProps, AriaModalOverlayProps {
  state: OverlayTriggerState;
  children: React.ReactNode | ((close: CloseModal) => React.ReactNode);
  variant?: string;
}

function ModalOverlay(props: ModalOverlayProps) {
  const { children, state, centered } = props;
  const ref = useRef(null);
  const { modalProps, underlayProps } = useModalOverlay(props, state, ref);

  const renderProps = useRenderProps({
    componentClassName: "aje-modal",
    ...props,
  });

  return (
    <Overlay>
      <ModalBackground
        {...underlayProps}
        className={classNames({ "is-centered": centered })}
      >
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
