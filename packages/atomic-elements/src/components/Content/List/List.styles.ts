import styled from "styled-components";
import mixins from "@styles/mixins";
import { padding, MarginProps, PaddingProps, margins } from "@styles/layout";

export const ListWrapper = styled.ul<MarginProps>`
  ${mixins.Border("list")}
  ${margins.defaults({ $m: "0" })}
  padding: 0;
  list-style-type: none;
`;

export const ListItemWrapper = styled.li<PaddingProps>`
  ${padding.defaults({ $p: "var(--list-item-padding)" })}

  &[data-divider]:not(:last-child) {
    border-bottom-color: var(--list-border-clr);
    border-bottom-width: var(--list-border-width);
    border-bottom-style: var(--list-border-style);
  }
`;
