/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const matchRegexp = (regexp, errorMsg) => (value) => {
  if (value && !regexp.test(value)) {
    return errorMsg;
  }

  return undefined;
};

export default matchRegexp;
