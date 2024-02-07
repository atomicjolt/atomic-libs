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
  Hidden: css`
    &.aje-hidden {
      position: absolute;
      left: -10000px;
      top: auto;
      width: 1px;
      height: 1px;
      overflow: hidden;
    }
  `,
  Unselectable: css`
    user-select: none;
  `,
  HideScrollbar: css`
    /* Chrome */
    ::-webkit-scrollbar {
      display: none;
    }

    /* IE / Edge */
    -ms-overflow-style: none;
    /* Firefox */
    scrollbar-width: none;
  `,
  InputWrapper: css`
    &.is-required {
      label::after {
        content: " *";
      }
    }

    &.has-error {
      --input-outline: 1px solid var(--error-clr);
    }

    &.is-disabled {
      opacity: 0.5;
    }
  `,

  InputLike: css`
    border: var(--input-border);
    border-radius: var(--input-border-radius);
    min-height: var(--input-height);
    width: 100%;
    padding: 0 var(--input-padding-horiz);
    font-size: var(--input-font-size);
    color: var(--input-text-clr);
    background-color: var(--input-bg-clr);
    text-align: left;

    &:focus,
    &:focus-within {
      --input-border-color: var(--outline-clr-primary);
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
};

export default mixins;
