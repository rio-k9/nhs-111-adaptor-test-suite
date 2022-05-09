import { RequestHeaderProps } from "../types/Request";
import Schema from "../types/Schema";
import { maxLength, minLength, notNull, regexMatch } from "../utils/validators";

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
            validators: [notNull()],
          },
          {
            label: "Content Type",
            id: "content-type",
            defaultValue: "text/xml",
            validators: [
              notNull(),
              minLength(0),
              maxLength(10),
              regexMatch("", ""),
            ],
          },
        ],
        [RequestHeaderProps.Body]: [
          {
            label: "Name",
            id: "name",
            defaultValue: "",
            validators: [notNull()],
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
            validators: [notNull()],
          },
          {
            label: "Content Type",
            id: "content-type",
            defaultValue: "text/xml",
            validators: [
              notNull(),
              minLength(0),
              maxLength(10),
              regexMatch("", ""),
            ],
          },
        ],
        requestPayloadFields: [
          {
            label: "Name",
            id: "name",
            defaultValue: "",
            validators: [notNull()],
          },
        ],
      },
    },
  ],
};

export default schema;
