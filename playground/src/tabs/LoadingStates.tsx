import React, { useState } from "react";
import {
  Button,
  CheckBox,
  ComboBox,
  CustomSelect,
  FileInput,
  Flex,
  Heading,
  IconButton,
  Item,
  Loading,
  LoadingStatus,
  MultiSelect,
  NumberInput,
  Radio,
  RadioGroup,
  SearchInput,
  Strong,
  Table,
  Text,
  TextAreaInput,
  TextInput,
  ToggleSwitch,
} from "../elements";

interface Data {
  name: string;
  age: number;
}

const data: Data = {
  name: "John Doe",
  age: 30,
};

export default function LoadingStates() {
  const [isLoading, setIsLoading] = useState(false);
  const [number, setNumber] = useState(0);
  const [maybeData, setMaybeData] = useState<Data | null>(null);

  return (
    <div style={{ padding: "16px" }}>
      <ToggleSwitch isSelected={isLoading} onChange={setIsLoading}>
        Loading
      </ToggleSwitch>
      <hr />
      <Heading as="h2" $size="7">
        Local isLoading prop
      </Heading>
      <Text as="p" $size="3">
        Each component below is passed isLoading directly.
      </Text>
      <Heading as="h3" $size="5">
        Button / IconButton
      </Heading>
      <Flex $gap="2">
        <Button isLoading={isLoading} loadingLabel="Loading">
          Submit
        </Button>{" "}
        <IconButton
          icon="add"
          aria-label="Add"
          isLoading={isLoading}
          loadingLabel="Loading"
        />
      </Flex>
      <hr />
      <Heading as="h3" $size="5">
        CheckBox / ToggleSwitch / RadioGroup
      </Heading>
      <CheckBox isLoading={isLoading} loadingLabel="Loading">
        Subscribe to newsletter
      </CheckBox>
      <br />
      <ToggleSwitch isLoading={isLoading} loadingLabel="Loading">
        Enable notifications
      </ToggleSwitch>
      <br />
      <RadioGroup
        label="Favorite color"
        isLoading={isLoading}
        loadingLabel="Loading"
      >
        <Radio value="red">Red</Radio>
        <Radio value="green">Green</Radio>
        <Radio value="blue">Blue</Radio>
      </RadioGroup>
      <hr />
      <Heading as="h3" $size="5">
        FileInput
      </Heading>
      <FileInput label="Upload" isLoading={isLoading} loadingLabel="Loading" />
      <hr />
      <Heading as="h3" $size="5">
        CustomSelect / MultiSelect / ComboBox
      </Heading>
      <CustomSelect
        label="Custom Select"
        placeholder="Select an item"
        isLoading={isLoading}
        loadingLabel="Loading"
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </CustomSelect>
      <br />
      <MultiSelect
        label="Multi Select"
        isLoading={isLoading}
        loadingLabel="Loading"
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </MultiSelect>
      <br />
      <ComboBox
        label="Combo Box"
        placeholder="Select an item"
        isLoading={isLoading}
        loadingLabel="Loading"
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </ComboBox>
      <hr />
      <Heading as="h3" $size="5">
        NumberInput / SearchInput / TextInput / TextAreaInput
      </Heading>
      <NumberInput
        label="Number"
        value={number}
        onChange={setNumber}
        isLoading={isLoading}
        loadingLabel="Loading"
      />
      <br />
      <SearchInput
        label="Search"
        onSubmit={(value) => console.log(value)}
        isLoading={isLoading}
        loadingLabel="Loading"
      />
      <br />
      <TextInput label="Text" isLoading={isLoading} loadingLabel="Loading" />
      <br />
      <TextAreaInput
        label="Text Area"
        isLoading={isLoading}
        loadingLabel="Loading"
      />
      <hr />
      <Heading as="h3" $size="5">
        Table
      </Heading>
      <Table aria-label="Table">
        <Table.Header>
          <Table.Column id="foo">Foo</Table.Column>
          <Table.Column id="bar">Bar</Table.Column>
          <Table.Column id="baz">Baz</Table.Column>
        </Table.Header>
        <Table.Body isLoading={isLoading} loadingRows={3}>
          <Table.Row id="row 1">
            <Table.Cell>Foo 1</Table.Cell>
            <Table.Cell>Bar 1</Table.Cell>
            <Table.Cell>Baz 1</Table.Cell>
          </Table.Row>
          <Table.Row id="row 2">
            <Table.Cell>Foo 2</Table.Cell>
            <Table.Cell>Bar 2</Table.Cell>
            <Table.Cell>Baz 2</Table.Cell>
          </Table.Row>
          <Table.Row id="row 3">
            <Table.Cell>Foo 3</Table.Cell>
            <Table.Cell>Bar 3</Table.Cell>
            <Table.Cell>Baz 3</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <hr />
      <Heading as="h3" $size="5">
        LoadingStatus
      </Heading>
      <ToggleSwitch
        isSelected={maybeData != null}
        onChange={(isSelected) => setMaybeData(isSelected ? data : null)}
      >
        Toggle Data
      </ToggleSwitch>
      <LoadingStatus
        isLoading={isLoading}
        data={maybeData}
        fallback={
          <Text $size="4" as="div">
            No data available
          </Text>
        }
      >
        {(data) => (
          <Text $size="4" as="div">
            The user's age is: <Strong>{data.age}</Strong>
          </Text>
        )}
      </LoadingStatus>
      <hr />
      <Heading as="h2" $size="7">
        Ambient Loading provider
      </Heading>
      <Text as="p" $size="3">
        Everything below is wrapped in a single Loading provider — none of these
        components are passed isLoading directly, they all pick it up from
        context.
      </Text>
      <Loading isLoading={isLoading}>
        <Flex $gap="2">
          <Button>Submit</Button> <IconButton icon="add" aria-label="Add" />
        </Flex>
        <br />
        <br />
        <CheckBox>Subscribe to newsletter</CheckBox>
        <br />
        <ToggleSwitch>Enable notifications</ToggleSwitch>
        <br />
        <RadioGroup label="Favorite color">
          <Radio value="red">Red</Radio>
          <Radio value="green">Green</Radio>
          <Radio value="blue">Blue</Radio>
        </RadioGroup>
        <hr />
        <FileInput label="Upload" />
        <hr />
        <CustomSelect label="Custom Select" placeholder="Select an item">
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </CustomSelect>
        <br />
        <MultiSelect label="Multi Select">
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </MultiSelect>
        <br />
        <ComboBox label="Combo Box" placeholder="Select an item">
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </ComboBox>
        <hr />
        <NumberInput label="Number" />
        <br />
        <SearchInput label="Search" onSubmit={(value) => console.log(value)} />
        <br />
        <TextInput label="Text" />
        <br />
        <TextAreaInput label="Text Area" />
        <hr />
        <ToggleSwitch
          isSelected={maybeData != null}
          onChange={(isSelected) => setMaybeData(isSelected ? data : null)}
          isLoading={false}
        >
          Toggle Data
        </ToggleSwitch>
        <LoadingStatus
          data={maybeData}
          fallback={
            <Text $size="4" as="div">
              No data available
            </Text>
          }
        >
          {(data) => (
            <Text $size="4" as="div">
              The user's age is: <Strong>{data.age}</Strong>
            </Text>
          )}
        </LoadingStatus>
      </Loading>
    </div>
  );
}
