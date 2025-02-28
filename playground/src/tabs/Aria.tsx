import React, { useState } from "react";
import { useProgressBar, AriaProgressBarProps } from "@react-aria/progress";
import {
  NumberInput,
  SpinnerLoader,
  View,
  ProgressCircle,
  Flex,
} from "../elements";

export default function Aria() {
  const [value, setValue] = useState(5);

  return (
    <View>
      <NumberInput value={value} onChange={setValue} />
      {/* <SpinnerLoader placement="block" size="large" /> */}

      <ProgressCircle
        aria-label="label"
        value={value}
        showValueLabel
        // $activeColor="var(--loader-color)"
        // isIndeterminate
      />
      <ProgressCircle
        aria-label="label"
        $size="100px"
        $trackWidth="6"
        $linecap="round"
        $trackColor="transparent"
        isIndeterminate
      />
    </View>
  );
}
