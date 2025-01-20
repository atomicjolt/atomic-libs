import { ArgTypes } from "@storybook/react";
import { createGlobalStyle } from "styled-components";
import { PressEvents } from "@react-aria/interactions";
import { OverlayTriggerProps } from "react-stately";
import { Item, View } from "../../packages/atomic-elements/src/components";
import { SpacingSteps } from "../../packages/atomic-elements/src/styles/spacing";

export const FieldStateControls: ArgTypes = {
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

export const InputControls: ArgTypes = {
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

export const VariantArgType: ArgTypes = {
  variant: {
    control: "select",
    description:
      "Visual variant of the component. Defines what preset styles to use for the component.",
    table: {
      category: "Presentation",
    },
  },
};

export const TextInputControls: ArgTypes = {
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

export const MultiSelectionArgTypes: ArgTypes = {
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
  <Item key="1" id="news">
    News
  </Item>,
  <Item key="2" id="travel">
    Travel
  </Item>,
  <Item key="3" id="gaming">
    Gaming
  </Item>,
  <Item key="4" id="shopping">
    Shopping
  </Item>,
];

export const PressableArgTypes: Record<keyof PressEvents, object> = {
  onPress: {
    action: "onPress",
    description: "Callback when a press event is released over the element.",
    table: {
      category: "Events",
    },
  },
  onPressStart: {
    action: "onPressStart",
    description: "Callback when a press event starts.",
    table: {
      category: "Events",
    },
  },
  onPressEnd: {
    action: "onPressEnd",
    description:
      "Callback when a press event ends. Either by releasing the press or leaving the element.",
    table: {
      category: "Events",
    },
  },
  onPressChange: {
    action: "onPressChange",
    description: "Callback when the pressed state changes.",
    table: {
      category: "Events",
    },
  },
  onPressUp: {
    action: "onPressUp",
    description:
      "Callback when a press event is released over the element, regardless of where it started on that target or not.",
    table: {
      category: "Events",
    },
  },
};

export const FocusEventsArgTypes: ArgTypes = {
  onFocus: {
    action: "onFocus",
    description: "Callback for when the input is focused",
    table: {
      category: "Events",
    },
  },
  onBlur: {
    action: "onBlur",
    description: "Callback for when the input is blurred",
    table: {
      category: "Events",
    },
  },
  onFocusChange: {
    action: "onFocusChange",
    description: "Callback for when the input is focused",
    table: {
      category: "Events",
    },
  },
};

export const OverlayTriggerArgTypes: Record<keyof OverlayTriggerProps, object> =
  {
    defaultOpen: {
      control: "boolean",
      description:
        "Whether the overlay should be open by default (uncontrolled)",
    },
    isOpen: {
      control: "boolean",
      description: "Whether the overlay should be open (controlled)",
    },
    onOpenChange: {
      action: "onOpenChange",
      description: "Callback when the overlay open state changes",
    },
  };

export const AriaLabelArgTypes: ArgTypes = {
  "aria-label": {
    control: "text",
    defaultValue: "",
    description: "A label for the current element",
    table: {
      category: "Accessibility",
    },
  },
  "aria-labelledby": {
    control: "text",
    defaultValue: "",
    description:
      "The id of the element that serves as the label for the element",
    table: {
      category: "Accessibility",
    },
  },
  "aria-describedby": {
    control: "text",
    defaultValue: "",
    description:
      "The id of the element that serves as a description for the element",
    table: {
      category: "Accessibility",
    },
  },
  "aria-details": {
    control: "text",
    defaultValue: "",
    description:
      "The id of the element that serves as a details for the element",
    table: {
      category: "Accessibility",
    },
  },
};

export const RenderPropsArgTypes: ArgTypes = {
  className: {
    control: "text",
    description: "Class name to apply to the component",
    table: {
      category: "Render Props",
    },
  },
  style: {
    control: "object",
    description: "Style object to apply to the component",
    table: {
      category: "Render Props",
    },
  },
  children: {
    control: false,
    description: "Children to render",
    table: {
      category: "Render Props",
    },
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

export const PaddingArgTypes: ArgTypes = {
  $p: {
    control: "select",
    options: SpacingSteps,
    description: "Padding",
    table: {
      category: "Padding",
    },
  },
  $pt: {
    control: "select",
    options: SpacingSteps,
    description: "Padding Top",
    table: {
      category: "Padding",
    },
  },
  $pr: {
    control: "select",
    options: SpacingSteps,
    description: "Padding Right",
    table: {
      category: "Padding",
    },
  },
  $pb: {
    control: "select",
    options: SpacingSteps,
    description: "Padding Bottom",
    table: {
      category: "Padding",
    },
  },
  $pl: {
    control: "select",
    options: SpacingSteps,
    description: "Padding Left",
    table: {
      category: "Padding",
    },
  },
  $px: {
    control: "select",
    options: SpacingSteps,
    description: "Padding Horizontal",
    table: {
      category: "Padding",
    },
  },
  $py: {
    control: "select",
    options: SpacingSteps,
    description: "Padding Vertical",
    table: {
      category: "Padding",
    },
  },
};

export const MarginArgTypes: ArgTypes = {
  $m: {
    control: "select",
    options: SpacingSteps,
    description: "Margin",
    table: {
      category: "Margin",
    },
  },
  $mt: {
    control: "select",
    options: SpacingSteps,
    description: "Margin Top",
    table: {
      category: "Margin",
    },
  },
  $mr: {
    control: "select",
    options: SpacingSteps,
    description: "Margin Right",
    table: {
      category: "Margin",
    },
  },
  $mb: {
    control: "select",
    options: SpacingSteps,
    description: "Margin Bottom",
    table: {
      category: "Margin",
    },
  },
  $ml: {
    control: "select",
    options: SpacingSteps,
    description: "Margin Left",
    table: {
      category: "Margin",
    },
  },
  $mx: {
    control: "select",
    options: SpacingSteps,
    description: "Margin Horizontal",
    table: {
      category: "Margin",
    },
  },
  $my: {
    control: "select",
    options: SpacingSteps,
    description: "Margin Vertical",
    table: {
      category: "Margin",
    },
  },
};

export const SpacingArgTypes: ArgTypes = {
  ...PaddingArgTypes,
  ...MarginArgTypes,
};

export const WidthArgTypes: ArgTypes = {
  $width: {
    control: "text",
    description: "Width",
    table: {
      category: "Dimensions",
    },
  },
  $minWidth: {
    control: "text",
    description: "Minimum Width",
    table: {
      category: "Dimensions",
    },
  },
  $maxWidth: {
    control: "text",
    description: "Maximum Width",
    table: {
      category: "Dimensions",
    },
  },
};

export const HeightArgTypes: ArgTypes = {
  $height: {
    control: "text",
    description: "Height",
    table: {
      category: "Dimensions",
    },
  },
  $minHeight: {
    control: "text",
    description: "Minimum Height",
    table: {
      category: "Dimensions",
    },
  },
  $maxHeight: {
    control: "text",
    description: "Maximum Height",
    table: {
      category: "Dimensions",
    },
  },
};

export const DimensionsArgTypes: ArgTypes = {
  ...WidthArgTypes,
  ...HeightArgTypes,
};

export const PositionArgTypes: ArgTypes = {
  $position: {
    control: "select",
    options: ["static", "relative", "absolute", "fixed", "sticky"],
    description: "Position",
    table: {
      category: "Position",
    },
  },
  $top: {
    control: "text",
    description: "Top",
    table: {
      category: "Position",
    },
  },
  $right: {
    control: "text",
    description: "Right",
    table: {
      category: "Position",
    },
  },
  $bottom: {
    control: "text",
    description: "Bottom",
    table: {
      category: "Position",
    },
  },
  $left: {
    control: "text",
    description: "Left",
    table: {
      category: "Position",
    },
  },
};

export const OverflowArgTypes: ArgTypes = {
  $overflow: {
    control: "select",
    options: ["visible", "hidden", "scroll", "auto"],
    description: "Overflow",
    table: {
      category: "Overflow",
    },
  },
  $overflowX: {
    control: "select",
    options: ["visible", "hidden", "scroll", "auto"],
    description: "Overflow X",
    table: {
      category: "Overflow",
    },
  },
  $overflowY: {
    control: "select",
    options: ["visible", "hidden", "scroll", "auto"],
    description: "Overflow Y",
    table: {
      category: "Overflow",
    },
  },
};

export const FlexItemArgTypes: ArgTypes = {
  $flexGrow: {
    control: "text",
    description: "Flex Grow",
    table: {
      category: "Flex",
    },
  },
  $flexShrink: {
    control: "text",
    description: "Flex Shrink",
    table: {
      category: "Flex",
    },
  },
  $flexBasis: {
    control: "text",
    description: "Flex Basis",
    table: {
      category: "Flex",
    },
  },
  $flexAlgin: {
    control: "select",
    options: ["auto", "start", "end", "center", "baseline", "stretch"],
    description: "Align Self",
    table: {
      category: "Flex",
    },
  },
};

export const GridItemArgTypes: ArgTypes = {
  $gridRow: {
    control: "text",
    description: "Grid Row",
    table: {
      category: "Grid",
    },
  },
  $gridRowStart: {
    control: "text",
    description: "Grid Row Start",
    table: {
      category: "Grid",
    },
  },
  $gridRowEnd: {
    control: "text",
    description: "Grid Row End",
    table: {
      category: "Grid",
    },
  },
  $gridColumn: {
    control: "text",
    description: "Grid Column",
    table: {
      category: "Grid",
    },
  },
  $gridColumnStart: {
    control: "text",
    description: "Grid Column Start",
    table: {
      category: "Grid",
    },
  },
  $gridColumnEnd: {
    control: "text",
    description: "Grid Column End",
    table: {
      category: "Grid",
    },
  },
};

export const LayoutArgTypes: ArgTypes = {
  ...SpacingArgTypes,
  ...DimensionsArgTypes,
  ...PositionArgTypes,
  ...OverflowArgTypes,
  ...FlexItemArgTypes,
  ...GridItemArgTypes,
};

export function DecorativeBox() {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "rebeccapurple",
        borderRadius: "4px",
        border: "1px solid #3c3c3c",
      }}
    />
  );
}
