import { forwardRef } from "react";
import { ElementWrapper, RenderBaseProps } from "../../../types";
import { useContextProps } from "@hooks/useContextProps";
import { useRenderProps } from "@hooks/useRenderProps";
import { ListContext } from "./List.context";
import { ListItemWrapper, ListWrapper } from "./List.styles";
import { MarginProps, PaddingProps } from "@styles/layout";

export interface ListProps
  extends RenderBaseProps<never>,
    ElementWrapper<HTMLUListElement>,
    MarginProps {
  as?: "ul" | "ol";
}

interface ListComponent {
  (props: ListProps): JSX.Element;
  displayName: string;
  Item: typeof ListItem;
}

/** Displays a list of items in a vertical layout */
export const List = forwardRef<HTMLUListElement, ListProps>(function List(
  props,
  ref
) {
  [props, ref] = useContextProps(ListContext, props, ref);
  const { children, className, style, as, ...rest } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-list",
    children,
    className,
    style,
  });

  return (
    <ListWrapper as={as} ref={ref} {...renderProps} {...rest}>
      {renderProps.children}
    </ListWrapper>
  );
}) as unknown as ListComponent;

List.displayName = "List";

export interface ListItemProps
  extends RenderBaseProps<never>,
    ElementWrapper<HTMLLIElement>,
    PaddingProps {
  showDivider?: boolean;
}

const ListItem = forwardRef<HTMLLIElement, ListItemProps>(function ListItem(
  props,
  ref
) {
  const { children, className, style, showDivider = true, ...rest } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-list__item",
    children,
    className,
    style,
    selectors: {
      "data-divider": showDivider,
    },
  });

  return (
    <ListItemWrapper ref={ref} {...renderProps} {...rest}>
      {renderProps.children}
    </ListItemWrapper>
  );
});

List.Item = ListItem;
List.Item.displayName = "List.Item";
