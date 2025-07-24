import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@components/Buttons/Button";
import { IconButton } from "@components/Buttons/IconButton";
import { Flex } from "@components/Layout/Flex";
import { LayoutArgTypes, RenderPropsArgTypes } from "@sb/helpers";
import { Navbar } from ".";

export default {
  title: "Layouts/Navbar",
  component: Navbar,
  argTypes: {
    ...RenderPropsArgTypes,
    ...LayoutArgTypes,
  },
} as Meta<typeof Navbar>;

type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {
  args: {
    children: [
      <Navbar.Section side="left" key="left">
        <Navbar.BackButton />
        <Navbar.Title>Title</Navbar.Title>
      </Navbar.Section>,
      <Navbar.Section side="right" key="right">
        <Button>Save</Button>
        <IconButton icon="settings" aria-label="Settings" />
      </Navbar.Section>,
    ],
  },
};

export const WithSubtitle: Story = {
  args: {
    children: [
      <Navbar.Section side="left" key="left">
        <Navbar.BackButton />
        <Flex $gap="1" $direction="column">
          <Navbar.Subtitle>Page subtitle</Navbar.Subtitle>
          <Navbar.Title>Page Title</Navbar.Title>
        </Flex>
      </Navbar.Section>,
      <Navbar.Section side="right" key="right">
        <IconButton icon="more_vert" aria-label="More options" />
      </Navbar.Section>,
    ],
  },
};

export const SimpleTitle: Story = {
  args: {
    children: [
      <Navbar.Section side="left" key="left">
        <Navbar.Title>Dashboard</Navbar.Title>
      </Navbar.Section>,
    ],
  },
};

export const WithMultipleActions: Story = {
  args: {
    children: [
      <Navbar.Section side="left" key="left">
        <Navbar.BackButton />
        <Navbar.Title>Edit Profile</Navbar.Title>
      </Navbar.Section>,
      <Navbar.Section side="right" key="right">
        <Button variant="outlined">Cancel</Button>
        <Button>Save Changes</Button>
        <IconButton icon="share" aria-label="Share" />
        <IconButton icon="bookmark" aria-label="Bookmark" />
      </Navbar.Section>,
    ],
  },
};

export const CenteredTitle: Story = {
  args: {
    children: [
      <Navbar.Section side="left" key="left">
        <Navbar.BackButton />
      </Navbar.Section>,
      <Navbar.Section side="center" key="center">
        <Navbar.Title>Centered Title</Navbar.Title>
      </Navbar.Section>,
      <Navbar.Section side="right" key="right">
        <IconButton icon="search" aria-label="Search" />
      </Navbar.Section>,
    ],
  },
};

export const NavigationOnly: Story = {
  args: {
    children: [
      <Navbar.Section side="left" key="left">
        <Navbar.BackButton />
      </Navbar.Section>,
      <Navbar.Section side="right" key="right">
        <IconButton icon="close" aria-label="Close" />
      </Navbar.Section>,
    ],
  },
};

export const WithCustomBackButton: Story = {
  args: {
    children: [
      <Navbar.Section side="left" key="left">
        <Navbar.BackButton icon="chevron_left" variant="ghost" />
        <Navbar.Title>Custom Back Icon</Navbar.Title>
      </Navbar.Section>,
      <Navbar.Section side="right" key="right">
        <Button>Save</Button>
      </Navbar.Section>,
    ],
  },
};
