import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { parseDate, now, getLocalTimeZone } from "@internationalized/date";
import { DateInput } from ".";

describe("DateInput", () => {
  describe("matches snapshots", () => {
    const shared = {
      label: "Date Input",
      message: "Select a date",
      error: "Invalid date",
      onChange: () => {},
    };

    test("default variant", () => {
      const result = render(<DateInput {...shared} />);
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("with value", () => {
      const result = render(
        <DateInput {...shared} value={parseDate("2023-01-15")} />
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("with default value", () => {
      const result = render(
        <DateInput {...shared} defaultValue={parseDate("2023-12-25")} />
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("day granularity", () => {
      const result = render(<DateInput {...shared} granularity="day" />);
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("hour granularity", () => {
      const result = render(<DateInput {...shared} granularity="hour" />);
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("minute granularity", () => {
      const result = render(<DateInput {...shared} granularity="minute" />);
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("second granularity", () => {
      const result = render(<DateInput {...shared} granularity="second" />);
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("disabled state", () => {
      const result = render(<DateInput {...shared} isDisabled />);
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("required state", () => {
      const result = render(<DateInput {...shared} isRequired />);
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("readonly state", () => {
      const result = render(<DateInput {...shared} isReadOnly />);
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("invalid state", () => {
      const result = render(<DateInput {...shared} isInvalid />);
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("with leading zeros", () => {
      const result = render(<DateInput {...shared} shouldForceLeadingZeros />);
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("24 hour cycle", () => {
      const result = render(
        <DateInput {...shared} granularity="hour" hourCycle={24} />
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("small size", () => {
      const result = render(<DateInput {...shared} size="small" />);
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("medium size", () => {
      const result = render(<DateInput {...shared} size="medium" />);
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("large size", () => {
      const result = render(<DateInput {...shared} size="large" />);
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("with min and max values", () => {
      const today = now(getLocalTimeZone());
      const minValue = today.subtract({ days: 30 });
      const maxValue = today.add({ days: 30 });

      const result = render(
        <DateInput {...shared} minValue={minValue} maxValue={maxValue} />
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("without label", () => {
      const result = render(
        <DateInput message="Select a date" error="Invalid date" />
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("without message", () => {
      const result = render(
        <DateInput label="Date Input" error="Invalid date" />
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("without error", () => {
      const result = render(
        <DateInput label="Date Input" message="Select a date" />
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("minimal props", () => {
      const result = render(<DateInput />);
      expect(result.asFragment()).toMatchSnapshot();
    });
  });
});
