/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const BIRTH_DATE_FORMAT = "YYYY-MM-DD";
const MAX_AGE = 120;

export default function dateOfBirth(value) {
  if (value.length === 0) {
    return "Please enter a valid birthdate";
  }
  if (value.length < 10) {
    return `You have entered an invalid birthdate. Please use the format ${BIRTH_DATE_FORMAT}.`;
  }

  const birthday = new Date(value);
  const today = new Date();
  if (
    today.getFullYear() - birthday.getFullYear() > MAX_AGE ||
    birthday > today
  ) {
    return "Please confirm that your birth year is correct";
  }

  return undefined;
}
