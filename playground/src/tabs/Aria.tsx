import React, { useId } from "react";
import {
  CheckBox,
  CustomSelect,
  IconMenu,
  Item,
  Section,
  SkeletonLoader,
  Tabs,
  TextArea,
  ToggleSwitch,
} from "../elements";
import { useLocale } from "react-aria";

export default function Aria() {
  return (
    <div>
      <CheckBox isIndeterminate>Checkbox</CheckBox>
    </div>
  );
}
