import React from "react";
import { describe, test, expect } from "vitest";
import { render, within } from "@testing-library/react";
import { Loading } from ".";
import { Item } from "../../Collection";
import { Select } from "../../Dropdowns/Select";
import { CustomSelect } from "../../Dropdowns/CustomSelect";
import { MultiSelect } from "../../Dropdowns/MultiSelect";
import { ComboBox } from "../../Dropdowns/Combobox";
import { DateInput } from "../../Inputs/DateAndTimes/DateInput";
import { DatePicker } from "../../Inputs/DateAndTimes/DatePicker";
import { TimeInput } from "../../Inputs/DateAndTimes/TimeInput";
import { CheckBox } from "../../Inputs/CheckBox";
import { ToggleSwitch } from "../../Inputs/ToggleSwitch";
import { RadioGroup, Radio } from "../../Inputs/RadioGroup";
import { FileInput } from "../../Inputs/FileInput";
import { TextInput } from "../../Inputs/TextInput";
import { TextAreaInput } from "../../Inputs/TextAreaInput";
import { NumberInput } from "../../Inputs/NumberInput";
import { SearchInput } from "../../Inputs/SearchInput";
import { Button } from "../../Buttons/Button";
import { IconButton } from "../../Buttons/IconButton";
import { ButtonGroup } from "../../Buttons/ButtonGroup";
import { ChipGroup } from "../../Chips/ChipGroup";
import { Chip } from "../../Chips/Chip";
import {
  ComboInput,
  Input,
  Label,
  NumberField,
  SearchField,
  TextArea,
  TextField,
} from "../../Fields";
import { ComboBoxField } from "../../Fields/ComboBoxField";
import { Table } from "../../Content/Table";
import { LoadingStatus } from "../LoadingStatus";

type Loading = { isLoading?: boolean; loadingLabel?: string };

interface Case {
  name: string;
  /** Renders the component, applying the loading props when given. */
  render: (loading?: Loading) => React.ReactElement;
  /** Text that should stay visible while loading (e.g. the field label). */
  keeps?: string;
  /**
   * Finds this component's loading indicator. Defaults to a skeleton image or
   * spinner status named by loadingLabel.
   */
  indicator?: (container: HTMLElement, label: string) => Element | null;
}

/** Buttons rename themselves to loadingLabel while loading. */
const buttonNamed = (container: HTMLElement, label: string) =>
  within(container).queryAllByRole("button", { name: label })[0] ?? null;

