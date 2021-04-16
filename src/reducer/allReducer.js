import { toggleReducer, valueReducer } from "./reducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    toggleReducer,
    valueReducer
})

export default allReducers;