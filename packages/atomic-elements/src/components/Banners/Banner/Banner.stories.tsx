import { Meta, StoryObj } from "@storybook/react-vite";
import { Banner } from ".";
import { banner } from "@styles/theme/component";
import { RenderPropsArgTypes } from "@sb/helpers";

export default {
  title: "Banners/Banner",
  component: Banner,
  subcomponents: {
    "Banner.Content": Banner.Content,
    "Banner.Icon": Banner.Icon,
    "Banner.IconButton": Banner.IconButton,
    "Banner.Button": Banner.Button,
  },
  parameters: {
    cssprops: { banner },
  },
  argTypes: {
    ...RenderPropsArgTypes,
    variant: {
      control: "select",
      options: ["info", "error", "success", "warning"],
    },
  },
} as Meta<typeof Banner>;

type Story = StoryObj<typeof Banner>;

export const Primary: Story = {
  args: {
    variant: "info",
    children: <Banner.Content $ml="2">This is a banner</Banner.Content>,
  },
};

export const WithIcon: Story = {
  args: {
    ...Primary.args,
    children: [
      <Banner.Icon key="icon" icon="info" />,
      <Banner.Content key="content">This is a banner</Banner.Content>,
    ],
  },
};

export const WithIconButton: Story = {
  args: {
    ...Primary.args,
    children: [
      <Banner.Icon key="icon" icon="info" />,
      <Banner.Content key="content">This is a banner</Banner.Content>,
      <Banner.IconButton key="action" icon="close" />,
    ],
  },
};

export const WithButton: Story = {
  args: {
    ...Primary.args,
    children: [
      <Banner.Icon key="icon" icon="info" />,
      <Banner.Content key="content">This is a banner</Banner.Content>,
      <Banner.Button key="action">Click Me</Banner.Button>,
    ],
  },
};
