import Home from "../pages/Home";
import TestsIndex from "../pages/TestsIndex";

export const routes = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
  },
  {
    path: "/tests",
    element: <TestsIndex />,
    name: "Tests A - Z",
  },
];
