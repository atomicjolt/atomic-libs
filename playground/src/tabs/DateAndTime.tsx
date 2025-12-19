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
} from "../elements";
import { DateValue } from "@internationalized/date";

interface DateAndTimeProps {}

export function DateAndTime(props: DateAndTimeProps) {
  const [selectedDate, setSelectedDate] = useState<DateValue | null>(null);
  const [size, setSize] = useState<"small" | "medium" | "large">("medium");
  const [granularity, setGranularity] = useState<
    "day" | "hour" | "minute" | "second"
  >("day");

  console.log("Selected date:", selectedDate);

  return (
    <Flex $gap="4">
      <CustomSelect label="Size" selectedKey={size} onSelectionChange={setSize}>
        <Item id="small">Small</Item>
        <Item id="medium">Medium</Item>
        <Item id="large">Large</Item>
      </CustomSelect>
      <CustomSelect
        label="Granularity"
        selectedKey={granularity}
        onSelectionChange={setGranularity}
      >
        <Item id="day">Day</Item>
        <Item id="hour">Hour</Item>
        <Item id="minute">Minute</Item>
        <Item id="second">Second</Item>
      </CustomSelect>
      {/* <Calendar value={selectedDate} onChange={setSelectedDate} size={size}>
        <Flex $gap="20px" $align="center" $justify="space-between">
          <IconButton
            slot="previous-month"
            icon="chevron_left"
            variant="ghost"
          />
          <Calendar.Title />
          <IconButton slot="next-month" icon="chevron_right" variant="ghost" />
        </Flex>

        <Calendar.Grid>{(date) => <Calendar.Cell date={date} />}</Calendar.Grid>
      </Calendar> */}

      <Flex $direction="column" $gap="1">
        <DateInput
          value={selectedDate}
          onChange={setSelectedDate}
          label="Date Input"
          size={size}
          granularity={granularity}
        />
        <TextInput label="Text Input" size={size} />
        <DatePicker
          value={selectedDate}
          onChange={setSelectedDate}
          label="Date Picker"
          size={size}
          granularity={granularity}
        />
      </Flex>
    </Flex>
  );
}
