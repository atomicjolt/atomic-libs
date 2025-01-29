import styled from "styled-components";
import { Button, ButtonProps } from "@components/Buttons/Button";
import { MaterialIcon } from "@components/Icons/MaterialIcon";
import React from "react";

export const StyledButton = styled(Button)`
  justify-content: space-between;
  padding-right: 0.8rem;

  &.aje-btn--dropdown {
    --btn-text-clr: var(--text-clr-alt);
    --btn-bg-clr: var(--neutral50);
    --btn-hover-text-clr: var(--text-clr);
    --btn-hover-bg-clr: var(--neutral100);
    // To match the actual select element
    --btn-border: 1px solid var(--input-border-clr);
    --btn-pressed-transform: translateY(0px);
  }

  &.aje-btn--dropdown-ghost {
    --btn-text-clr: var(--text-clr-alt);
    --btn-bg-clr: var(--neutral50);
    --btn-hover-text-clr: var(--text-clr);
    --btn-hover-bg-clr: var(--neutral100);
    --btn-border: none;
    --btn-pressed-transform: translateY(0px);

    font-weight: normal;
  }
`;

export function DropdownButton(props: ButtonProps) {
  const { variant = "dropdown" } = props;

  return (
    <StyledButton
      {...props}
      variant={
        variant === "ghost"
          ? "dropdown-ghost"
          : variant === "default"
          ? "dropdown"
          : variant
      }
    >
      {props.children as React.ReactNode}
      <MaterialIcon icon="arrow_drop_down" />
    </StyledButton>
  );
}
