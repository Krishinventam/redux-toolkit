import { combineReducers } from "redux";
import reducer from "./amoutReducer";
import appReducer from "../../stateA/reducerA/amountReducerA";
import {todosReducer} from "../../todostate/reducer/amountReducer";

const reducers = combineReducers({
    amount: reducer,
    initialState: appReducer,
    startState: todosReducer

})
export default reducers