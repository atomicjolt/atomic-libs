import { css } from "styled-components";

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
    border: var(--input-border);
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
  SizingX: css`
    &.is-small {
      width: var(--size-sm-x);
    }

    &.is-medium {
      width: var(--size-md-x);
    }

    &.is-large {
      width: var(--size-lg-x);
    }

    &.is-full {
      width: var(--size-full-x);
    }

    &.is-auto {
      width: auto;
    }
  `,
  SizingY: css`
    &.is-small {
      height: var(--size-sm-y);
    }

    &.is-medium {
      height: var(--size-md-y);
    }

    &.is-large {
      height: var(--size-lg-y);
    }

    &.is-full {
      height: var(--size-full-y);
    }
  `,
  Sizing: css`
    &.is-small {
      width: var(--size-sm-x);
      height: var(--size-sm-y);
    }

    &.is-medium {
      width: var(--size-md-x);
      height: var(--size-md-y);
    }

    &.is-large {
      width: var(--size-lg-x);
      height: var(--size-lg-y);
    }

    &.is-full {
      width: var(--size-full-x);
      height: var(--size-full-y);
    }
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
};

export default mixins;
