import styled from "styled-components";
import mixins from "../../styles/mixins";
import { MarginProps, margins } from "@styles/layout";

export const StyledBanner = styled.div`
  ${mixins.Bold}
  border-radius: var(--banner-border-radius);
  background-color: var(--banner-bg-clr);
  padding: 4px;
  margin-bottom: 4px;
  font-size: 1.4rem;
  color: var(--banner-text-clr);
  display: flex;
  align-items: flex-start;
  gap: 4px;

  /** Legacy support for icons rendered directly inside a Banner.
   * Prefer \`Banner.Icon\`, which aligns the icon with the Banner's buttons */
  & > i {
    height: var(--banner-btn-size);
    width: var(--banner-btn-size);
    display: grid;
    place-items: center;
    color: var(--banner-icon-clr);
  }

  &.aje-banner {
    &--error {
      --banner-bg-clr: var(--error-clr-hover);
      --banner-text-clr: var(--text-clr-on-accent);
      --banner-icon-clr: var(--text-clr-on-accent);
      --banner-btn-hover-clr: var(--error-clr-active);
      --banner-btn-active-clr: var(--error-clr-active);
    }

    &--warning {
      --banner-bg-clr: var(--warning-clr-subtle);
      --banner-text-clr: var(--text-clr);
      --banner-icon-clr: var(--warning-clr);
      --banner-btn-hover-clr: var(--warning-clr-subtle-hover);
      --banner-btn-active-clr: var(--warning-clr-subtle-active);
    }

    &--info {
      --banner-bg-clr: var(--info-clr-subtle);
      --banner-text-clr: var(--text-clr);
      --banner-icon-clr: var(--info-clr-solid-hover);
      --banner-btn-hover-clr: var(--info-clr-subtle-hover);
      --banner-btn-active-clr: var(--info-clr-subtle-active);
    }

    &--success {
      --banner-bg-clr: var(--success-clr-subtle);
      --banner-text-clr: var(--text-clr);
      --banner-icon-clr: var(--success-clr);
      --banner-btn-hover-clr: var(--success-clr-subtle-hover);
      --banner-btn-active-clr: var(--success-clr-subtle-active);
    }
  }

  .aje-btn--banner {
    border: none;
    background: none;
    width: var(--banner-btn-size);
    height: var(--banner-btn-size);
    border-radius: var(--banner-border-radius);
    color: var(--banner-text-clr);
    display: grid;
    place-items: center;
    transition: background 100ms ease;

    i {
      transition: color 100ms ease;
    }

    &.is-active {
      transform: translateY(0px);
    }

    &:hover {
      color: var(--banner-text-clr);
      background-color: var(--banner-btn-hover-clr);
      cursor: pointer;
    }
    &:active {
      background-color: var(--banner-btn-active-clr);
    }
    &:focus-visible {
      outline: var(--outline);
      outline-offset: 2px;
    }
  }
`;

export const StyledBannerIcon = styled.div`
  height: var(--banner-btn-size);
  width: var(--banner-btn-size);
  display: grid;
  place-items: center;
  color: var(--banner-icon-clr);
`;

export const BannerContent = styled.div<MarginProps>`
  ${margins}
  flex: 1;
  padding: 10px 0;
  line-height: 1.4;
`;

export const BannerDismiss = styled.button`
  border: none;
  background: none;
  width: var(--banner-btn-size);
  height: var(--banner-btn-size);
  border-radius: var(--banner-border-radius);
  color: var(--banner-text-clr);
  display: grid;
  place-items: center;
  transition: background 100ms ease;

  i {
    transition: color 100ms ease;
  }

  &:hover {
    color: var(--banner-text-clr);
    background-color: var(--banner-btn-hover-clr);
    cursor: pointer;
  }
  &:active {
    background-color: var(--banner-btn-active-clr);
  }
  &:focus-visible {
    outline: var(--outline);
    outline-offset: 2px;
  }
`;
