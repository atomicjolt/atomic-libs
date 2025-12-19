import React from "react";
import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { parseDate } from "@internationalized/date";
import { DateField } from ".";
import { Label, Message, ErrorMessage } from "../";

describe("DateField", () => {
  describe("matches snapshots", () => {
    test("basic composition", () => {
      const result = render(
        <DateField>
          <Label>Date</Label>
          <DateField.Segments>
            {(_, index) => <DateField.Segment key={index} index={index} />}
          </DateField.Segments>
        </DateField>
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("with value", () => {
      const result = render(
        <DateField value={parseDate("2023-01-15")}>
          <Label>Date</Label>
          <DateField.Segments>
            {(_, index) => <DateField.Segment key={index} index={index} />}
          </DateField.Segments>
        </DateField>
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("with message and error", () => {
      const result = render(
        <DateField isInvalid>
          <Label>Date</Label>
          <Message>Enter your birth date</Message>
          <DateField.Segments>
            {(_, index) => <DateField.Segment key={index} index={index} />}
          </DateField.Segments>
          <ErrorMessage>Please enter a valid date</ErrorMessage>
        </DateField>
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("disabled state", () => {
      const result = render(
        <DateField isDisabled>
          <Label>Date</Label>
          <DateField.Segments>
            {(_, index) => <DateField.Segment key={index} index={index} />}
          </DateField.Segments>
        </DateField>
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("required state", () => {
      const result = render(
        <DateField isRequired>
          <Label>Date</Label>
          <DateField.Segments>
            {(_, index) => <DateField.Segment key={index} index={index} />}
          </DateField.Segments>
        </DateField>
      );
      expect(result.asFragment()).toMatchSnapshot();
    });

    test("with granularity hour", () => {
      const result = render(
        <DateField granularity="hour">
          <Label>Date and Time</Label>
          <DateField.Segments>
            {(_, index) => <DateField.Segment key={index} index={index} />}
          </DateField.Segments>
        </DateField>
      );
      expect(result.asFragment()).toMatchSnapshot();
    });
  });
});
