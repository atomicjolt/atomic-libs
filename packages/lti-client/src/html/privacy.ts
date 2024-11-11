import i18next from "i18next";
import { InitSettings } from '../../types';

export function privacyHtml(settings: InitSettings) {
  return i18next.t(settings.privacyPolicyMessage || `We use cookies for login and security.`) + ' '
    + i18next.t(`Learn more in our <a href='{{url}}' target='_blank'>privacy policy</a>.`);
}
