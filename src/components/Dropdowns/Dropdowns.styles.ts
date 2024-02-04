import styled from "styled-components";
import mixins from "../../styles/mixins";
import { ComponentWrapper, ComponentWrapperProps } from "../../styles/utils";

export const DropdownWrapper = styled(ComponentWrapper)<ComponentWrapperProps>`
  ${mixins.SizingsX}

  button {
    &.is-active {
      transform: translateY(0px);
    }
  }

  &.is-auto {
    width: auto;
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
    --floating-label-clr: var(--text-clr-alt);

    label {
      --floating-font-size: 1.5rem;
      --dropdown-bg-clr: var(--neutral50);
      --floating-label-clr: var(--text-clr);
      ${mixins.Regular}

      z-index: 2;
      position: absolute;
      transform: translateY(60%);
      color: var(--floating-label-clr);
      text-align: center;
      transition: 200ms ease;
      font-size: var(--floating-font-size);
      pointer-events: none;
      padding: 1px 4px;
      top: 0px;
      left: 1em;
    }

    &.has-selection {
      label {
        --floating-font-size: 1.4rem;
        transform: translateY(-50%);
        background-color: var(--dropdown-bg-clr);
      }
    }

    /* .aje-dropdown__input {
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
    } */
  }
`;
