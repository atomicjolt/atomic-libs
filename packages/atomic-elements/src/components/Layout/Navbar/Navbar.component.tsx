import { forwardRef } from "react";
import classNames from "classnames";
import { RenderBaseProps } from "../../../types";
import { useContextProps } from "@hooks/useContextProps";
import { useRenderProps } from "@hooks/useRenderProps";
import { LayoutProps } from "@styles/layout";
import { FlexStyleProps } from "@styles/flex";
import { IconButton, IconButtonProps } from "@components/Buttons/IconButton";
import { useTranslations } from "@hooks/useTranslations";
import { Flex, FlexProps } from "@components/Layout/Flex";
import { Heading, HeadingProps } from "@components/Typography/Heading";
import { NavbarContext } from "./Navbar.context";
import { NavbarWrapper } from "./Navbar.styles";

export interface NavbarProps
  extends RenderBaseProps<never>,
    LayoutProps,
    FlexStyleProps {}

const NavbarRoot = forwardRef<HTMLDivElement, NavbarProps>(function Navbar(
  props,
  ref
) {
  [props, ref] = useContextProps(NavbarContext, props, ref);

  const { className, style, children, ...rest } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-navbar",
    className,
    style,
    children,
  });

  return (
    <NavbarWrapper ref={ref} $gap="1" {...renderProps} {...rest}>
      {renderProps.children}
    </NavbarWrapper>
  );
});

NavbarRoot.displayName = "Navbar";

export const Navbar = NavbarRoot as typeof NavbarRoot & {
  BackButton: typeof NavbarBackButton;
  Section: typeof NavbarSection;
  Title: typeof NavbarTitle;
  Subtitle: typeof NavbarSubtitle;
};

interface NavbarBackButtonProps extends Omit<IconButtonProps, "icon"> {
  icon?: IconButtonProps["icon"];
}

const NavbarBackButton = forwardRef<HTMLButtonElement, NavbarBackButtonProps>(
  function NavbarBackButton(props, ref) {
    const t = useTranslations();
    const {
      "aria-label": ariaLabel = t("back"),
      icon = "arrow_back",
      className,
      ...rest
    } = props;

    return (
      <IconButton
        className={classNames("aje-navbar__back", className)}
        ref={ref}
        icon={icon}
        aria-label={ariaLabel}
        {...rest}
      />
    );
  }
);

NavbarBackButton.displayName = "Navbar.BackButton";
Navbar.BackButton = NavbarBackButton;

interface NavbarSectionProps extends FlexProps {
  side?: "left" | "right" | "center";
}

const NavbarSection = forwardRef<HTMLDivElement, NavbarSectionProps>(
  function NavbarSection(props, ref) {
    const { children, side = "left", className, ...rest } = props;

    return (
      <Flex
        ref={ref}
        className={classNames("aje-navbar__section", className)}
        $align="center"
        $justify={
          side === "left" ? "start" : side === "right" ? "end" : "center"
        }
        $flexGrow="1"
        $gap="2"
        $wrap="wrap"
        {...rest}
      >
        {children}
      </Flex>
    );
  }
);

NavbarSection.displayName = "Navbar.Section";
Navbar.Section = NavbarSection;

interface NavbarTitleProps extends HeadingProps {}

const NavbarTitle = forwardRef<HTMLHeadingElement, NavbarTitleProps>(
  function NavbarTitle(props, ref) {
    const { className, as = "h1", $weight = "regular", ...rest } = props;

    return (
      <Heading
        ref={ref}
        className={classNames("aje-navbar__title", className)}
        as={as}
        $weight={$weight}
        {...rest}
      />
    );
  }
);

NavbarTitle.displayName = "Navbar.Title";
Navbar.Title = NavbarTitle;

interface NavbarSubtitleProps extends HeadingProps {}

const NavbarSubtitle = forwardRef<HTMLHeadingElement, NavbarSubtitleProps>(
  function NavbarSubtitle(props, ref) {
    const {
      className,
      as = "h2",
      $weight = "light",
      $color = "text-clr-alt",
      $size = "2",
      ...rest
    } = props;

    return (
      <Heading
        ref={ref}
        className={classNames("aje-navbar__subtitle", className)}
        as={as}
        $weight={$weight}
        $color={$color}
        $size={$size}
        {...rest}
      />
    );
  }
);

NavbarSubtitle.displayName = "Navbar.Subtitle";
Navbar.Subtitle = NavbarSubtitle;
