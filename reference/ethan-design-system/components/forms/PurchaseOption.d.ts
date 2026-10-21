/** White radio card with price (and optional strike-through compare price); reveals children when selected. */
export interface PurchaseOptionProps {
  label: React.ReactNode;
  /** formatted price, e.g. "$24.99" */
  price: string;
  /** strike-through price */
  compareAt?: string;
  selected?: boolean;
  onSelect?: (value: string) => void;
  name?: string;
  value: string;
  /** shown only when selected (e.g. delivery cadence Select) */
  children?: React.ReactNode;
}
export declare function PurchaseOption(props: PurchaseOptionProps): JSX.Element;
