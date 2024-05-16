import { applyMiddleware, legacy_createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

import reducers from "../state/reducers/index";
import todoReducer from "../redux-toolkit/slices/TodoSlice";
import commonReducer from "../redux-toolkit/slices/CommonSlice";
import technologyReducer from '../redux-toolkit/slices/TechnologySlice'
import projectReducer from '../redux-toolkit/slices/ProjectTableSlice'
// import projectReducer from '../redux-toolkit/slices/ProjectSlice'
import usersReducer from '../redux-toolkit/slices/UserSlice'

export const legacyStore = legacy_createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export const toolkitStore = configureStore({
  reducer: {
    todos: todoReducer,
    common: commonReducer,
    technology:technologyReducer,
    // project:projectReducer,
    users: usersReducer,
    project: projectReducer
  },
});
