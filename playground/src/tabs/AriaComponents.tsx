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
  ToggleSwitch,
  ToolTip,
} from "../elements";
import styled from "styled-components";
import { HasVariant } from "../../../src/types";
import { ButtonVariants } from "../../../src/components/Buttons/Buttons.types";
import classNames from "classnames";

export default function AriaComponents() {
  const [selected, setSelected] = useState<any>(false);

  return (
    <div
      style={{
        padding: "16px",
      }}
    >
      <ToggleSwitch isSelected={selected} onChange={setSelected}>
        Label
      </ToggleSwitch>
    </div>
  );
}
