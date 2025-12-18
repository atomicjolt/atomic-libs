import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ErrorBoundary } from "./ErrorBoundary.component";
import { Button } from "../../Buttons/Button";
import { ErrorBanner } from "@components/Banners/DismissableBanner";
import { Text } from "@components/Typography/Text";

const meta: Meta<typeof ErrorBoundary> = {
  title: "Feedback/ErrorBoundary",
  component: ErrorBoundary,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    fallback: {
      control: "text",
      description: `The fallback UI to display when an error is caught. This can be a React node or a function that receives the error and a reset function as arguments.`,
    },
    resetKeys: {
      control: false,
      description: `An array of values that, when changed, will reset the error boundary's state.`,
    },
    onError: {
      action: "error captured",
      description: `Callback function that is called when an error is caught. It receives the error and additional info as arguments.`,
    },
    onReset: {
      action: "reset triggered",
      description: `Callback function that is called when the error boundary is reset.`,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const BuggyComponent = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error("Something went wrong in the component!");
  }
  return (
    <Text as="div" $size="3" $mt="4">
      Everything is working fine!
    </Text>
  );
};

const BuggyCounter = () => {
  const [count, setCount] = useState(0);

  if (count > 3) {
    throw new Error("Count cannot be greater than 3!");
  }

  return (
    <div>
      <p>Count: {count}</p>
      <Button onPress={() => setCount(count + 1)}>Increment</Button>
    </div>
  );
};

export const WithStaticFallback: Story = {
  render: () => {
    const [shouldThrow, setShouldThrow] = useState(false);

    return (
      <div>
        <Button
          onPress={() => setShouldThrow(!shouldThrow)}
          variant={shouldThrow ? "success" : "error"}
        >
          {shouldThrow ? "Fix Component" : "Break Component"}
        </Button>

        <ErrorBoundary
          resetKeys={[shouldThrow]}
          fallback={
            <ErrorBanner>
              Oops! Something went wrong. Please try refreshing the page.
            </ErrorBanner>
          }
        >
          <BuggyComponent shouldThrow={shouldThrow} />
        </ErrorBoundary>
      </div>
    );
  },
};

export const WithFunctionFallback: Story = {
  render: () => {
    const [shouldThrow, setShouldThrow] = useState(false);

    return (
      <div>
        <Button
          onPress={() => setShouldThrow(!shouldThrow)}
          variant={shouldThrow ? "success" : "error"}
        >
          {shouldThrow ? "Fix Component" : "Break Component"}
        </Button>

        <ErrorBoundary
          fallback={(error, reset) => (
            <ErrorBanner>
              <strong>Error:</strong> {error.message}
              <br />
              <Button
                onPress={() => {
                  setShouldThrow(false);
                  reset();
                }}
                variant="inverted"
                style={{ marginTop: "8px" }}
              >
                Try Again
              </Button>
            </ErrorBanner>
          )}
          resetKeys={[shouldThrow]}
          onError={(error, errorInfo) => {
            console.log("Error caught:", error);
            console.log("Error info:", errorInfo);
          }}
          onReset={() => {
            console.log("Error boundary reset");
          }}
        >
          <BuggyComponent shouldThrow={shouldThrow} />
        </ErrorBoundary>
      </div>
    );
  },
};

export const WithResetKeys: Story = {
  render: () => {
    const [resetKey, setResetKey] = useState(0);
    const [userId, setUserId] = useState("user1");

    return (
      <div>
        <div style={{ marginBottom: "16px" }}>
          <p>
            Reset key: {resetKey} | User ID: {userId}
          </p>
          <div style={{ display: "flex", gap: "8px" }}>
            <Button onPress={() => setResetKey(resetKey + 1)}>
              Change Reset Key
            </Button>
            <Button
              onPress={() => setUserId(userId === "user1" ? "user2" : "user1")}
            >
              Change User ID
            </Button>
          </div>
          <p style={{ fontSize: "12px", color: "#666" }}>
            Changing either value will reset the error boundary
          </p>
        </div>

        <ErrorBoundary
          fallback={
            <ErrorBanner>
              Component crashed! Change the reset key or user ID above to
              recover.
            </ErrorBanner>
          }
          resetKeys={[resetKey, userId]}
          onReset={() => {
            console.log("Error boundary reset due to resetKeys change");
          }}
        >
          <BuggyCounter />
        </ErrorBoundary>
      </div>
    );
  },
};

export const NestedErrorBoundaries: Story = {
  render: () => {
    const [outerError, setOuterError] = useState(false);
    const [innerError, setInnerError] = useState(false);

    return (
      <div>
        <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
          <Button
            onPress={() => setOuterError(!outerError)}
            variant={outerError ? "success" : "error"}
          >
            {outerError ? "Fix" : "Break"} Outer Component
          </Button>
          <Button
            onPress={() => setInnerError(!innerError)}
            variant={innerError ? "success" : "error"}
          >
            {innerError ? "Fix" : "Break"} Inner Component
          </Button>
        </div>

        <ErrorBoundary
          resetKeys={[outerError]}
          fallback={
            <ErrorBanner>Outer error boundary caught an error!</ErrorBanner>
          }
        >
          <div
            style={{ padding: "16px", border: "2px solid blue", margin: "8px" }}
          >
            <h3>Outer Component</h3>
            <BuggyComponent shouldThrow={outerError} />

            <ErrorBoundary
              fallback={
                <ErrorBanner>Inner error boundary caught an error!</ErrorBanner>
              }
              resetKeys={[innerError]}
            >
              <div
                style={{
                  padding: "16px",
                  border: "2px solid green",
                  margin: "8px",
                }}
              >
                <h4>Inner Component</h4>
                <BuggyComponent shouldThrow={innerError} />
              </div>
            </ErrorBoundary>
          </div>
        </ErrorBoundary>
      </div>
    );
  },
};
