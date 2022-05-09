import { RequestHeaderProps } from "../types/Request";
import { FormError, FormErrors, TestSpecs } from "../types/Test";

const createFormErrors = (specs: TestSpecs): FormErrors => {
  return [RequestHeaderProps.Body, RequestHeaderProps.Header].reduce(
    (acc, key) => ({
      ...acc,
      ...specs[key].reduce(
        (accu, valu) => ({
          ...accu,
          [valu.id]: valu.validators
            ? valu.validators.reduce(
                (accum, value) => ({
                  ...accum,
                  [value.id]: { ...value, error: false },
                }),
                {} as FormError
              )
            : null,
        }),
        {} as FormErrors
      ),
    }),
    {} as FormErrors
  );
};
export default createFormErrors;
