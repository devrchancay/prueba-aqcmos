import { createStore, compose, applyMiddleware } from "redux";
import rootReducers from "./reducers";
import thunk from "redux-thunk";

const defaultState = {
  resource: {
    data: [],
    messages: {
      error: "",
      success: ""
    },
    loading: false
  }
};

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducers, defaultState, enhancers);

if (module.hot) {
  module.hot.accept("./reducers/", () => {
    const nextRootReducer = require("./reducers/index").default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
