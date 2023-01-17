import React, { useMemo } from "react";
import {
  DeepPartial,
  FieldValues,
  FormProvider,
  RegisterOptions,
  useForm,
  useFormContext,
} from "react-hook-form";
import { TextInputProps } from "../../../src/components/Inputs/TextInput/TextInput.types";
import { Button, TextInput } from "../elements";

interface FormProps<T> {
  onSubmit: (data: T) => void;
  children: React.ReactNode;
  defaultValues?: DeepPartial<T>;
}

function Form<T extends FieldValues>({
  onSubmit,
  children,
  defaultValues,
}: FormProps<T>) {
  const methods = useForm<T>({ defaultValues });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

function useRegister(name: string, options: RegisterOptions) {
  const { register } = useFormContext();

  return useMemo(() => {
    const registration = register(name, options);
    const onChange = registration.onChange;
    return {
      ...registration,
      onChange: (_value: string, event: any) => {
        onChange(event);
      },
    };
  }, [name]);
}
const REGISTER_OPTIONS = new Set([
  "required",
  "min",
  "max",
  "maxLength",
  "minLength",
  "pattern",
  "validate",
  "valueAsNumber",
  "valueAsDate",
  "value",
  "setValueAs",
  "shouldUnregister",
  "onChange",
  "onBlur",
  "disabled",
  "deps",
]);

type OmitSharedProps<T> = Omit<
  T,
  "disabled" | "value" | "onChange" | "onBlur" | "required" | "error"
>;

type FormInputProps<ComponentProps> = OmitSharedProps<ComponentProps> &
  Partial<RegisterOptions> & { name: string };

function splitFormProps<
  ComponentProps extends {},
  Props extends FormInputProps<ComponentProps>
>(props: Props): [string, Partial<RegisterOptions>, ComponentProps] {
  const options: Partial<RegisterOptions> = {};
  const rest: ComponentProps = {} as ComponentProps;

  Object.entries(props).forEach(([key, value]) => {
    if (REGISTER_OPTIONS.has(key)) {
      options[key] = value;
    } else if (key !== "name") {
      rest[key] = value;
    }
  });

  return [props.name, options, rest];
}

function useFormInput<ComponentProps extends {}>(
  props: FormInputProps<ComponentProps>
): [ComponentProps, any] {
  const [name, options, componentProps] =
    splitFormProps<ComponentProps, FormInputProps<ComponentProps>>(props);

  const registration = useRegister(name, options);
  const form = useFormContext();
  const error = form.formState.errors[name];
  componentProps["error"] = error?.message;

  return [componentProps, registration];
}

interface FormTextInputProps extends FormInputProps<TextInputProps> {}

function FormTextInput(props: FormTextInputProps) {
  const [componentProps, registration] = useFormInput<TextInputProps>(props);
  return <TextInput {...registration} {...componentProps} size="large" />;
}

Form.TextInput = FormTextInput;

export default function FormTesting() {
  return (
    <div>
      <Form onSubmit={(values) => console.log(values)}>
        <Form.TextInput
          name="name"
          label="First Name"
          maxLength={{ value: 10, message: "Must be 10 or less characters" }}
          required
        />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
