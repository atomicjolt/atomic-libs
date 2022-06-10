import { ComponentMeta, ComponentStory } from "@storybook/react";
import Table, { Props } from ".";
import IconButton from "../../Buttons/IconButton";
import Doc from "./Table.doc.mdx";

export default {
  title: "Tables/Table",
  component: Table,
  // subcomponents: {
  //   "Table.Head": Table.Head,
  //   "Table.Header": Table.Header,
  //   "Table.Body": Table.Body,
  //   "Table.Row": Table.Row,
  //   "Table.Cell": Table.Cell,
  // },
  parameters: {
    docs: {
      page: Doc,
    },
  },
  argTypes: {
    sortDirection: {
      options: ["ascending", "descending", undefined],
      control: "radio",
    },
    sortPath: {
      options: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      control: "select",
    },
    children: {
      control: false,
    },
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args: Props) => (
  <Table {...args}></Table>
);

export const Default = Template.bind({});
Default.args = {
  title: "Assessments in the course",
  children: [
    <Table.Head key="head">
      <Table.Header>Monday</Table.Header>
      <Table.Header>Tuesday</Table.Header>
      <Table.Header>Wednesday</Table.Header>
      <Table.Header>Thursday</Table.Header>
      <Table.Header>Friday</Table.Header>
    </Table.Head>,

    <Table.Body key="body">
      <Table.Row data={[1, 2, 3, 4, 5]} />
      <Table.Row data={[6, 7, 8, 9, 10]} />
      <Table.Row data={[11, 12, 14, 14, 15]} />
    </Table.Body>,
  ],
};

export const SortableHeaders = Template.bind({});
SortableHeaders.args = {
  ...Default.args,
  sortPath: "monday",
  sortDirection: "ascending",
  children: [
    <Table.Head key="head">
      <Table.Header sortPath="monday">Monday</Table.Header>
      <Table.Header sortPath="tuesday">Tuesday</Table.Header>
      <Table.Header sortPath="wednesday">Wednesday</Table.Header>
      <Table.Header sortPath="thursday">Thursday</Table.Header>
      <Table.Header sortPath="friday">Friday</Table.Header>
    </Table.Head>,

    <Table.Body key="body">
      <Table.Row data={[1, 2, 3, 4, 5]} />
      <Table.Row data={[6, 7, 8, 9, 10]} />
      <Table.Row data={[11, 12, 14, 14, 15]} />
    </Table.Body>,
  ],
};

export const CustomCells = Template.bind({});
CustomCells.args = {
  ...Default.args,
  sortPath: "monday",
  sortDirection: "ascending",
  children: [
    <Table.Head key="head">
      <Table.Header>Monday</Table.Header>
      <Table.Header>Tuesday</Table.Header>
      <Table.Header width={110} />
    </Table.Head>,

    <Table.Body key="body">
      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>2</Table.Cell>
        <Table.Cell>
          <IconButton ariaLabel="Button" icon="done" />
          <IconButton ariaLabel="Button" icon="delete" />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>3</Table.Cell>
        <Table.Cell>4</Table.Cell>
        <Table.Cell>
          <IconButton ariaLabel="Button" icon="done" />
          <IconButton ariaLabel="Button" icon="delete" />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>5</Table.Cell>
        <Table.Cell>6</Table.Cell>
        <Table.Cell>
          <IconButton ariaLabel="Button" icon="done" />
          <IconButton ariaLabel="Button" icon="delete" />
        </Table.Cell>
      </Table.Row>
    </Table.Body>,
  ],
};

// Additional stories go here
