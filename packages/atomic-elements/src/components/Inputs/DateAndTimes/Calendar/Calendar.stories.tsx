import { Meta, StoryObj } from "@storybook/react-vite";
import {
  today,
  getLocalTimeZone,
  isWeekend,
  DateValue,
} from "@internationalized/date";
import { Calendar } from ".";
import { IconButton } from "@components/Buttons/IconButton";
import { Flex } from "@components/Layout/Flex";
import { RenderPropsArgTypes } from "@sb/helpers";
import { ErrorMessage } from "@components/Fields";

const date = today(getLocalTimeZone());
const minValue = date.set({ month: date.month - 1 });
const maxValue = date.set({ month: date.month + 1 });

// Preset dates for the date props' select controls.
const datePresets = {
  Today: date,
  "One week ago": date.subtract({ weeks: 1 }),
  "In one week": date.add({ weeks: 1 }),
  "One month ago": date.subtract({ months: 1 }),
  "In one month": date.add({ months: 1 }),
};

const dateControl = {
  control: "select",
  options: Object.keys(datePresets),
  mapping: datePresets,
} as const;

const header = `  <Flex $gap="20px" $align="center" $justify="space-between">
    <IconButton slot="previous-month" icon="chevron_left" variant="ghost" />
    <Calendar.Title />
    <IconButton slot="next-month" icon="chevron_right" variant="ghost" />
  </Flex>
  <Calendar.Grid>
    {(date) => <Calendar.Cell date={date} />}
  </Calendar.Grid>`;

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
    size: {
      control: "select",
      options: ["small", "medium", "large", "full"],
    },
    value: {
      ...dateControl,
      description:
        "The current value of the calendar. Accepts an object from the `@internationalized/date` library.",
    },
    defaultValue: {
      ...dateControl,
      description:
        "Set the initial value of an uncontrolled calendar. Accepts an object from the `@internationalized/date` library.",
    },
    defaultFocusedValue: {
      ...dateControl,
      description:
        "Set the initial focused value of an uncontrolled calendar. Accepts an object from the `@internationalized/date` library.",
    },
    focusedValue: {
      ...dateControl,
      description:
        "The current focused value of the calendar. Accepts an object from the `@internationalized/date` library.",
    },
    isDateUnavailable: {
      control: false,
      description:
        "A function that is called for every date on the calendar. If it returns true, the date is disabled.",
    },
    maxValue: {
      ...dateControl,
      description:
        "The maximum date that can be selected. Accepts an object from the `@internationalized/date` library.",
    },
    minValue: {
      ...dateControl,
      description:
        "The minimum date that can be selected. Accepts an object from the `@internationalized/date` library.",
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

export const Primary: Story = {
  args: {
    defaultValue: date,
    children: [
      <Flex key="header" $gap="20px" $align="center" $justify="space-between">
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
<Calendar defaultValue={today(getLocalTimeZone())}>
${header}
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
  parameters: {
    docs: {
      source: {
        language: "jsx",
        code: `
const date = today(getLocalTimeZone());

<Calendar
  defaultValue={date}
  minValue={date.set({ month: date.month - 1 })}
  maxValue={date.set({ month: date.month + 1 })}
>
${header}
</Calendar>
        `,
      },
    },
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
<Calendar defaultValue={today(getLocalTimeZone())} isInvalid>
${header}
  <ErrorMessage>The Selected Date is Invalid</ErrorMessage>
</Calendar>
        `,
      },
    },
  },
};

export const Disabled: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    isDisabled: true,
  },
  parameters: {
    docs: {
      source: {
        language: "jsx",
        code: `
<Calendar defaultValue={today(getLocalTimeZone())} isDisabled>
${header}
</Calendar>
        `,
      },
    },
  },
};

const isWeekendInUS = (value: DateValue) => isWeekend(value, "en-US");

export const UnavailableDates: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    isDateUnavailable: isWeekendInUS,
  },
  parameters: {
    docs: {
      description: {
        story:
          "`isDateUnavailable` is called for every date. Here weekends can't be selected.",
      },
      source: {
        language: "jsx",
        code: `
import { isWeekend } from "@internationalized/date";

<Calendar
  defaultValue={today(getLocalTimeZone())}
  isDateUnavailable={(date) => isWeekend(date, "en-US")}
>
${header}
</Calendar>
        `,
      },
    },
  },
};
