import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reducers from "./reducers";

const middlewares = [reduxThunk, logger];

export const store = createStore(
    reducers,
    applyMiddleware(...middlewares)
)