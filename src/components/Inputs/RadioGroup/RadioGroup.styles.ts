import styled from "styled-components";
import { ChooseInputWrapper } from "../Inputs.styles";
import { FieldWrapper } from "../../Internal/FieldWrapper";
import { DirectionProps } from "../../../types";

export const RadioWrapper = styled(ChooseInputWrapper)<DirectionProps>`
  --choose-unchecked: var(--neutral600);
  --choose-checked: var(--primary700);

  input[type="radio"] + .aje-checkbox__label:before {
    border-radius: 50%;
  }

  input[type="radio"]:checked ~ .aje-checkbox__label {
    &:before {
      border-color: var(--choose-checked);
    }
    &:after {
      display: block;
      top: 7px;
      ${({ $rtl }) => ($rtl ? "right: 7px;" : "left: 7px;")}
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: var(--choose-checked);
    }
  }

  //Disabled states
  input[type="radio"]:disabled ~ .aje-checkbox__label:after,
  input[type="radio"]:disabled ~ .aje-checkbox__label {
    cursor: auto;
    opacity: 0.5;
  }
`;

export const RadioGroupWrapper = styled(FieldWrapper)`
  padding: 0;
  border: none;

  &[data-disabled] {
    opacity: 0.5;
  }

  ${RadioWrapper} + ${RadioWrapper} {
    margin-top: 12px;
  }
`;
