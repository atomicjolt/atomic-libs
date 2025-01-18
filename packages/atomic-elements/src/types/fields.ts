import { BaseProps } from "./common";

export interface HelpMessageProps {
  /** For additional information (ex. date format mm/dd/yy) */
  readonly message?: React.ReactNode;

  /** Error message for the field */
  readonly error?: React.ReactNode;
}

/** Type for props that are used to provide
 * information to the consumer of a field */
export interface HelpTextProps extends HelpMessageProps {
  /** A visible label for the field. Labels are always Sentence case.
   * If you do not provide a label, you should provide an aria-label or aria-labelledby attribute.
   */
  readonly label?: React.ReactNode;
}

/** Props that indicate that status that a field is in */
export interface FieldStatusProps {
  /** Field cannot be interacted with, should be de-emphasized in the UI
   * @selector [data-disabled]
   */
  readonly isDisabled?: boolean;
  /** Field cannot be modified. Should be made to not look like a editable field
   * @selector [data-readonly]
   */
  readonly isReadOnly?: boolean;
  /** Field must be interacted with. Should be indicated in the UI
   * @selector [data-required]
   */
  readonly isRequired?: boolean;
  /** Field has an error. Should be made to look like an error.
   * Controls whether the value of `error` is displayed
   * @selector [data-invalid]
   * */
  readonly isInvalid?: boolean;
}

export interface FieldDomProps {
  /** Name of the Field */
  name?: string;
}

/** Props that are used to create a field */
export interface FieldInputProps
  extends BaseProps,
    HelpTextProps,
    FieldStatusProps,
    FieldDomProps {}
