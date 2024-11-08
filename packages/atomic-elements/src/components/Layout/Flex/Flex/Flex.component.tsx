import { RenderBaseProps } from "../../../../types";
import { FlexBoxProperties } from "./Flex.types";
import { FlexBox } from "./Flex.styles";
import { useRenderProps } from "@hooks";

export interface FlexProps extends FlexBoxProperties, RenderBaseProps<never> {
  as?: React.ElementType;
  id?: string;
}

/** Layout managed by flexbox. Contains multiple FlexItems */
export function Flex(props: FlexProps) {
  const { as, id, ...attrs } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-flex",
    ...props,
  });

  return (
    <FlexBox id={id} as={as} $attrs={attrs} {...renderProps}>
      {renderProps.children}
    </FlexBox>
  );
}
