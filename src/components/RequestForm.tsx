import { Button, Card, Col, Input, Row } from "nhsuk-react-components";
import React, { ChangeEvent, useState } from "react";
import { AdaptorRequest } from "../types/Request";
import { TestRequestField, TestSpecs } from "../types/Test";

type Props = {
  specs: TestSpecs;
};

const RequestForm = ({ specs }: Props) => {
  const [form, setForm] = useState<AdaptorRequest>({
    headers: {
      "content-type": "",
    },
    payload: {},
  });
  const specEntries = Object.entries(specs);

  return (
    <Card>
      <Card.Content>
        {specEntries.map(
          ([k, v], i) =>
            Array.isArray(v) && (
              <Row>
                {v.map((f: TestRequestField) => (
                  <Col width="one-half" key={"K-" + k}>
                    <Input
                      key={"K+" + f.id}
                      id={f.id}
                      name={f.id}
                      label={f.label}
                      value={f.defaultValue}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        console.log(e.target.value);
                      }}
                    />
                  </Col>
                ))}
                {i === specEntries.length - 1 && (
                  <Col
                    width="full"
                    style={{
                      display: "flex",
                      alignItems: "end",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button secondary style={{ marginRight: "36px" }}>
                      Reset
                    </Button>
                    <Button>Send</Button>
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
