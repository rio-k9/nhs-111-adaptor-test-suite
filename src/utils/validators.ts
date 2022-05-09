import { Validator } from "../types/Test";

export const notNull = (): Validator => ({
  id: "notNull",
  match: null,
  message: "This field must not be empty",
});

export const maxLength = (int: number): Validator => ({
  id: "maxLength",
  match: int,
  message: `This field has a maximum length of ${int}`,
});

export const minLength = (int: number): Validator => ({
  id: "maxLength",
  match: int,
  message: `This field has a minimum length of ${int}`,
});

export const regexMatch = (regexp: string, message: string): Validator => ({
  id: "regexMatch",
  match: regexp,
  message: message,
});
