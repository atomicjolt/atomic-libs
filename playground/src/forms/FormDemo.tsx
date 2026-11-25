import React, { useState } from "react";
import { Form } from "@atomicjolt/forms";
import type { DateValue, TimeValue } from "@atomicjolt/forms";
import {
  Button,
  ChipGroupField,
  ComboInput,
  DateField,
  ListBox,
  MaterialIcon,
  Popover,
  SelectField,
} from "@atomicjolt/atomic-elements";
import type { Key } from "@atomicjolt/atomic-elements";
import { Demo, DemoPage, Json } from "../components/Demo";

interface Signup {
  name: string;
  age?: number;
  role?: string;
  plan?: string;
  bio?: string;
  newsletter?: boolean;
  terms?: boolean;
  // Values from @internationalized/date are stored as-is.
  startDate?: DateValue | null;
  birthday?: DateValue | null;
  dueDate?: DateValue | null;
  meetingTime?: TimeValue | null;
  avatar?: File | null;
  search?: string;
  keywords?: string;
  color?: Key | null;
  toppings?: Key[];
  fruit?: Key | null;
  interests?: Key[];
  tags?: Key[];
}

/** Make date/time objects and Files readable in the JSON preview. */
function toDisplay(values?: Signup) {
  if (!values) return values;
  return Object.fromEntries(
    Object.entries(values).map(([key, value]) => {
      if (value instanceof File) {
        return [key, { name: value.name, size: value.size, type: value.type }];
      }
      if (value && typeof value === "object" && "calendar" in value) {
        return [key, value.toString()];
      }
      if (value && typeof value === "object" && "hour" in value) {
        return [key, value.toString()];
      }
      return [key, value];
    })
  );
}

export function FormDemo() {
  const [submitted, setSubmitted] = useState<Signup>();

  return (
    <div className="pg-split">
      <Demo title="Form" description="react-hook-form wrapped around atomic-elements inputs.">
        <Form<Signup> onSubmit={setSubmitted} defaultValues={{ plan: "free" }}>
          <div className="pg-form">
            <Form.TextInput name="name" label="Name" isRequired="Name is required" />
            <Form.NumberInput name="age" label="Age" />
            <Form.CustomSelect name="role" label="Role" placeholder="Choose a role">
              <Form.Item id="teacher">Teacher</Form.Item>
              <Form.Item id="student">Student</Form.Item>
              <Form.Item id="admin">Admin</Form.Item>
            </Form.CustomSelect>
            <Form.RadioGroup name="plan" label="Plan">
              <Form.Radio value="free">Free</Form.Radio>
              <Form.Radio value="pro">Pro</Form.Radio>
            </Form.RadioGroup>
            <Form.TextAreaInput name="bio" label="Bio" />
            <Form.ToggleSwitch name="newsletter">Send me the newsletter</Form.ToggleSwitch>

            <Form.DatePicker name="startDate" label="Start date" isRequired="Pick a start date" />
            <Form.DateInput name="birthday" label="Birthday" />
            <Form.DateField name="dueDate">
              <Form.Label>Due date</Form.Label>
              <ComboInput padding="both">
                <DateField.Segments>
                  {(_, index) => <DateField.Segment key={index} index={index} />}
                </DateField.Segments>
              </ComboInput>
            </Form.DateField>
            <Form.TimeInput name="meetingTime" label="Meeting time" />
            <Form.FileInput name="avatar" label="Avatar" acceptedFileTypes={["image/*"]} />

            <Form.SearchInput name="search" label="Search" />
            <Form.SearchField name="keywords">
              <Form.Label>Keywords</Form.Label>
              <Form.Input />
            </Form.SearchField>

            <Form.SelectField name="color">
              <Form.Label>Favorite color</Form.Label>
              <Button variant="dropdown">
                <SelectField.Value placeholder="Choose a color" />
                <MaterialIcon icon="arrow_drop_down" style={{ marginLeft: "auto" }} />
              </Button>
              <Popover>
                <ListBox>
                  <Form.Item id="red">Red</Form.Item>
                  <Form.Item id="green">Green</Form.Item>
                  <Form.Item id="blue">Blue</Form.Item>
                </ListBox>
              </Popover>
            </Form.SelectField>
            <Form.MultiSelectField name="toppings">
              <Form.Label>Toppings</Form.Label>
              <Button variant="dropdown">
                Choose toppings
                <MaterialIcon icon="arrow_drop_down" style={{ marginLeft: "auto" }} />
              </Button>
              <Popover>
                <ListBox>
                  <Form.Item id="cheese">Cheese</Form.Item>
                  <Form.Item id="olives">Olives</Form.Item>
                  <Form.Item id="peppers">Peppers</Form.Item>
                </ListBox>
              </Popover>
            </Form.MultiSelectField>
            <Form.ComboBoxField name="fruit">
              <Form.Label>Fruit</Form.Label>
              <Form.Input />
              <Popover>
                <ListBox>
                  <Form.Item id="apple">Apple</Form.Item>
                  <Form.Item id="banana">Banana</Form.Item>
                  <Form.Item id="cherry">Cherry</Form.Item>
                </ListBox>
              </Popover>
            </Form.ComboBoxField>

            <Form.ChipGroup name="interests" label="Interests">
              <Form.Item id="news">News</Form.Item>
              <Form.Item id="sports">Sports</Form.Item>
              <Form.Item id="music">Music</Form.Item>
            </Form.ChipGroup>
            <Form.ChipGroupField name="tags" selectionMode="single">
              <Form.Label>Tag</Form.Label>
              <ChipGroupField.List>
                <Form.Item id="bug">Bug</Form.Item>
                <Form.Item id="feature">Feature</Form.Item>
              </ChipGroupField.List>
            </Form.ChipGroupField>

            <Form.CheckBox name="terms" isRequired="You must accept the terms">
              I accept the terms
            </Form.CheckBox>
            <Form.SubmitButton>Submit</Form.SubmitButton>
          </div>
        </Form>
      </Demo>

      <Demo title="Last submitted">
        <Json value={toDisplay(submitted)} />
      </Demo>
    </div>
  );
}
