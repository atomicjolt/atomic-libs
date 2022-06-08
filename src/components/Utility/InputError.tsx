import { ErrorLabel } from "./Label";

interface Props {
  id: string;
  error?: string;
}

export default function InputError({ error, id }: Props) {
  if (!error) {
    return null;
  }

  return <ErrorLabel id={id}>{error}</ErrorLabel>;
}
