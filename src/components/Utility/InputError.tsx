interface Props {
  id: string;
  error?: string;
}
export default function InputError({ error, id }: Props) {
  if (!error) {
    return null;
  }

  return (
    <p id={id} className="aj-label--error">
      {error}
    </p>
  );
}
