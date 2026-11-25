import { describe, expect, test } from "vitest";
import { screen, waitFor, within } from "@testing-library/react";
import { Time } from "@internationalized/date";
import { Form } from "../Form";
import { renderForm } from "../../testing/renderForm";

describe("Form.TimeInput", () => {
  test("submits the typed time as a Time", async () => {
    const { user, submitAndGetValues } = renderForm(
      <Form.TimeInput name="alarm" label="Alarm" />
    );

    const group = screen.getByRole("group", { name: "Alarm" });
    const [hour] = within(group).getAllByRole("spinbutton");
    await user.click(hour);
    await user.keyboard("0930P");

    const values = await submitAndGetValues();
    expect(values.alarm).toBeInstanceOf(Time);
    expect(values.alarm.toString()).toBe("21:30:00");
  });

  test("uses the default value", async () => {
    const { submitAndGetValues } = renderForm(
      <Form.TimeInput name="alarm" label="Alarm" />,
      { alarm: new Time(7, 15) }
    );

    const values = await submitAndGetValues();
    expect(values.alarm.compare(new Time(7, 15))).toBe(0);
  });

  test("shows the required error", async () => {
    const { submit, onSubmit } = renderForm(
      <Form.TimeInput name="alarm" label="Alarm" isRequired="Set a time" />
    );

    await submit();

    // TimeInput doesn't render its `error` text (see atomic-elements), so
    // assert on the invalid state instead.
    const group = screen.getByRole("group", { name: "Alarm" });
    await waitFor(() =>
      within(group)
        .getAllByRole("spinbutton")
        .forEach((segment) =>
          expect(segment).toHaveAttribute("aria-invalid", "true")
        )
    );
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
