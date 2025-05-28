import styled, { css } from "styled-components";

interface Props {
  $scollbars?: "horizontal" | "vertical" | "both";
  $hideScrollbars?: boolean;
  $orientation?: "horizontal" | "vertical";
}

export const ScrollAreaWrapper = styled.div<Props>`
  --scrollbar-thumb: var(--neutral300);
  --scrollbar-track: var(--neutral100);
`;

export const ScrollAreaContent = styled.div<Props>`
  overflow: scroll;
  width: 100%;
  height: 100%;
  overflow: auto;

  /* Firefox */
  scrollbar-width: none;

  /* WebKit browsers */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Firefox */
  scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);

  /* WebKit browsers */
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: var(--scrollbar-track);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--scrollbar-thumb);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--neutral500);
  }
`;

export const ScrollAreaScrollbarTrack = styled.div<Props>`
  background: var(--scrollbar-track);
  border-radius: 4px;
  position: relative;

  ${(props) =>
    props.$orientation === "vertical"
      ? css`
          width: 15px;
          height: 100%;
        `
      : css`
          width: 100%;
          height: 15px;
        `}
`;

export const ScrollAreaScrollbarThumb = styled.div<Props>`
  background: var(--scrollbar-thumb);
  border-radius: 4px;
  position: absolute;

  ${(props) =>
    props.$orientation === "vertical"
      ? css`
          width: 8px;
          left: 50%;
          transform: translateX(-50%);
        `
      : css`
          height: 8px;
          top: 50%;
          transform: translateY(-50%);
        `}
`;
