/**
 * Flat, rounded color panel — the core surface of the brand. No borders, no shadows.
 * @startingPoint section="Surfaces" subtitle="Rounded color panels" viewport="700x320"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'mint' | 'teal' | 'sun' | 'butter' | 'orange' | 'red' | 'maroon' | 'cocoa' | 'white' | 'cream';
  radius?: 'sm' | 'md' | 'lg' | 'xl';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
