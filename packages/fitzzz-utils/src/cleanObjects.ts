import { cloneDeep } from "./cloneDeep";
import { isEmpty } from "./isEmpty";

type Config = {
  includeZero: boolean;
  nullIfEmpty: boolean;
};

export const cleanObjects = (jsonObj: any, config?: Partial<Config>) => {
  const obj = cloneDeep(jsonObj);
  for (const propName in obj) {
    if (
      obj[propName] === null ||
      obj[propName] === undefined ||
      obj[propName] === "" ||
      (config?.includeZero && obj[propName] === 0) ||
      obj[propName] === false ||
      (Array.isArray(obj[propName]) && obj[propName].length === 0) ||
      (Object.keys(obj[propName]).length === 0 &&
        obj[propName].constructor === Object)
    ) {
      delete obj[propName];
    }
  }
  return config?.nullIfEmpty && isEmpty(obj) ? null : obj;
};
