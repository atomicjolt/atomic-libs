import React, { LabelHTMLAttributes, useContext } from "react";
import { FieldLabelContext } from "./contexts";
import { FieldComponentProps } from "../../../types";
import styled from "styled-components";
import mixins from "../../../styles/mixins";
import classNames from "classnames";

export const Label = styled.label`
  ${mixins.Bold}
  display: block;
  padding-bottom: 5px;
  font-size: 1.3rem;
  line-height: 1.1;
  color: var(--text-clr);
`;

export interface FieldLabelProps
  extends FieldComponentProps<LabelHTMLAttributes<HTMLLabelElement>> {}

export function FieldLabel(props: FieldLabelProps) {
  const { as, children, className, ...rest } = props;
  const labelProps = useContext(FieldLabelContext);

  return (
    <Label as={as} className={classNames(className)} {...rest} {...labelProps}>
      {children}
    </Label>
  );
}
