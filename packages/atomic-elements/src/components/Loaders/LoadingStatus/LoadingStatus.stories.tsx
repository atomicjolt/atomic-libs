import { Meta, StoryObj } from "@storybook/react";
import { getCssProps } from "@sb/cssprops";
import { SpinnerLoader } from "../SpinnerLoader";
import { LoadingStatus } from ".";
import { Text } from "@components/Typography/Text";

const meta: Meta<typeof LoadingStatus> = {
  title: "Loaders/LoadingStatus",
  component: LoadingStatus,
  tags: ["!autodocs"],
  parameters: {
    cssprops: getCssProps("Loader"),
  },
  argTypes: {
    loadingMessage: {
      type: "string",
    },
    error: {
      type: "string",
    },
  },
};

export default meta;

type Story = StoryObj<typeof LoadingStatus>;

export const Primary: Story = {
  args: {
    isLoading: true,
    loadingMessage: "Loading...",
    error: "",
    children: "This is the content",
  },
};

export const Error: Story = {
  args: {
    isLoading: false,
    loadingMessage: "",
    error: "An error occurred",
    children: "This is the content",
  },
};

export const CustomizeLoadingState: Story = {
  args: {
    isLoading: true,
    loadingMessage: "Loading...",
    error: "",
    children: "This is the content",
    renderLoading: <SpinnerLoader />,
  },
};

export const CustomizeErrorState: Story = {
  args: {
    isLoading: false,
    loadingMessage: "",
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
<LoadingStatus data={null} fallback={<Banner variant="warning">No data available</Banner>}>
  {(data) => <Banner variant="info">{data}</Banner>}
</LoadingStatus>
        `,
      },
    },
  },
};
