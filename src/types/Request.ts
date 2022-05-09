export interface CreateReportRequestBody {
  name: "";
}

export type RequestBody = CreateReportRequestBody;

export interface RequestHeaders {
  "content-type": string;
  url: string;
}

export enum RequestHeaderProps {
  Header = "requestHeaderFields",
  Body = "requestPayloadFields",
}
export interface AdaptorRequest {
  requestHeaderFields: RequestHeaders;
  requestPayloadFields: RequestBody;
}

export default AdaptorRequest;
