import AdaptorRequest, {
  RequestBody,
  RequestHeaderProps,
  RequestHeaders,
} from "../types/Request";
import { TestSpecs } from "../types/Test";

const createDefaultRequest = (specs: TestSpecs): AdaptorRequest =>
  [RequestHeaderProps.Header, RequestHeaderProps.Body].reduce((acc, val) => {
    return {
      ...acc,
      [val]: specs[val].reduce(
        (acc, val) => ({
          ...acc,
          [val.id]: val.defaultValue,
        }),
        {} as RequestHeaders | RequestBody
      ),
    };
  }, {} as AdaptorRequest);

export default createDefaultRequest;
