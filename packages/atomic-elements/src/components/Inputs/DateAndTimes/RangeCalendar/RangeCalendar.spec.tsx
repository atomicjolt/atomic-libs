import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { parseDate, today, getLocalTimeZone, CalendarDate } from "@internationalized/date";
import { RangeCalendar } from ".";
import { IconButton } from "@components/Buttons/IconButton";
import { Flex } from "@components/Layout/Flex";

describe("RangeCalendar", () => {
  describe("matches snapshots", () => {
    const date = today(getLocalTimeZone());
    const defaultRange = {
      start: date,
      end: date.add({ days: 7 })
    };

    const defaultChildren = [
      <Flex key="header" $gap="20px" $align="center" $justify="space-between">
        <IconButton slot="previous-month" icon="chevron_left" variant="ghost" />
        <RangeCalendar.Title />
        <IconButton slot="next-month" icon="chevron_right" variant="ghost" />
      </Flex>,
      <RangeCalendar.Grid key="grid">
        {(date) => <RangeCalendar.Cell date={date} />}
      </RangeCalendar.Grid>
    ];

    test("default variant", () => {
      const result = render(
        <RangeCalendar defaultValue={defaultRange}>
          {defaultChildren}
        </RangeCalendar>
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("with controlled value", () => {
      const result = render(
        <RangeCalendar value={defaultRange} onChange={() => {}}>
          {defaultChildren}
        </RangeCalendar>
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("small size", () => {
      const result = render(
        <RangeCalendar size="small" defaultValue={defaultRange}>
          {defaultChildren}
        </RangeCalendar>
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("medium size", () => {
      const result = render(
        <RangeCalendar size="medium" defaultValue={defaultRange}>
          {defaultChildren}
        </RangeCalendar>
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("large size", () => {
      const result = render(
        <RangeCalendar size="large" defaultValue={defaultRange}>
          {defaultChildren}
        </RangeCalendar>
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("disabled state", () => {
      const result = render(
        <RangeCalendar isDisabled defaultValue={defaultRange}>
          {defaultChildren}
        </RangeCalendar>
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("invalid state", () => {
      const result = render(
        <RangeCalendar isInvalid defaultValue={defaultRange}>
          {defaultChildren}
        </RangeCalendar>
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("with min and max values", () => {
      const minValue = date.subtract({ days: 30 });
      const maxValue = date.add({ days: 30 });

      const result = render(
        <RangeCalendar
          defaultValue={defaultRange}
          minValue={minValue}
          maxValue={maxValue}
        >
          {defaultChildren}
        </RangeCalendar>
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("allows non-contiguous ranges", () => {
      const result = render(
        <RangeCalendar allowsNonContiguousRanges>
          {defaultChildren}
        </RangeCalendar>
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("with date unavailable function", () => {
      const isDateUnavailable = (date: CalendarDate) => {
        // Make weekends unavailable
        const dayOfWeek = date.toDate(getLocalTimeZone()).getDay();
        return dayOfWeek === 0 || dayOfWeek === 6;
      };

      const result = render(
        <RangeCalendar
          defaultValue={defaultRange}
          isDateUnavailable={isDateUnavailable}
        >
          {defaultChildren}
        </RangeCalendar>
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("minimal props", () => {
      const result = render(
        <RangeCalendar>
          {defaultChildren}
        </RangeCalendar>
      );
      expect(result.asFragment()).toMatchSnapshot();
    });
  });
});