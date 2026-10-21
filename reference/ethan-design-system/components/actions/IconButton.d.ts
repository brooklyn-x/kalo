import type { IconName } from '../icons/Icon';
/** Circular icon-only button (carousel arrows, accordion toggles, cart). */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconName;
  /** accessible label (required) */
  label: string;
  variant?: 'outline' | 'solid' | 'white' | 'ghost';
  /** diameter px, default 40 */
  size?: number;
  iconSize?: number;
  children?: React.ReactNode;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
