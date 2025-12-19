import { useState } from "react";
import {
  Calendar,
  CustomSelect,
  DateInput,
  DatePicker,
  Flex,
  IconButton,
  Item,
  TextInput,
} from "@atomicjolt/atomic-elements";
import { DateValue, getLocalTimeZone, now } from "@internationalized/date";

interface DateAndTimeProps {}

export function DateAndTime(props: DateAndTimeProps) {
  const [selectedDate, setSelectedDate] = useState<DateValue | null>(() =>
    now(getLocalTimeZone())
  );
  const [size, setSize] = useState<"small" | "medium" | "large">("medium");
  const [granularity, setGranularity] = useState<
    "day" | "hour" | "minute" | "second"
  >("day");

  return (
    <Flex $gap="4" $direction="column">
      <CustomSelect
        label="Size"
        selectedKey={size}
        onSelectionChange={(key) =>
          setSize(key as "small" | "medium" | "large")
        }
      >
        <Item id="small">Small</Item>
        <Item id="medium">Medium</Item>
        <Item id="large">Large</Item>
      </CustomSelect>
      <CustomSelect
        label="Granularity"
        selectedKey={granularity}
        onSelectionChange={(key) =>
          setGranularity(key as "day" | "hour" | "minute" | "second")
        }
      >
        <Item id="day">Day</Item>
        <Item id="hour">Hour</Item>
        <Item id="minute">Minute</Item>
        <Item id="second">Second</Item>
      </CustomSelect>
      <Flex $gap="4" $align="start">
        <Calendar value={selectedDate} onChange={setSelectedDate} size={size}>
          <Flex $gap="20px" $align="center" $justify="space-between">
            <IconButton
              slot="previous-month"
              icon="chevron_left"
              variant="ghost"
            />
            <Calendar.Title />
            <IconButton
              slot="next-month"
              icon="chevron_right"
              variant="ghost"
            />
          </Flex>

          <Calendar.Grid>
            {(date) => <Calendar.Cell date={date} />}
          </Calendar.Grid>
        </Calendar>

        <Flex $direction="column" $gap="1" $align="start">
          <DateInput
            value={selectedDate}
            onChange={setSelectedDate}
            label="Date Input"
            size={size}
            granularity={granularity}
          />
          <DatePicker
            value={selectedDate}
            onChange={setSelectedDate}
            label="Date Picker"
            size={size}
            calendarSize="small"
            granularity={granularity}
          />
          <TextInput label="Text Input" size={size} />
        </Flex>
      </Flex>
    </Flex>
  );
}
