import { combineReducers } from "redux";
import reducer from "./amoutReducer";
// import appReducer from "../../stateA/reducerA/amountReducerA";
import { todosReducer } from "../../todostate/reducer/amountReducer";
import { counterReducer } from "../../redux-toolkit/reducer/createReducer";

const reducers = combineReducers({
  amount: reducer,
  // initialState: appReducer,
  startState: todosReducer,
  // firststate: apiReducer
  firststate: counterReducer,
});
export default reducers;
