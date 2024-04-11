import styled from "styled-components";
import { ChooseInputWrapper } from "../Inputs.styles";
import { DirectionProps } from "../../../types";

export const CheckboxWrapper = styled(ChooseInputWrapper)<DirectionProps>`
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
      ${({ $rtl }) => ($rtl ? "right: 9px;" : "left: 9px;")}
      width: 4px;
      height: 9px;
      border: solid var(--neutral50);
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }

  input[type="checkbox"][data-indeterminate] ~ .aje-checkbox__label {
    &:before {
      --choose-check-bg-clr: var(--choose-checked);
      --choose-check-border-clr: var(--choose-checked);
    }
    &:after {
      display: block;
      top: 3px;
      ${({ $rtl }) => ($rtl ? "right: 6px;" : "left: 6px;")}
      width: 12px;
      height: 8px;
      border: solid var(--neutral50);
      border-width: 0 0px 2px 0;
      transform: none;
    }
  }

  //Disabled states
  input[type="checkbox"]:disabled ~ .aje-checkbox__label,
  input[type="checkbox"]:checked:disabled ~ .aje-checkbox__label:before {
    cursor: auto;
    opacity: 0.5;
  }
`;
