import Home from "../pages/Home";
import TestsIndex from "../pages/TestsIndex";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tests",
    element: <TestsIndex />,
  },
];
