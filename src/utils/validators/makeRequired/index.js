export default function makeRequired(errorMessage) {
  return (value) => {
    const formattedValue = value && value.trim();

    return formattedValue ? undefined : errorMessage;
  };
}
