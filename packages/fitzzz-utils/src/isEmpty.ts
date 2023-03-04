export const isEmpty = (val: unknown): boolean => {
  return (
    val === null ||
    val === undefined ||
    (Array.isArray(val) && val.length === 0) ||
    (typeof val === "object" && Object.keys(val).length === 0) ||
    val === "" ||
    val === 0
  );
};
