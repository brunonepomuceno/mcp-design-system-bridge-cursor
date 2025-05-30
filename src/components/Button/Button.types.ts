import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from './Button.styles';

export type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>['variant']>;
export type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>['size']>;
export type ButtonFullWidth = NonNullable<VariantProps<typeof buttonVariants>['fullWidth']>;

export interface ButtonProps {
  /**
   * The variant of the button
   * @default 'primary'
   */
  variant?: ButtonVariant;

  /**
   * The size of the button
   * @default 'md'
   */
  size?: ButtonSize;

  /**
   * Whether the button should take up the full width of its container
   * @default false
   */
  fullWidth?: ButtonFullWidth;

  /**
   * Whether the button is in a loading state
   * @default false
   */
  isLoading?: boolean;

  /**
   * Icon to display on the left side of the button
   */
  leftIcon?: React.ReactNode;

  /**
   * Icon to display on the right side of the button
   */
  rightIcon?: React.ReactNode;

  /**
   * The content of the button
   */
  children: React.ReactNode;

  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * The type of the button
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * The name of the button
   */
  name?: string;

  /**
   * The value of the button
   */
  value?: string;

  /**
   * The form that the button is associated with
   */
  form?: string;

  /**
   * The form action URL
   */
  formAction?: string;

  /**
   * The form encoding type
   */
  formEncType?: string;

  /**
   * The form method
   */
  formMethod?: 'get' | 'post';

  /**
   * Whether the form should be validated
   */
  formNoValidate?: boolean;

  /**
   * The form target
   */
  formTarget?: string;

  /**
   * Click handler for the button
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} 