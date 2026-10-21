/** Colored lowercase chip for flavors, filters, categories. */
export interface TagProps {
  tone?: 'mint' | 'teal' | 'sun' | 'butter' | 'orange' | 'red' | 'maroon' | 'cocoa' | 'white' | 'cream';
  /** optional dot color */
  swatch?: string;
  /** makes it a button with hover lift */
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;
