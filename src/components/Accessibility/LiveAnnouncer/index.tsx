import { HasChildren } from "../../../types";
import { AnnouncerProvider, contextValue } from "../context";

export interface LiveAnnouncerProps extends HasChildren {}

export function LiveAnnouncer(props: LiveAnnouncerProps) {
  const { children } = props;

  return <AnnouncerProvider value={contextValue}>{children}</AnnouncerProvider>;
}
