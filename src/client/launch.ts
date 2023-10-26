import { LaunchSettings } from '../../types';
import { loadState } from "../libs/platform_storage";

async function validateLaunch(settings: LaunchSettings): Promise<boolean> {
  if (settings.ltiStorageParams) {
    // We have lti postMessage storage
    try {
      const state = await loadState(settings.state, settings.ltiStorageParams);
      if (state == settings.state) {
        return true;
      }
      return false;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  return false;
}

export async function ltiLaunch(settings: LaunchSettings): Promise<boolean> {
  // if (document.readyState == 'complete') {

  // }
  if (!settings.stateVerified) {
    const result = await validateLaunch(settings);
    return result;
  }
  return true;
}
