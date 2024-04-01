import styled from "styled-components";
import { FieldWrapper } from "../../../Internal/FieldWrapper";
import mixins from "../../../../styles/mixins";

export const TimeInputWrapper = styled(FieldWrapper)`
  ${mixins.FieldStatus}
  ${mixins.SizingX}

  --size-sm-x: 230px;
  --size-md-x: 230px;
  --size-lg-x: 400px;
  --input-gap: 0px;
`;
