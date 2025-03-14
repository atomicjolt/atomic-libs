import { ComponentProps, ReactNode, useEffect, useRef } from "react";

export interface CanvasAuthenticationFormProps extends ComponentProps<"form"> {
  action: string;
  settings?: Record<string, any>;
  autoSubmit?: boolean;
  children?: ReactNode;
}

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
