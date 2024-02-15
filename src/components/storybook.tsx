import React from "react";
import {
  FieldBaseProps,
  InputComponentProps,
  InputElementProps,
} from "../types";
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

export const NewDefaultInputProperties: FieldBaseProps = {
  className: "",
  label: "",
  hideLabel: false,
  error: "",
  message: "",
  isDisabled: false,
  isRequired: false,
  isReadOnly: false,
  isInvalid: false,
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

export function disableControl(name: string) {
  return {
    [name]: { table: { disable: true } },
  };
}

export const CallbackControls = {
  onClick: {
    action: "onClick",
    control: false,
    table: {
      category: "Events",
    },
  },
  onFocus: {
    action: "onFocus",
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

export const FocusEventControls = {
  onFocus: {
    action: "onFocus",
    control: false,
    description: "Callback when the element is focused",
    table: {
      category: "Events",
    },
  },
  onBlur: {
    action: "onBlur",
    control: false,
    description: "Callback when the element loses focus",
    table: {
      category: "Events",
    },
  },
  onFocusChange: {
    action: "onFocusChange",
    control: false,
    description: "Callback when the element's focus state changes",
    table: {
      category: "Events",
    },
  },
};

export const VariantArgType = {
  variant: {
    control: "select",
    description:
      "Visual variant of the component. Defines what preset styles to use for the component.",
    table: {
      category: "Presentation",
    },
  },
};

export const InputControls = {
  ...CallbackControls,
  ...CommonInputControls,
};

export const NewInputControls = {
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
  placement: {
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
  },
};

export const PurpleButtonStyles = createGlobalStyle`
.aje-btn--purple {
  --btn-bg-clr: purple;
  --btn-text-clr: white;
  --btn-hover-bg-clr: rgb(179, 13, 179);
  --btn-hover-text-clr: white;
}
`;
