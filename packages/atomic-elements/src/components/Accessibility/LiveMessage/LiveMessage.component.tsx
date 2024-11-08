import { useEffect, useRef } from "react";
import { useAnnouncer } from "../LiveAnnouncer";
import { useContextPropsV2 } from "@hooks/useContextProps";
import { LiveMessageContext } from "./LiveMessage.context";

export interface LiveMessageProps {
  /** The message to be announced */
  message: string;
  /** Whether the message should be announced as polite. Defaults to true */
  polite?: boolean;
  /** Whether the message should be announced as assertive. Defaults to false */
  assertive?: boolean;
  /** The time in milliseconds the message should be announced for */
  timeout?: number;
}

/** Component for compatibility with: https://github.com/AlmeroSteyn/react-aria-live/blob/master/src/modules/LiveMessenger.js.
 * In new components, you should use the useAnnouncer hook directly.
 */
export function LiveMessage(props: LiveMessageProps) {
  let ref = useRef<HTMLDivElement>(null);
  [props, ref] = useContextPropsV2(LiveMessageContext, props, ref);

  const { message, polite = true, assertive = false, timeout } = props;
  const { announceAssertive, announcePolite } = useAnnouncer();

  useEffect(() => {
    if (polite && !assertive) {
      announcePolite(message, timeout);
    } else if (assertive) {
      announceAssertive(message, timeout);
    }
  }, [message, polite, assertive, timeout]);

  return null;
}
