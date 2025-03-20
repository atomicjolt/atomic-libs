import React from "react";
import {
  Loading,
  Button,
  TextInput,
  IconButton,
  Table,
  Flex,
} from "../elements";

export default function Aria() {
  const [isLoading, setIsLoading] = React.useState(true);
  return (
    <>
      <Button onPress={() => setIsLoading(!isLoading)}>Toggle Loading</Button>
      <Loading isLoading={isLoading} loadingMessage="Content is loading">
        <Flex $direction="column" $gap="2">
          <TextInput label="Name" size="large" />
          <Button>Click me</Button>
          <IconButton icon="search" />
          <Table>
            <Table.Header>
              <Table.Column>Column 1</Table.Column>
              <Table.Column>Column 2</Table.Column>
              <Table.Column>Column 3</Table.Column>
            </Table.Header>
            <Table.Body loadingRows={10}>
              <Table.Row>
                <Table.Cell>Row 1, Cell 1</Table.Cell>
                <Table.Cell>Row 1, Cell 2</Table.Cell>
                <Table.Cell>Row 1, Cell 3</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Flex>
      </Loading>
    </>
  );
}
