import React, { useState } from "react";
import { getLocalTimeZone, now } from "@internationalized/date";
// DateField isn't exported from the package, so import it from source.
import { DateField } from "@components/Fields/DateField";
import {
  Button,
  CheckBox,
  Chip,
  ChipGroup,
  ComboBox,
  ComboInput,
  CustomSelect,
  DateInput,
  DatePicker,
  ExtendedSize,
  Field,
  FieldInput,
  FieldLabel,
  FieldMessage,
  FileInput,
  Flex,
  Heading,
  IconButton,
  Item,
  Loading,
  ListBox,
  LoadingStatus,
  MaterialIcon,
  MultiSelect,
  MultiSelectField,
  NumberInput,
  Radio,
  RadioGroup,
  Popover,
  SearchInput,
  Select,
  SelectField,
  Strong,
  Table,
  Text,
  TextAreaInput,
  TextInput,
  TimeInput,
  ToggleSwitch,
} from "@atomicjolt/atomic-elements";

interface Data {
  name: string;
  age: number;
}

const data: Data = {
  name: "John Doe",
  age: 30,
};

export default function LoadingStates() {
  const [size, setSize] = useState<ExtendedSize>("medium");
  const [isLoading, setIsLoading] = useState(false);
  const [number, setNumber] = useState(0);
  const [maybeData, setMaybeData] = useState<Data | null>(null);

  return (
    <div style={{ padding: "16px" }}>
      <Flex $gap="2" $direction="column">
        <ToggleSwitch isSelected={isLoading} onChange={setIsLoading}>
          Loading
        </ToggleSwitch>

        <CustomSelect
          label="Size"
          selectedKey={size}
          onSelectionChange={(key) => setSize(key as ExtendedSize)}
        >
          <Item id="small">Small</Item>
          <Item id="medium">Medium</Item>
          <Item id="large">Large</Item>
          <Item id="auto">Auto</Item>
          <Item id="full">Full</Item>
        </CustomSelect>
      </Flex>
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
        <Button size={size} isLoading={isLoading} loadingLabel="Loading">
          Submit
        </Button>{" "}
        <IconButton
          icon="add"
          aria-label="Add"
          size={size}
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
      <FileInput
        label="Upload"
        size={size}
        isLoading={isLoading}
        loadingLabel="Loading"
      />
      <hr />
      <Heading as="h3" $size="5">
        CustomSelect / MultiSelect / ComboBox
      </Heading>
      <CustomSelect
        label="Custom Select"
        placeholder="Select an item"
        size={size}
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
        size={size}
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
        size={size}
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
        size={size}
        isLoading={isLoading}
        loadingLabel="Loading"
      />
      <br />
      <SearchInput
        label="Search"
        onSubmit={(value) => console.log(value)}
        size={size}
        isLoading={isLoading}
        loadingLabel="Loading"
      />
      <br />
      <TextInput
        label="Text"
        size={size}
        isLoading={isLoading}
        loadingLabel="Loading"
      />
      <br />
      <TextAreaInput
        label="Text Area"
        size={size}
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
        Accept isLoading but don't implement it
      </Heading>
      <Text as="p" $size="3">
        These components accept isLoading and loadingLabel (through
        FieldInputProps) but ignore them. Each is passed isLoading directly;
        toggle Loading above to compare. See docs/storybook-audit.md, Part 4.
      </Text>
      <Heading as="h3" $size="5">
        Select
      </Heading>
      <Select label="Select" isLoading={isLoading} loadingLabel="Loading">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
      <hr />
      <Heading as="h3" $size="5">
        DateInput / DatePicker / TimeInput
      </Heading>
      <DateInput
        label="Date input"
        isLoading={isLoading}
        loadingLabel="Loading"
      />
      <br />
      <DatePicker
        label="Date picker"
        isLoading={isLoading}
        loadingLabel="Loading"
      />
      <br />
      <TimeInput
        label="Time input"
        isLoading={isLoading}
        loadingLabel="Loading"
      />
      <hr />
      <Heading as="h3" $size="5">
        Field
      </Heading>
      <Field isLoading={isLoading} loadingLabel="Loading">
        <FieldLabel>Field</FieldLabel>
        <FieldMessage>A plain field with an input</FieldMessage>
        <FieldInput />
      </Field>
      <hr />
      <Heading as="h3" $size="5">
        DateField
      </Heading>
      <DateField
        defaultValue={now(getLocalTimeZone())}
        granularity="day"
        isLoading={isLoading}
        loadingLabel="Loading"
      >
        <FieldLabel>Date field</FieldLabel>
        <ComboInput padding="both">
          <DateField.Segments>
            {(_, index) => <DateField.Segment key={index} index={index} />}
          </DateField.Segments>
        </ComboInput>
      </DateField>
      <hr />
      <Heading as="h3" $size="5">
        SelectField / MultiSelectField
      </Heading>
      <SelectField isLoading={isLoading} loadingLabel="Loading">
        <FieldLabel>Select field</FieldLabel>
        <Button variant="dropdown">
          <SelectField.Value placeholder="Select an option" />
          <MaterialIcon icon="arrow_drop_down" style={{ marginLeft: "auto" }} />
        </Button>
        <Popover>
          <ListBox>
            <Item id="1">Item 1</Item>
            <Item id="2">Item 2</Item>
          </ListBox>
        </Popover>
      </SelectField>
      <br />
      <MultiSelectField isLoading={isLoading} loadingLabel="Loading">
        <FieldLabel>Multi select field</FieldLabel>
        <Button variant="dropdown">
          Select items
          <MaterialIcon icon="arrow_drop_down" style={{ marginLeft: "auto" }} />
        </Button>
        <Popover>
          <ListBox>
            <Item id="1">Item 1</Item>
            <Item id="2">Item 2</Item>
          </ListBox>
        </Popover>
      </MultiSelectField>
      <hr />
      <Heading as="h3" $size="5">
        ChipGroup
      </Heading>
      <ChipGroup
        label="Chip group"
        isLoading={isLoading}
        loadingLabel="Loading"
      >
        <Chip id="news">News</Chip>
        <Chip id="travel">Travel</Chip>
      </ChipGroup>
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
          <Button size={size}>Submit</Button>{" "}
          <IconButton icon="add" aria-label="Add" size={size} />
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
        <FileInput label="Upload" size={size} />
        <hr />
        <CustomSelect
          label="Custom Select"
          placeholder="Select an item"
          size={size}
        >
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </CustomSelect>
        <br />
        <MultiSelect label="Multi Select" size={size}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </MultiSelect>
        <br />
        <ComboBox label="Combo Box" placeholder="Select an item" size={size}>
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </ComboBox>
        <hr />
        <NumberInput label="Number" size={size} />
        <br />
        <SearchInput
          label="Search"
          onSubmit={(value) => console.log(value)}
          size={size}
        />
        <br />
        <TextInput label="Text" size={size} />
        <br />
        <TextAreaInput label="Text Area" size={size} />
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
