/** Small lowercase pill label ("6 pack", "new"). */
export interface BadgeProps {
  tone?: 'mint' | 'teal' | 'sun' | 'butter' | 'orange' | 'red' | 'maroon' | 'cocoa' | 'white' | 'cream';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
/** Round white seal with cocoa ring and condensed caps (corner of product tiles). */
export interface SealProps { children?: React.ReactNode; style?: React.CSSProperties }
export declare function Seal(props: SealProps): JSX.Element;
