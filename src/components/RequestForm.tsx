import React, { ChangeEvent, useState } from "react";
import { Button, Card, Col, Input, Row } from "nhsuk-react-components";
import AdaptorRequest, { RequestBody, RequestHeaders } from "../types/Request";
import { TestRequestField, TestSpecs } from "../types/Test";
import createDefaultRequest from "../utils/createDefaultRequest";
import createFormErrors from "../utils/createFormErrors";

type Props = {
  specs: TestSpecs;
  name: string;
};

const RequestForm = ({ specs, name }: Props) => {
  const [form, setForm] = useState<AdaptorRequest>(createDefaultRequest(specs));
  const [errors, setErrors] = useState(createFormErrors(specs));

  const specEntries = Object.entries(specs);

  const onReset = () => {
    setForm(createDefaultRequest(specs));
  };

  const onSubmit = () => {
    console.log(errors);
  };

  const validateField = (field: string, value: string) => null;

  return (
    <Card>
      <Card.Content>
        {specEntries.map(
          ([k, v]: [string, Array<TestRequestField>], i) =>
            Array.isArray(v) && (
              <Row key={"K-" + name + k}>
                {v.map((f: TestRequestField) => {
                  const key = k as keyof AdaptorRequest;
                  const field = f.id as keyof (RequestBody | RequestHeaders);
                  return (
                    <Col width="one-half" key={"K-" + name + key + field}>
                      <Input
                        id={f.id}
                        name={f.id}
                        label={f.label}
                        value={form[key][field]}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          validateField(f.id, e.target.value);
                          setForm({
                            ...form,
                            [key]: {
                              ...form[key],
                              [field]: e.target.value,
                            },
                          });
                        }}
                      />
                    </Col>
                  );
                })}
                {i === specEntries.length - 1 && (
                  <Col
                    width="full"
                    style={{
                      display: "flex",
                      alignItems: "end",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      secondary
                      style={{ marginRight: "36px" }}
                      onClick={onReset}
                    >
                      Reset
                    </Button>
                    <Button onClick={onSubmit}>Send</Button>
                  </Col>
                )}
              </Row>
            )
        )}
      </Card.Content>
    </Card>
  );
};

export default RequestForm;
