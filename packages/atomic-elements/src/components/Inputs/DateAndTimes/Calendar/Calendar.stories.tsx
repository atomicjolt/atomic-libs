import { Meta, StoryObj } from "@storybook/react";
import { today, getLocalTimeZone } from "@internationalized/date";
import { Calendar } from ".";
import { IconButton } from "@components/Buttons/IconButton";
import { Flex } from "@components/Layout/Flex";
import { FieldStateControls, RenderPropsArgTypes } from "@sb/helpers";
import { ErrorMessage } from "@components/Fields";

const meta: Meta<typeof Calendar> = {
  title: "Inputs/Date & Time/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...RenderPropsArgTypes,
    children: {
      control: false,
      table: {
        disable: true,
      },
    },
    value: {
      control: false,
      description:
        "The current value of the calendar. Accepts a object from the `@internationalized/date` library.",
    },
    defaultValue: {
      control: false,
      description:
        "Set the initial value of an uncontrolled calendar. Accepts a object from the `@internationalized/date` library.",
    },
    defaultFocusedValue: {
      control: false,
      description:
        "Set the initial focused value of an uncontrolled calendar. Accepts a object from the `@internationalized/date` library.",
    },
    focusedValue: {
      control: false,
      description:
        "The current focused value of the calendary. Accepts a object from the `@internationalized/date` library.",
    },
    isDateUnavailable: {
      control: false,
      description:
        "A function that is called for every date on the calendar. If it returns true, the date is disabled.",
    },
    maxValue: {
      control: false,
      description:
        "The maximum date that can be selected. Accepts a object from the `@internationalized/date` library.",
    },
    minValue: {
      control: false,
      description:
        "The minimum date that can be selected. Accepts a object from the `@internationalized/date` library.",
    },
    isDisabled: {
      control: "boolean",
      description: "Whether the calendar is disabled.",
    },
    isInvalid: {
      control: "boolean",
      description: "Whether the calendar is in an invalid state.",
    },
    onFocusChange: {
      control: false,
      description: "Callback for when the focus date changes.",
      table: {
        category: "Events",
      },
    },
    onChange: {
      control: false,
      description: "Callback for when the selected date changes.",
      table: {
        category: "Events",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Calendar>;

const date = today(getLocalTimeZone());
const minValue = date.set({ month: date.month - 1 });
const maxValue = date.set({ month: date.month + 1 });

export const Primary: Story = {
  args: {
    size: "medium",
    defaultValue: date,
    children: [
      <Flex
        key="header"
        gap={20}
        alignItems="center"
        justifyContent="space-between"
      >
        <IconButton slot="previous-month" icon="chevron_left" variant="ghost" />
        <Calendar.Title />
        <IconButton slot="next-month" icon="chevron_right" variant="ghost" />
      </Flex>,
      <Calendar.Grid key="grid">
        {(date) => <Calendar.Cell date={date} />}
      </Calendar.Grid>,
    ],
  },
  parameters: {
    docs: {
      source: {
        language: "jsx",
        code: `
<Calendar>
  <Flex gap={20} alignItems="center" justifyContent="space-between">
    <IconButton slot="previous-month" icon="chevron_left" variant="ghost" />
    <Calendar.Title />
    <IconButton slot="next-month" icon="chevron_right" variant="ghost" />
  </Flex>
  <Calendar.Grid>
    {(date) => <Calendar.Cell date={date} />}
  </Calendar.Grid>
</Calendar>
        `,
      },
    },
  },
};

export const WithMaxAndMinValues: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    defaultValue: date,
    minValue,
    maxValue,
  },
};

export const WithErrorMessage: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    isInvalid: true,
    children: [
      <Flex
        key="header"
        gap={20}
        alignItems="center"
        justifyContent="space-between"
      >
        <IconButton slot="previous-month" icon="chevron_left" variant="ghost" />
        <Calendar.Title />
        <IconButton slot="next-month" icon="chevron_right" variant="ghost" />
      </Flex>,
      <Calendar.Grid key="grid">
        {(date) => <Calendar.Cell date={date} />}
      </Calendar.Grid>,
      <ErrorMessage key="error">The Selected Date is Invalid</ErrorMessage>,
    ],
  },
  parameters: {
    docs: {
      source: {
        language: "jsx",
        code: `
<Calendar isInvalid>
  <Flex gap={20} alignItems="center" justifyContent="space-between">
    <IconButton slot="previous-month" icon="chevron_left" variant="ghost" />
    <Calendar.Title />
    <IconButton slot="next-month" icon="chevron_right" variant="ghost" />
  </Flex>
  <Calendar.Grid>
    {(date) => <Calendar.Cell date={date} />}
  </Calendar.Grid>
  <ErrorMessage key="error">The Selected Date is Invalid</ErrorMessage>,
</Calendar>
        `,
      },
    },
  },
};
