import styled from "styled-components";
import mixins from "../../../styles/mixins";

export const StyledTabList = styled.div`
  margin-bottom: calc(var(--tab-border-width) * -1);
  display: flex;
  justify-content: space-between;
`;

export const TabLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const TabInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TabInfo = styled.div`
  font-size: 1.4rem;
`;

export const TabLink = styled.div`
  ${mixins.Regular}
  --tab-bg-clr: var(--background-clr-subtle);

  display: inline-block;
  padding: var(--tab-padding-vert) var(--tab-padding-hori);
  background-color: var(--tab-bg-clr);
  border-radius: var(--tab-radius) var(--tab-radius) 0 0;
  border: 0 solid;
  border-color: var(--tab-border-clr);
  position: relative;
  font-size: 1.6rem;
  text-decoration: none;
  color: var(--tab-text-clr);

  &:hover {
    --tab-text-clr: var(--text-clr);
    --tab-border-clr: var(--border-clr);
    --tab-bg-clr: var(--background-clr-subtle-hover);
    cursor: pointer;
  }

  &:focus-visible {
    outline: var(--outline);
    outline-offset: -1px;
  }

  &[aria-disabled="true"] {
    --tab-bg-clr: var(--background-clr-active);
    --tab-border-clr: transparent;

    &:hover {
      cursor: not-allowed;
    }
  }
`;

export const TabContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  background-color: var(--tab-bg-clr);
  border-top: var(--border);
  min-height: 4px;

  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: var(--outline);
    outline-offset: -2px;
  }
`;

export const TabsWrapper = styled.div`
  &.aje-tabs--default {
    ${TabLink}[aria-selected="true"] {
      --tab-bg-clr: var(--background-clr);
      --tab-text-clr: var(--text-clr);

      border: var(--border);

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
  }

  &.aje-tabs--card {
    --tab-radius: var(--card-radius);
    --tab-bg-clr: var(--card-bg-clr);
    --tab-padding-vert: var(--card-padding);
    --tab-padding-hori: var(--card-padding);
    --tab-radius: var(--card-radius);
    --tab-text-clr: var(--card-text-clr);

    ${TabContentWrapper} {
      border-top: 0px solid transparent;
      padding: var(--tab-padding-vert) var(--tab-padding-hori);
      border-radius: 0 var(--tab-radius) var(--tab-radius) var(--tab-radius);
    }

    ${TabLink} {
      ${mixins.Bold}
      border: none;
      font-size: 1.6rem;
      color: var(--tab-text-clr);
      background: none;
      min-height: 4rem;
      padding: 0.8rem 1.6rem;
      border-radius: var(--tab-radius) var(--tab-radius) 0 0;
      display: inline-flex;
      align-items: center;
      transition: background-color 100ms ease;

      &[aria-selected="true"] {
        background-color: var(--background-clr-subtle);
        color: $text;

        &:hover {
          background-color: var(--background-clr-subtle);
        }

        &::after {
          display: none;
        }
      }

      &:hover {
        background-color: var(--background-clr-hover);
        color: $text;
        cursor: pointer;
      }

      &[aria-disabled="true"] {
        color: var(--text-clr-disabled);
        cursor: not-allowed;

        &:hover {
          background-color: transparent;
        }
      }
    }
  }

  &.aje-tabs--toggle {
    ${TabLinksWrapper} {
      display: flex;
      align-items: center;
      border: 1px solid var(--tab-border-clr);
      background-color: var(--background-clr);
      border-radius: var(--tab-radius);
      padding: 0.4rem;
    }

    ${TabContentWrapper} {
      border-top: 0px solid transparent;
      padding: 0px;
      border-radius: 0 var(--tab-radius) var(--tab-radius) var(--tab-radius);
    }

    ${TabLink} {
      ${mixins.Bold}
      background: none;
      border: none;
      font-size: 1.4rem;
      color: var(--tab-text-clr);
      background: none;
      min-height: 3.2rem;
      padding: 0.6rem 1.6rem;
      border-radius: 0.3rem;
      display: inline-flex;
      align-items: center;
      transition: background-color 100ms ease;

      &[aria-selected="true"] {
        background-color: var(--background-clr-subtle);
        color: var(--text-clr);

        &:hover {
          background-color: var(--background-clr-subtle);
        }
      }

      &:hover {
        background-color: var(--background-clr-hover);
        color: var(--text-clr);
        cursor: pointer;
      }
    }

    ${TabInfo} {
      padding: 0.6rem 1.6rem;
      border-radius: 0.5rem;
      background-color: var(--background-clr);
      min-height: 4rem;
      display: flex;
      align-items: center;
    }
  }
`;
