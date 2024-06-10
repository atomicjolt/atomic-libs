import React from "react";
import { FormatDuration, FormatOptional } from "../elements";

export default function Aria() {
  return (
    <div>
      <FormatDuration value={10} />

      <FormatDuration value={10000000} style="narrow" minUnit="second">
        {(formatted) => <h1>{formatted}</h1>}
      </FormatDuration>

      <FormatDuration value={null} fallback={<h1>No value given</h1>} />
      <br />

      <FormatOptional value={0} fallback={<h1>none</h1>}>
        {(v) => <h1>{v}</h1>}
      </FormatOptional>

      <FormatOptional value={10} fallback={<h1>none</h1>} />

      <FormatOptional value={{ age: 10 }} fallback={<h1>none</h1>}>
        {(v) => <h1>{v.age}</h1>}
      </FormatOptional>

      {/* <FormatNumber value={0.1} style="percent" />

      <FormatNumber value={10}>
        {(formatted) => <h1>{formatted}</h1>}
      </FormatNumber>

      <FormatNumber value={null} fallback="No value given" />
      <br />

      <FormatNumber value={null} fallback="none">
        {(formatted) => <h1>{formatted}</h1>}
      </FormatNumber> */}
    </div>
  );
}
