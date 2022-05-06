import { Header as NhsHeader } from "nhsuk-react-components";
import React from "react";
import NavBar from "./NavBar";

interface Props {
  hideNav?: Boolean;
}
const Header = ({ hideNav }: Props) => {
  return (
    <NhsHeader transactional>
      <NhsHeader.Container>
        <NhsHeader.Logo href="/" />
        <NhsHeader.ServiceName href="/">
          111 Adaptor Test Suite
        </NhsHeader.ServiceName>
        <NhsHeader.Content>
          <NhsHeader.MenuToggle />
        </NhsHeader.Content>
      </NhsHeader.Container>
      {!hideNav && <NavBar />}
    </NhsHeader>
  );
};

export default Header;
