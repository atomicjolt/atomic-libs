import { MaterialIcons } from "../../types";

interface Props {
  icon: MaterialIcons;
}

export default function MaterialIcon({ icon }: Props) {
  return <i className="material-icons">{icon}</i>;
}
