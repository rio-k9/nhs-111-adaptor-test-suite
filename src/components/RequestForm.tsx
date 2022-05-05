import { Card, Col, Fieldset, Input, Row } from "nhsuk-react-components";
import React from "react";

type Props = {};

const RequestForm = (props: Props) => {
  return (
    <Card>
      <Card.Content>
        <Row>
          <Col width="one-half">
            <Input id="input-example" name="test-name" label="Url" />
          </Col>
          <Col width="one-half">
            <Input id="input-example" name="test-name" label="Content Type" />
          </Col>
        </Row>
      </Card.Content>
    </Card>
  );
};

export default RequestForm;
