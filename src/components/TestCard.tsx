import React from "react";
import { Card, Details } from "nhsuk-react-components";
import { Test } from "../types/Test";
import RequestForm from "./RequestForm";

interface Props {
  data: Test;
}

const TestCard = ({ data }: Props) => {
  return (
    <Card feature>
      <Card.Content>
        <Card.Heading>{data.testName}</Card.Heading>
        <Card.Description>{data.testDescription}</Card.Description>
        <Details expander>
          <Details.Summary>Run test</Details.Summary>
          <Details.Text>
            <RequestForm specs={data.testSpecifications} />
          </Details.Text>
        </Details>
      </Card.Content>
    </Card>
  );
};

export default TestCard;
