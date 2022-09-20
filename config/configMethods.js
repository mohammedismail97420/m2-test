import {
  aliasConfigs,
  storeConfigs,
  stores_exclude_list,
  stores_replace_list,
} from "./store.config";

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

export let getCountries = (stores) => {
  // Take only active stores
  _.remove(stores?.data, function (item) {
    return item.is_active == 0;
  });
  //Get code only
  let codes = _.map(stores?.data, "code");
  //Exclude data
  const filteredCodes = codes.filter(
    (val) => !stores_exclude_list.includes(val)
  );
  //Extract after _
  let shortCodes = [];
  filteredCodes.map((item) => {
    const domains = /.*_(.*)/.exec(item);
    domains && shortCodes.push(domains[1]);
  });
  //Replace data
  shortCodes.map((code) => {
    if (stores_replace_list[code]) {
      shortCodes[shortCodes.indexOf(code)] = stores_replace_list[code];
    }
  });
  return shortCodes;
};
