import { useLocalizedStringFormatter } from "@react-aria/i18n";
import localizedStrings, { TranslationKeys } from "../i18n";

type Variables = Record<string, string | number | boolean> | undefined;
type TranslationFunction = (
  string: TranslationKeys,
  variables?: Variables
) => string;

export function useTranslations(): TranslationFunction {
  const formatter = useLocalizedStringFormatter(
    localizedStrings,
    "@atomicjolt/atomic-elements"
  );

  const format: TranslationFunction = (string, variables) =>
    formatter.format(string, variables);

  return format;
}
