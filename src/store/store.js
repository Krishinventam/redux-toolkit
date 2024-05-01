// import { applyMiddleware, legacy_createStore } from "redux";
// import reducers from "./reducers";
// import { thunk } from "redux-thunk";
// import { composeWithDevTools } from '@redux-devtools/extension';

// export const store = legacy_createStore(reducers, {},composeWithDevTools( applyMiddleware(thunk) ));

import { applyMiddleware, legacy_createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

import reducers from "../state/reducers/index";
import todoReducer from "../redux-toolkit/slices/TodoSlice";

export const legacyStore = legacy_createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export const toolkitStore = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
