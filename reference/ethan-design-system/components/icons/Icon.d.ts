export type IconName = 'chevron-down' | 'chevron-up' | 'chevron-left' | 'chevron-right' | 'arrow-right' | 'arrow-left' | 'plus' | 'minus' | 'x' | 'check' | 'shopping-bag' | 'user' | 'search' | 'map-pin' | 'info' | 'alert-triangle' | 'leaf' | 'wheat' | 'ban' | 'sprout' | 'instagram' | 'facebook' | 'twitter' | 'menu' | 'home' | 'book-open' | 'trending-up' | 'trending-down' | 'droplet' | 'flame' | 'scan-barcode' | 'heart' | 'pencil' | 'trash' | 'calendar' | 'bell' | 'moon' | 'sun' | 'clock' | 'star' | 'target' | 'scale' | 'activity' | 'zap' | 'apple' | 'carrot' | 'egg' | 'milk' | 'drumstick' | 'cookie' | 'coffee' | 'log-out' | 'rotate-ccw';
/** Line icon (Lucide path data, 1.75 stroke). */
export interface IconProps {
  name: IconName;
  /** px, default 20 */
  size?: number;
  /** default 1.75 — keep thin to match brand */
  strokeWidth?: number;
  color?: string;
  title?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element | null;
export declare const ICON_NAMES: IconName[];
