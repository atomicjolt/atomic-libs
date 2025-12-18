import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { ErrorBoundary } from "./ErrorBoundary.component";

const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error("Test error");
  }
  return <div>No error</div>;
};

describe("ErrorBoundary", () => {
  // Suppress console.error for these tests
  const originalError = console.error;
  beforeEach(() => {
    console.error = vi.fn();
  });

  afterEach(() => {
    console.error = originalError;
  });

  it("renders children when there is no error", () => {
    render(
      <ErrorBoundary fallback={<div>Error occurred</div>}>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    );

    expect(screen.getByText("No error")).toBeInTheDocument();
  });

  it("renders fallback when there is an error", () => {
    render(
      <ErrorBoundary fallback={<div>Error occurred</div>}>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText("Error occurred")).toBeInTheDocument();
  });

  it("calls onError when an error occurs", () => {
    const onError = vi.fn();
    
    render(
      <ErrorBoundary fallback={<div>Error occurred</div>} onError={onError}>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(onError).toHaveBeenCalledWith(
      expect.any(Error),
      expect.objectContaining({
        componentStack: expect.any(String),
      })
    );
  });

  it("renders function fallback with error and reset", () => {
    const fallback = vi.fn((error, reset) => (
      <div>
        <span>Function fallback</span>
        <button onClick={reset}>Reset</button>
      </div>
    ));

    render(
      <ErrorBoundary fallback={fallback}>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText("Function fallback")).toBeInTheDocument();
    expect(fallback).toHaveBeenCalledWith(
      expect.any(Error),
      expect.any(Function)
    );
  });

  it("resets when resetKeys change", () => {
    const onReset = vi.fn();
    const { rerender } = render(
      <ErrorBoundary 
        fallback={<div>Error occurred</div>} 
        resetKeys={[1]} 
        onReset={onReset}
      >
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText("Error occurred")).toBeInTheDocument();

    rerender(
      <ErrorBoundary 
        fallback={<div>Error occurred</div>} 
        resetKeys={[2]} 
        onReset={onReset}
      >
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    );

    expect(screen.getByText("No error")).toBeInTheDocument();
    expect(onReset).toHaveBeenCalled();
  });

  it("calls onReset when reset function is called", () => {
    const onReset = vi.fn();
    
    render(
      <ErrorBoundary 
        fallback={(error, reset) => (
          <button onClick={reset}>Reset</button>
        )}
        onReset={onReset}
      >
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    const resetButton = screen.getByText("Reset");
    fireEvent.click(resetButton);

    expect(onReset).toHaveBeenCalled();
  });

  it("actually resets the error boundary when reset is called", () => {
    const TestComponent = () => {
      const [shouldThrow, setShouldThrow] = React.useState(true);
      
      return (
        <ErrorBoundary
          fallback={(error, reset) => (
            <div>
              <span>Error: {error.message}</span>
              <button 
                onClick={() => {
                  setShouldThrow(false);
                  reset();
                }}
              >
                Reset and Fix
              </button>
            </div>
          )}
        >
          <ThrowError shouldThrow={shouldThrow} />
        </ErrorBoundary>
      );
    };

    render(<TestComponent />);
    
    // Should show error initially
    expect(screen.getByText("Error: Test error")).toBeInTheDocument();
    
    // Click reset
    fireEvent.click(screen.getByText("Reset and Fix"));
    
    // Should now show the working component
    expect(screen.getByText("No error")).toBeInTheDocument();
  });

  it("handles resetKeys array changes correctly", () => {
    const onReset = vi.fn();
    const { rerender } = render(
      <ErrorBoundary 
        fallback={<div>Error occurred</div>} 
        resetKeys={["key1", "key2"]} 
        onReset={onReset}
      >
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText("Error occurred")).toBeInTheDocument();

    // Change one key in the array
    rerender(
      <ErrorBoundary 
        fallback={<div>Error occurred</div>} 
        resetKeys={["key1", "key3"]} 
        onReset={onReset}
      >
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    );

    expect(screen.getByText("No error")).toBeInTheDocument();
    expect(onReset).toHaveBeenCalled();
  });

  it("handles empty resetKeys properly", () => {
    const onReset = vi.fn();
    const { rerender } = render(
      <ErrorBoundary 
        fallback={<div>Error occurred</div>} 
        resetKeys={[]} 
        onReset={onReset}
      >
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText("Error occurred")).toBeInTheDocument();

    // Change from empty to populated
    rerender(
      <ErrorBoundary 
        fallback={<div>Error occurred</div>} 
        resetKeys={["key1"]} 
        onReset={onReset}
      >
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    );

    expect(screen.getByText("No error")).toBeInTheDocument();
    expect(onReset).toHaveBeenCalled();
  });

  it("does not reset when resetKeys array is the same", () => {
    const onReset = vi.fn();
    const { rerender } = render(
      <ErrorBoundary 
        fallback={<div>Error occurred</div>} 
        resetKeys={["key1", "key2"]} 
        onReset={onReset}
      >
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText("Error occurred")).toBeInTheDocument();

    // Rerender with same keys
    rerender(
      <ErrorBoundary 
        fallback={<div>Error occurred</div>} 
        resetKeys={["key1", "key2"]} 
        onReset={onReset}
      >
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText("Error occurred")).toBeInTheDocument();
    expect(onReset).not.toHaveBeenCalled();
  });
});