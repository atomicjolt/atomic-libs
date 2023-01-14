import styled from "styled-components";
import mixins from "../../styles/mixins";
import { ComponentWrapper } from "../../styles/utils";

export const InputWrapper = styled(ComponentWrapper)`
  &.is-small {
    input,
    select {
      width: var(--input-width-sm, 100px);
    }
    textarea {
      min-height: var(--textarea-height-sm);
    }
  }
  &.is-medium {
    input,
    select {
      width: var(--input-width-md, 200px);
    }
    textarea {
      min-height: var(--textarea-height-md);
    }
  }
  &.is-large {
    input,
    select {
      width: var(--input-width-lg, 300px);
    }
    textarea {
      min-height: var(--textarea-height-lg);
    }
  }
  &.is-full {
    .aje-input__select {
      width: 100%;
    }
  }
  &.is-auto {
    input,
    select {
      max-width: none;
      width: auto;
    }
  }

  &.has-error {
    input,
    select {
      --input-border-color: var(--error700);

      &:focus {
        outline-color: var(--error700);
      }
    }
  }

  &.is-disabled {
    opacity: 0.5;
  }

  &.is-required {
    label::after {
      content: " *";
    }
  }
`;

export const Input = styled.input`
  ${mixins.Regular}
  border: var(--input-border);
  border-radius: var(--input-border-radius);
  min-height: var(--input-height);
  width: 100%;
  padding: 0 var(--input-padding-horiz);
  font-size: var(--input-font-size);
  color: var(--input-text-clr);
  background-color: var(--input-bg-clr);
  text-align: left;

  &:read-only {
    border-color: var(--neutral100);
    --input-bg-clr: var(--neutral100);
  }
  &:focus {
    --input-border-color: var(--outline-clr-primary);
    outline: var(--input-outline);
  }
`;

export const ChooseInputWrapper = styled.label`
  // TODO: move these
  --unchecked: var(--neutral600);
  --checked: var(--primary700);
  --check-border-clr: var(--unchecked);
  --check-bg-clr: none;
  --check-size: 20px;
  --label-text-size: 1.6rem;
  --label-padding-top: 0;
  --label-padding-left: 32px;
  --label-height: 24px;

  display: block;

  :is(input):focus-visible ~ .aje-checkbox__label:before {
    outline: var(--outline);
    outline-offset: 2px;
  }

  :is(input):focus:not(:focus-visible) {
    outline: none;
  }

  &.has-error span::before {
    border-color: var(--error700);
  }
`;

export const ChooseInput = styled.input`
  opacity: 0;
  margin: 0;
  height: 0.01rem;
  width: 0.01rem;
  position: absolute;
`;

export const ChooseLabel = styled.span`
  ${mixins.Regular}
  display: inline-block;
  cursor: pointer;
  position: relative;
  font-size: var(--label-text-size);
  line-height: 1.5;
  color: var(--text-clr);
  padding-top: var(--label-padding-top);
  padding-left: var(--label-padding-left);
  min-height: var(--label-height);

  &:before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: var(--check-size);
    height: var(--check-size);
    box-sizing: border-box;
    background-color: var(--check-bg-clr);
    border: 2px solid var(--check-border-clr);
  }
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;
