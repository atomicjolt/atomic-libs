import React from "react";
import { InputComponentProps, InputElementProps } from "../types";
import { createGlobalStyle } from "styled-components";

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
  autoFocus: false,
};

export const NewDefaultInputProperties = {
  className: "",
  label: "",
  hideLabel: false,
  error: "",
  message: "",
  isDisabled: false,
  isRequired: false,
  isReadOnly: false,
  isInvalid: false,
  placeholder: "",
  size: "medium",
  autoFocus: false,
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

export function disableControl(name: string) {
  return {
    [name]: { table: { disable: true } },
  };
}

export const CallbackControls = {
  onChange: {
    control: false,
    table: {
      category: "Events",
    },
  },
  onClick: {
    control: false,
    table: {
      category: "Events",
    },
  },
  onFocus: {
    control: false,
    table: {
      category: "Events",
    },
  },
  onBlur: {
    control: false,
    table: {
      category: "Events",
    },
  },
  onKeyDown: {
    control: false,
    table: {
      category: "Events",
    },
  },
  onKeyUp: {
    control: false,
    table: {
      category: "Events",
    },
  },
};

export const CommonInputControls = {
  label: {
    control: "text",
    table: {
      category: "Common",
    },
  },
  hideLabel: {
    control: "boolean",
    table: {
      category: "Common",
    },
  },
  error: {
    control: "text",
    table: {
      category: "Common",
    },
  },
  message: {
    control: "text",
    table: {
      category: "Common",
    },
  },
  disabled: {
    control: "boolean",
    table: {
      category: "Common",
    },
  },
  required: {
    control: "boolean",
    table: {
      category: "Common",
    },
  },
  size: {
    control: "select",
    table: {
      category: "Common",
    },
  },
  placeholder: {
    control: "text",
    table: {
      category: "Common",
    },
  },
  name: {
    control: "text",
    table: {
      category: "Common",
    },
  },
};

export const NewCommonInputControls = {
  label: {
    control: "text",
    table: {
      category: "Helper Text",
    },
  },
  hideLabel: {
    control: "boolean",
    table: {
      category: "Helper Text",
    },
  },
  error: {
    control: "text",
    table: {
      category: "Helper Text",
    },
  },
  message: {
    control: "text",
    table: {
      category: "Helper Text",
    },
  },
  isDisabled: {
    control: "boolean",
    table: {
      category: "Field State",
    },
  },
  isRequired: {
    control: "boolean",
    table: {
      category: "Field State",
    },
  },
  isInvalid: {
    control: "boolean",
    table: {
      category: "Field State",
    },
  },
  placeholder: {
    control: "text",
    table: {
      category: "Common",
    },
  },
  name: {
    control: "text",
    table: {
      category: "Common",
    },
  },
};

export const InputControls = {
  ...CallbackControls,
  ...CommonInputControls,
};

export const NewInputControls = {
  ...CallbackControls,
  ...NewCommonInputControls,
};

export const TextInputControls = {
  ...InputControls,
  autoFocus: {
    control: "boolean",
    table: {
      category: "Common",
    },
  },
  defaultValue: {
    control: "text",
    table: {
      category: "Common",
    },
  },
  readOnly: {
    control: "boolean",
    table: {
      category: "Common",
    },
  },
};

export const NewTextInputControls = {
  ...NewInputControls,
  autoFocus: {
    control: "boolean",
    table: {
      category: "Common",
    },
  },
  defaultValue: {
    control: false,
    description: "Set the initial value of an uncontrolled input",
    table: {
      category: "Common",
    },
  },
  isReadOnly: {
    control: "boolean",
    table: {
      category: "Field State",
    },
  },
};

export const UncontrolledInputControls = {
  ...InputControls,
  value: {
    control: false,
  },
};

export const PlacementArgType = {
  control: "select",
  options: [
    "bottom",
    "bottom start",
    "bottom end",
    "top",
    "top start",
    "top end",
    "left",
    "left start",
    "left end",
    "right",
    "right start",
    "right end",
  ],
};

export const PurpleButtonStyles = createGlobalStyle`
.aje-btn--purple {
  --btn-bg-clr: purple;
  --btn-text-clr: white;
  --btn-hover-bg-clr: rgb(179, 13, 179);
  --btn-hover-text-clr: white;
}
`;
