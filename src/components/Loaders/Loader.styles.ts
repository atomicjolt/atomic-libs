import styled from "styled-components";
import mixins from "@styles/mixins";

export const LoaderWrapper = styled.div`
  ${mixins.Sizing}
  --size-sm-x: 10px;
  --size-md-x: 20px;
  --size-lg-x: 30px;
  --animation-clr: var(--loader-clr);

  font-size: var(--size-x);

  &[data-placement="inline"] {
    display: inline-block;
  }

  &[data-placement="block"] {
    display: block;
  }

  &[data-placement="center"] {
    flex-grow: 1;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  &[data-placement="absolute center"] {
    position: absolute;
    display: grid;
    inset: 0;
    place-items: center;
  }
`;

export const LoaderMessage = styled.p`
  ${mixins.Regular}
  font-size: inherit;
  color: var(--text-clr);
`;
