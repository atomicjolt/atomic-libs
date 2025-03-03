import { spacing } from "../../src/styles/variables";

export function SpacingScaleTable() {
  const scale = Object.values(spacing).map((value, idx) => ({
    scale: idx,
    spacing: value,
  }));

  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th style={{ width: "auto" }}>Scale</th>
          <th style={{ width: "100%" }}>Spacing</th>
        </tr>
      </thead>
      <tbody>
        {scale.map((item) => (
          <tr key={item.scale}>
            <td>{item.scale}</td>
            <td>
              <code>{item.spacing}</code>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
