import { useState } from "react";
import {
  CheckBox,
  CustomSelect,
  DatePicker,
  Item,
  Key,
  NumberInput,
  Radio,
  RadioGroup,
  SearchInput,
  SkeletonLoader,
} from "../elements";
import { I18nProvider } from "@react-aria/i18n";

export default function Localization() {
  const [locale, setLocale] = useState<Key>("en");

  const onLocaleChange = (key: Key) => {
    setLocale(key);
    if (key === "ar") {
      document.querySelector("html")?.setAttribute("dir", "rtl");
    } else {
      document.querySelector("html")?.removeAttribute("dir");
    }
  };

  return (
    <div>
      <I18nProvider locale={locale as string}>
        <SearchInput />
        <CustomSelect
          label="Locale"
          selectedKey={locale}
          onSelectionChange={onLocaleChange}
        >
          <Item id="en">English</Item>
          <Item id="fr">French</Item>
          <Item id="ar">Arabic</Item>
        </CustomSelect>
        <hr />
        <CheckBox>Checkbox</CheckBox>
        <RadioGroup label="Radio Group">
          <Radio value="1">Radio 1</Radio>
          <Radio value="2">Radio 2</Radio>
          <Radio value="3">This Radio is longer</Radio>
        </RadioGroup>
        <DatePicker label="Select Date" size="medium" />
        <NumberInput label="Test Label" />
        <hr />
        <SkeletonLoader>
          <rect x="50" y="6" rx="4" ry="4" width="343" height="38" />
          <rect x="8" y="6" rx="4" ry="4" width="35" height="38" />
          <rect x="50" y="55" rx="4" ry="4" width="343" height="38" />
          <rect x="8" y="55" rx="4" ry="4" width="35" height="38" />
          <rect x="50" y="104" rx="4" ry="4" width="343" height="38" />
          <rect x="8" y="104" rx="4" ry="4" width="35" height="38" />
        </SkeletonLoader>
      </I18nProvider>
    </div>
  );
}
