import React, { useState } from "react";
import { NumberInput, SpinnerLoader, View, ProgressCircle } from "../elements";

export default function Aria() {
  const [value, setValue] = useState(5);

  return (
    <View>
      <NumberInput value={value} onChange={setValue} maxValue={100} />
      <SpinnerLoader placement="block" size="large" />

      <ProgressCircle
        aria-label="label"
        value={value}
        $size="100px"
        $width="10"
        // $activeColor="var(--loader-color)"
        // isIndeterminate
      />
      <ProgressCircle
        aria-label="label"
        value={value}
        $size="100px"
        $width="5"
        $linecap="round"
        $trackColor="transparent"
        isIndeterminate
        // $activeColor="var(--loader-color)"
        // isIndeterminate
      />
    </View>
  );
}
