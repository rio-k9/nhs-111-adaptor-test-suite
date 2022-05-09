import React from "react";
import { Col, Row } from "nhsuk-react-components";
import Layout from "../components/layout";
import TestCard from "../components/TestCard";
import schema from "../data/schema";
import { Test } from "../types/Test";

const Home = () => {
  return (
    <Layout>
      <Row>
        {schema.testList.map((t: Test) => (
          <Col key={"K-" + t.testName} width="full">
            <TestCard data={t} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default Home;
