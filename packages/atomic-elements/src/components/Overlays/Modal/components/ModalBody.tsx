import { View, ViewProps } from "@components/Layout/View";

interface ModalBodyProps extends ViewProps {}

export function ModalBody(props: ModalBodyProps) {
  return <View $pt="4" $pb="5" {...props} />;
}

ModalBody.displayName = "Modal.Body";
