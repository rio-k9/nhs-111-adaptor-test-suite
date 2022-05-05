import { Container } from "nhsuk-react-components";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <Layout hideNav={true} hideFooter={true}>
      <Container>
        <h1>Page not found.</h1>
        <p>If you entered a web address please check it was correct.</p>
        <p>
          Return to the <Link to="/">homepage</Link>?
        </p>
      </Container>
    </Layout>
  );
};

export default NotFound;
