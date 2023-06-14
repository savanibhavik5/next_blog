import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { blogReducer } from "../reducer/blog";
import composeWithDevTools from "redux-devtools-extension";

const { default: thunk } = require("redux-thunk");

export const store = createStore(
  combineReducers({
    blog: blogReducer,
  }),
  applyMiddleware(thunk)
);

const makeStore = () => store;
export const wrapper = createWrapper(makeStore);
