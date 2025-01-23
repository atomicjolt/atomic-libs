import {
  fontSize,
  letterSpacing,
  lineHeight,
} from "../../src/styles/variables";

export function TypographyScaleTable() {
  const scale = Array.from({ length: 9 }, (_, i) => ({
    scale: i + 1,
    fontSize: fontSize[`font-size-${i + 1}` as keyof typeof fontSize],
    lineHeight: lineHeight[`line-height-${i + 1}` as keyof typeof lineHeight],
    letterSpacing:
      letterSpacing[`letter-spacing-${i + 1}` as keyof typeof letterSpacing],
  }));

  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Scale</th>
          <th style={{ width: "25%" }}>Font Size</th>
          <th style={{ width: "25%" }}>Line Height</th>
          <th style={{ width: "25%" }}>Letter Spacing</th>
        </tr>
      </thead>
      <tbody>
        {scale.map((item) => (
          <tr key={item.scale}>
            <td>{item.scale}</td>
            <td>
              <code>{item.fontSize}</code>
            </td>
            <td>
              <code>{item.lineHeight}</code>
            </td>
            <td>
              <code>{item.letterSpacing}</code>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
