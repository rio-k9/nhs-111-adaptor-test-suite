import { ReactNode } from "react";

export type AppRoute = {
  path: string;
  element: ReactNode;
  name: string;
  nav?: boolean;
};

type AppRoutes = Array<AppRoute>;
export default AppRoutes;
