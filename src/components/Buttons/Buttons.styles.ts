import styled from "styled-components";
import mixins from "../../styles/mixins";

export const BaseStyledButton = styled.button`
  ${mixins.Bold}
  padding: var(--btn-padding) calc(var(--btn-padding) * 2);
  border-radius: var(--btn-border-radius);
  font-size: var(--btn-font-size);
  min-height: var(--btn-height);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--btn-icon-gap);
  transition: background 100ms ease, color 100ms ease, transform 100ms ease,
    box-shadow 100ms ease;
  color: var(--btn-text-clr);
  background-color: var(--btn-bg-clr);
  border: var(--btn-border, none);
  box-shadow: var(--btn-shadow, none);

  &:hover {
    cursor: pointer;
    color: var(--btn-hover-text-clr);
    background-color: var(--btn-hover-bg-clr);
    box-shadow: var(--btn-hover-shadow);
  }
  &:active {
    transform: translateY(1px);
  }
  &:focus-visible {
    outline: var(--outline);
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &.is-loading {
    position: relative;
    color: transparent;

    .aje-spinner,
    .aje-three-dot-loader {
      --loader-clr: var(--btn-text-clr);
      --loader-size: 1em;
    }
  }

  &.aje-btn--primary {
    --btn-text-clr: var(--text-clr-inverted);
    --btn-bg-clr: var(--primary700);
    --btn-hover-text-clr: var(--btn-text-clr);
    --btn-hover-bg-clr: var(--primary800);
  }

  &.aje-btn--secondary {
    --btn-text-clr: var(--text-clr-alt);
    --btn-bg-clr: var(--neutral100);
    --btn-hover-text-clr: var(--text-clr);
    --btn-hover-bg-clr: var(--neutral200);
    --btn-border: var(--border);
  }

  &.aje-btn--error {
    --btn-text-clr: var(--text-clr-inverted);
    --btn-bg-clr: var(--error700);
    --btn-hover-text-clr: var(--btn-text-clr);
    --btn-hover-bg-clr: var(--error800);
  }

  &.aje-btn--success {
    --btn-text-clr: var(--text-clr-inverted);
    --btn-bg-clr: var(--success700);
    --btn-hover-text-clr: var(--btn-text-clr);
    --btn-hover-bg-clr: var(--success800);
  }

  &.aje-btn--inverted {
    --btn-text-clr: var(--text-clr);
    --btn-bg-clr: var(--neutral50);
    --btn-hover-text-clr: var(--btn-text-clr);
    --btn-hover-bg-clr: var(--btn-bg-clr);
    --btn-hover-shadow: 0 1px 3px hsla(221, 39%, 11%, 0.5);
  }

  &.aje-btn--content {
    --btn-text-clr: var(--text-clr);
    --btn-bg-clr: transparent;
    --btn-hover-text-clr: var(--btn-text-clr);
    --btn-hover-bg-clr: transparent;
    --btn-hover-shadow: none;
  }

  & > i {
    color: inherit;
    font-size: var(--btn-icon-size);
    margin-left: calc(var(--btn-padding) / -2);
  }
`;