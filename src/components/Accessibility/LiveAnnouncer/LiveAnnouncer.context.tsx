import React from "react";
import { announce, clearAnnouncer } from "@react-aria/live-announcer";

interface LiveAnnouncerContext {
  /** announces the message using screen reader technology with the
   * aria-live="polite" attribute */
  announcePolite: (message: string, timeout?: number) => void;
  /** announces the message using screen reader technology with the
   * aria-live="assertive" attribute */
  announceAssertive: (message: string, timeout?: number) => void;

  /** clears all polite announcements */
  clearPoliteAnnouncements: () => void;
  /** clears all assertive announcements */
  clearAssertiveAnnouncements: () => void;
}

export const contextValue = {
  announcePolite: (message: string, timeout?: number) =>
    announce(message, "polite", timeout),
  announceAssertive: (message: string, timeout?: number) =>
    announce(message, "assertive", timeout),
  clearPoliteAnnouncements: () => clearAnnouncer("polite"),
  clearAssertiveAnnouncements: () => clearAnnouncer("assertive"),
};

export const AnnouncerContext =
  React.createContext<LiveAnnouncerContext>(contextValue);

export const AnnouncerProvider = AnnouncerContext.Provider;

/** Hook used to announce things
 * to the screen reader */
export function useAnnouncer() {
  return React.useContext(AnnouncerContext);
}

/** HOC to provide the announcer context to a component */
export function withAnnouncer<T extends object>(
  Component: React.ComponentType<T & LiveAnnouncerContext>
): React.ComponentType<T> {
  return function WithAnnouncer(props: T) {
    const announcerProps = useAnnouncer();

    return <Component {...props} {...announcerProps} />;
  };
}
