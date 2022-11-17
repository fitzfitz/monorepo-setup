export type Fcx = (...a: Array<undefined | null | string | boolean>) => string;

export const fcx: Fcx = (...args) =>
  args
    .flat()
    .filter((x) => x !== null && x !== undefined && typeof x !== "boolean")
    .join(" ");
