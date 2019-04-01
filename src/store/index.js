import { reducer } from "../reducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

export const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
  )
);