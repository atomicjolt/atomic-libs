import mixins from "@styles/mixins";
import styled from "styled-components";

export const StyledLink = styled.a`
  ${mixins.Regular}

  color: var(--link-text-clr);
  background-color: var(--link-bg-clr);
  text-decoration: var(--link-text-decoration);

  &:hover {
    color: var(--link-hover-text-clr);
    background-color: var(--link-hover-bg-clr);
  }
`;
