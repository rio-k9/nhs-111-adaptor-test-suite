export interface Test {
  testName: string;
  testDescription: string;
  testSpecifications: TestSpecs;
}

export interface TestSpecs {
  title: string;
  description: string;
  requestHeaderFields: Array<TestRequestField>;
  requestPayloadFields: Array<TestRequestField>;
}

export interface TestRequestField {
  id: string;
  label: string;
  defaultValue: string;
  validators?: TestFieldValidators;
}

interface TestFieldValidators {
  notNull?: boolean;
  minLength?: number;
  maxLength?: number;
  regexMatch?: string;
}
