import { useContext } from "react";
import { FieldLabelContext } from "../contexts";
import classNames from "classnames";
import { Label, LabelProps } from "../Atoms/Label";

export interface FieldLabelProps extends LabelProps {}

/** A Label component that should be nested within a Field */
export function FieldLabel(props: FieldLabelProps) {
  const { children, className, ...rest } = props;
  const labelProps = useContext(FieldLabelContext);

  return (
    <Label className={classNames(className)} {...rest} {...labelProps}>
      {children}
    </Label>
  );
}
