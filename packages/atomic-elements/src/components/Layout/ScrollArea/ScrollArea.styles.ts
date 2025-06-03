import styled from "styled-components";

export const ScrollAreaWrapper = styled.div`
  button.aje-btn--scrollbar {
    --size-md-x: 24px;
    --size-md-y: 24px;
    --btn-icon-size: 3rem;
    --btn-pressed-transform: none;
    --btn-text-clr: var(--scrollarea-btn-clr);
    --btn-bg-clr: transparent;
    --btn-hover-text-clr: var(--scrollarea-btn-clr);
    --btn-hover-bg-clr: var(--scrollarea-track-clr);
    --btn-border: transparent;
  }
`;

export const ScrollAreaContent = styled.div`
  overflow: auto;

  /* Firefox */
  scrollbar-width: none;

  /* WebKit browsers */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ScrollAreaScrollbarTrack = styled.div`
  position: relative;
  flex: 1;

  &::before {
    content: "";
    position: absolute;
    border-radius: 2px;
    background-color: var(--scrollarea-track-clr);
  }

  &[data-orientation="horizontal"] {
    height: 20px;
    width: 100%;

    &::before {
      top: 50%;
      translate: 0 -50%;
      height: 4px;
      width: 100%;
    }
  }

  &[data-orientation="vertical"] {
    width: 20px;
    flex: 1;
    min-height: 0;

    &::before {
      left: 50%;
      translate: -50% 0;
      width: 4px;
      height: 100%;
    }
  }
`;

export const ScrollAreaScrollbarThumb = styled.div`
  position: absolute;
  outline: none;

  &::before {
    content: "";
    position: absolute;
    background: var(--scrollarea-thumb-clr);
    border-radius: 99999px;
    inset: 8px;
    transition: inset 0.2s ease;
    cursor: pointer;
  }

  &:hover::before,
  &[data-active="true"]::before {
    background: var(--scrollarea-thumb-clr-hover);
  }

  &:focus-visible {
    outline: var(--outline);
    outline-offset: 1px;
    border-radius: 99999px;
  }

  &[aria-orientation="horizontal"] {
    height: 20px;
    top: 50%;
    transform: translateY(-50%);

    &::before {
      inset: 2px 0px;
    }

    &:hover::before,
    &:focus-visible::before,
    &[data-active="true"]::before {
      inset: 0px 0px;
    }
  }

  &[aria-orientation="vertical"] {
    width: 20px;
    left: 50%;
    transform: translateX(-50%);

    &::before {
      inset: 0px 2px;
    }

    &:hover::before,
    &:focus-visible::before,
    &[data-active="true"]::before {
      inset: 0px 0px;
    }
  }
`;
