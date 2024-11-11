import i18next from "i18next";
import { InitSettings } from '../../types';
import { privacyHtml } from "./privacy";
import { MAIN_CONTENT_ID } from '../libs/constants';

export function showCookieError(settings: InitSettings) {
  const container = document.getElementById(MAIN_CONTENT_ID);

  if (!container) {
    throw i18next.t('Could not find main-content element');
  }

  container.innerHTML = `
    <div id="cookie_error" class="aj-centered-message">
      <h1 class="aj-title">
        <i class="material-icons-outlined aj-icon" aria-hidden="true">cookie_off</i>
        ${i18next.t("Cookies Required")}
      </h1>
      <p class="aj-text">
        ${privacyHtml(settings)}
      </p>
      <p class="aj-text">
        ${i18next.t("Please check your browser settings and enable cookies.")}
      </p>
    </div>
  `;
}
