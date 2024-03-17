import React, { useState } from "react";
import {
  CheckBox,
  CustomSelect,
  DatePicker,
  Item,
  NumberInput,
  Radio,
  RadioGroup,
  SkeletonLoader,
  Banner,
  MaterialIcon,
  IconButton,
  Button,
  ErrorBanner,
} from "../elements";
import { I18nProvider } from "react-aria";

function Items() {
  return (
    <>
      <Item key="1">David</Item>
      <Item key="2">Sam</Item>
      <Item key="3">Jane</Item>
    </>
  );
}

export default function Aria() {
  return (
    <div>
      <CustomSelect>
        <Items />
      </CustomSelect>
    </div>
  );
}
