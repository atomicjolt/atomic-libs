import React from "react";
import {
  Calendar,
  Flex,
  IconButton,
} from "../../../packages/atomic-elements/src/index";

export default function Aria() {
  return (
    <div style={{ width: "320px", border: "1px solid black" }}>
      <Calendar>
        <Flex gap={20} alignItems="center" justifyContent="space-between">
          <IconButton
            slot="previous-month"
            icon="chevron_left"
            variant="ghost"
          />
          <Calendar.Title />
          <IconButton slot="next-month" icon="chevron_right" variant="ghost" />
        </Flex>
        <Calendar.Grid>{(date) => <Calendar.Cell date={date} />}</Calendar.Grid>
      </Calendar>
    </div>
  );
}
