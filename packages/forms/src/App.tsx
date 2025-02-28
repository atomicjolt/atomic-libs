import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, FormProvider } from "../lib";
import "./App.css";

interface Fields {
  name: string;
  description: string;
  age: number | null;
  ethnicity: {
    choice?: string | null;
    custom?: string | null;
  };
  address?: string;
  number: string | null;
  notifications: boolean;
  hearAbout: string[];
  notificationFrequency: string | null;
  consent: boolean;
}

const defaultValues: Fields = {
  name: "Sean",
  description: "Test Description",
  age: 15,
  ethnicity: {
    choice: "",
    custom: "",
  },
  number: null,
  notifications: false,
  notificationFrequency: null,
  consent: true,
  address: "",
  hearAbout: [],
};

function App() {
  const [value, setValue] = useState<any>(null);
  const methods = useForm<Fields>({ defaultValues });

  const desc = methods.watch("description");
  const ethnicity = methods.watch("ethnicity.choice");
  const notifications = methods.watch("notifications");

  return (
    <div>
      <FormProvider {...methods} onSubmit={(v) => setValue(v)}>
        {/* <Form.TextInput
          name="name"
          label="Name"
          size="large"
          isRequired="Name is Required"
          maxLength={{
            value: 10,
            message: "Name must be less than 10 characters",
          }}
          validate={(v) => (v === "1234" ? "Name cannot be 1234" : undefined)}
          pattern={{
            value: /[a-z]/,
            message: "Name must contain a lowercase letter",
          }}
        /> */}
        <Form.TextField
          name="name"
          size="large"
          isRequired="Name is Required"
          maxLength={{
            value: 10,
            message: "Name must be less than 10 characters",
          }}
          validate={(v) => (v === "1234" ? "Name cannot be 1234" : undefined)}
          pattern={{
            value: /[a-z]/,
            message: "Name must contain a lowercase letter",
          }}
        >
          <Form.FieldLabel>Name</Form.FieldLabel>
          <Form.FieldMessage>Enter your name</Form.FieldMessage>
          <Form.FieldInput />
        </Form.TextField>

        <br />
        <Form.TextAreaInput
          name="description"
          label="About Me"
          size="large"
          maxLength={{
            value: 1000,
            message: "Description must be less than 1000 characters",
          }}
          message={`${1000 - (desc?.length || 0)} characters remaining`}
        />
        <br />
        <Form.NumberInput
          name="age"
          label="Age"
          size="large"
          minValue={{
            value: 13,
            message: "Must be at least 13",
          }}
          isRequired="Age is required"
        />

        <br />

        <Form.CustomSelect
          name="ethnicity.choice"
          label="Ethnicity"
          size="large"
        >
          <Form.Item id="asian">Asian</Form.Item>
          <Form.Item id="black">Black or African American</Form.Item>
          <Form.Item id="hispanic">Hispanic or Latino</Form.Item>
          <Form.Item id="white">White</Form.Item>
          <Form.Item id="other">Other</Form.Item>
        </Form.CustomSelect>

        <br />

        {ethnicity === "other" && (
          <Form.TextInput
            name="ethnicity.custom"
            label="Please Specify"
            size="large"
            isRequired="Please specify"
            shouldUnregister
          />
        )}

        <br />

        <Form.CustomSelect
          name="number"
          label="Favorite Number"
          size="large"
          defaultSelectedKey={"1"}
        >
          <Form.Item id="1">One</Form.Item>
          <Form.Item id="2">Two</Form.Item>
          <Form.Item id="3">Three</Form.Item>
        </Form.CustomSelect>

        <br />

        <Form.ComboBox
          name="address"
          label="Address"
          size="large"
          allowsCustomValue
        >
          <Form.Item id="1234 Main St">1234 Main St</Form.Item>
          <Form.Item id="5678 Elm St">5678 Elm St</Form.Item>
          <Form.Item id="91011 Oak St">91011 Oak St</Form.Item>
        </Form.ComboBox>

        <br />

        <Form.MultiSelect
          label="How did you hear about us?"
          name="hearAbout"
          size="large"
          placeholder="Select all that apply"
        >
          <Form.Item id="friend">Friend</Form.Item>
          <Form.Item id="tv">TV</Form.Item>
          <Form.Item id="radio">Radio</Form.Item>
          <Form.Item id="other">Other</Form.Item>
        </Form.MultiSelect>

        <br />

        <Form.ToggleSwitch name="notifications">
          Receive Notifications
        </Form.ToggleSwitch>

        <Form.RadioGroup
          name="notificationFrequency"
          label="Notification Frequencey"
          isDisabled={!notifications}
          shouldUnregister
        >
          <Form.Radio value="immediate">Immediatley</Form.Radio>
          <Form.Radio value="daily">Daily</Form.Radio>
          <Form.Radio value="weekly">Weekly</Form.Radio>
        </Form.RadioGroup>

        <br />

        <Form.CheckBox
          name="consent"
          isRequired="You must read the terms and conditions to continue"
        >
          I agree to the terms and conditions
        </Form.CheckBox>

        <br />

        <Form.SubmitButton>Submit</Form.SubmitButton>
      </FormProvider>

      {value && <pre>{JSON.stringify(value, null, 2)}</pre>}
    </div>
  );
}

export default App;
