import { combineReducers } from "redux";
import countReducer from "./Reducers";
// import { countReducer } from "./Reducers";

export const Reducer = combineReducers({ countReducer: countReducer });
