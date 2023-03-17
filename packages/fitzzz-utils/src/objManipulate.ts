export const objToQs = <T extends Record<string, string | number>>(
  obj: T
): string => {
  const params = new URLSearchParams(obj as Record<string, string>);
  return params.toString();
};

export const strToJson = (jsonString: string) => {
  try {
    const res = JSON.parse(jsonString);
    return res;
  } catch (e) {
    return null;
  }
};
