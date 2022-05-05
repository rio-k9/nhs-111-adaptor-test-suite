import { Card, Col, Container, Details, Row } from "nhsuk-react-components";
import React from "react";
import Layout from "../components/Layout";
import Test from "../components/Test";
import json from "../data/tests.json";
import { TestList } from "../types/Test";
import shallowCopy from "../utils/shallowCopy";

const data: TestList = shallowCopy(json);

const Home = () => {
  return (
    <Layout>
      <Row>
        {data.testList.map((t) => (
          <Col key={"K-" + t.testName} width="full">
            <Test data={t} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default Home;
