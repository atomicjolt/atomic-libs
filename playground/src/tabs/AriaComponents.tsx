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
  CheckBox,
  RadioGroup,
  Radio,
  FileInput,
} from "../elements";
import styled from "styled-components";
import { HasVariant } from "../../../src/types";
import { ButtonVariants } from "../../../src/components/Buttons/Buttons.types";
import classNames from "classnames";
import Checkbox from "../../../src/components/Inputs/Checkbox";

export default function AriaComponents() {
  const [selected, setSelected] = useState<any>(false);
  const [selectedRadio, setSelectedRadio] = useState<any>("v1");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  return (
    <div
      style={{
        padding: "16px",
      }}
    >
      <IconMenu>
        <Item key="1" textValue="Add">
          <MaterialIcon icon="add" />
          Add
        </Item>
        <Item key="3" textValue="Add">
          <MaterialIcon icon="edit" />
          Edit
        </Item>
        <Item key="2" textValue="Add">
          <MaterialIcon icon="delete" />
          Delete
        </Item>
      </IconMenu>
    </div>
  );
}
