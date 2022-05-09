import React from "react";
import AdaptorRequest, { RequestBody, RequestHeaders } from "./types/Request";
import { TestSpecs } from "./types/Test";

const createDefaultRequest = (specs: TestSpecs): AdaptorRequest => ({
  requestHeaderFields: specs.requestHeaderFields.reduce(
    (acc, val) => ({
      ...acc,
      [val.id]: val.defaultValue,
    }),
    {} as RequestHeaders
  ),
  requestPayloadFields: specs.requestPayloadFields.reduce(
    (acc, val) => ({
      ...acc,
      [val.id]: val.defaultValue,
    }),
    {} as RequestBody
  ),
});

export default createDefaultRequest;
