import React from "react";
import { createGlobalStyle } from "styled-components";
import { Item } from "./Collection";

export const FieldStateControls = {
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
  isReadOnly: {
    control: "boolean",
    table: {
      category: "Field State",
    },
  },
};
export const InputControls = {
  ...FieldStateControls,
  label: {
    control: "text",
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

export const TextInputControls = {
  ...InputControls,
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

export const MultiSelectionArgTypes = {
  selectionMode: {
    control: "select",
    options: ["single", "multiple", "none"],
    description: "Controls how many items can be selected at once.",
    table: {
      category: "Selection",
    },
  },
  selectionBehavior: {
    control: "select",
    options: ["replace", "toggle"],
    description:
      "Controls how the selection changes in `selectionMode` is `multiple`. `replace` will replace the current selection with the new selection. `toggle` will add or remove the new selection from the current selection.",
    table: {
      category: "Selection",
    },
  },
  defaultSelectedKeys: {
    control: "multi-select",
    options: ["news", "travel", "gaming", "shopping"],
    description: "Array of the selected keys for an uncontrolled component.",
    table: {
      category: "Selection",
    },
  },
  selectedKeys: {
    control: "multi-select",
    options: ["news", "travel", "gaming", "shopping"],
    description: "Array of the selected keys for a controlled component.",
    table: {
      category: "Selection",
    },
  },
  disabledKeys: {
    control: "multi-select",
    options: ["news", "travel", "gaming", "shopping"],
    description: "Keys of the items that should be disabled",
    table: {
      category: "Selection",
    },
  },
  onSelectionChange: {
    event: "onSelectionChange",
    description: "Called when the selection changes",
    table: {
      category: "Selection",
    },
  },
};

export const MultiSelectItemChildren = [
  <Item key="news">News</Item>,
  <Item key="travel">Travel</Item>,
  <Item key="gaming">Gaming</Item>,
  <Item key="shopping">Shopping</Item>,
];

export const PurpleButtonStyles = createGlobalStyle`
.aje-btn--purple {
  --btn-bg-clr: purple;
  --btn-text-clr: white;
  --btn-hover-bg-clr: rgb(179, 13, 179);
  --btn-hover-text-clr: white;
}
`;
