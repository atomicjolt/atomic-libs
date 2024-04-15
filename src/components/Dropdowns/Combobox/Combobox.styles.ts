import styled from "styled-components";
import { VirtualInput } from "../../Fields";

// The popover lines up with the start of the input field, so we want to make sure we don't
// have any padding outside of the input field
export const ComboboxVirtualInput = styled(VirtualInput)`
  padding-left: 0px;

  input {
    padding-left: var(--input-padding-horiz);
  }
`;
