import React from "react";

import { css } from "@linaria/core";
import { styled } from "@linaria/react";

const wrapper = css`
  background: red;
`;

const Text = styled.p`
  color: ${(props) => props.$color};
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

export default function Aria() {
  return (
    <div className={wrapper}>
      <Text $color="yellow">hi there</Text>
    </div>
  );
}
