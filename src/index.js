import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";

//redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { getposts } from "./actions/post.action";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) //A enlever lors de la production
);

store.dispatch(getposts());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
