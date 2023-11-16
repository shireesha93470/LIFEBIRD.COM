// import { createStore, applyMiddleware, combineReducers, compose } from "redux";
// // import authReducer from "./authReducer/reducer";
// import thunk from "redux-thunk";
// import diseaseData from './authReducer/reducer'
// const rootReducer = combineReducers({
//    dataDetails: authReducer , 
//    disease : diseaseData
//   });

// // Use the enhanced compose function to support Redux DevTools extension
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );


import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from './authReducer/reducer'; 
import diseaseData from './authReducer/reducer'
import doctorsData from './authReducer/reducer';
// Import the authReducer

const rootReducer = combineReducers({
  dataDetails: authReducer, // Include authReducer
  disease: diseaseData,
  doctors:doctorsData,
});

// Use the enhanced compose function to support Redux DevTools extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
