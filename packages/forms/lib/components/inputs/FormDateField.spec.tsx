import { describe, expect, test } from "vitest";
import { screen, within } from "@testing-library/react";
import { CalendarDate } from "@internationalized/date";
import { ComboInput, DateField } from "@atomicjolt/atomic-elements";
import { Form } from "../Form";
import { renderForm } from "../../testing/renderForm";

function Segments() {
  return (
    <ComboInput padding="both">
      <DateField.Segments>
        {(_, index) => <DateField.Segment key={index} index={index} />}
      </DateField.Segments>
    </ComboInput>
  );
}

describe("Form.DateField", () => {
  test("submits the typed date as a CalendarDate", async () => {
    const { user, submitAndGetValues } = renderForm(
      <Form.DateField name="start">
        <Form.Label>Start date</Form.Label>
        <Segments />
      </Form.DateField>
    );

    const group = screen.getByRole("group", { name: "Start date" });
    const [month] = within(group).getAllByRole("spinbutton");
    await user.click(month);
    await user.keyboard("12252025");

    const values = await submitAndGetValues();
    expect(values.start).toBeInstanceOf(CalendarDate);
    expect(values.start.toString()).toBe("2025-12-25");
  });

  test("marks the field invalid when required and empty", async () => {
    const { submit, onSubmit } = renderForm(
      <Form.DateField name="start" isRequired="Pick a start date">
        <Form.Label>Start date</Form.Label>
        <Segments />
        <Form.ErrorMessage />
      </Form.DateField>
    );

    await submit();

    expect(await screen.findByText("Pick a start date")).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
