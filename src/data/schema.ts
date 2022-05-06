import Schema from "../types/Schema";

const schema: Schema = {
  testList: [
    {
      testName: "Create Report",
      testDescription:
        "This test will attempt to create an emergency request with adaptor... lorumlorumlorum",
      testSpecifications: {
        title: "Name",
        description: "Description",
        requestHeaderFields: [
          {
            label: "Url",
            id: "url",
            defaultValue: "localhost:8081/report",
            validators: {
              notNull: true,
              minLength: 0,
              maxLength: 0,
              regexMatch: "",
            },
          },
          {
            label: "Content Type",
            id: "content-type",
            defaultValue: "text/xml",
            validators: {
              notNull: true,
              minLength: 0,
              maxLength: 0,
              regexMatch: "",
            },
          },
        ],
        requestPayloadFields: [
          {
            label: "Name",
            id: "name",
            defaultValue: "",
            validators: {
              notNull: true,
              minLength: 0,
              maxLength: 0,
              regexMatch: "",
            },
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
            label: "Content Type",
            id: "content-type",
            defaultValue: "application/json",
            validators: {
              notNull: true,
              minLength: 0,
              maxLength: 0,
              regexMatch: "",
            },
          },
        ],
        requestPayloadFields: [
          {
            label: "Name",
            id: "name",
            defaultValue: "",
            validators: {
              notNull: true,
              minLength: 0,
              maxLength: 0,
              regexMatch: "",
            },
          },
        ],
      },
    },
  ],
};

export default schema;
