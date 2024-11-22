import { useRenderProps } from "@hooks";
import { RenderBaseProps } from "../../../../types";
import { StyledTableBottom } from "../Table.styles";

interface TableBottomProps extends RenderBaseProps<never> {
  isSticky?: boolean;
  id?: string;
  as?: React.ComponentType;
}

export function TableBottom(props: TableBottomProps) {
  const { isSticky, as } = props;

  const renderProps = useRenderProps({
    ...props,
    componentClassName: "aje-table__bottom",
    selectors: {
      "data-sticky": isSticky,
    },
  });

  return (
    <StyledTableBottom as={as} {...renderProps}>
      {renderProps.children}
    </StyledTableBottom>
  );
}
