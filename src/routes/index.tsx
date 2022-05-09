import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import TestsIndex from "../pages/TestsIndex";
import AppRoutes from "../types/Route";

export const routes: AppRoutes = [
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
