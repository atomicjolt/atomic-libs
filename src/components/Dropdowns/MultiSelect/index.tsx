import React from "react";
import {
  useMultipleSelectionState,
  MultipleSelectionState,
} from "react-stately";
import { BaseProps } from "../../../types";

interface MultiSelectProps extends MultipleSelectionState, BaseProps {}

export default function MultiSelect(props: MultiSelectProps) {
  const state = useMultipleSelectionState(props);
  return <div>MultiSelect</div>;
}
