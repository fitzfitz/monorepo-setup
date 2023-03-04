export const objToQs = <T extends Record<string, string | number>>(
  obj: T
): string => {
  const params = new URLSearchParams(obj as Record<string, string>);
  return params.toString();
};
