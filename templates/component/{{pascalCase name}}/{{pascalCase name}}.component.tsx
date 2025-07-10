import { forwardRef } from "react";
import { RenderBaseProps } from "../../types";
import { useContextProps } from "@hooks/useContextProps";
import { useRenderProps } from "@hooks/useRenderProps";
import { {{ pascalCase name}}Context } from "./{{ pascalCase name }}.context";
import { {{ pascalCase name }}Wrapper } from "./{{ pascalCase name }}.styles";

export interface {{ pascalCase name }}Props extends RenderBaseProps<never> {}

export const {{ pascalCase name }} = forwardRef<HTMLElement, {{ pascalCase name }}Props>(function {{ pascalCase name }}(props, ref) {
  [props, ref] = useContextProps({{ pascalCase name}}Context, props, ref);

  const renderProps = useRenderProps({
    componentClassName: "aje-{{ lowerCase name }}",
    ...props
  });

  return <{{ pascalCase name }}Wrapper ref={ref} {...renderProps}>{{ pascalCase name }}</{{ pascalCase name }}Wrapper>;
});

{{ pascalCase name }}.displayName = "{{ pascalCase name }}";
