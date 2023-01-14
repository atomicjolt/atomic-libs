import styled from "styled-components";
import mixins from "../../styles/mixins";

export const Banner = styled.div`
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

  & > i {
    height: var(--banner-btn-size);
    width: var(--banner-btn-size);
    display: grid;
    place-items: center;
    color: var(--banner-icon-clr);
  }

  &.aje-banner {
    &--error {
      --banner-bg-clr: var(--error700);
      --banner-text-clr: var(--text-clr-inverted);
      --banner-icon-clr: var(--text-clr-inverted);
      --banner-btn-hover-clr: var(--error800);
      --banner-btn-active-clr: var(--error900);
    }

    &--warning {
      --banner-bg-clr: var(--warning100);
      --banner-text-clr: var(--text-clr);
      --banner-icon-clr: var(--warning600);
      --banner-btn-hover-clr: var(--warning200);
      --banner-btn-active-clr: var(--warning300);
    }

    &--info {
      --banner-bg-clr: var(--primary100);
      --banner-text-clr: var(--text-clr);
      --banner-icon-clr: var(--primary700);
      --banner-btn-hover-clr: var(--primary200);
      --banner-btn-active-clr: var(--primary300);
    }

    &--upgrade {
      --banner-bg-clr: var(--primary100);
      --banner-text-clr: var(--text-clr);
      --banner-icon-clr: var(--primary700);
    }
  }
`;

export const BannerMain = styled.div`
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
  font-size: 2.4rem;
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
