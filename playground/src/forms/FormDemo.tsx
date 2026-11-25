import React, { useState } from "react";
import { Form } from "@atomicjolt/forms";
import { Demo, DemoPage, Json } from "../components/Demo";

interface Signup {
  name: string;
  age?: number;
  role?: string;
  plan?: string;
  bio?: string;
  newsletter?: boolean;
  terms?: boolean;
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
            <Form.CheckBox name="terms" isRequired="You must accept the terms">
              I accept the terms
            </Form.CheckBox>
            <Form.SubmitButton>Submit</Form.SubmitButton>
          </div>
        </Form>
      </Demo>

      <Demo title="Last submitted">
        <Json value={submitted} />
      </Demo>
    </div>
  );
}
