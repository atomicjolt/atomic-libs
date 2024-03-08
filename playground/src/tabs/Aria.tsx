import React, { useId } from "react";
import {
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
      <SkeletonLoader duration={2} width={400} height={160}>
        <rect x="50" y="6" rx="4" ry="4" width="343" height="38" />
        <rect x="8" y="6" rx="4" ry="4" width="35" height="38" />
        <rect x="50" y="55" rx="4" ry="4" width="343" height="38" />
        <rect x="8" y="55" rx="4" ry="4" width="35" height="38" />
        <rect x="50" y="104" rx="4" ry="4" width="343" height="38" />
        <rect x="8" y="104" rx="4" ry="4" width="35" height="38" />
      </SkeletonLoader>
    </div>
  );
}
