import React from "react";
import { FieldError } from "../../styles/utils";

interface InputErrorProps {
  id: string;
  error?: React.ReactNode;
}

export default function InputError({ error, id }: InputErrorProps) {
  if (!error) {
    return null;
  }

  return <FieldError id={id}>{error}</FieldError>;
}
