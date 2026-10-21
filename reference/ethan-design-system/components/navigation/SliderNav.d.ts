/** Carousel footer: hairline progress track + outlined prev/next circles. */
export interface SliderNavProps {
  /** 0–1 scroll progress */
  progress?: number;
  /** visible fraction for the thumb width, 0–1 */
  span?: number;
  onPrev?: () => void;
  onNext?: () => void;
  canPrev?: boolean;
  canNext?: boolean;
  style?: React.CSSProperties;
}
export declare function SliderNav(props: SliderNavProps): JSX.Element;
