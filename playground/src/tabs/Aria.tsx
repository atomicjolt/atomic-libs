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

export default function Aria() {
  return (
    <div>
      <Banner variant="error">
        <MaterialIcon icon="error" />
        <Banner.Content>This is a banner</Banner.Content>
        <Banner.Dismiss />
      </Banner>
      <ErrorBanner>This is an error</ErrorBanner>
      <Banner variant="info">
        <MaterialIcon icon="info" />
        <Banner.Content>This is a banner</Banner.Content>
        <Button variant="inverted">Click Me</Button>
      </Banner>
    </div>
  );
}
