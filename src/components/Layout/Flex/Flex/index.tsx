import { BaseProps } from "@/types";
import { FlexBoxProperties } from "./Flex.types";
import { FlexBox } from "./Flex.styles";
import classNames from "classnames";

export interface FlexProps extends FlexBoxProperties, Omit<BaseProps, "size"> {
  children: React.ReactNode;
  as?: React.ElementType;
}

/** Layout managed by flexbox. Contains multiple FlexItems */
export function Flex(props: FlexProps) {
  const { children, as, className, id, ...attrs } = props;
  return (
    <FlexBox
      className={classNames("aje-flex", className)}
      id={id}
      as={as}
      $attrs={attrs}
    >
      {children}
    </FlexBox>
  );
}
