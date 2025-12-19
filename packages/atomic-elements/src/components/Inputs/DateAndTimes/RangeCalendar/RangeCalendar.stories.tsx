import { Meta, StoryObj } from "@storybook/react";
import { today, getLocalTimeZone } from "@internationalized/date";
import { RangeCalendar } from ".";
import { IconButton } from "@components/Buttons/IconButton";
import { Flex } from "@components/Layout/Flex";
import { RenderPropsArgTypes } from "@sb/helpers";
import { ErrorMessage } from "@components/Fields";

const meta: Meta<typeof RangeCalendar> = {
  title: "Inputs/Date & Time/RangeCalendar",
  component: RangeCalendar,
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
        "The current value of the range calendar. Accepts a range object with start and end dates from the `@internationalized/date` library.",
    },
    defaultValue: {
      control: false,
      description:
        "Set the initial value of an uncontrolled range calendar. Accepts a range object with start and end dates from the `@internationalized/date` library.",
    },
    defaultFocusedValue: {
      control: false,
      description:
        "Set the initial focused value of an uncontrolled range calendar. Accepts a date object from the `@internationalized/date` library.",
    },
    focusedValue: {
      control: false,
      description:
        "The current focused value of the range calendar. Accepts a date object from the `@internationalized/date` library.",
    },
    isDateUnavailable: {
      control: false,
      description:
        "A function that is called for every date on the calendar. If it returns true, the date is disabled.",
    },
    maxValue: {
      control: false,
      description:
        "The maximum date that can be selected. Accepts a date object from the `@internationalized/date` library.",
    },
    minValue: {
      control: false,
      description:
        "The minimum date that can be selected. Accepts a date object from the `@internationalized/date` library.",
    },
    isDisabled: {
      control: "boolean",
      description: "Whether the range calendar is disabled.",
    },
    isInvalid: {
      control: "boolean",
      description: "Whether the range calendar is in an invalid state.",
    },
    allowsNonContiguousRanges: {
      control: "boolean",
      description: "Whether the range calendar allows non-contiguous ranges.",
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
      description: "Callback for when the selected date range changes.",
      table: {
        category: "Events",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof RangeCalendar>;

const date = today(getLocalTimeZone());
const minValue = date.set({ month: date.month - 1 });
const maxValue = date.set({ month: date.month + 1 });
const defaultRange = {
  start: date,
  end: date.add({ days: 7 }),
};

export const Primary: Story = {
  args: {
    size: "medium",
    defaultValue: defaultRange,
    children: [
      <Flex key="header" $gap="20px" $align="center" $justify="space-between">
        <IconButton slot="previous-month" icon="chevron_left" variant="ghost" />
        <RangeCalendar.Title />
        <IconButton slot="next-month" icon="chevron_right" variant="ghost" />
      </Flex>,
      <RangeCalendar.Grid key="grid">
        {(date) => <RangeCalendar.Cell date={date} />}
      </RangeCalendar.Grid>,
    ],
  },
  parameters: {
    docs: {
      source: {
        language: "jsx",
        code: `
<RangeCalendar>
  <Flex $gap="20px" $align="center" $justify="space-between">
    <IconButton slot="previous-month" icon="chevron_left" variant="ghost" />
    <RangeCalendar.Title />
    <IconButton slot="next-month" icon="chevron_right" variant="ghost" />
  </Flex>
  <RangeCalendar.Grid>
    {(date) => <RangeCalendar.Cell date={date} />}
  </RangeCalendar.Grid>
</RangeCalendar>
        `,
      },
    },
  },
};

export const WithMaxAndMinValues: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    defaultValue: {
      start: date,
      end: date.add({ days: 3 }),
    },
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
      <Flex key="header" $gap="20px" $align="center" $justify="space-between">
        <IconButton slot="previous-month" icon="chevron_left" variant="ghost" />
        <RangeCalendar.Title />
        <IconButton slot="next-month" icon="chevron_right" variant="ghost" />
      </Flex>,
      <RangeCalendar.Grid key="grid">
        {(date) => <RangeCalendar.Cell date={date} />}
      </RangeCalendar.Grid>,
      <ErrorMessage key="error">
        The Selected Date Range is Invalid
      </ErrorMessage>,
    ],
  },
  parameters: {
    docs: {
      source: {
        language: "jsx",
        code: `
<RangeCalendar isInvalid>
  <Flex $gap="20px" $align="center" $justify="space-between">
    <IconButton slot="previous-month" icon="chevron_left" variant="ghost" />
    <RangeCalendar.Title />
    <IconButton slot="next-month" icon="chevron_right" variant="ghost" />
  </Flex>
  <RangeCalendar.Grid>
    {(date) => <RangeCalendar.Cell date={date} />}
  </RangeCalendar.Grid>
  <ErrorMessage>The Selected Date Range is Invalid</ErrorMessage>
</RangeCalendar>
        `,
      },
    },
  },
};

export const AllowsNonContiguousRanges: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    allowsNonContiguousRanges: true,
    defaultValue: undefined,
  },
  parameters: {
    docs: {
      source: {
        language: "jsx",
        code: `
<RangeCalendar allowsNonContiguousRanges>
  <Flex $gap="20px" $align="center" $justify="space-between">
    <IconButton slot="previous-month" icon="chevron_left" variant="ghost" />
    <RangeCalendar.Title />
    <IconButton slot="next-month" icon="chevron_right" variant="ghost" />
  </Flex>
  <RangeCalendar.Grid>
    {(date) => <RangeCalendar.Cell date={date} />}
  </RangeCalendar.Grid>
</RangeCalendar>
        `,
      },
    },
  },
};
