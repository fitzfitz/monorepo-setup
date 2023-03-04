export const cloneDeep = <T>(obj: T): T => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  let copy: any;
  if (Array.isArray(obj)) {
    copy = [];
    for (let i = 0; i < obj.length; i++) {
      copy[i] = cloneDeep(obj[i]);
    }
    return copy as T;
  } else {
    copy = {};
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        copy[key] = cloneDeep(obj[key]);
      }
    }
    return copy as T;
  }
};
