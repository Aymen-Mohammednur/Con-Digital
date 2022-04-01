import { combineReducers } from "redux";
import staffReducer from "./staffReducer"

const reducers = combineReducers({
    data: staffReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>