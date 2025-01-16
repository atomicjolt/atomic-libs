import { css } from "styled-components";

const Sizing = css`
  &.is-small {
    --size-x: var(--size-sm-x);
    --size-y: var(--size-sm-y);
  }

  &.is-medium {
    --size-x: var(--size-md-x);
    --size-y: var(--size-md-y);
  }

  &.is-large {
    --size-x: var(--size-lg-x);
    --size-y: var(--size-lg-y);
  }

  &.is-full {
    --size-x: var(--size-full-x);
    --size-y: var(--size-full-y);
  }

  &.is-auto {
    --size-x: auto;
    --size-y: auto;
  }
`;

const mixins = {
  Bold: css`
    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
  `,
  Regular: css`
    font-family: var(--font-family);
    font-weight: var(--font-weight-regular);
  `,
  FieldStatus: css`
    &[data-required] {
      label::after {
        content: " *";
      }
    }

    &[data-invalid] {
      --input-outline: 1px solid var(--error-clr);
    }

    &[data-disabled] {
      opacity: 0.5;
    }

    &[data-readonly] {
      --input-border-clr: var(--neutral100);
      --input-bg-clr: var(--neutral100);
    }
  `,
  InputLike: css`
    border-style: var(--input-border-style);
    border-width: var(--input-border-width);
    border-color: var(--input-border-clr);
    border-radius: var(--input-border-radius);
    min-height: var(--input-height);
    padding: 0 var(--input-padding-horiz);
    font-size: var(--input-font-size);
    color: var(--input-text-clr);
    background-color: var(--input-bg-clr);
    text-align: left;

    i {
      color: var(--input-icon-clr);
    }

    &:focus,
    &:focus-within {
      --input-border-clr: var(--outline-clr-primary);
      outline: var(--input-outline);
    }
  `,
  Sizing,
  SizingX: css`
    ${Sizing}
    width: var(--size-x);
  `,
  SizingY: css`
    ${Sizing}
    height: var(--size-y);
  `,
  FocusVisible: (oultineOffset: number = 0) => css`
    &:focus-visible {
      outline: none;
    }

    &[data-focus-visible="true"] {
      outline: var(--outline);
      outline-offset: ${oultineOffset}px;
    }
  `,
  ToggleInputLike: css`
    display: block;

    :is(input):focus-visible ~ .aje-checkbox__label:before {
      outline: var(--outline);
      outline-offset: 2px;
    }

    :is(input):focus:not(:focus-visible) {
      outline: none;
    }

    &[data-invalid] span::before {
      border-color: var(--error700);
    }
  `,
  Border: (prefix: string, style: string = "solid") => css`
    border-width: var(--${prefix}-border-width);
    border-color: var(--${prefix}-border-clr);
    border-style: var(--${prefix}-border-style, ${style});
    border-radius: var(--${prefix}-border-radius, 0);
  `,
};

export default mixins;
