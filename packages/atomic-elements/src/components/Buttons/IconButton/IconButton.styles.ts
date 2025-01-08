import styled from "styled-components";
import { Button } from '../Button';

export const StyledIconButton = styled(Button)`
  --size-sm-x: 30px;
  --size-sm-y: 30px;
  --size-md-x: 40px;
  --size-md-y: 40px;
  --size-lg-x: 60px;
  --size-lg-y: 60px;

  --btn-height: var(--size-y);
  position: relative;
  height: var(--btn-height);
  width: var(--btn-height);
  padding: 0 0;

  i {
    margin-left: 0;
  }
`;
