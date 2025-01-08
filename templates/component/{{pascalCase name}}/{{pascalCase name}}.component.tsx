import { forwardRef } from "react";
import { RenderBaseProps } from "../../types";
import { useContextPropsV2 } from "@hooks/useContextProps";
import { {{ pascalCase name}}Context } from "./{{ pascalCase name }}.context";

export interface {{ pascalCase name }}Props extends RenderBaseProps<never> {}

export const {{ pascalCase name }} = forwardRef<HTMLElement, {{ pascalCase name }}Props>(function {{ pascalCase name }}(props, ref) {
  [props, ref] = useContextPropsV2({{ pascalCase name}}Context, props, ref);
  return <div>{{ pascalCase name }}</div>;
});
