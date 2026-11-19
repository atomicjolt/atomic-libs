import styled from "styled-components";
import mixins from "@styles/mixins";

export const ChipContent = styled.div`
  ${mixins.Bold}
  display: flex;
  align-items: center;
  min-height: 2.2rem;
  padding: 0.3rem 0.6rem;
  line-height: 1;
  font-size: 1.2rem;
  gap: 0.6rem;

  .aje-btn--chip {
    --btn-height: 2.2rem;
    --btn-padding-horiz: 0;
    --btn-padding-vert: 0;
    --btn-bg-clr: none;
    --btn-hover-bg-clr: var(--chip-btn-hover-bg-clr);
    --btn-pressed-transform: none;
    --btn-border-radius: 0 var(--chip-radius) var(--chip-radius) 0;
    --btn-text-clr: var(--chip-text-clr);
    --btn-hover-text-clr: var(--chip-text-clr);

    width: 2.2rem;
    position: relative;
    isolation: isolate;
    margin-right: -0.6rem;
    margin-top: -0.6rem;
    margin-bottom: -0.6rem;
  }
`;

export const ChipWrapper = styled.div`
  display: inline-block;
  background-color: var(--chip-bg-clr);
  color: var(--chip-text-clr);
  border-radius: var(--chip-radius);
  border: var(--chip-border);
  text-decoration: none;
  cursor: default;

  &.aje-chip--success {
    --chip-bg-clr: var(--success-clr-subtle);
    --chip-border: 1px solid var(--success-clr-subtle-border);
    --chip-hover-bg-clr: var(--success-clr-subtle-hover);
    --chip-btn-hover-bg-clr: var(--success-clr-subtle-hover);
    --chip-text-clr: var(--success-clr-subtle-text);
  }

  &.aje-chip--warning {
    --chip-bg-clr: var(--warning-clr-subtle);
    --chip-text-clr: var(--warning-clr-subtle-text);
    --chip-hover-bg-clr: var(--warning-clr-subtle-hover);
    --chip-btn-hover-bg-clr: var(--warning-clr-subtle-hover);
    --chip-border: 1px solid var(--warning-clr-subtle-border);
  }

  &.aje-chip--danger {
    --chip-bg-clr: var(--error-clr-subtle);
    --chip-text-clr: var(--error-clr-subtle-text);
    --chip-hover-bg-clr: var(--error-clr-subtle-hover);
    --chip-btn-hover-bg-clr: var(--error-clr-subtle-hover);
    --chip-border: 1px solid var(--error-clr-subtle-border);
  }

  &[role="button"]:hover,
  &[aria-selected]:hover,
  &:is(a):hover {
    cursor: pointer;
    --chip-bg-clr: var(--chip-hover-bg-clr);
  }

  /* For some reason, when you click the remove button on a
    chip, the focus moves to the last keyboard-focused element.
    BUT it doesn't set the focus-visible attribute to true.
    So we have to setup the outline twice
  */
  &:focus-visible {
    outline: none;
  }

  &[data-focus-visible="true"] {
    outline: var(--outline);

    &:focus-within {
      outline: var(--outline);
    }
  }

  &[aria-selected="true"] {
    --chip-bg-clr: var(--chip-selected-bg-clr);
    --chip-text-clr: var(--chip-selected-text-clr);
    --chip-hover-bg-clr: var(--chip-selected-hover-bg-clr);
    --chip-btn-hover-bg-clr: var(--chip-selected-hover-bg-clr);

    &:hover {
      --chip-hover-bg-clr: var(--chip-selected-hover-bg-clr);
    }
  }

  &[aria-disabled] {
    opacity: 0.5;

    ${ChipContent} button::hover {
      &::before {
        background-color: var(--background-clr-subtle);
      }
    }
  }
`;
