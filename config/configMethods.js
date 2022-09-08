import { aliasConfigs, storeConfigs } from "./store.config";

export const getHost = (hostname = window.location.hostname, www = false) => {
  if (!www) {
    return hostname.replace("www.", "");
  }
  return hostname;
};

export const getHostConfig = (hostname) => {
  if (storeConfigs[hostname] === undefined) {
    if (aliasConfigs[hostname] !== undefined) {
      return storeConfigs[aliasConfigs[hostname]];
    } else {
      return false;
    }
  }
  return storeConfigs[hostname];
};
