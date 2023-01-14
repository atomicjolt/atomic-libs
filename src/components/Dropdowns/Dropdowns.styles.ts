import styled from "styled-components";
import mixins from "../../styles/mixins";
import { ComponentWrapper, ComponentWrapperProps } from "../../styles/utils";

export const Wrapper = styled(ComponentWrapper)<ComponentWrapperProps>`
  &.is-small {
    --combobox-width: 100px;
  }
  &.is-medium {
    --combobox-width: 200px;
  }
  &.is-large {
    --combobox-width: 300px;
  }
  &.is-full {
    --combobox-width: 100%;
  }
  &.is-auto {
    --combobox-width: none;
    .aje-combobox {
      display: inline-block;
    }
    .aje-combobox__input {
      width: auto;
    }
  }

  &.has-error {
    .aje-combobox__input {
      border-color: var(--error700);

      &:focus {
        outline-color: var(--error700);
      }
    }
  }

  &.is-disabled {
    opacity: 0.5;
  }

  &.is-required {
    label.aje-label {
      &::after {
        content: " *";
      }
    }
  }

  &.aje-dropdown--floating {
    --dropdown-height: 48px;
    --dropdown-padding: 8px;
    --dropdown-bg-clr: var(--neutral50);

    --floating-font-size: 1.6rem;
    --floating-label-clr: var(--text-clr-alt);

    label {
      --floating-font-size: 1.3rem;
      --dropdown-bg-clr: var(--neutral50);
      --floating-label-clr: var(--text-clr);

      ${mixins.Regular}
      position: absolute;
      transform: translateY(-50%);
      background-color: var(--dropdown-bg-clr);
      color: var(--floating-label-clr);
      text-align: center;
      transition: 200ms ease;
      font-size: var(--floating-font-size);
      pointer-events: none;
      padding: 1px 4px;
      top: 0px;
      left: 1em;
    }

    .aje-dropdown__input {
      box-shadow: 0 0 0 1px var(--dropdown-border-clr);
      --dropdown-bg-clr: var(--neutral50);
    }

    .aje-dropdown__input:focus {
      --dropdown-border-clr: var(--primary700);
      --dropdown-bg-clr: var(--neutral50);
      box-shadow: 0 0 0 1px var(--dropdown-border-clr);
      outline: none;
    }
    .aje-dropdown__input:hover {
      --dropdown-border-clr: var(--neutral500);
      box-shadow: 0 0 0 1px var(--dropdown-border-clr);
    }
    .aje-dropdown__input:focus:hover {
      --dropdown-border-clr: var(--primary800);
      box-shadow: 0 0 0 1px var(--dropdown-border-clr);
    }
    .aje-dropdown__input:focus ~ label {
      --floating-label-clr: var(--text-clr);
    }

    &.has-error {
      --dropdown-border-clr: var(--error700);

      .aje-dropdown__input ~ label,
      .aje-dropdown__input:focus ~ label {
        --floating-label-clr: var(--error800);
      }
    }
  }
`;

export const DropdownWrapper = styled.div`
  position: relative;
  max-width: var(--combobox-width, auto);
  color: var(--text-clr);
`;

export const DropdownInputWrapper = styled.div`
  ${mixins.Regular}
  position: relative;
  border: 1px solid;
  border-color: var(--dropdown-border-clr);
  border-radius: var(--dropdown-border-radius);
  height: var(--dropdown-height);
  padding: var(--dropdown-padding) var(--dropdown-padding-right)
    var(--dropdown-padding) var(--dropdown-padding-left);
  color: var(--dropdown-text-clr);
  background-color: var(--dropdown-bg-clr);
  font-size: var(--dropdown-text-size);
  line-height: 1.5;
  color: inherit;
  display: inline-flex;
  align-items: center;
  width: 100%;
  cursor: pointer;

  &.is-searchable {
    padding: 0;
    overflow: hidden;

    &::after {
      content: "\e8b6";
    }
  }

  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &::after {
    content: "\\E5C5";
    font-family: "Material Icons";
    position: absolute;
    right: var(--dropdown-icon-gap);
    top: var(--dropdown-icon-gap);
    font-size: var(--dropdown-icon-size);
    line-height: 1;
    color: var(--dropdown-icon-clr);
    pointer-events: none;
  }

  &:focus,
  &:focus-within {
    outline: var(--input-outline);
    border-color: var(--outline-clr-primary);
  }
`;

export const DropdownInput = styled.input`
  ${mixins.Regular}
  border: none;
  background-color: var(--dropdown-bg-clr);
  min-height: var(--dropdown-input-height);
  padding: 0 var(--dropdown-padding-right) 0 var(--dropdown-padding-left);
  color: inherit;
  font-size: inherit;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export const DropdownMenu = styled.ul`
  overflow-y: auto;
  max-height: var(--menu-max-height);
  top: 100%;
  left: 0;
  border-radius: var(--menu-border-radius);
  background-color: var(--menu-bg-clr);
  padding: var(--menu-padding-top) 0;
  margin: 0;
  z-index: 100;
  box-shadow: var(--menu-box-shadow);

  &.is-multiselect {
    .aje-combobox__option + .aje-combobox__option {
      border-top: 1px solid var(--option-border-clr);
    }
  }
`;

export const DropdownOption = styled.li`
  ${mixins.Regular}
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--option-icon-gap);
  padding: var(--option-padding) var(--option-padding-horizontal);
  min-height: var(--option-height);
  line-height: 1;
  color: var(--option-text-clr);
  font-size: var(--option-font-size);
  background-color: var(--option-bg-clr);

  i {
    font-size: var(--option-icon-size);
    color: var(--option-icon-clr);
  }

  &::after {
    content: "";
    position: absolute;
    right: var(--option-padding-horizontal);
    top: 50%;
    transform: translateY(-50%);
    font-family: "Material Icons";
    font-size: var(--option-icon-size);
    color: var(--option-selected-clr);
  }

  &:hover {
    --option-bg-clr: var(--neutral100);
    cursor: pointer;
  }
  &:active {
    --option-bg-clr: var(--neutral200);
  }

  &[aria-selected="true"] {
    --option-selected-clr: var(--primary700);
    padding-right: calc(
      var(--option-icon-size) + var(--option-padding-horizontal) +
        var(--option-padding)
    );

    &::after {
      content: "\\e5ca";
    }
  }

  &.is-focused {
    --option-bg-clr: var(--primary700);
    --option-text-clr: var(--text-clr-inverted);
    --option-icon-clr: var(--text-clr-inverted);
    --option-selected-clr: var(--text-clr-inverted);
  }
`;
