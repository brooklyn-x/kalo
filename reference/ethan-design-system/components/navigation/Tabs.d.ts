export type TabDef = string | { value: string; label: React.ReactNode };
/** Lowercase tabs — pill segmented (default) or underline. */
export interface TabsProps {
  tabs: TabDef[];
  value: string;
  onChange?: (value: string) => void;
  variant?: 'pill' | 'underline';
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
