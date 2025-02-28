import React from "react";
import { Text, Card } from "../elements";

export default function Aria() {
  return (
    <Card>
      {/* <Card.Stack>
        <Card.Columns>
          <Card.Panel>
            <Text $size="3" $weight="bold">
              Panel 1
            </Text>
          </Card.Panel>

          <Card.Panel>
            <Text $size="3" $weight="bold">
              Panel 3
            </Text>
          </Card.Panel>
        </Card.Columns>

        <Card.Panel>
          <Text $size="3">Panel 2</Text>
        </Card.Panel>
      </Card.Stack> */}

      <Card.Grid $columns="repeat(3, 200px)" $rows="2">
        <Card.Panel $height="200px">
          <Text $size="3">Panel 1</Text>
        </Card.Panel>
        <Card.Panel>
          <Text $size="3">Panel 2</Text>
        </Card.Panel>
        <Card.Panel>
          <Text $size="3">Panel 3</Text>
        </Card.Panel>
        <Card.Panel>
          <Text $size="3">Panel 4</Text>
        </Card.Panel>
      </Card.Grid>
    </Card>
  );
}
