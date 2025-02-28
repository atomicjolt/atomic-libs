import classNames from "classnames";
import { Overlay } from "@react-aria/overlays";
import { ModalBackground } from "../Modal.styles";
import { DOMAttributes, FocusableElement } from "@react-types/shared";

interface ModalOverlayProps extends DOMAttributes<FocusableElement> {
  isCentered?: boolean;
}

export function ModalOverlay(props: ModalOverlayProps) {
  const { children, isCentered, ...rest } = props;

  return (
    <Overlay>
      <ModalBackground {...rest} data-placement={isCentered ? "center" : "top"}>
        {children}
      </ModalBackground>
    </Overlay>
  );
}
