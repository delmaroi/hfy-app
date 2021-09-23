/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default function makeRequired(errorMessage) {
  return (value) => {
    const formattedValue = value && value.trim();

    return formattedValue ? undefined : errorMessage;
  };
}
