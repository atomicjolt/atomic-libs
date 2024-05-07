import styled from "styled-components"
import mixins from "../../styles/mixins"
import { FieldWrapper } from "../Internal/FieldWrapper"

export const ChipCell = styled.div`
  ${mixins.Regular}
  min-height: 2.2rem;
  padding: 0.3rem 0.6rem;
  line-height: 1;
  font-size: 1.2rem;
  font-weight: var(--font-weight-bold);
  display: flex;
  align-items: center;
  gap: 0.6rem;

  button {
    height: 1.6rem;
    width: 1.6rem;
    padding: 0;
    background: none;
    border: none;
    position: relative;
    isolation: isolate;
    margin-right: -3px;

    i {
      color: var(--chip-text-clr);
    }

    &::before {
      content: "";
      position: absolute;
      inset: -3px;
      border-radius: var(--chip-radius);
      background-color: var(--chip-bg-color);
      z-index: -1;
    }

    &:hover {
      cursor: pointer;
      &::before {
        background-color: var(--chip-btn-hover-bg-clr);
      }
    }
  }
`

export const ChipGroupWrapper = styled(FieldWrapper)`
  ${mixins.FieldStatus}
  ${mixins.SizingX}

  --size-sm-x: 20rem;
  --size-md-x: 30rem;
  --size-lg-x: 40rem;
  --size-full-x: 100%;
`

export const StyledChipGroup = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.4rem;
  padding: 0.8rem 0;
  margin: 0;
`

export const ChipRow = styled.div`
  display: inline-block;
  background-color: var(--chip-bg-clr);
  color: var(--chip-text-clr);
  border-radius: var(--chip-radius);

  &[aria-selected]:hover {
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

    &:hover {
      --chip-hover-bg-clr: var(--chip-selected-hover-bg-clr);
    }
  }

  &[aria-disabled] {
    opacity: 0.5;

    ${ChipCell} button::hover {
      &::before {
        background-color: var(--neutral100);
      }
    }
  }
`
