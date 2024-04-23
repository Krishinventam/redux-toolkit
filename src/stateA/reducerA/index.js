import { combineReducers } from "redux";
import appReducer from "./amountReducerA";

const reducersA = combineReducers({
    initialState: appReducer
    
    
})
export default reducersA