import { InitSettings } from '../../types';

export function hasCookie(settings: InitSettings) {
  if (document.cookie) {
    return document.cookie.match(`(^|;)\\s*${settings.openIdCookiePrefix}` + settings.state);
  }
  return false;
}

export function setCookie(settings: InitSettings) {
  document.cookie = settings.openIdCookiePrefix + settings.state + '=1; path=/; max-age=60; SameSite=None;'
}
