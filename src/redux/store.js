// import { applyMiddleware, combineReducers, compose, createStore } from "redux";
// import thunk from "redux-thunk";
// import authReducer from './authReducer/reducer'; 


// const rootReducer = combineReducers({
//   dataDetails: authReducer,
//   disease: diseaseData,
//   doctors: doctorsData,
// });

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

// export { store };


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