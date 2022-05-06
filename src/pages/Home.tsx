import React from "react";
import { Col, Row } from "nhsuk-react-components";
import Layout from "../components/Layout";
import TestCard from "../components/TestCard";
import schema from "../data/schema";

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
