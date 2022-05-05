import { Card, Col, Container, Details, Row } from "nhsuk-react-components";
import React from "react";
import Layout from "../components/Layout";
import TestCard from "../components/TestCard";
import json from "../data/schema.json";
import Schema from "../types/Schema";
import shallowCopy from "../utils/shallowCopy";

const schema: Schema = shallowCopy(json);

const Home = () => {
  return (
    <Layout>
      <Row>
        {schema.testList.map((t) => (
          <Col key={"K-" + t.testName} width="full">
            <TestCard data={t} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default Home;