/** Components that take loading props, grouped roughly by kind. */
const cases: Case[] = [
  // Buttons
  {
    name: "Button",
    indicator: buttonNamed,
    render: (l) => <Button {...l}>Save</Button>,
  },
  {
    name: "IconButton",
    indicator: buttonNamed,
    render: (l) => <IconButton icon="add" aria-label="Add" {...l} />,
  },
  {
    name: "ButtonGroup",
    indicator: buttonNamed,
    render: (l) => (
      <ButtonGroup {...l}>
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    ),
  },

  // Choice inputs
  { name: "CheckBox", render: (l) => <CheckBox {...l}>Agree</CheckBox> },
  {
    name: "ToggleSwitch",
    render: (l) => <ToggleSwitch {...l}>Notify</ToggleSwitch>,
  },
  {
    name: "RadioGroup",
    keeps: "Colour",
    render: (l) => (
      <RadioGroup label="Colour" {...l}>
        <Radio value="red">Red</Radio>
      </RadioGroup>
    ),
  },
  { name: "FileInput", render: (l) => <FileInput label="Upload" {...l} /> },

  // Text inputs
  {
    name: "TextInput",
    keeps: "Name",
    render: (l) => <TextInput label="Name" {...l} />,
  },
  {
    name: "TextAreaInput",
    keeps: "Notes",
    render: (l) => <TextAreaInput label="Notes" {...l} />,
  },
  {
    name: "NumberInput",
    keeps: "Amount",
    render: (l) => <NumberInput label="Amount" {...l} />,
  },
  {
    name: "SearchInput",
    keeps: "Search",
    render: (l) => <SearchInput label="Search" {...l} />,
  },

  // Dropdowns
  {
    name: "Select",
    keeps: "Fruit",
    render: (l) => (
      <Select label="Fruit" {...l}>
        <option value="apple">Apple</option>
      </Select>
    ),
  },
  {
    name: "CustomSelect",
    keeps: "Fruit",
    render: (l) => (
      <CustomSelect label="Fruit" {...l}>
        <Item key="apple">Apple</Item>
      </CustomSelect>
    ),
  },
  {
    name: "MultiSelect",
    keeps: "Fruit",
    render: (l) => (
      <MultiSelect label="Fruit" {...l}>
        <Item key="apple">Apple</Item>
      </MultiSelect>
    ),
  },
  {
    name: "ComboBox",
    keeps: "Fruit",
    render: (l) => (
      <ComboBox label="Fruit" {...l}>
        <Item key="apple">Apple</Item>
      </ComboBox>
    ),
  },

  // Dates and times
  {
    name: "DateInput",
    keeps: "Date",
    render: (l) => <DateInput label="Date" {...l} />,
  },
  {
    name: "DatePicker",
    keeps: "Date",
    render: (l) => <DatePicker label="Date" {...l} />,
  },
  {
    name: "TimeInput",
    keeps: "Time",
    render: (l) => <TimeInput label="Time" {...l} />,
  },

  // Chips
  {
    name: "ChipGroup",
    keeps: "Topics",
    render: (l) => (
      <ChipGroup label="Topics" {...l}>
        <Chip id="news">News</Chip>
      </ChipGroup>
    ),
  },

  // Field building blocks
  {
    name: "TextField",
    keeps: "Name",
    render: (l) => (
      <TextField {...l}>
        <Label>Name</Label>
        <Input />
      </TextField>
    ),
  },
  {
    name: "NumberField",
    keeps: "Amount",
    render: (l) => (
      <NumberField {...l}>
        <Label>Amount</Label>
        <Input />
      </NumberField>
    ),
  },
  {
    name: "SearchField",
    keeps: "Search",
    render: (l) => (
      <SearchField {...l}>
        <Label>Search</Label>
        <Input />
      </SearchField>
    ),
  },
  {
    name: "ComboBoxField",
    keeps: "Fruit",
    render: (l) => (
      <ComboBoxField {...l}>
        <Label>Fruit</Label>
        <Input />
      </ComboBoxField>
    ),
  },
  { name: "Input", render: (l) => <Input aria-label="Name" {...l} /> },
  { name: "TextArea", render: (l) => <TextArea aria-label="Notes" {...l} /> },
  {
    name: "ComboInput",
    render: (l) => (
      <ComboInput {...l}>
        <Input aria-label="Name" />
      </ComboInput>
    ),
  },

  // Data
  {
    name: "Table",
    keeps: "Name",
    // Skeleton rows replace the data. (Table.Body ignores loadingLabel.)
    indicator: (container) =>
      container.querySelector("tbody .aje-skeleton-loader"),
    render: (l) => (
      <Table aria-label="People">
        <Table.Header>
          <Table.Column isRowHeader>Name</Table.Column>
        </Table.Header>
        <Table.Body {...l} loadingRows={2}>
          <Table.Row>
            <Table.Cell>Ada</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    ),
  },
  {
    name: "LoadingStatus",
    // Its loader replaces the content. (It has loadingMessage, not loadingLabel.)
    indicator: (container) => container.querySelector(".aje-loader"),
    render: (l) => <LoadingStatus {...l}>Loaded content</LoadingStatus>,
  },
];

/** A loading indicator (skeleton image or spinner status) named by the label. */
function findLoadingIndicator(container: HTMLElement, name: string) {
  return (
    within(container).queryByRole("img", { name }) ??
    within(container).queryByRole("status", { name })
  );
}

describe.each(cases)("$name loading state", (c) => {
  const indicator = c.indicator ?? findLoadingIndicator;

  test("shows its loading indicator", () => {
    const { container } = render(
      c.render({ isLoading: true, loadingLabel: "Loading field" })
    );
    expect(indicator(container, "Loading field")).not.toBeNull();
  });

  test("keeps its label while loading", () => {
    if (!c.keeps) return;
    const { container } = render(
      c.render({ isLoading: true, loadingLabel: "Loading field" })
    );
    expect(container.textContent).toContain(c.keeps);
  });

  test("picks up an ambient Loading provider", () => {
    const { container } = render(<Loading isLoading>{c.render()}</Loading>);
    // The ambient provider uses its own translated label ("Loading").
    const found = c.indicator
      ? c.indicator(container, "Loading")
      : [
          ...within(container).queryAllByRole("img"),
          ...within(container).queryAllByRole("status"),
        ].find((el) => !el.closest(".aje-loading > [role=status]"));
    expect(found).toBeTruthy();
  });

  test("renders normally when not loading", () => {
    const { container } = render(
      c.render({ isLoading: false, loadingLabel: "Loading field" })
    );
    expect(indicator(container, "Loading field")).toBeNull();
  });
});
