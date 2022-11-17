type OptionsType = {
  deep?: boolean;
  removeDigitFromStart?: false;
};

// interface CamelizeProps {
//   input: any;
//   options?: OptionsType;
//   out?: any;
// }

let convert = (input?: any, removeDigitFromStart?: any) => {
  if (
    (removeDigitFromStart && new RegExp(/[aA-zZ]/).test(input)) ||
    new RegExp(/[aA-zZ]/).test(input)
  ) {
    return input
      .replace(/^[0-9]/, "")
      .replace(/^[_.\- ]+/, "")
      .toLowerCase()
      .replace(/[_.(|)\- ]+(\w|$)/g, (m: any, p1: string) => p1.toUpperCase());
  } else {
    return input;
  }
};

let processObject = (input: any, options?: OptionsType, out?: any) => {
  // let out
  switch (typeof input) {
    case "object":
      for (let key in input) {
        out = !out ? {} : out;
        if (options?.deep) {
          out[camelize(key, options)] =
            typeof input[key] === "object" &&
            input[key] !== null &&
            input[key] !== undefined
              ? camelize(input[key], options, out[camelize(key, options)])
              : input[key];
        } else {
          out[camelize(key, options, out)] = input[key];
        }
      }
      break;
    default:
      out = convert(input.trim());
      break;
  }
  return out;
};

let processArray = (input: any, options?: OptionsType, out?: any) => {
  return Object.keys(input).map((key) => {
    return processObject(
      input[key],
      options,
      out && out[key] ? out[key] : null
    );
  });
};

let preserveCamelCase = (input: any) => {
  let isLastCharLower = false;
  let isLastCharUpper = false;
  let isLastLastCharUpper = false;

  for (let i = 0; i < input.length; i++) {
    const c = input[i];

    if (isLastCharLower && /[a-zA-Z]/.test(c) && c.toUpperCase() === c) {
      input = input.slice(0, i) + "-" + input.slice(i);
      isLastCharLower = false;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = true;
      i++;
    } else if (
      isLastCharUpper &&
      isLastLastCharUpper &&
      /[a-zA-Z]/.test(c) &&
      c.toLowerCase() === c
    ) {
      input = input.slice(0, i - 1) + "-" + input.slice(i - 1);
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = false;
      isLastCharLower = true;
    } else {
      isLastCharLower = c.toLowerCase() === c;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = c.toUpperCase() === c;
    }
  }

  return input;
};

export const camelize = (input: any, options?: OptionsType, out?: any) => {
  if (!input) {
    throw new Error("Invalid input provided.");
  }

  options = Object.assign(
    {
      deep: false,
      removeDigitFromStart: false,
    },
    options
  );

  let output;

  switch (typeof input) {
    case "string":
      const hasUpperCase = input !== input.toLowerCase();
      if (hasUpperCase) {
        input = preserveCamelCase(input);
      }
      output = convert(input.trim(), options.removeDigitFromStart);
      break;
    case "object":
      if (Array.isArray(input)) {
        output = processArray(input, options, out);
      } else {
        output = processObject(input, options, out);
      }
  }
  return output;
};
