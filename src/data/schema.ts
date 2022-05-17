import { RequestHeaderProps, Schema } from "../types";
import {
  isAlpha,
  isLocalUrl,
  isReportUrl,
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
            defaultValue: "http://localhost:8081/report",
            validators: [notNull(), isLocalUrl(), isReportUrl()],
          },
          {
            label: "Content Type",
            id: "content-type",
            defaultValue: "application/xml",
            validators: [notNull(), minLength(7)],
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
        [RequestHeaderProps.Header]: [
          {
            label: "Url",
            id: "url",
            defaultValue: "http://localhost:8081/report",
            validators: [isLocalUrl(), isReportUrl()],
          },
          {
            label: "Content Type",
            id: "content-type",
            defaultValue: "application/xml",
            validators: [notNull(), minLength(7)],
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
