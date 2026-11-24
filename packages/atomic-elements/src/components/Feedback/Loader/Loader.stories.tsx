import { Meta, StoryObj } from "@storybook/react-vite";
import { Loader } from ".";
import { AriaLabelArgTypes, RenderPropsArgTypes } from "@sb/helpers";
import { Spinner } from "@components/Animations/Spinner";

export default {
  title: "Feedback/Loader",
  component: Loader,
  argTypes: {
    ...AriaLabelArgTypes,
    ...RenderPropsArgTypes,
    isLoading: {
      control: "boolean",
      table: { category: "State" },
    },
    children: {
      ...RenderPropsArgTypes.children,
      description:
        "The loading animation, shown while `isLoading` is true. When loading finishes a `Checkmark` replaces it, unless `children` is a function: it's called with `{ isLoading }` and its result is rendered in both states.",
    },
  },
} as Meta<typeof Loader>;

type Story = StoryObj<typeof Loader>;

export const Primary: Story = {
  args: {
    message: "Loading...",
    children: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        height="200px"
        width="200px"
      >
        <rect
          fill="#3298FF"
          stroke="#3298FF"
          strokeWidth="30"
          strokeLinejoin="round"
          width="30"
          height="30"
          x="85"
          y="85"
          rx="0"
          ry="0"
        >
          <animate
            attributeName="rx"
            calcMode="spline"
            dur="2"
            values="15;15;5;15;15"
            keySplines=".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="ry"
            calcMode="spline"
            dur="2"
            values="15;15;10;15;15"
            keySplines=".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="height"
            calcMode="spline"
            dur="2"
            values="30;30;1;30;30"
            keySplines=".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="y"
            calcMode="spline"
            dur="2"
            values="40;170;40;"
            keySplines=".6 0 1 .4;0 .8 .2 1"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </svg>
    ),
  },
};

export const SpinnerLoaderExample: Story = {
  args: {
    ...Primary.args,
    orientation: "horizontal",
    children: <Spinner $size="2em" aria-label="Loading" />,
  },
};

/** When `isLoading` is false, the loading animation is replaced with a checkmark. */
export const Complete: Story = {
  args: {
    isLoading: false,
  },
};
