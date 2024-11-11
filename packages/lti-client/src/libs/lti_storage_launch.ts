import { InitSettings } from '../../types';
import { hasStorageAccessAPI } from "./platform_storage";
import { hasCookie } from "./cookies";
import { storeState } from "./platform_storage";
import { showLaunchNewWindow } from "../html/launch_new_window";
import { showCookieError } from "../html/cookie_error";

export async function ltiStorageLaunch(settings: InitSettings) {
  let submitToPlatform = () => { window.location.replace(settings.responseUrl) };

  if (hasCookie(settings)) {
    // We have cookies
    return submitToPlatform();
  }

  if (settings.ltiStorageParams) {
    // We have lti postMessage storage
    try {
      await storeState(settings.state, settings.ltiStorageParams);
      return submitToPlatform();
    } catch (e) {
      console.error(e);
    }
  }

  if (window.self !== window.top) {
    let showRequestStorageAccess = false;
    if (hasStorageAccessAPI()) {
      // We have storage access API, which will work for Safari as long as the
      // user already has used the application in the top layer and it set a cookie.
      try {
        let hasAccess = await document.hasStorageAccess();
        if (!hasAccess) {
          showRequestStorageAccess = true;
        }
      } catch(e) {
        console.log(e);
      }
    }
    showLaunchNewWindow(settings, { showRequestStorageAccess, disableLaunch: false, showStorageAccessDenied: false });
  } else {
    showCookieError(settings);
  }
}
