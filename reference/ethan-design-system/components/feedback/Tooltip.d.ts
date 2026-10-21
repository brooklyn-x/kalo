/** Small cocoa bubble shown on hover/focus. */
export interface TooltipProps {
  content: React.ReactNode;
  placement?: 'top' | 'bottom';
  /** force visible */
  open?: boolean;
  children: React.ReactNode;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
