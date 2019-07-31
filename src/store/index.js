import { reducer } from "../reducers";
import {applyMiddleware, compose as composeBase, createStore} from "redux";
import thunk from "redux-thunk";

export const createAppStore = () => {
  const compose =
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    || composeBase;

  return createStore(
    reducer,
    compose(
      applyMiddleware(thunk)
    )
  );
};