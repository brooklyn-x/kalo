/**
 * Product tile: color media block with pack badge + optional seal, white meta strip.
 * @startingPoint section="Commerce" subtitle="Product tile for carousels and grids" viewport="700x380"
 */
export interface ProductCardProps {
  /** media background — pick per flavor/variant */
  tone?: 'orange' | 'red' | 'maroon' | 'teal' | 'sun' | 'butter' | 'mint' | 'cocoa';
  badge?: string;
  /** e.g. <Seal>new</Seal> */
  seal?: React.ReactNode;
  /** product image node; placeholder if omitted */
  image?: React.ReactNode;
  name: string;
  /** variant / flavor — rendered in the tone's accent color */
  variant?: string;
  price: string;
  size?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function ProductCard(props: ProductCardProps): JSX.Element;
