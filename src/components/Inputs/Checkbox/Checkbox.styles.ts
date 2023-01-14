import styled from "styled-components";
import { ChooseInputWrapper } from "../Inputs.styles";

export const CheckboxWrapper = styled(ChooseInputWrapper)`
  --check-box-radius: var(--radius);

  input[type="checkbox"] + .aje-checkbox__label:before {
    border-radius: var(--check-box-radius);
  }

  input[type="checkbox"]:checked ~ .aje-checkbox__label {
    &:before {
      --choose-check-bg-clr: var(--choose-checked);
      --choose-check-border-clr: var(--choose-checked);
    }
    &:after {
      display: block;
      top: 5px;
      left: 9px;
      width: 4px;
      height: 9px;
      border: solid var(--neutral50);
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }

  //Disabled states
  input[type="checkbox"]:disabled ~ .aje-checkbox__label,
  input[type="checkbox"]:checked:disabled ~ .aje-checkbox__label:before {
    cursor: auto;
    opacity: 0.5;
  }

  &.is-required::after {
    content: " *";
  }
`;
