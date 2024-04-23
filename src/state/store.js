import { applyMiddleware, legacy_createStore } from "redux";
import reducers from "./reducers";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';

export const store = legacy_createStore(reducers, {},composeWithDevTools( applyMiddleware(thunk) ));



