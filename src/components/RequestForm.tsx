import {
  Button,
  Card,
  Col,
  Fieldset,
  Input,
  Row,
} from "nhsuk-react-components";
import React, { ChangeEvent, MutableRefObject, useRef, useState } from "react";
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

  return (
    <Card>
      <Card.Content>
        <Row>
          {Object.entries(specs).map(([k, v]) => {
            if (Array.isArray(v)) {
              return (
                <Col width="one-half" key={"K-" + k}>
                  {v.map((f: TestRequestField) => (
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
                  ))}
                </Col>
              );
            }
          })}
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
        </Row>
      </Card.Content>
    </Card>
  );
};

export default RequestForm;
