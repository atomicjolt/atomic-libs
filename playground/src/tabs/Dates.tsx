import React, { useState } from "react";
import { Button, Calendar, DateInput, DateLike } from "../elements";

export default function Dates() {
  const [date, setDate] = useState<DateLike | null>(new Date());

  const reset = () => {
    setDate(new Date());
  };

  return (
    <div>
      <div>
        <h1>Current Date: {date?.toLocaleString()}</h1>
      </div>
      <Button onClick={reset}>Reset</Button>
      <hr />
      <h2>Calendar</h2>
      <Calendar date={date} onSelect={(v) => setDate(v)} withTime />
      <hr />
      <h2>Date Input</h2>
      <DateInput label="Date" value={date} onChange={setDate} />
    </div>
  );
}
