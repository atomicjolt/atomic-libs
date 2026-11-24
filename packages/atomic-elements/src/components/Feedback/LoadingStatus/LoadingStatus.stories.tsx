import { Meta, StoryObj } from "@storybook/react-vite";
import { loader } from "@styles/theme/component";
import { SpinnerLoader } from "../SpinnerLoader";
import { LoadingStatus } from ".";
import { Text } from "@components/Typography/Text";

const meta: Meta<typeof LoadingStatus> = {
  title: "Feedback/LoadingStatus",
  component: LoadingStatus,
  tags: ["!autodocs"],
  parameters: {
    cssprops: { loader },
  },
  argTypes: {
    isLoading: {
      control: "boolean",
    },
    loadingMessage: {
      type: "string",
    },
    error: {
      type: "string",
    },
    children: {
      control: false,
    },
    renderLoading: {
      control: false,
    },
    renderError: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof LoadingStatus>;

export const Primary: Story = {
  args: {
    isLoading: true,
    loadingMessage: "Loading...",
    children: "This is the content",
  },
};

export const Error: Story = {
  args: {
    error: "An error occurred",
    children: "This is the content",
  },
};

export const CustomizeLoadingState: Story = {
  args: {
    isLoading: true,
    children: "This is the content",
    renderLoading: <SpinnerLoader aria-label="Loading" />,
  },
};

export const CustomizeErrorState: Story = {
  args: {
    error: "An error occurred",
    children: "This is the content",
    renderError: (
      <Text $size="4" $color="error-clr" $weight="bold">
        Error!
      </Text>
    ),
  },
};

export const WithData: Story = {
  args: {
    children: (data: any) => <Text $size="4">{data}</Text>,
    data: "This is the data!",
  },
  parameters: {
    docs: {
      source: {
        code: `
<LoadingStatus data="This is the data!">
  {(data) => <Text $size="4">{data}</Text>}
</LoadingStatus>
`,
      },
    },
  },
};

export const NoDataFallback: Story = {
  args: {
    data: null,
    children: (data: any) => <Text $size="4">{data}</Text>,
    fallback: (
      <Text $size="4" $color="error-clr">
        No data available
      </Text>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `
<LoadingStatus
  data={null}
  fallback={
    <Text $size="4" $color="error-clr">
      No data available
    </Text>
  }
>
  {(data) => <Text $size="4">{data}</Text>}
</LoadingStatus>
`,
      },
    },
  },
};
