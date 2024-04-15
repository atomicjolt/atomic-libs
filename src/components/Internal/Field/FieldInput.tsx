import React, { useContext } from "react";
import styled from "styled-components";
import { FieldInputContext } from "./contexts";
import mixins from "../../../styles/mixins";
import { FieldComponentProps } from "../../../types";
import classNames from "classnames";
import { useMultipleDomRefs } from "../../../hooks/useMultipleDomRefs";

/** A styled Input Components */
export const Input = styled.input`
  ${mixins.Regular}
  ${mixins.InputLike}
`;

export interface FieldInputProps
  extends Omit<
    FieldComponentProps<React.InputHTMLAttributes<HTMLInputElement>>,
    "children"
  > {}

/** An Input component that should be nested within a Field */
export const FieldInput = React.forwardRef(function FieldInput(
  props: FieldInputProps,
  providedRef: React.Ref<HTMLInputElement>
) {
  const { as, className, ...rest } = props;
  const { inputProps, ref: contextRef } = useContext(FieldInputContext);

  const ref = useMultipleDomRefs(providedRef, contextRef);

  return (
    <Input
      as={as}
      className={classNames(className)}
      ref={ref}
      {...inputProps}
      {...rest}
    />
  );
});
