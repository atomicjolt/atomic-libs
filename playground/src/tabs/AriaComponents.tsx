import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  IconButton,
  IconMenu,
  Item,
  Select,
} from "../elements";
import styled from "styled-components";
import { HasVariant } from "../../../src/types";
import { ButtonVariants } from "../../../src/components/Buttons/Buttons.types";
import classNames from "classnames";

export default function AriaComponents() {
  const [selected, setSelected] = useState<any>("one");

  return (
    <div
      style={{
        padding: "16px",
      }}
    >
      <Select value={selected} onChange={setSelected} label="Label">
        <option value="one">One</option>
        <option value="two">Two</option>
        <option value="three">Three</option>
      </Select>
    </div>
  );
}
