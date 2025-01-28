import { css, Interpolation } from "styled-components";

export const Sizing = css`
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

export const Bold = css`
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
`;

export const Regular = css`
  font-family: var(--font-family);
  font-weight: var(--font-weight-regular);
`;

export const FieldStatus = css`
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
`;

export const InputLike = css`
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
`;

export const SizingX = css`
  ${Sizing}
  width: var(--size-x);
`;

export const SizingY = css`
  ${Sizing}
  height: var(--size-y);
`;

export const FocusVisible = (oultineOffset: number = 0) => css`
  &:focus-visible {
    outline: none;
  }

  &[data-focus-visible="true"] {
    outline: var(--outline);
    outline-offset: ${oultineOffset}px;
  }
`;

export const ToggleInputLike = (element: Interpolation<any>) => {
  return css`
    display: block;

    :is(input):focus-visible ~ ${element}:before {
      outline: var(--outline);
      outline-offset: 2px;
    }

    :is(input):focus:not(:focus-visible) {
      outline: none;
    }

    &[data-invalid] span::before {
      border-color: var(--error700);
    }
  `;
};

export const Border = (prefix: string, { style = "solid" } = {}) => css`
  border-width: var(--${prefix}-border-width);
  border-color: var(--${prefix}-border-clr);
  border-style: var(--${prefix}-border-style, ${style});
  border-radius: var(--${prefix}-border-radius, 0);
`;

const mixins = {
  Bold,
  Regular,
  FieldStatus,
  InputLike,
  Sizing,
  SizingX,
  SizingY,
  FocusVisible,
  ToggleInputLike,
  Border,
};

export default mixins;
