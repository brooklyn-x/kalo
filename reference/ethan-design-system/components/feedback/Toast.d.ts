/** Cocoa pill notification with colored status dot. */
export interface ToastProps {
  tone?: 'success' | 'info' | 'warning' | 'error';
  children?: React.ReactNode;
  /** e.g. <Button size="sm" variant="secondary">view cart</Button> */
  action?: React.ReactNode;
  onClose?: () => void;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;
