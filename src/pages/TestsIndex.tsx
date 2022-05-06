import { Container, ListPanel, Card } from "nhsuk-react-components";
import React from "react";
import Layout from "../components/Layout";
import schema from "../data/schema";
interface TestIndex {
  [key: string]: Array<string>;
}

const testIndex = schema.testList.reduce((acc: TestIndex, val, i) => {
  const key: string = val.testName.substring(0, 1);
  acc = {
    ...acc,
    [key]: key in acc ? [...acc[key], val.testName] : [val.testName],
  };
  return acc;
}, {});

const TestsIndex = () => {
  return (
    <Layout>
      <ListPanel>
        {Object.entries(testIndex).map(([k, v]) => (
          <ListPanel.Panel
            label={k}
            labelProps={{ id: k }}
            backToTop
            backToTopLink="#"
          >
            {v.map((name) => (
              <ListPanel.LinkItem href="/conditions/abdominal-aortic-aneurysm/">
                {name}
              </ListPanel.LinkItem>
            ))}
          </ListPanel.Panel>
        ))}
      </ListPanel>
    </Layout>
  );
};

export default TestsIndex;
