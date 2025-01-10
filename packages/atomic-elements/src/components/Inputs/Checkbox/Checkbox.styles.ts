import styled from "styled-components";
import { DirectionProps } from "../../../types";
import mixins from "@styles/mixins";

export const CheckBoxLabel = styled.span<DirectionProps>`
  ${mixins.Regular}
  display: inline-block;
  cursor: pointer;
  position: relative;
  line-height: 1.5;

  font-size: var(--checkbox-label-font-size);
  color: var(--checkbox-text-clr);
  padding-top: var(--checkbox-label-padding-top);
  min-height: var(--checkbox-label-height);

  ${({ $rtl }) =>
    $rtl
      ? "padding-right: var(--checkbox-label-padding-left);"
      : "padding-left: var(--checkbox-label-padding-left);"}

  /* :before contains the box in the "checkbox" */
  &:before {
    content: "";
    position: absolute;
    top: 2px;
    width: var(--checkbox-size);
    height: var(--checkbox-size);
    box-sizing: border-box;
    background-color: var(--checkbox-bg-clr);
    ${mixins.Border("checkbox", "solid")}
    ${({ $rtl }) => ($rtl ? "right: 2px;" : "left: 2px;")}
  }

  /* :after contains the checkmark in the "checkbox" */
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;

export const CheckboxWrapper = styled.div<DirectionProps>`
  ${mixins.ToggleInputLike}

  &[data-selected] ${CheckBoxLabel}, &[data-indeterminate] ${CheckBoxLabel} {
    &:before {
      --checkbox-bg-clr: var(--checkbox-checked);
      --checkbox-border-clr: var(--checkbox-checked);
    }

    &:after {
      display: block;
      border: solid var(--checkbox-icon-clr);
    }
  }

  &[data-selected] ${CheckBoxLabel} {
    &:after {
      top: 5px;
      width: 4px;
      height: 9px;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      ${({ $rtl }) => ($rtl ? "right: 9px;" : "left: 9px;")}
    }
  }

  &[data-indeterminate] ${CheckBoxLabel} {
    &:after {
      top: 3px;
      width: 12px;
      height: 8px;
      border-width: 0 0px 2px 0;
      transform: none;
      ${({ $rtl }) => ($rtl ? "right: 6px;" : "left: 6px;")}
    }
  }

  &[data-disabled] ${CheckBoxLabel}, &[data-disabled] ${CheckBoxLabel}:before {
    cursor: auto;
    opacity: 0.5;
  }
`;
