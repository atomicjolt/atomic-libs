import styled from "styled-components";
import mixins from "../../styles/mixins";
import { ComponentWrapper } from "../../styles/utils";

// TODO: consider if we want all these styled compiled together like this

export const InputWrapper = styled(ComponentWrapper)`
  &.is-small {
    input,
    select,
    .aje-input__date-segments {
      width: var(--input-width-sm, 100px);
    }

    textarea {
      min-height: var(--textarea-height-sm);
    }
  }
  &.is-medium {
    input,
    select,
    .aje-input__date-segments {
      width: var(--input-width-md, 200px);
    }
    textarea {
      min-height: var(--textarea-height-md);
    }
  }
  &.is-large {
    input,
    select,
    .aje-input__date-segments {
      width: var(--input-width-lg, 300px);
    }

    textarea {
      min-height: var(--textarea-height-lg);
    }
  }
  &.is-full {
    .aje-input__select,
    .aje-input__date-segments {
      width: 100%;
    }
  }
  &.is-auto {
    input,
    select,
    .aje-input__date-segements {
      max-width: none;
      width: auto;
    }
  }

  ${mixins.InputWrapper}
`;

export const Input = styled.input`
  ${mixins.Regular}
  ${mixins.InputLike}

  &:read-only {
    border-color: var(--neutral100);
    --input-bg-clr: var(--neutral100);
  }
`;

export const ChooseInputWrapper = styled.label`
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
  font-size: var(--choose-label-text-size);
  line-height: 1.5;
  color: var(--text-clr);
  padding-top: var(--choose-label-padding-top);
  padding-left: var(--choose-label-padding-left);
  min-height: var(--choose-label-height);

  &:before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: var(--choose-check-size);
    height: var(--choose-check-size);
    box-sizing: border-box;
    background-color: var(--choose-check-bg-clr);
    border: 2px solid var(--choose-check-border-clr);
  }
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;
