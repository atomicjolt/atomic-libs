import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  CustomSelect,
  IconButton,
  IconMenu,
  Item,
  SearchInput,
  Section,
  Select,
  TimeInput,
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
      <TimeInput label="Time Input" />
    </div>
  );
}
