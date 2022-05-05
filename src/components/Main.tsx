import React from "react";

const Main = (props: React.HTMLProps<HTMLDivElement>) => {
  return (
    <main
      className="nhsuk-main-wrapper"
      id="maincontent"
      role="main"
      {...props}
    />
  );
};

export default Main;
