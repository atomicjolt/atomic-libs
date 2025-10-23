import { Group, GroupProps } from "../../Layout/Group";
import { ButtonContext } from "../Button/Button.context";
import { CanHaveIcon } from "../../../types";
import { ButtonProps } from "@components/Internal/BaseButton";

type MinimalGroupProps = Omit<
  GroupProps,
  | "onBlur"
  | "onFocus"
  | "onMouseEnter"
  | "onMouseLeave"
  | "onKeyDown"
  | "onKeyUp"
>;
type MinimalButtonProps = Omit<
  ButtonProps,
  "as" | "children" | "className" | "slot" | "style"
>;

export interface ButtonGroupProps
  extends MinimalButtonProps,
    MinimalGroupProps,
    CanHaveIcon {}

/** Group a set of buttoons together & provide a common context to all buttons in the group
 *
 * @example
 * <ButtonGroup variant="border" isDisabled>
 *   <Button>Button 1</Button>
 *   <Button>Button 2</Button>
 * </ButtonGroup>
 */
export function ButtonGroup(props: ButtonGroupProps) {
  const { children, isMerged, className, id, ...rest } = props;
  const { buttonProps, groupProps } = partitionProps(rest);

  return (
    <ButtonContext.Provider value={buttonProps}>
      <Group isMerged={isMerged} className={className} id={id} {...groupProps}>
        {children}
      </Group>
    </ButtonContext.Provider>
  );
}

function partitionProps(props: Record<string, any>) {
  const buttonProps: Record<string, any> = {};
  const groupProps: Record<string, any> = {};

  for (const key in props) {
    if (!key) continue;
    if (!(typeof key === "string")) continue;

    if (key.startsWith("$")) {
      groupProps[key] = props[key];
    } else {
      buttonProps[key] = props[key];
    }
  }

  return {
    buttonProps: buttonProps as MinimalButtonProps,
    groupProps: groupProps as MinimalGroupProps,
  };
}
