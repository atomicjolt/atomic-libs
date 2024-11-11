import i18next from "i18next";
import { InitSettings } from '../../types';
import { privacyHtml } from './privacy';
import { MAIN_CONTENT_ID } from '../libs/constants';
import { tryRequestStorageAccess } from '../libs/platform_storage';

export function launchNewWindow(settings: InitSettings) {
  window.open(settings.relaunchInitUrl);
  showLaunchNewWindow(settings, { disableLaunch: true, showRequestStorageAccess: false, showStorageAccessDenied: false });
}

export function showLaunchNewWindow(settings: InitSettings, options: { disableLaunch: boolean, showRequestStorageAccess: boolean, showStorageAccessDenied: boolean }) {
  const { disableLaunch, showRequestStorageAccess, showStorageAccessDenied } = options;
  const container = document.getElementById(MAIN_CONTENT_ID);
  if (!container) {
    throw i18next.t('Could not find main-content element');
  }
  container.innerHTML = `
    <div class="aj-centered-message">
      <h1 class="aj-title">
        <i class="material-icons-outlined aj-icon" aria-hidden="true">cookie_off</i>
        ${i18next.t("Cookies Required")}
      </h1>
      <p class="aj-text">
        ${privacyHtml(settings)} </p>
      <p class="aj-text">
        ${i18next.t('Please click the button below to reload in a new window.')}
      </p>
      <button id="button_launch_new_window" class="aj-btn aj-btn--blue" ${disableLaunch ? 'disabled=""' : ''} >
        ${i18next.t('Open in a new window')}
      </button>
      </a>
      ${showRequestStorageAccess ? `
        <div id="request_storage_access">
          <p class="aj-text">
            ${i18next.t("If you have used this application before, your browser may allow you to <a id='request_storage_access_link' href='#'>enable cookies</a> and prevent this message in the future.")}
          </p>
        </div>
      `: ''}
      ${showStorageAccessDenied ? `
      <div id="request_storage_access_error" class="u-flex">
        <i class="material-icons-outlined aj-icon" aria-hidden="true">warning</i>
        <p class="aj-text">
        ${i18next.t('The browser prevented access.  Try launching in a new window first and then clicking this option again next time. If that doesn\'t work check your privacy settings. Some browsers will prevent all third party cookies.')}
        </p>
      </div>
      `: ''}
    </div>
  `;

  document.getElementById("button_launch_new_window")!.onclick = () => launchNewWindow(settings);

  if (showRequestStorageAccess) {
    document.getElementById("request_storage_access_link")!.
      onclick = () => tryRequestStorageAccess(settings);
  }
}
