/** Big condensed number + small white label — nutrition/value callouts on a sun-yellow tile. */
export interface StatTileProps {
  value: React.ReactNode;
  label: string;
  footnote?: string;
  style?: React.CSSProperties;
}
export declare function StatTile(props: StatTileProps): JSX.Element;
