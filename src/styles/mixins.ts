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
};
