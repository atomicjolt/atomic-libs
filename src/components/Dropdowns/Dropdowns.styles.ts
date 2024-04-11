import styled from "styled-components";
import mixins from "../../styles/mixins";
import { FieldWrapper, FieldWrapperProps } from "../Internal/FieldWrapper";

export const DropdownWrapper = styled(FieldWrapper)<FieldWrapperProps>`
  ${mixins.SizingX}
  ${mixins.FieldStatus}

  &[data-invalid] {
    .aje-combobox__input {
      border-color: var(--error700);

      &:focus {
        outline-color: var(--error700);
      }
    }
  }

  &[data-readonly] .aje-btn--dropdown {
    --btn-border-clr: var(--neutral200);
    --btn-bg-clr: var(--neutral200);
  }

  .aje-btn--dropdown {
    --btn-text-clr: var(--text-clr-alt);
    --btn-bg-clr: var(--neutral50);
    --btn-hover-text-clr: var(--text-clr);
    --btn-hover-bg-clr: var(--neutral100);

    // To match the actual select element
    --btn-border: 1px solid var(--input-border-clr);
    padding-right: 8px;

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

  &.aje-dropdown--floating {
    --floating-label-clr: var(--text-clr-alt);

    label {
      ${mixins.Regular}
      --floating-font-size: 1.5rem;
      --dropdown-bg-clr: var(--neutral50);
      --floating-label-clr: var(--text-clr);

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

    &[data-float] {
      label {
        --floating-font-size: 1.4rem;
        transform: translateY(-50%);
        background-color: var(--dropdown-bg-clr);
      }
    }
  }
`;
