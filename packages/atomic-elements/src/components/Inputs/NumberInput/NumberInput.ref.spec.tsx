import { describe, test, expect } from "vitest";
import { createRef } from "react";
import { render } from "@testing-library/react";
import { NumberInput } from ".";
import { FileInput } from "../FileInput";

describe("forwarded refs", () => {
  test("NumberInput forwards its ref to the input", () => {
    const ref = createRef<HTMLInputElement>();
    render(<NumberInput aria-label="Amount" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  test("FileInput forwards its ref to the file input", () => {
    const ref = createRef<HTMLInputElement>();
    render(<FileInput label="Upload" ref={ref} />);
    expect(ref.current?.type).toBe("file");
  });

  test("FileInput puts its id on the file input", () => {
    const { container } = render(<FileInput label="Upload" id="avatar" />);
    expect(container.querySelector('input[type="file"]')!.id).toBe("avatar");
  });
});
