import { describe, expect, test } from "vitest";
import { screen } from "@testing-library/react";
import { Form } from "../Form";
import { renderForm } from "../../testing/renderForm";

describe("Form.FileInput", () => {
  test("submits the selected File", async () => {
    const { user, container, submitAndGetValues } = renderForm(
      <Form.FileInput name="avatar" label="Avatar" />
    );

    const file = new File(["hello"], "avatar.png", { type: "image/png" });
    // The native input is hidden; the visible button opens it.
    const input = container.querySelector<HTMLInputElement>(
      'input[type="file"]'
    )!;
    await user.upload(input, file);

    expect(
      screen.getByRole("button", { name: /avatar\.png/ })
    ).toBeInTheDocument();

    const values = await submitAndGetValues();
    expect(values.avatar).toBe(file);
  });

  test("shows the required error", async () => {
    const { submit, onSubmit } = renderForm(
      <Form.FileInput name="avatar" label="Avatar" isRequired="Pick a file" />
    );

    await submit();

    expect(await screen.findByText("Pick a file")).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
