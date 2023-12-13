import React from "react";
import cn from "classnames";
import { ButtonProps } from "../Button";
import Spinner from "../../Loaders/Spinner";
import IconMenu, { IconMenuProps } from "../../Dropdowns/IconMenu";
import { BaseStyledButton } from "../Buttons.styles";
import { StyledIconMenuButton } from "./IconMenuButton.styles";

export type IconMenuButtonProps = Omit<ButtonProps, "variant"> & {iconMenuProps: IconMenuProps};

export default function IconMenuButton(props: IconMenuButtonProps) {
	const {
    children,
    type = "button",
    disabled = false,
    loading = false,
    loadingLabel = "loading",
    loadingComplete = false,
    onClick,
    className,
	iconMenuProps,
    ...rest
	} = props;

  const loadingText = loading ? loadingLabel : "";

	return (
		<StyledIconMenuButton>
			<BaseStyledButton
				aria-label={loadingText || undefined}
				type={type}
				className={cn("aje-btn", className, {
					"is-loading": loading,
				})}
				onClick={onClick}
				disabled={disabled}
				{...rest}
			>
				{loading && <Spinner loading={!loadingComplete} />}
				{children}
			</BaseStyledButton>
			<IconMenu {...iconMenuProps} />			
		</StyledIconMenuButton>
	);
}