/** Sun-yellow scrolling marquee strip pinned above the header. Pauses on hover. */
export interface AnnouncementBarProps {
  messages: React.ReactNode[];
  /** copies per half-loop; raise for short messages */
  repeat?: number;
  style?: React.CSSProperties;
}
export declare function AnnouncementBar(props: AnnouncementBarProps): JSX.Element;
