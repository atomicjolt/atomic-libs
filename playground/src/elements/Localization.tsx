import React, { useState } from "react";
import {
  CheckBox,
  CustomSelect,
  DatePicker,
  FormatDate,
  FormatNumber,
  Item,
  Key,
  LocaleProvider,
  NumberInput,
  Radio,
  RadioGroup,
  SkeletonLoader,
} from "@atomicjolt/atomic-elements";
import { Demo, DemoPage } from "../components/Demo";

const LOCALES = [
  { id: "en-US", label: "English (US)" },
  { id: "fr-FR", label: "French" },
  { id: "de-DE", label: "German" },
  { id: "ja-JP", label: "Japanese" },
  { id: "ar", label: "Arabic (right to left)" },
];
const RTL = new Set(["ar"]);
const NOW = new Date();

export default function Localization() {
  const [locale, setLocale] = useState<Key>("en-US");

  const onLocaleChange = (key: Key | null) => {
    if (key === null) return;
    setLocale(key);
    // Components follow the locale's direction; the page itself is flipped here.
    if (RTL.has(String(key))) {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.removeAttribute("dir");
    }
  };

  return (
    <LocaleProvider locale={String(locale)}>
      <DemoPage>
        <div className="pg-toolbar">
          <CustomSelect label="Locale" selectedKey={locale} onSelectionChange={onLocaleChange}>
            {LOCALES.map(({ id, label }) => (
              <Item key={id} id={id}>
                {label}
              </Item>
            ))}
          </CustomSelect>
        </div>

        <Demo title="Formatting" description="FormatNumber and FormatDate use the current locale.">
          <table className="pg-table">
            <tbody>
              <tr>
                <th>Number</th>
                <td><FormatNumber value={1234567.891} /></td>
              </tr>
              <tr>
                <th>Currency</th>
                <td><FormatNumber value={1234.5} style="currency" currency="EUR" /></td>
              </tr>
              <tr>
                <th>Percent</th>
                <td><FormatNumber value={0.256} style="percent" /></td>
              </tr>
              <tr>
                <th>Date</th>
                <td><FormatDate value={NOW} dateStyle="full" /></td>
              </tr>
              <tr>
                <th>Date and time</th>
                <td><FormatDate value={NOW} dateStyle="medium" timeStyle="short" /></td>
              </tr>
            </tbody>
          </table>
        </Demo>

        <Demo title="Fields" description="Date, number and calendar fields follow the locale.">
          <DatePicker label="Select date" />
          <NumberInput label="Number" defaultValue={1234.5} />
          <CheckBox>Checkbox</CheckBox>
          <RadioGroup label="Radio group" defaultValue="1">
            <Radio value="1">Radio 1</Radio>
            <Radio value="2">Radio 2</Radio>
            <Radio value="3">This radio is longer</Radio>
          </RadioGroup>
        </Demo>

        <Demo title="Skeleton loader" description="Flips with the text direction.">
          <SkeletonLoader>
            <rect x="50" y="6" rx="4" ry="4" width="343" height="38" />
            <rect x="8" y="6" rx="4" ry="4" width="35" height="38" />
            <rect x="50" y="55" rx="4" ry="4" width="343" height="38" />
            <rect x="8" y="55" rx="4" ry="4" width="35" height="38" />
          </SkeletonLoader>
        </Demo>
      </DemoPage>
    </LocaleProvider>
  );
}
