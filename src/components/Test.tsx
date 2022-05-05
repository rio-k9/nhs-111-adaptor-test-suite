import React from "react";
import { Card, Col, Container, Details, Row } from "nhsuk-react-components";
import { Test as TestType } from "../types/Test";

interface Props {
  data: TestType;
}

const Test = ({ data }: Props) => {
  console.log(data);
  return (
    <Card feature>
      <Card.Content>
        <Card.Heading>Test Case</Card.Heading>
        <Card.Description>Test bounds</Card.Description>
        <Details expander>
          <Details.Summary>Documentation</Details.Summary>
          <Details.Text>Full Documentation</Details.Text>
        </Details>
      </Card.Content>
    </Card>
  );
};

export default Test;
