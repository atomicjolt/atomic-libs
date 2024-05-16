import React, { useState } from "react";
import {
  CheckBox,
  ChipGroup,
  ComboBox,
  CustomSelect,
  DateInput,
  DatePicker,
  Item,
  MaterialIcon,
  NumberInput,
  SearchInput,
  TextAreaInput,
  TextInput,
  TimeInput,
} from "../elements";
import {
  FieldErrorMessage,
  FieldMessage,
  FieldInput,
  VirtualInput,
  FieldLabel,
  TextField,
} from "../../../src/components/Internal/Field";

export default function Fields() {
  const [value, setValue] = useState("");
  const [number, setNumber] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isRequired, setIsRequired] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  return (
    <div>
      <CheckBox isSelected={isDisabled} onChange={setIsDisabled}>
        Disabled
      </CheckBox>

      <CheckBox isSelected={isRequired} onChange={setIsRequired}>
        Required
      </CheckBox>

      <CheckBox isSelected={isReadOnly} onChange={setIsReadOnly}>
        Read Only
      </CheckBox>

      <CheckBox isSelected={isInvalid} onChange={setIsInvalid}>
        Invalid
      </CheckBox>
      <hr />

      <ChipGroup
        onRemove={(key) => console.log(key)}
        label="Label"
        message="message"
        error="error"
        disabledKeys={["shopping"]}
        selectionMode="multiple"
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        isRequired={isRequired}
      >
        <Item key="news">News</Item>
        <Item key="travel">Travel</Item>
        <Item key="gaming">Gaming</Item>
        <Item key="shopping">Shopping</Item>
      </ChipGroup>

      <hr />

      <TextField
        size="large"
        value={value}
        onChange={setValue}
        isDisabled={isDisabled}
        isRequired={isRequired}
        isReadOnly={isReadOnly}
        isInvalid={isInvalid}
      >
        <FieldLabel>Label</FieldLabel>
        <FieldMessage>Message</FieldMessage>
        <VirtualInput>
          <MaterialIcon icon="search" />
          <FieldInput placeholder="placeholder" />
        </VirtualInput>
        <FieldErrorMessage>Error</FieldErrorMessage>
      </TextField>

      <hr />

      <TextInput
        label="Label"
        message="Message"
        error="Error"
        isDisabled={isDisabled}
        isRequired={isRequired}
        isInvalid={isInvalid}
        isReadOnly={isReadOnly}
        onChange={setValue}
        value={value}
        size="large"
      />

      <hr />
      <SearchInput
        label="Label"
        message="Message"
        error="Error"
        isDisabled={isDisabled}
        isRequired={isRequired}
        isInvalid={isInvalid}
        isReadOnly={isReadOnly}
        onChange={setValue}
        value={value}
        size="large"
        onSubmit={(value) => console.log(value)}
      />

      <hr />

      <NumberInput
        label="Label"
        message="Message"
        error="Error"
        isDisabled={isDisabled}
        isRequired={isRequired}
        isInvalid={isInvalid}
        isReadOnly={isReadOnly}
        onChange={setNumber}
        value={number}
        size="large"
        maxValue={10}
      />

      <hr />

      <CheckBox
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        isReadOnly={isReadOnly}
        isRequired={isRequired}
        message="message"
        error="Error"
      >
        CheckBox
      </CheckBox>

      <hr />

      <TextAreaInput
        label="Label"
        message="Message"
        error="Error"
        isDisabled={isDisabled}
        isRequired={isRequired}
        isInvalid={isInvalid}
        isReadOnly={isReadOnly}
        onChange={setValue}
        value={value}
        size="large"
      />

      <hr />

      <DateInput
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        isReadOnly={isReadOnly}
        isRequired={isRequired}
        message="message"
        error="Error"
        label="Label"
      />

      <hr />

      <DatePicker
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        isReadOnly={isReadOnly}
        isRequired={isRequired}
        message="message"
        error="Error"
        label="Label"
      />

      <hr />

      <TimeInput
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        isReadOnly={isReadOnly}
        isRequired={isRequired}
        message="message"
        error="Error"
        label="Label"
      />

      <hr />

      <ComboBox
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        isReadOnly={isReadOnly}
        isRequired={isRequired}
        message="message"
        error="Error"
        label="Label"
        placeholder="Select an item"
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </ComboBox>

      <hr />

      <CustomSelect
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        isRequired={isRequired}
        isReadOnly={isReadOnly}
        message="message"
        error="Error"
        label="Label"
        placeholder="Select an item"
        variant="floating"
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </CustomSelect>

      <h2>Value: {value}</h2>
    </div>
  );
}
