import axios from 'axios';


import {
  GET_ALL_SIGNUP_REQUEST,
  GET_ALL_SIGNUP_SUCCESS,
  GET_ALL_SIGNUP_FAILURE,
  GET_ALL_DISEASE_REQUEST,
  GET_ALL_DISEASE_SUCCESS,
  GET_ALL_DISEASE_FAILURE,
} from './actiontype';

export const getAllSignupRequest = () => ({
  type: GET_ALL_SIGNUP_REQUEST,
});

export const getAllSignupSuccess = (payload) => ({
  type: GET_ALL_SIGNUP_SUCCESS,
  payload, 
});

export const getAllSignupFailure = () => ({
  type: GET_ALL_SIGNUP_FAILURE,
});

export const signup = () => (dispatch) => {
  dispatch(getAllSignupRequest());
  console.log("siri");
  axios
    .get('http://localhost:8080/api/v1/details')
    .then((res) => {
      dispatch(getAllSignupSuccess(res.data))
    })
    .catch(() => dispatch(getAllSignupFailure()));
};

export const getAllDiseaseRequest = () => ({
  type: GET_ALL_DISEASE_REQUEST,
});

export const getAllDiseaseSuccess = (payload) => ({
  type: GET_ALL_DISEASE_SUCCESS,
  payload, 
});

export const getAllDiseaseFailure = () => ({
  type: GET_ALL_DISEASE_FAILURE,
  
});

export const fetchDisease = () => (dispatch) => {
  dispatch(getAllDiseaseRequest());
  axios
    .get('http://localhost:8080/logos')
    .then((res) =>{ dispatch(getAllDiseaseSuccess(res.data))})
    .catch((error) => dispatch(getAllDiseaseFailure())); // Pass error as an argument
};
