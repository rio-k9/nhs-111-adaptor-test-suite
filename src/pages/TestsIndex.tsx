import React from "react";
import Layout from "../components/layout";
import schema from "../data/schema";
import { Test } from "../types/Test";
import { ListPanel } from "nhsuk-react-components";

type TestIndex = {
  [key: string]: Array<string>;
};

const testIndex = schema.testList.reduce((acc: TestIndex, val: Test) => {
  const key: string = val.testName.substring(0, 1);
  acc = {
    ...acc,
    [key]: key in acc ? [...acc[key], val.testName] : [val.testName],
  };
  return acc;
}, {} as TestIndex);

const TestsIndex = () => {
  return (
    <Layout>
      <ListPanel>
        {Object.entries(testIndex).map(([k, v]: [string, Array<string>]) => (
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
