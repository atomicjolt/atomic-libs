import styled from "styled-components";
import { Input } from "../Inputs.styles";

export const StyledSearchInput = styled(Input).attrs({ type: "search" })`
  --input-width-sm: 100px;
  --input-width-md: 200px;
  --input-width-lg: 300px;
`;
