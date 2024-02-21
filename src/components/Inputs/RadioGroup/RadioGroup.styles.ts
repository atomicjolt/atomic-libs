import styled from "styled-components";
import { ChooseInputWrapper } from "../Inputs.styles";

export const FieldSet = styled.fieldset`
  padding: 0;
  border: none;

  &.is-disabled {
    opacity: 0.5;
  }

  & > .aje-label {
    padding-bottom: 12px;
  }

  .aje-radio + .aje-radio {
    margin-top: 12px;
  }
`;

export const RadioWrapper = styled(ChooseInputWrapper)`
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
      left: 7px;
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
