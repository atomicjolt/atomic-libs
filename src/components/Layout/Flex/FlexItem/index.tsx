import classNames from "classnames";
import { BaseProps } from "../../../../types";
import { FlexBoxItemProperties } from "./FlexItem.types";
import { FlexBoxItem } from "./FlexItem.styles";

export interface FlexItemProps
  extends FlexBoxItemProperties,
    Omit<BaseProps, "size"> {
  children: React.ReactNode;
  as?: React.ElementType;
}

/** Item in a flex box */
export function FlexItem(props: FlexItemProps) {
  const { className, children, id, as, ...rest } = props;
  return (
    <FlexBoxItem
      className={classNames("aje-flex__item", className)}
      as={as}
      $attrs={rest}
    >
      {children}
    </FlexBoxItem>
  );
}
