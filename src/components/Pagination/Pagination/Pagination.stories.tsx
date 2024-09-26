import { Meta, StoryObj } from "@storybook/react";
import { Pagination } from ".";
import { fn } from "@storybook/test";
import { AriaLabelArgTypes } from "@sb/helpers";
import { Flex } from "@components/Layout/Flex/Flex";
import { Item } from "@components/Collection";

export default {
  title: "Pagination/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...AriaLabelArgTypes,
    children: {
      control: false,
    },
    onPageChange: {
      table: {
        category: "Events",
      },
    },
    onPageSizeChange: {
      table: {
        category: "Events",
      },
    },
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "link",
        "error",
        "success",
        "inverted",
        "content",
        "border",
        "ghost",
      ],
    },
  },
} as Meta<typeof Pagination>;

type Story = StoryObj<typeof Pagination>;

export const Primary: Story = {
  args: {
    onPageChange: fn(),
    defaultPage: 2,
    totalPages: 10,
    children: (
      <Flex alignItems="center" gap={8}>
        <Pagination.FirstPage />
        <Pagination.PrevPage />
        <Pagination.CurrentPage />
        <Pagination.NextPage />
        <Pagination.LastPage />
      </Flex>
    ),
  },
};

export const WithPageNumbers: Story = {
  args: {
    ...Primary.args,
    children: (
      <Flex alignItems="center" gap={8}>
        <Pagination.FirstPage />
        <Pagination.PrevPage />
        <Pagination.PageList>
          {(page, state) => (
            <Pagination.Page
              page={page}
              variant={page === state.page ? "primary" : "ghost"}
            >
              {page}
            </Pagination.Page>
          )}
        </Pagination.PageList>
        <Pagination.NextPage />
        <Pagination.LastPage />
      </Flex>
    ),
  },
};

export const WithPageSize: Story = {
  args: {
    ...Primary.args,
    onPageSizeChange: fn(),
    children: (
      <Flex alignItems="center" gap={8}>
        <Pagination.FirstPage />
        <Pagination.PrevPage />
        <Pagination.CurrentPage />
        <Pagination.NextPage />
        <Pagination.LastPage />
        <Pagination.PageSize>
          <Item key={10}>10 entries</Item>
          <Item key={25}>25 entries</Item>
          <Item key={50}>50 entries</Item>
          <Item key={100}>100 entries</Item>
        </Pagination.PageSize>
      </Flex>
    ),
  },
};
