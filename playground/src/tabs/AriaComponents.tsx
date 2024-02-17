import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  CustomSelect,
  IconButton,
  IconMenu,
  Item,
  MaterialIcon,
  SearchInput,
  Section,
  Select,
  TimeInput,
  ToolTip,
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
      <ToolTip tooltip="This is a tooltip" delay={0}>
        {/* <Button>Hover Me</Button> */}
        <MaterialIcon icon="info" />
      </ToolTip>
    </div>
  );
}
