import styled from "styled-components";
import mixins from "../../../styles/mixins";

export const TabList = styled.div`
  margin-bottom: calc(var(--tab-border-width) * -1);
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const TabLinkWrapper = styled.div`
  position: relative;
`;

export const TabLink = styled.div`
  ${mixins.Regular}
  display: inline-block;
  padding: var(--tab-padding-vert) var(--tab-padding-hori);
  background-color: var(--tab-bg-clr);
  border-radius: var(--tab-radius) var(--tab-radius) 0 0;
  border: var(--tab-border-width) solid;
  border-color: var(--tab-border-clr);
  position: relative;
  font-size: 1.6rem;
  text-decoration: none;
  color: var(--tab-text-clr);

  &[aria-selected="true"] {
    --tab-bg-clr: var(--neutral50);
    --tab-border-clr: var(--border-clr-primary);
    --tab-text-clr: var(--text-clr);

    &::after {
      content: "";
      position: absolute;
      height: calc(var(--tab-border-width) + 2px);
      bottom: -1px;
      left: 0;
      right: 0;
      background-color: var(--tab-bg-clr);
      z-index: 3;
    }
  }

  &:hover {
    --tab-text-clr: var(--text-clr);
    --tab-border-clr: var(--border-clr-primary);
    cursor: pointer;
  }
  &:focus-visible {
    outline: var(--outline);
    outline-offset: -1px;
  }

  &[aria-disabled="true"] {
    --tab-bg-clr: var(--neutral300);
    --tab-border-clr: transparent;

    &:hover {
      cursor: not-allowed;
    }
  }
`;

export const TabContentWrapper = styled.div`
  --tab-bg-clr: var(--neutral50);
  --tab-border-clr: var(--border-clr-primary);

  position: relative;
  z-index: 2;
  background-color: var(--tab-bg-clr);
  border-top: 1px solid var(--tab-border-clr);
  min-height: 4px;

  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: var(--outline);
    outline-offset: -2px;
  }
`;
