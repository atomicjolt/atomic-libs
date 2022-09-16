import React from "react";
import { ErrorLabel } from "./Label";

interface InputErrorProps {
  id: string;
  error?: React.ReactNode;
}

export default function InputError({ error, id }: InputErrorProps) {
  if (!error) {
    return null;
  }

  return <ErrorLabel id={id}>{error}</ErrorLabel>;
}
