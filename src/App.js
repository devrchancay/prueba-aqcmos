import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./routes";
import Main from "./components/Main";
import Form from "./components/Form";

import "./styles/index.css";

const App = () => (
  <Router>
    <div>
      <Route path={routes.show} component={Main} />
      <Route path={routes.create} component={Form} />
    </div>
  </Router>
);

export default App;
