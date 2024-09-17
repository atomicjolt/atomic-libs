import { RenderBaseProps } from "../../../../types";
import { FlexBoxItemProperties } from "./FlexItem.types";
import { FlexBoxItem } from "./FlexItem.styles";
import { useRenderProps } from "@hooks";

export interface FlexItemProps
  extends FlexBoxItemProperties,
    RenderBaseProps<never> {
  as?: React.ElementType;
  id?: string;
}

/** Item in a flex box */
export function FlexItem(props: FlexItemProps) {
  const { id, as, ...rest } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-flex__item",
    ...props,
  });

  return (
    <FlexBoxItem as={as} $attrs={rest} {...renderProps}>
      {renderProps.children}
    </FlexBoxItem>
  );
}
