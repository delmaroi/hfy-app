export default function composeValidators(...validators) {
  return (value, values) =>
    validators.reduce(
      (error, validator) => error || (validator && validator(value, values)),
      undefined
    );
}
