/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import matchRegexp from "./matchRegexp";

export const EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export const email = (value) =>
  matchRegexp(
    EMAIL_REGEXP,
    "Email format invalid"
  )(value ? value.trim() : undefined);

export default email;
