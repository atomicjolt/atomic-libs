import styled from "styled-components";
import mixins from "../../../styles/mixins";
import { InputWrapper } from "../Inputs.styles";

export const TextInputWrapper = styled(InputWrapper)`
  input[type="text"],
  input[type="password"],
  input[type="email"],
  input[type="tel"] {
    --input-width-sm: 100px;
    --input-width-md: 200px;
    --input-width-lg: 300px;
  }

  &.aje-input--floating {
    --input-height: 48px;
    --input-padding-horiz: 1em;
    --input-bg-clr: var(--neutral100);
    --input-transition: 100ms ease;

    --floating-font-size: 1.6rem;
    --floating-label-clr: var(--text-clr-alt);

    .aje-input__container {
      position: relative;
    }

    label {
      ${mixins.Regular}
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

    input:not(:placeholder-shown) ~ label,
    input:focus ~ label {
      top: 0px;
      left: 1em;
      --floating-font-size: 1.3rem;
      --input-bg-clr: var(--neutral50);
      --floating-label-clr: var(--text-clr);
    }

    input:not(:placeholder-shown) {
      box-shadow: 0 0 0 1px var(--input-border-color);
      --input-bg-clr: var(--neutral50);
    }

    input:focus {
      --input-border-clr: var(--primary700);
      --input-bg-clr: var(--neutral50);
      box-shadow: 0 0 0 1px var(--input-border-color);
      outline: none;
    }
    input:hover {
      --input-border-color: var(--neutral500);
      box-shadow: 0 0 0 1px var(--input-border-color);
    }
    input:focus:hover {
      --input-border-color: var(--primary800);
      box-shadow: 0 0 0 1px var(--input-border-color);
    }
    input:focus ~ label {
      --floating-label-clr: var(--text-clr);
    }

    &.has-error {
      --input-border-color: var(--error700);

      input:not(:placeholder-shown) ~ label,
      input:focus ~ label {
        --floating-label-clr: var(--error800);
      }
    }
  }
`;
