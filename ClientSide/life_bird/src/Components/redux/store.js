import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import authReducer from "./authReducer/reducer"
import thunk from "redux-thunk";

const rootReducer = combineReducers({ dataDetails: authReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

