import { HasChildren } from "../../../types";
import { AnnouncerProvider, contextValue } from "./LiveAnnouncer.context";

export interface LiveAnnouncerProps extends HasChildren {}

export function LiveAnnouncer(props: LiveAnnouncerProps) {
  const { children } = props;

  return <AnnouncerProvider value={contextValue}>{children}</AnnouncerProvider>;
}
