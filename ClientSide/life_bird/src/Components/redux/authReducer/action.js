import axios from 'axios';
import {
  GET_ALL_SIGNUP_REQUEST,
  GET_ALL_SIGNUP_SUCCESS,
  GET_ALL_SIGNUP_FAILURE,
  GET_ALL_DISEASE_REQUEST,
  GET_ALL_DISEASE_SUCCESS,
  GET_ALL_DISEASE_FAILURE,
} from './actiontype.js';

export const getAllsignupRequest = () => ({
  type: GET_ALL_SIGNUP_REQUEST,
});

const getAllsignupSuccess = (data) => ({
  type: GET_ALL_SIGNUP_SUCCESS,
  data, // Add 'data' as a payload
});

const getAllsignupFailure = () => ({
  type: GET_ALL_SIGNUP_FAILURE,
});

export const signup = () => (dispatch) => {
  dispatch(getAllsignupRequest());
  axios
    .get('http://localhost:8080/details')
    .then((res) => dispatch(getAllsignupSuccess(res.data)))
    .catch(() => dispatch(getAllsignupFailure()));
};

const diseaseRequest = () => ({
  type: GET_ALL_DISEASE_REQUEST,
});

const diseaseSuccess = (data) => ({
  type: GET_ALL_DISEASE_SUCCESS,
  payload: data, 
});

const diseaseFailure = (error) => ({
  type: GET_ALL_DISEASE_FAILURE,
  payload: error,
});

export const disease = () => (dispatch) => {
  dispatch(diseaseRequest());
  axios
    .get('http://localhost:8080/logos')
    .then((res) => dispatch(diseaseSuccess(res.data)))
    .catch((error) => dispatch(diseaseFailure(error))); 
};

