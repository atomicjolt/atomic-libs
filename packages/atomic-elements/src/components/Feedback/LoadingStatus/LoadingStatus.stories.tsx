import { Meta, StoryObj } from "@storybook/react";
import { getCssProps } from "@sb/cssprops";
import { SpinnerLoader } from "../SpinnerLoader";
import { Banner } from "@components/Banners/Banner";
import { LoadingStatus } from ".";

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
    renderError: <div>Error!</div>,
  },
};

export const WithData: Story = {
  args: {
    children: (data: any) => <Banner variant="info">{data}</Banner>,
    data: "This is the data!",
  },
  parameters: {
    docs: {
      source: {
        code: `
<LoadingStatus data="This is the data!">
  {(data) => <Banner variant="info">{data}</Banner>}
</LoadingStatus>
`,
      },
    },
  },
};

export const NoDataFallback: Story = {
  args: {
    data: null,
    children: (data: any) => <Banner variant="info">{data}</Banner>,
    fallback: <Banner variant="warning">No data available</Banner>,
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
