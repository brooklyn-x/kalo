/** Pill text input. Optional trailing round submit button (newsletter). */
export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onSubmit'> {
  /** filled = white on color; outline = cocoa ring; inverse = light ring on cocoa; muted = cream */
  variant?: 'filled' | 'outline' | 'inverse' | 'muted';
  /** renders a round arrow submit button inside the pill */
  onSubmit?: (e: React.FormEvent) => void;
  submitLabel?: string;
  /** error message; turns ring maroon */
  error?: string;
}
export declare function TextField(props: TextFieldProps): JSX.Element;
