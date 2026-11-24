import React from "react";
import { ErrorMessage, Label, Message } from "../Fields";
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
          <Label>{label}</Label>
        </FloatingLabelWrapper>
        {message && <Message>{message}</Message>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </>
    );
  }

  return (
    <>
      {label && <Label>{label}</Label>}
      {message && <Message>{message}</Message>}
      {children}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
}

export default FloatingFieldInputWrapper;
