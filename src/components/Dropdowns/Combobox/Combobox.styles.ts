import styled from "styled-components";
import mixins from "../../../styles/mixins";
import { DropdownWrapper } from "../Dropdowns.styles";
import { VirtualInput } from "../../Atoms/Field";

export const ComboboxWrapper = styled(DropdownWrapper)`
  ${mixins.SizingX}
  ${mixins.FieldStatus}
`;

export const ComboboxVirtualInput = styled(VirtualInput)`
  padding-left: 0px;

  input {
    padding-left: var(--input-padding-horiz);
  }
`;
