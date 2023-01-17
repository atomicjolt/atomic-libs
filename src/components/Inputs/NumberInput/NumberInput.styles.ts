import styled from "styled-components";
import { Input } from "../Inputs.styles";

export const StyledNumberInput = styled(Input).attrs({ type: "number" })`
  --input-width-sm: 80px;
  --input-width-md: 150px;
  --input-width-lg: 200px;
`;
