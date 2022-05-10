import { RequestHeaderProps } from "../types/Request";
import Schema from "../types/Schema";
import {
  isAlpha,
  isLocalUrl,
  maxLength,
  minLength,
  notNull,
} from "../utils/validators";

const schema: Schema = {
  testList: [
    {
      testName: "Create Report",
      testDescription:
        "This test will attempt to create an emergency request with adaptor... lorumlorumlorum",
      testSpecifications: {
        title: "Name",
        description: "Description",
        [RequestHeaderProps.Header]: [
          {
            label: "Url",
            id: "url",
            defaultValue: "localhost:8081/report",
            validators: [notNull(), isLocalUrl()],
          },
          {
            label: "Content Type",
            id: "content-type",
            defaultValue: "text/xml",
            validators: [notNull(), minLength(2), maxLength(10)],
          },
        ],
        [RequestHeaderProps.Body]: [
          {
            label: "Name",
            id: "name",
            defaultValue: "John",
            validators: [notNull(), isAlpha()],
          },
        ],
      },
    },
    {
      testName: "Update Report",
      testDescription:
        "This test will attempt to update an emergency request with adaptor... lorumlorumlorum",
      testSpecifications: {
        title: "Name",
        description: "Description",
        requestHeaderFields: [
          {
            label: "Url",
            id: "url",
            defaultValue: "localhost:8081/report",
            validators: [isLocalUrl()],
          },
          {
            label: "Content Type",
            id: "content-type",
            defaultValue: "text/xml",
            validators: [notNull(), minLength(2), maxLength(10)],
          },
        ],
        [RequestHeaderProps.Body]: [
          {
            label: "Name",
            id: "name",
            defaultValue: "John",
            validators: [notNull(), isAlpha()],
          },
        ],
      },
    },
  ],
};

export default schema;
