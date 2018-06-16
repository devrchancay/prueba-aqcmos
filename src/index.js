import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";

import registerServiceWorker from "./registerServiceWorker";

const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
      rootElement
    );
  });
}

registerServiceWorker();
