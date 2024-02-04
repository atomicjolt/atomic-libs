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
      --input-outline: 1px solid var(--error700);
    }

    &.is-disabled {
      opacity: 0.5;
    }
  `,

  SizingsX: css`
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
