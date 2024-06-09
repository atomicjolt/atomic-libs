import React from "react";
import { FormatDuration } from "../elements";

export default function Aria() {
  return (
    <div>
      <FormatDuration value={10} />

      <FormatDuration value={10000000} style="narrow" minUnit="second">
        {(formatted) => <h1>{formatted}</h1>}
      </FormatDuration>

      <FormatDuration value={null} fallback={<h1>No value given</h1>} />
      <br />

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
