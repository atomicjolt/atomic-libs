import { Heading, HeadingProps } from "@components/Typography/Heading";

interface ModalTitleProps extends HeadingProps {}

export function ModalTitle(props: ModalTitleProps) {
  return <Heading $size="5" style={{ flexGrow: "1" }} {...props} />;
}

ModalTitle.displayName = "Modal.Title";
