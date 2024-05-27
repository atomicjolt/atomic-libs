import mixins from "@/styles/mixins";
import styled from "styled-components";

export const StyledLink = styled.a`
  ${mixins.Regular}
  font-size: 1rem;
  --link-text-clr: var(--primary700);
  --link-bg-clr: var(--neutral50);
  --link-hover-text-clr: var(--primary800);
  --link-hover-bg-clr: transparent;

  color: var(--link-text-clr);
  background-color: var(--link-bg-clr);
  text-decoration: underline;

  &:hover {
    color: var(--link-hover-text-clr);
    background-color: var(--link-hover-bg-clr);
  }
`;
