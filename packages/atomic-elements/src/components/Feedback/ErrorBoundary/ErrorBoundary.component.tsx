import { Component, ErrorInfo, ReactNode } from "react";

export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode | ((error: Error, reset: () => void) => ReactNode);
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  onReset?: () => void;
  resetKeys?: Array<any>;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.props.onError?.(error, errorInfo);
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    const { resetKeys } = this.props;
    const prevResetKeys = prevProps.resetKeys;

    if (this.state.hasError && prevResetKeys !== resetKeys) {
      if (resetKeys && prevResetKeys) {
        const hasResetKeyChanged = resetKeys.some(
          (key, idx) => prevResetKeys[idx] !== key
        );
        if (hasResetKeyChanged) {
          this.reset();
        }
      } else if (resetKeys !== prevResetKeys) {
        this.reset();
      }
    }
  }

  reset = () => {
    this.props.onReset?.();

    this.setState({
      hasError: false,
      error: null,
    });
  };

  render() {
    if (this.state.hasError && this.state.error) {
      const { fallback } = this.props;

      if (typeof fallback === "function") {
        return fallback(this.state.error, this.reset);
      }

      return fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
