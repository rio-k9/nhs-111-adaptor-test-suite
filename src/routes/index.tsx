import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import TestsIndex from "../pages/TestsIndex";

export const routes = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
    nav: true,
  },
  {
    path: "/tests",
    element: <TestsIndex />,
    name: "Tests A - Z",
    nav: true,
  },
  {
    path: "*",
    element: <NotFound />,
    name: "Page not found",
  },
];
