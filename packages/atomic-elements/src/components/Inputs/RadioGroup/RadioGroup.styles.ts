import styled from "styled-components";
import { DirectionProps } from "../../../types";
import mixins from "@styles/mixins";
import { direction } from "@styles/utils";

export const RadioLabel = styled.span<DirectionProps>`
  ${mixins.Regular}
  display: inline-block;
  cursor: pointer;
  position: relative;
  line-height: 1.5;

  font-size: var(--radio-label-font-size);
  color: var(--radio-text-clr);
  min-height: var(--radio-label-height);

  ${direction({
    ltr: "padding-left: calc(var(--radio-size) + var(--radio-label-spacing));",
    rtl: "padding-right: calc(var(--radio-size) + var(--radio-label-spacing));",
  })}

  /* :before contains the box in the "radio" */
  &:before {
    content: "";
    position: absolute;
    top: 2px;
    width: var(--radio-size);
    height: var(--radio-size);
    box-sizing: border-box;
    background-color: var(--radio-bg-clr);
    ${mixins.Border("radio", "solid")}
    ${direction({ ltr: "left: 2px", rtl: "right: 2px" })}
  }

  /* :after contains the checkmark in the "radio" */
  &:after {
    content: "";
    position: absolute;
    display: none;
    top: 7px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    ${direction({ ltr: "left: 7px", rtl: "right: 7px" })};
  }
`;

export const RadioWrapper = styled.div<DirectionProps>`
  ${mixins.ToggleInputLike}

  &[data-selected] .aje-checkbox__label {
    &:before {
      border-color: var(--radio-checked);
    }
    &:after {
      display: block;
      background-color: var(--radio-checked);
    }
  }

  &[data-disabled] ${RadioLabel}:after, &[data-disabled] ${RadioLabel} {
    cursor: auto;
    opacity: 0.5;
  }
`;

export const RadioGroupWrapper = styled.fieldset`
  padding: 0;
  border: none;

  &[data-disabled] {
    opacity: 0.5;
  }

  ${RadioWrapper} + ${RadioWrapper} {
    margin-top: 12px;
  }
`;
