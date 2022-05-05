export interface TestList {
  testList: Array<Test>;
}

export interface Test {
  testName: string;
  testSpecifications: Array<TestSpecs>;
}

interface TestSpecs {
  title: string;
  description: string;
  requestHeaderFields: Array<TestHeaderField>;
  requestPayloadFields: Array<TestPayloadField>;
}

interface TestHeaderField {
  id: string;
  defaultValue: string;
  validators?: TestFieldValidators;
}

interface TestPayloadField {
  id: string;
  defaultValue: string;
  validators?: TestFieldValidators;
}

interface TestFieldValidators {
  notNull?: boolean;
  minLength?: number;
  maxLength?: number;
  regexMatch?: string;
}
