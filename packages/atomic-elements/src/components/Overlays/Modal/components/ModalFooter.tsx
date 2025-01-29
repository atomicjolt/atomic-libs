import { Flex } from "@components/Layout/Flex";

interface ModalFooterProps {}

export function ModalFooter(props: ModalFooterProps) {
  return <Flex $align="center" $justify="end" $gap="2" {...props} />;
}

ModalFooter.displayName = "Modal.Footer";
