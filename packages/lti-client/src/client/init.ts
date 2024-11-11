import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { ltiStorageLaunch } from "../libs/lti_storage_launch";
import es from "../locale/es.json";
import fr from "../locale/fr.json";
import { MAIN_CONTENT_ID } from "../libs/constants";
import { InitSettings } from "../../types";

function showError() {
  const container = document.getElementById(MAIN_CONTENT_ID);
  if (!container) {
    throw 'Could not find main-content element';
  }
  container.innerHTML += `
    <div class="u-flex aj-centered-message">
      <i class="material-icons-outlined aj-icon" aria-hidden="true">warning</i>
      <p class="aj-text translate">
        ${i18next.t("There was an error launching the LTI tool. Please reload and try again.")}
      </p>
    </div>
  `;
}

export function initOIDCLaunch(settings: InitSettings) {
  let isLaunched = false;

  i18next
  .use(LanguageDetector)
  .init({
      detection: { order: ['querystring', 'navigator'] },
      fallbackLng: 'en',
      keySeparator: false,
  });

  i18next.addResourceBundle('es', 'translation', es);
  i18next.addResourceBundle('fr', 'translation', fr);
  i18next.changeLanguage();

  window.addEventListener("load", () => {
    ltiStorageLaunch(settings);
    isLaunched = true;
  });

  setTimeout(() => {
    if (!isLaunched) {
      showError();
    }
  }, 5000);
}
