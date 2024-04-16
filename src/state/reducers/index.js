import { combineReducers } from "redux";
import reducer from "./amoutReducer";

const reducers = combineReducers({
    amount: reducer
    
})
export default reducers