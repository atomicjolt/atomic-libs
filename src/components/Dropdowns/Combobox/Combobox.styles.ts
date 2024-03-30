import styled from "styled-components";
import mixins from "../../../styles/mixins";
import { DropdownWrapper } from "../Dropdowns.styles";

export const ComboboxWrapper = styled(DropdownWrapper)`
  ${mixins.SizingX}
  ${mixins.InputWrapper}

  &.read-only {
    --input-bg-clr: var(--neutral100);
  }
`;
