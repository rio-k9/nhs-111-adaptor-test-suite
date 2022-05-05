import React, { Fragment } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes as Switch,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Main from "./components/Main";
import { routes } from "./routes";
import Layout from "./components/Layout";

function App() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        background: "#f0f4f5",
      }}
    >
      <Router>
        <Switch>
          {routes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
