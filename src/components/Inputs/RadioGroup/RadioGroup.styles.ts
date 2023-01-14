import styled from "styled-components";
import mixins from "../../../styles/mixins";
import { ChooseInputWrapper } from "../Inputs.styles";

export const FieldSet = styled.div`
  padding: 0;
  border: none;

  & > .aje-label {
    padding-bottom: 12px;
  }

  .aje-radio + .aje-radio {
    margin-top: 12px;
  }
`;

export const RadioWrapper = styled(ChooseInputWrapper)`
  --unchecked: var(--neutral600);
  --checked: var(--primary700);

  input[type="radio"] + .aje-checkbox__label:before {
    border-radius: 50%;
  }

  input[type="radio"]:checked ~ .aje-checkbox__label {
    &:before {
      border-color: var(--checked);
    }
    &:after {
      display: block;
      top: 7px;
      left: 7px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: var(--checked);
    }
  }

  //Disabled states
  input[type="radio"]:disabled ~ .aje-checkbox__label:after,
  input[type="radio"]:disabled ~ .aje-checkbox__label {
    cursor: auto;
    opacity: 0.5;
  }
`;
