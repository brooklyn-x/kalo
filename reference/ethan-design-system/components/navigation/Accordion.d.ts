export interface AccordionItem { title: React.ReactNode; content: React.ReactNode }
/** Hairline-divided disclosure list with small white round chevron toggles. */
export interface AccordionProps {
  items: AccordionItem[];
  /** index open initially; -1 none */
  defaultOpen?: number;
  multiple?: boolean;
  style?: React.CSSProperties;
}
export declare function Accordion(props: AccordionProps): JSX.Element;
