import React, { useState } from "react";
import { Calendar, IconMenu, Item, Section } from "../elements";
import { parseDate } from "@internationalized/date";

export default function AriaComponents() {
  const [date, setDate] = useState(parseDate("2021-01-01"));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Calendar value={date} onChange={setDate} isInvalid />
    </div>
  );
}
