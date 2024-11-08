import React, { useState } from "react";
import { Button, LoadingStatus } from "../elements";

interface Data {
  name: string;
  age: number;
}

const data: Data = {
  name: "John Doe",
  age: 30,
};

export default function Loading() {
  const [isLoading, setIsLoading] = useState(false);
  const [maybeData, setMaybeData] = useState<Data | null>(null);

  return (
    <div>
      <Button onPress={() => setIsLoading(!isLoading)}>Toggle Loading</Button>
      <Button
        onPress={() => {
          if (maybeData === null) setMaybeData(data);
          else setMaybeData(null);
        }}
      >
        Toggle Data
      </Button>
      <LoadingStatus
        isLoading={isLoading}
        data={maybeData}
        fallback={<div>No data available</div>}
      >
        {(data) => <div>{data.age}</div>}
      </LoadingStatus>
    </div>
  );
}
