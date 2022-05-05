import { Container, ListPanel, Card } from "nhsuk-react-components";
import React from "react";
import Layout from "../components/Layout";
import Main from "../components/Main";

interface Props {}

const TestsIndex = ({}: Props) => {
  return (
    <Layout>
      <ListPanel>
        <ListPanel.Panel
          label="A"
          labelProps={{ id: "A" }}
          backToTop
          backToTopLink="#"
        >
          <ListPanel.LinkItem href="/conditions/abdominal-aortic-aneurysm/">
            AAA
          </ListPanel.LinkItem>
          <ListPanel.LinkItem href="/conditions/abdominal-aortic-aneurysm/">
            Abdominal aortic aneurysm
          </ListPanel.LinkItem>
          <ListPanel.LinkItem href="/conditions/abscess/">
            Abscess
          </ListPanel.LinkItem>
        </ListPanel.Panel>
        <ListPanel.Panel
          label="C"
          labelProps={{ id: "C" }}
          backToTop
          backToTopLink="#"
        >
          <ListPanel.LinkItem href="/conditions/chest-pain/">
            Chest pain
          </ListPanel.LinkItem>
          <ListPanel.LinkItem href="/conditions/cold-sores/">
            Cold sore
          </ListPanel.LinkItem>
        </ListPanel.Panel>
        <ListPanel.Panel
          label="D"
          labelProps={{ id: "D" }}
          backToTop
          backToTopLink="#"
        >
          <ListPanel.LinkItem href="/conditions/dandruff/">
            Dandruff
          </ListPanel.LinkItem>
          <ListPanel.LinkItem href="/conditions/dementia/">
            Dementia
          </ListPanel.LinkItem>
          <ListPanel.LinkItem href="/conditions/toothache/">
            Dental pain
          </ListPanel.LinkItem>
        </ListPanel.Panel>
      </ListPanel>
    </Layout>
  );
};

export default TestsIndex;
