export interface ButtonProps {
  text: string;
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  onClick?: () => void;
}

export interface NavbarProps {
  title?: string;
}
