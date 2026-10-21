export interface SelectOption { value: string; label: string; /** CSS color for a dot before the label */ swatch?: string }
/** Pill select with muted inline label and optional color swatch (flavor / variant pickers). */
export interface SelectProps {
  label?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  /** filled = white pill; muted = cream rounded rect (nested inside option cards) */
  variant?: 'filled' | 'muted' | 'outline';
  style?: React.CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element;
