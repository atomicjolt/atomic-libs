import React from "react";
import { RadioGroupState } from "react-stately";

const RadioContext = React.createContext<RadioGroupState>(
  {} as RadioGroupState
);

export default RadioContext;
