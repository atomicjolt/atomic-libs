import styled, { css } from "styled-components";
import mixins from "../../styles/mixins";
import { DirectionProps } from "../../types";
import { NumberField, TextField } from "../Fields";
import { StyledComboInput } from "../Fields/ComboInput";
import { FieldWrapper } from "../Internal/FieldWrapper";

// TODO: consider if we want all these styled compiled together like this

const InputVariants = css`
  &.aje-input--floating {
    --input-height: 48px;
    --input-padding-horiz: 1em;
    --input-bg-clr: var(--neutral100);
    --input-transition: 100ms ease;

    --floating-font-size: 1.6rem;
    --floating-label-clr: var(--text-clr-alt);

    label {
      ${mixins.Regular}
      z-index: 2;
      position: absolute;
      top: 50%;
      left: calc(1em - 4px);
      transform: translateY(-50%);
      background-color: var(--input-bg-clr);
      color: var(--floating-label-clr);
      text-align: center;
      transition: 200ms ease;
      font-size: var(--floating-font-size);
      pointer-events: none;
      padding: 1px 4px;
    }

    input:focus {
      --input-border-clr: var(--primary700);
      --input-bg-clr: var(--neutral50);
      box-shadow: 0 0 0 1px var(--input-border-clr);
      outline: none;
    }

    ${StyledComboInput}:focus-within, &[data-float] {
      --input-bg-clr: var(--neutral50);
      input {
        --input-border-clr: none;
      }
    }

    input:focus ~ label,
    &[data-float] label,
    ${StyledComboInput}:focus-within ~ label {
      top: 0px;
      left: 1em;
      --floating-font-size: 1.3rem;
      --input-bg-clr: var(--neutral50);
      --floating-label-clr: var(--text-clr);
    }

    input:hover {
      --input-border-clr: var(--neutral500);
      box-shadow: 0 0 0 1px var(--input-border-clr);
    }

    ${StyledComboInput} input:hover {
      --input-border-clr: none;
      box-shadow: none;
    }

    &[data-invalid] {
      --input-border-clr: var(--error700);

      input:not(:placeholder-shown) ~ label,
      input:focus ~ label,
      ${StyledComboInput}:focus-within ~ label {
        --floating-label-clr: var(--error800);
      }
    }
  }
`;

export const StyledTextField = styled(TextField)`
  ${InputVariants}
`;

export const StyledNumberField = styled(NumberField)`
  ${InputVariants}
`;

export const ChooseInputWrapper = styled(FieldWrapper)`
  display: block;

  :is(input):focus-visible ~ .aje-checkbox__label:before {
    outline: var(--outline);
    outline-offset: 2px;
  }

  :is(input):focus:not(:focus-visible) {
    outline: none;
  }

  &[data-invalid] span::before {
    border-color: var(--error700);
  }
`;

export const ChooseInput = styled.input`
  opacity: 0;
  margin: 0;
  height: 0.01rem;
  width: 0.01rem;
  position: absolute;
`;

export const ChooseLabel = styled.span<DirectionProps>`
  ${mixins.Regular}
  display: inline-block;
  cursor: pointer;
  position: relative;
  font-size: var(--choose-label-text-size);
  line-height: 1.5;
  color: var(--text-clr);
  padding-top: var(--choose-label-padding-top);
  min-height: var(--choose-label-height);

  ${({ $rtl }) =>
    $rtl
      ? "padding-right: var(--choose-label-padding-left);"
      : "padding-left: var(--choose-label-padding-left);"}

  &:before {
    content: "";
    position: absolute;
    top: 2px;
    ${({ $rtl }) => ($rtl ? "right: 2px;" : "left: 2px;")}
    width: var(--choose-check-size);
    height: var(--choose-check-size);
    box-sizing: border-box;
    background-color: var(--choose-check-bg-clr);
    border: 2px solid var(--choose-check-border-clr);
  }
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;
