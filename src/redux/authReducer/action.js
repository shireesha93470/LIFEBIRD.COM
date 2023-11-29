import axios from "axios";
import {
  GET_ALL_SIGNUP_REQUEST,
  GET_ALL_SIGNUP_SUCCESS,
  GET_ALL_SIGNUP_FAILURE,

  GET_ALL_DISEASE_REQUEST,
  GET_ALL_DISEASE_SUCCESS,
  GET_ALL_DISEASE_FAILURE,

  GET_ALL_DOCTORS_REQUEST,
  GET_ALL_DOCTORS_SUCCESS,
  GET_ALL_DOCTORS_FAILURE,
} from "./actiontype";
export const getAllSignupRequest = () => ({
  type: GET_ALL_SIGNUP_REQUEST,
});

export const getAllSignupFailure = (error) => ({
  type: GET_ALL_SIGNUP_FAILURE,
  payload: error,
});

export const getAllSignupSuccess = (data) => ({
  type: GET_ALL_SIGNUP_SUCCESS,
  payload: data,
});

export const getAllDiseasesRequest = () => ({
  type: GET_ALL_DISEASE_REQUEST,
});

export const getAllDiseaseFailure = (error) => ({
  type: GET_ALL_DISEASE_FAILURE,
  payload: error,
});

export const getAllDiseasesSuccess = (data) => ({
  type: GET_ALL_DISEASE_SUCCESS,
  payload: data,
});

export const getAllDoctorsRequest = () => ({
  type: GET_ALL_DOCTORS_REQUEST,
});

export const getAllDoctorsFailure = (error) => ({
  type: GET_ALL_DOCTORS_FAILURE,
  payload: error,
});

export const getAllDoctorsSuccess = (data) => ({
  type: GET_ALL_DOCTORS_SUCCESS,
  payload: data,
});

export const getAllSignup = () => (dispatch) => {
  dispatch(getAllSignupRequest());
  axios
    .get("http://localhost:8080/api/v1/details")
    .then((res) => {
      dispatch(getAllSignupSuccess(res.data));
    })
    .catch((error) => {
      dispatch(getAllSignupFailure(error.message));
    });
};

export const getAllDisease = () => (dispatch) => {
  dispatch(getAllDiseasesRequest());
  axios
    .get("http://localhost:8080/disease")
    .then((res) => {
      console.log("test",res)
    dispatch(getAllDiseasesSuccess(res.data));
      
    })
    .catch((error) => {
      dispatch(getAllDiseaseFailure(error.message));
    });
};

export const getAllDoctors = () => (dispatch) => {
  dispatch(getAllDoctorsRequest());
  axios
    .get("http://localhost:8080/doctors")
    .then((res) => {
      dispatch(getAllDoctorsSuccess(res.data));
    })
    .catch((error) => {
      dispatch(getAllDoctorsFailure(error.message));
    });
};
