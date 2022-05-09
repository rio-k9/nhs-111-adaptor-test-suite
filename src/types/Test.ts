export type Test = {
  testName: string;
  testDescription: string;
  testSpecifications: TestSpecs;
};

export interface TestSpecs {
  title: string;
  description: string;
  requestHeaderFields: Array<TestRequestField>;
  requestPayloadFields: Array<TestRequestField>;
}

export type TestRequestField = {
  id: string;
  label: string;
  defaultValue: string;
  validators?: Array<Validator>;
};

export type Validator = {
  id: ValidatorKeys;
  message: string;
  match: ValidatorMatch;
};

export type ValidatorMatch = boolean | string | number | null;

export type ValidatorKeys =
  | "maxLength"
  | "minLength"
  | "notNull"
  | "regexMatch";

export type FormErrors = {
  [key: string]: FormError | null;
};

export type FormError = {
  [key in ValidatorKeys]: Validator & { error: boolean };
};
