import { combineReducers } from "redux";
import reducer from "./amoutReducer";
import appReducer from "../../stateA/reducerA/amountReducerA";
import {todosReducer} from "../../todostate/reducer/amountReducer";
import apiReducer from "../../todostate/reducer/apireducer";

const reducers = combineReducers({
    amount: reducer,
    initialState: appReducer,
    startState: todosReducer,
    // firststate: apiReducer

})
export default reducers