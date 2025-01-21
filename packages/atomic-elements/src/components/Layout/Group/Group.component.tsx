import { GroupWrapper } from "./Group.styles";
import { FlexProps } from "../Flex";
import { useRenderProps } from "@hooks";

export interface GroupProps extends FlexProps {
  isMerged?: boolean;
}

/** Component used to logically and visually group a set of components together */
export function Group(props: GroupProps) {
  const {
    children,
    isMerged,
    className,
    id,
    style,
    $direction = "row",
    ...rest
  } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-group",
    className,
    children,
    style,
    selectors: {
      "data-merged": isMerged,
    },
  });

  return (
    <GroupWrapper
      role="group"
      id={id}
      data-direction={$direction}
      $direction={$direction}
      {...renderProps}
      {...rest}
    >
      {renderProps.children}
    </GroupWrapper>
  );
}
