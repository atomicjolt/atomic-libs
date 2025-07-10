import { render } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import { {{ pascalCase name }} } from ".";

describe("{{ pascalCase name }}", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const res = render(<{{ pascalCase name }} />);
      expect(res).toMatchSnapshot();
    });
  });
});
