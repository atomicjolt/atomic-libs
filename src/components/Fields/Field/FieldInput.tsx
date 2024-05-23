import React, { useContext } from "react";
import { FieldInputContext } from "../contexts";
import classNames from "classnames";
import { useMultipleDomRefs } from "../../../hooks/useMultipleDomRefs";
import { Input, InputProps } from "../Atoms/Input";

export interface FieldInputProps extends InputProps {}

/** An Input component that should be nested within a Field */
export const FieldInput = React.forwardRef(function FieldInput(
  props: FieldInputProps,
  providedRef: React.Ref<HTMLInputElement>
) {
  const { className, ...rest } = props;
  const { inputProps, ref: contextRef } = useContext(FieldInputContext);

  const ref = useMultipleDomRefs(providedRef, contextRef);

  return (
    <Input
      className={classNames(className)}
      ref={ref}
      {...inputProps}
      {...rest}
    />
  );
});
