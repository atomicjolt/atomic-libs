import { InputComponentProps, InputElementProps } from "../types";

export const DefaultInputProperties: InputElementProps<Element> &
  InputComponentProps = {
  label: "",
  hideLabel: false,
  error: "",
  message: "",
  disabled: false,
  required: false,
  readOnly: false,
  placeholder: "",
  size: "medium",
};

interface Options {
  filter?: string[];
  merge?: Object;
}

export function inputProperties({ filter = [], merge = {} }: Options) {
  return Object.fromEntries(
    Object.entries({ ...DefaultInputProperties, ...merge }).filter(
      ([k, _]) => !filter.includes(k)
    )
  );
}

export const CallbackControls = {
  onChange: {
    control: false,
  },
  onClick: {
    control: false,
  },
  onFocus: {
    control: false,
  },
  onBlur: {
    control: false,
  },
  onKeyDown: {
    control: false,
  },
  onKeyUp: {
    control: false,
  },
};

export const InputControls = {
  error: {
    control: "text",
  },
  ...CallbackControls,
};

export const UncontrolledInputControls = {
  ...InputControls,
  value: {
    control: false,
  },
};
