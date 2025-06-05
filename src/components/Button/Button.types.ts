// Gerado automaticamente a partir do Button.json
export interface ButtonProps {
  variant: ButtonVariant;
  size: ButtonSize;
  fullWidth: ButtonFullWidth;
  isLoading: boolean;
  leftIcon: React.ReactNode;
  rightIcon: React.ReactNode;
  children: React.ReactNode;
  className: string;
  disabled: boolean;
  type: 'button' | 'submit' | 'reset';
  name: string;
  value: string;
  form: string;
  formAction: string;
  formEncType: string;
  formMethod: 'get' | 'post';
  formNoValidate: boolean;
  formTarget: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
