import React, { useState } from "react";
import { Header as NhsHeader } from "nhsuk-react-components";

const NavBar = () => {
  const [navItemHovered, setNavItemHovered] = useState<String | null>();

  return (
    <NhsHeader.Nav>
      {[
        {
          href: "/",
          page: "Home",
        },
        {
          href: "/tests",
          page: "Tests A-Z",
        },
      ].map((p) => (
        <NhsHeader.NavItem
          key={"K-" + p.href}
          href={p.href}
          onMouseEnter={() => setNavItemHovered(p.href)}
          onMouseLeave={() => setNavItemHovered(null)}
          style={{
            textDecoration: navItemHovered === p.href ? "none" : "underline",
          }}
        >
          {p.page}
        </NhsHeader.NavItem>
      ))}
    </NhsHeader.Nav>
  );
};

export default NavBar;
