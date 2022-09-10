import React from "react";

export interface RadioContextData {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  currentValue?: string;
  name: string;
  disabled: boolean;
}

const RadioContext = React.createContext<RadioContextData>(
  {} as RadioContextData
);

export default RadioContext;
