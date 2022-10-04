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

export const InputControls = {
  ...CallbackControls,
  ...CommonInputControls,
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

export const UncontrolledInputControls = {
  ...InputControls,
  value: {
    control: false,
  },
};
