import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Table from ".";

const meta: Meta<typeof Table> = {
  title: "Layouts/Table",
  component: Table,
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
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
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
  },
};

export const SortableHeaders: Story = {
  args: {
    sortPath: "monday",
    sortDirection: "ascending",
    title: "Assessments in the course",
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
  },
};
