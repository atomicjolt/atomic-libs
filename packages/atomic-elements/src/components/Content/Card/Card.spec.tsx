import { render } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import { Card } from "./Card.component";
import { Text } from "@components/Typography/Text";

describe("Card", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const res = render(
        <Card>
          <Card.Header>
            <Card.Title>Card Title</Card.Title>
          </Card.Header>
          <Card.Panel>
            <Text $size="3">Here is some content within a panel</Text>
          </Card.Panel>
        </Card>
      );
      expect(res).toMatchSnapshot();
    });
  });
});
