import React, { useMemo, useState } from "react";
import Modal from "../../Modals/Modal";
import {
  ErrorName,
  ErrorPath,
  ErrorSymbol,
  StackTrace,
} from "./DevelopmentErrorModal.styles";
import { IconButton } from "../../Buttons/IconButton";
import { MaterialIcon } from "../../Icons/MaterialIcon";
import { CheckBox } from "../../Inputs/Checkbox";
import { errorMatchers } from "./errorHelpers";

export interface DevelopmentErrorModalProps {
  errorMessage: string;
  stackTrace?: string;
  errorName: string;
  onClose?: () => void;
  isOpen?: boolean;
}

/** A development utility component that displays
 * a modal with the error message and stack trace when an error is thrown in a component.
 *
 * To use, you can wrap your app in the `DevelopmentErrorBoundary` component.
 */
export function DevelopmentErrorModal(props: DevelopmentErrorModalProps) {
  const { errorMessage, stackTrace, errorName, onClose, isOpen } = props;
  const [showDependencyLines, setShowDependencyLines] = useState(true);

  const displayedStackTrace = useMemo(() => {
    let lines = stackTrace?.split("\n") || [];
    lines = lines.filter((line) => line.trim().length > 0);
    if (!showDependencyLines) {
      lines = lines.filter((line) => !line.includes("node_modules"));
    }

    const renderedLines = lines.map((line, idx) => {
      const [symbol, ...rest] = line.split("@");
      return (
        <div key={`${line}-${idx}`}>
          <ErrorSymbol>{symbol}</ErrorSymbol>
          <span>@</span>
          <ErrorPath>{rest.join("@")}</ErrorPath>
        </div>
      );
    });

    return renderedLines;
  }, [stackTrace, showDependencyLines]);

  const errorHelper = useMemo(() => {
    const matcher = errorMatchers.find((matcher) =>
      matcher.match(errorMessage)
    );
    return matcher?.render();
  }, [errorMessage]);

  return (
    <Modal isOpen={isOpen} variant="developer-error">
      <Modal.Header>
        <MaterialIcon icon="error" />
        <Modal.Title>
          <ErrorName>[{errorName}]</ErrorName> &nbsp;
          {errorMessage}
        </Modal.Title>
        <IconButton
          icon="refresh"
          variant="ghost"
          onPress={() =>
            window?.top?.location?.reload() || window?.location?.reload()
          }
        />
        <IconButton icon="close" variant="ghost" onPress={onClose} />
      </Modal.Header>
      <Modal.Body>
        {errorHelper}
        <hr />
        <CheckBox
          isSelected={showDependencyLines}
          onChange={setShowDependencyLines}
        >
          Show Node Module Stacktrace Lines
        </CheckBox>
        <StackTrace>{displayedStackTrace}</StackTrace>
      </Modal.Body>
    </Modal>
  );
}

interface ErrorBondaryState {
  error: Error | null;
  showModal: boolean;
}

/**
 * Error boundary that will display a modal with the error message and stack trace
 * when an error is thrown in a component. This should only be used in development.
 */
export class DevelopmentErrorBoundary extends React.Component<
  { children: React.ReactNode; isEnabled?: boolean },
  ErrorBondaryState
> {
  state: ErrorBondaryState = { error: null, showModal: false };

  static getDerivedStateFromError(error: Error) {
    return { error, showModal: true };
  }

  render() {
    const { isEnabled = true } = this.props;
    const { error, showModal } = this.state;

    if (error && showModal && isEnabled) {
      return (
        <DevelopmentErrorModal
          errorMessage={error.message}
          stackTrace={error.stack}
          errorName={error.name}
          onClose={() => this.setState({ showModal: false })}
          isOpen
        />
      );
    }

    return this.props.children;
  }
}
