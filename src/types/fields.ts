import { BaseProps } from "./common";

/** Type for props that are used to provide
 * information to the consumer of a field */
export interface HelpTextProps {
  /** Must include a label. Labels are always Sentence case. */
  readonly label: React.ReactNode;

  /** Hides the label from view, but still allows screen readers to read the label.
   *
   * Only use in very specific circumstances. A filter dropdown with a clear meaning could
   * potentially be a use case. */
  readonly hideLabel?: boolean;

  /** For additional information (ex. date format mm/dd/yy) */
  readonly message?: React.ReactNode;

  /** Error message for the field */
  readonly error?: React.ReactNode;
}

/** Props that indicate that status that a field is in */
export interface FieldStatusProps {
  /** Field cannot be interacted with, should be de-emphasized in the UI */
  readonly isDisabled?: boolean;
  /** Field cannot be modified. Should be made to not look like a editable field */
  readonly isReadOnly?: boolean;
  /** Field must be interacted with. Should be indicated in the UI */
  readonly isRequired?: boolean;
  /** Field has an error. Should be made to look like an error */
  readonly isInvalid?: boolean;
}

/** Props that are used to create a field */
export interface FieldBaseProps
  extends BaseProps,
    HelpTextProps,
    FieldStatusProps {}
