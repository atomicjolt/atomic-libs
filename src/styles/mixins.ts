import { css } from "styled-components";

export default {
  Bold: css`
    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
  `,
  Regular: css`
    font-family: var(--font-family);
    font-weight: var(--font-weight-regular);
  `,
  Hidden: css`
    &.aje-hidden {
      position: absolute;
      left: -10000px;
      top: auto;
      width: 1px;
      height: 1px;
      overflow: hidden;
    }
  `,
  Unselectable: css`
    user-select: none;
  `,
  HideScrollbar: css`
    /* Chrome */
    ::-webkit-scrollbar {
      display: none;
    }

    /* IE / Edge */
    -ms-overflow-style: none;
    /* Firefox */
    scrollbar-width: none;
  `,
};
