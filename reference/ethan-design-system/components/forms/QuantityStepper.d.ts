/** White pill − n + quantity control. */
export interface QuantityStepperProps {
  value?: number;
  min?: number;
  max?: number;
  onChange?: (n: number) => void;
  style?: React.CSSProperties;
}
export declare function QuantityStepper(props: QuantityStepperProps): JSX.Element;
