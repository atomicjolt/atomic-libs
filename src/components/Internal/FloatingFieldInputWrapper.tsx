import React from "react";
import { FieldErrorMessage, FieldLabel, FieldMessage } from "../Fields";
import { HelpTextProps } from "../../types";
import styled from "styled-components";

const FloatingLabelWrapper = styled.div`
  position: relative;
`;

interface FloatingFieldInputWrapperProps extends HelpTextProps {
  floating?: boolean;
  children: React.ReactNode;
}

export function FloatingFieldInputWrapper(
  props: FloatingFieldInputWrapperProps
) {
  const { children, floating, label, error, message } = props;

  if (floating) {
    return (
      <>
        <FloatingLabelWrapper>
          {children}
          <FieldLabel>{label}</FieldLabel>
        </FloatingLabelWrapper>
        {message && <FieldMessage>{message}</FieldMessage>}
        {error && <FieldErrorMessage>{error}</FieldErrorMessage>}
      </>
    );
  }

  return (
    <>
      {label && <FieldLabel>{label}</FieldLabel>}
      {message && <FieldMessage>{message}</FieldMessage>}
      {children}
      {error && <FieldErrorMessage>{error}</FieldErrorMessage>}
    </>
  );
}

export default FloatingFieldInputWrapper;
