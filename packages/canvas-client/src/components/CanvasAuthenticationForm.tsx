import { ComponentProps, ReactNode, useEffect, useRef } from "react";

export interface CanvasAuthenticationFormProps extends ComponentProps<"form"> {
  /** URL to submit the form to */
  action: string;
  /** Additional settings to include as hidden input fields */
  settings?: Record<string, any>;
  /** Whether to auto-submit the form on render */
  autoSubmit?: boolean;
  /** Children elements to include in the form */
  children?: ReactNode;
}

/**
 * A React component that renders a form for Canvas authentication.
 * The form can be auto-submitted if the `autoSubmit` prop is set to true.
 * Hidden input fields are generated from the `settings` prop.
 */
export function CanvasAuthenticationForm(props: CanvasAuthenticationFormProps) {
  const { action, settings = {}, autoSubmit = false, ...rest } = props;
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (autoSubmit && ref.current) {
      ref.current.submit();
    }
  }, [autoSubmit]);

  return (
    <form ref={ref} action={action} method="post" {...rest}>
      {Object.entries(settings).map(([name, value]) => (
        <input
          key={name}
          type="hidden"
          name={name}
          value={
            typeof value === "object" || Array.isArray(value)
              ? JSON.stringify(value)
              : value
          }
        />
      ))}
      {props.children}
    </form>
  );
}
