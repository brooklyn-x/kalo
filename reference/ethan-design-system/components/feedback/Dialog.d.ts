/** Modal on a cocoa scrim. White panel, radius 36, condensed caps title, bouncy entrance. */
export interface DialogProps {
  open?: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** buttons row */
  actions?: React.ReactNode;
  onClose?: () => void;
  /** render without scrim/fixed positioning (for docs/previews) */
  inline?: boolean;
  style?: React.CSSProperties;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
