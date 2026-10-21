/**
 * Pill button. Lowercase bold label. Primary = cocoa, secondary = butter yellow.
 * @startingPoint section="Actions" subtitle="Pill buttons — primary, secondary, outline, white" viewport="700x300"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  /** stretch to container width */
  block?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
