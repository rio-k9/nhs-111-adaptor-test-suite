import { Validator } from "../types/Test";

export const notNull = (): Validator => ({
  precedence: 0,
  id: "notNull",
  match: null,
  message: "This field must not be empty",
});

export const maxLength = (int: number): Validator => ({
  precedence: 2,
  id: "maxLength",
  match: int,
  message: `This field has a maximum length of ${int}`,
});

export const minLength = (int: number): Validator => ({
  precedence: 2,
  id: "minLength",
  match: int,
  message: `This field has a minimum length of ${int}`,
});

export const regexMatch = (regexp: RegExp, message: string): Validator => ({
  precedence: 1,
  id: "regexMatch",
  match: regexp,
  message: message,
});

export const isLocalUrl = () =>
  regexMatch(
    /((localhost|127.0.0.1)(([:])[\0-9]{4})\/){1}/g,
    "Field must be a local URL"
  );

export const isAlpha = () =>
  regexMatch(/^[A-Za-z]+$/, "Field must be alphabetical");
