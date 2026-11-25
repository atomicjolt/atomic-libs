import { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination } from ".";
import { fn } from "storybook/test";
import { AriaLabelArgTypes } from "@sb/helpers";
import { Flex } from "@components/Layout/Flex";
import { Item } from "@components/Collection";

export default {
  title: "Pagination/Pagination",
  component: Pagination,
  subcomponents: {
    "Pagination.FirstPage": Pagination.FirstPage,
    "Pagination.PrevPage": Pagination.PrevPage,
    "Pagination.NextPage": Pagination.NextPage,
    "Pagination.LastPage": Pagination.LastPage,
    "Pagination.Page": Pagination.Page,
    "Pagination.PageList": Pagination.PageList,
    "Pagination.CurrentPage": Pagination.CurrentPage,
    "Pagination.PageSize": Pagination.PageSize,
  },
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...AriaLabelArgTypes,
    defaultPage: {
      control: "number",
    },
    totalPages: {
      control: "number",
    },
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
      <Flex $align="center" $gap="1">
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
      <Flex $align="center" $gap="1">
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
  parameters: {
    docs: {
      source: {
        code: `
<Pagination defaultPage={2} totalPages={10}>
  <Flex $align="center" $gap="1">
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
</Pagination>
`,
      },
    },
  },
};

export const WithPageSize: Story = {
  args: {
    ...Primary.args,
    onPageSizeChange: fn(),
    children: (
      <Flex $align="center" $gap="1">
        <Pagination.FirstPage />
        <Pagination.PrevPage />
        <Pagination.CurrentPage />
        <Pagination.NextPage />
        <Pagination.LastPage />
        <Pagination.PageSize>
          <Item id={10}>10 entries</Item>
          <Item id={25}>25 entries</Item>
          <Item id={50}>50 entries</Item>
          <Item id={100}>100 entries</Item>
        </Pagination.PageSize>
      </Flex>
    ),
  },
};
