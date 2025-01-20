import { Meta, StoryObj } from "@storybook/react";
import { Grid } from ".";
import {
  DecorativeBox,
  LayoutArgTypes,
  RenderPropsArgTypes,
} from "@sb/helpers";
import { SpacingSteps } from "@styles/spacing";

export default {
  title: "Layouts/Grid",
  component: Grid,

  argTypes: {
    ...RenderPropsArgTypes,
    ...LayoutArgTypes,
    $columns: {
      control: "text",
      description:
        "The number of columns in the grid. Can be a scale step ( 1 - 9) or any valid CSS value.",
    },
    $rows: {
      control: "text",
      description:
        "The number of rows in the grid. Can be a scale step (1 - 9) or any valid CSS value.",
    },
    $areas: {
      control: "text",
      description:
        "The names of the grid areas. Each name is separated by a space.",
    },
    $flow: {
      control: {
        type: "select",
        options: ["row", "column", "dense", "row-dense", "column-dense"],
      },
      description: "The direction of the grid",
    },
    $align: {
      control: {
        type: "select",
        options: ["start", "end", "center", "stretch", "baseline"],
      },
      description: "The alignment of the grid. ",
    },
    $justify: {
      control: {
        type: "select",
        options: [
          "start",
          "end",
          "center",
          "space-between",
          "space-around",
          "space-evenly",
        ],
      },
      description: "The justification of the grid.",
    },
    $gap: {
      control: "select",
      options: SpacingSteps,
      description:
        "The gap between the grid items. Can be a spacing step or any valid CSS value.",
    },
    $gapX: {
      control: "select",
      options: SpacingSteps,
      description:
        "The horizontal gap between the grid items. Can be a spacing step or any valid CSS value.",
    },
    $gapY: {
      control: "select",
      options: SpacingSteps,
      description:
        "The vertical gap between the grid items. Can be a spacing step or any valid CSS value.",
    },
  },
} as Meta<typeof Grid>;

type Story = StoryObj<typeof Grid>;

export const Primary: Story = {
  args: {
    $columns: "3",
    $gap: "3",
    $rows: "repeat(2, 64px)",
    $width: "auto",
    children: [
      <DecorativeBox key="1" />,
      <DecorativeBox key="2" />,
      <DecorativeBox key="3" />,
      <DecorativeBox key="4" />,
      <DecorativeBox key="5" />,
      <DecorativeBox key="6" />,
    ],
  },
};
