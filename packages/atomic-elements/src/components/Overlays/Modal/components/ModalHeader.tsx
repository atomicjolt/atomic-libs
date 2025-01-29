import { Flex, FlexProps } from "@components/Layout/Flex";

interface ModalHeaderProps extends FlexProps {}

export function ModalHeader(props: ModalHeaderProps) {
  return <Flex $align="center" $gap="2" {...props} />;
}

ModalHeader.displayName = "Modal.Header";
